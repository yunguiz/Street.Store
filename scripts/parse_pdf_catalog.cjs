const { PDFParse } = require('pdf-parse');
const fs = require('fs');
const path = require('path');

async function main() {
  const pdfPath = path.resolve('public/assets/aistudio/Meu_Neg_cio_-_Estoque_de_Produtos_2cf1d1b9.pdf');
  const buffer = fs.readFileSync(pdfPath);
  const parser = new PDFParse(new Uint8Array(buffer));
  await parser.load();
  const pdfData = await parser.getText();

  console.log(`Loaded ${pdfData.total} pages from Bling PDF.`);

  let fullText = '';
  for (let i = 0; i < pdfData.pages.length; i++) {
    let pageTxt = pdfData.pages[i].text;
    // Remove headers
    pageTxt = pageTxt.replace(/Meu Negócio - Estoque de Produtos/g, '');
    pageTxt = pageTxt.replace(/Código Descrição Estoque Custo Valor/g, '');
    fullText += '\n' + pageTxt;
  }

  // Regex that captures:
  // SKU: Starts with 1 to 7 uppercase letters followed by numbers (e.g. CH100, TTHA10438, NB9060OW39, ACP10034, BJTSR40038, etc.)
  // Description: Everything up to the stock number and R$ 0,00 ...
  // Stock: -?\d+
  // Total Valor: -?R$ [\d.,]+
  const rowRegex = /([A-Z]{1,7}\d+[A-Z0-9._-]*)\s+([\s\S]*?)\s+(-?\d+)\s+R\$\s*[\d.,]+\s+(-?R\$\s*[\d.,]+)/g;

  const items = [];
  let match;
  while ((match = rowRegex.exec(fullText)) !== null) {
    const sku = match[1].trim();
    let desc = match[2].replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    const stock = parseInt(match[3], 10);
    const valStr = match[4].replace(/R\$\s*/g, '').replace(/\./g, '').replace(',', '.').trim();
    const totalVal = parseFloat(valStr) || 0;

    let unitPrice = 0;
    if (stock > 0 && totalVal > 0) {
      unitPrice = parseFloat((totalVal / stock).toFixed(2));
    }

    items.push({
      sku,
      description: desc,
      stock,
      totalVal,
      unitPrice
    });
  }

  console.log(`Successfully parsed ${items.length} items from Bling PDF!`);

  // Count items with stock > 0
  const inStock = items.filter(i => i.stock > 0);
  console.log(`Items with stock > 0: ${inStock.length}`);
  const totalStockCount = items.reduce((sum, i) => sum + (i.stock > 0 ? i.stock : 0), 0);
  console.log(`Total units in stock: ${totalStockCount}`);

  // Let's sample 15 items
  console.log('Sample items:');
  items.slice(0, 15).forEach((item, idx) => {
    console.log(`${idx + 1}. [${item.sku}] ${item.description} | Stock: ${item.stock} | Price: R$ ${item.unitPrice}`);
  });

  fs.writeFileSync('scripts/parsed_bling_items.json', JSON.stringify(items, null, 2), 'utf8');
}

main().catch(console.error);
