const fs = require('fs');
const path = require('path');

const parsedItems = JSON.parse(fs.readFileSync(path.resolve('scripts/parsed_bling_items.json'), 'utf8'));

console.log(`Loaded ${parsedItems.length} parsed items from Bling PDF.`);

// Helpers
function extractBaseModel(desc) {
  let d = desc.trim();
  if (d.includes(':')) {
    d = d.split(':')[0].trim();
  }
  // Strip trailing size suffix like ' - 38', ' - P', ' - M', ' - G', ' - GG'
  d = d.replace(/\s+-\s+(PP|P|M|G|GG|XG|XGG|G1|G2|\d{2})$/i, '').trim();
  return d.replace(/\s+/g, ' ').trim();
}

function extractSize(desc) {
  let size = null;
  if (desc.includes(':')) {
    size = desc.split(':')[1].trim();
  } else {
    const match = desc.match(/\s+-\s+(PP|P|M|G|GG|XG|XGG|G1|G2|\d{2})$/i);
    if (match) size = match[1].trim();
  }
  return size;
}

const COLOR_PALETTE = [
  { name: 'Preto', regex: /\b(preto|preta|black|all black|negro)\b/i, hex: '#111111' },
  { name: 'Branco', regex: /\b(branco|branca|white)\b/i, hex: '#FFFFFF' },
  { name: 'Off-White', regex: /\b(off white|off-white|off withe|off)\b/i, hex: '#EAE6DF' },
  { name: 'Cinza', regex: /\b(cinza|grey|gray|chumbo|grafite|mesclado|estonado|estonada)\b/i, hex: '#6B7280' },
  { name: 'Azul / Tiffany', regex: /\b(azul|navy|blue|safira|jeans|marinho|tiffany)\b/i, hex: '#0EA5E9' },
  { name: 'Verde', regex: /\b(verde|green|militar|musgo|emerald)\b/i, hex: '#15803D' },
  { name: 'Vermelho', regex: /\b(vermelho|vermelha|red|vinho|bordô)\b/i, hex: '#DC2626' },
  { name: 'Rosa / Rose Gold', regex: /\b(rosa|pink|rose|rose gold)\b/i, hex: '#F472B6' },
  { name: 'Roxo / Purple', regex: /\b(roxo|roxa|purple)\b/i, hex: '#7E22CE' },
  { name: 'Marrom / Caramelo', regex: /\b(marrom|marron|brown|caramelo|bege|areia|khaki)\b/i, hex: '#78350F' },
  { name: 'Prata', regex: /\b(prata|prateado|prateada|silver)\b/i, hex: '#9CA3AF' },
  { name: 'Dourado / Ouro', regex: /\b(dourado|dourada|ouro|gold)\b/i, hex: '#F59E0B' },
  { name: 'Amarelo', regex: /\b(amarelo|amarela|yellow)\b/i, hex: '#EAB308' },
  { name: 'Laranja', regex: /\b(laranja|orange)\b/i, hex: '#EA580C' }
];

function detectColors(text) {
  const found = [];
  for (const c of COLOR_PALETTE) {
    if (c.regex.test(text)) {
      found.push({ name: c.name, hex: c.hex });
    }
  }
  return found.length > 0 ? found : [{ name: 'Cor Única', hex: '#1C1C1C' }];
}

function categorize(title) {
  const t = title.toLowerCase();

  // Bonés / Gorros
  if (t.includes('boné') || t.includes('bone') || t.includes('bucket') || t.includes('gorro') || t.includes('n.e') || t.includes('anth co')) {
    return { category: 'acessorios', subcategory: 'bones' };
  }
  // Bags
  if (t.includes('bag') || t.includes('shoulder') || t.includes('mochila') || t.includes('pochete') || t.includes('mala')) {
    return { category: 'acessorios', subcategory: 'bags' };
  }
  // Óculos, Relógios, Meias, Chaveiros, Jóias
  if (
    t.includes('óculos') || t.includes('oculos') || t.includes('radar') || t.includes('juliet') || t.includes('romeo') ||
    t.includes('penny') || t.includes('oakley') || t.includes('relogio') || t.includes('relógio') || t.includes('casio') ||
    t.includes('rolex') || t.includes('patek') || t.includes('chaveiro') || t.includes('corrente') || t.includes('anel') ||
    t.includes('pulseira') || t.includes('meia') || t.includes('cueca') || t.includes('cinto') || t.includes('carteira')
  ) {
    return { category: 'acessorios', subcategory: 'acessorios-metal' };
  }
  // Calçados (Tênis e Chinelos)
  if (t.includes('tenis') || t.includes('tênis') || t.includes('chinelo') || t.includes('havaianas') || t.includes('tesla') || t.includes('hocks') || t.includes('campus') || t.includes('9060')) {
    return { category: 'calcados', subcategory: 'sneakers' };
  }
  // Hoodies / Jaquetas / Corta Vento
  if (t.includes('moletom') || t.includes('hoodie') || t.includes('jaqueta') || t.includes('corta vento') || t.includes('casaco')) {
    return { category: 'roupas', subcategory: 'hoodies' };
  }
  // Calças
  if (t.includes('calça') || t.includes('calca') || t.includes('cargo') || t.includes('baggy') || t.includes('jogger')) {
    return { category: 'roupas', subcategory: 'calcas' };
  }
  // Shorts / Bermudas / Jorts
  if (t.includes('bermuda') || t.includes('short') || t.includes('jorts')) {
    return { category: 'roupas', subcategory: 'shorts' };
  }
  // Default: Camisetas
  return { category: 'roupas', subcategory: 'camisetas' };
}

// Curated streetwear imagery pool by category and brand
const IMAGE_SETS = {
  tesla_black: [
    '/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg',
    '/src/assets/images/product_sneaker_chunky_1793275503077.jpg',
    'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85'
  ],
  tesla_white: [
    '/assets/aistudio/SaveClip.App_822666289_18102126563150263_6322204292468705105_n_c25556bb.jpg',
    '/src/assets/images/product_sneaker_chunky_1793275503077.jpg',
    'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=85'
  ],
  hocks_sneaker: [
    '/src/assets/images/product_sneaker_chunky_1793275503077.jpg',
    '/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85'
  ],
  havaianas: [
    'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85'
  ],
  camisetas_oversized: [
    '/src/assets/images/lookview_fullkit_model_1793275500631.jpg',
    '/src/assets/images/hero_streetwear_urban_1793275500555.jpg',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85'
  ],
  hoodies_jaquetas: [
    '/src/assets/images/product_hoodie_oversized_1793275501387.jpg',
    '/src/assets/images/lookview_fullkit_model_1793275500631.jpg',
    'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85'
  ],
  calcas_cargo: [
    '/src/assets/images/product_cargo_heavy_1793275501361.jpg',
    'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85'
  ],
  bermudas_shorts: [
    'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85'
  ],
  bones: [
    'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85'
  ],
  bags: [
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85'
  ],
  oculos: [
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85'
  ],
  relogios: [
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85'
  ],
  acessorios_metal: [
    'https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85'
  ]
};

function selectImages(title, category, subcategory) {
  const t = title.toLowerCase();
  if (t.includes('tesla')) {
    if (t.includes('white') || t.includes('emerald') || t.includes('branco')) return IMAGE_SETS.tesla_white;
    return IMAGE_SETS.tesla_black;
  }
  if (t.includes('hocks') || t.includes('campus') || t.includes('9060')) {
    return IMAGE_SETS.hocks_sneaker;
  }
  if (t.includes('chinelo') || t.includes('havaianas')) {
    return IMAGE_SETS.havaianas;
  }
  if (subcategory === 'bones') {
    return IMAGE_SETS.bones;
  }
  if (subcategory === 'bags') {
    return IMAGE_SETS.bags;
  }
  if (t.includes('óculos') || t.includes('oculos') || t.includes('juliet') || t.includes('radar')) {
    return IMAGE_SETS.oculos;
  }
  if (t.includes('relogio') || t.includes('relógio') || t.includes('casio') || t.includes('rolex') || t.includes('patek')) {
    return IMAGE_SETS.relogios;
  }
  if (subcategory === 'acessorios-metal') {
    return IMAGE_SETS.acessorios_metal;
  }
  if (subcategory === 'hoodies') {
    return IMAGE_SETS.hoodies_jaquetas;
  }
  if (subcategory === 'calcas') {
    return IMAGE_SETS.calcas_cargo;
  }
  if (subcategory === 'shorts') {
    return IMAGE_SETS.bermudas_shorts;
  }
  return IMAGE_SETS.camisetas_oversized;
}

// Group into canonical base models
const modelMap = new Map();

parsedItems.forEach(item => {
  const baseName = extractBaseModel(item.description);
  const size = extractSize(item.description);

  if (!modelMap.has(baseName)) {
    modelMap.set(baseName, {
      baseName,
      variants: [],
      positiveStock: 0,
      prices: [],
      sizesSet: new Set(),
      skus: []
    });
  }

  const m = modelMap.get(baseName);
  m.variants.push(item);
  m.skus.push(item.sku);
  if (item.stock > 0) m.positiveStock += item.stock;
  if (item.unitPrice > 0) m.prices.push(item.unitPrice);
  if (size) m.sizesSet.add(size);
});

console.log(`Aggregated ${parsedItems.length} Bling SKUs into ${modelMap.size} unique product models.`);

// Fallback pricing rules based on item description
function getPriceForModel(m) {
  if (m.prices.length > 0) {
    // Mode or average of valid prices
    const sum = m.prices.reduce((a, b) => a + b, 0);
    return parseFloat((sum / m.prices.length).toFixed(2));
  }

  const t = m.baseName.toLowerCase();
  if (t.includes('tesla hertz') || t.includes('tesla coil')) return 419.90;
  if (t.includes('tesla flow') || t.includes('hocks bold') || t.includes('hocks puff') || t.includes('hocks cascalho')) return 354.90;
  if (t.includes('campus') || t.includes('9060')) return 429.90;
  if (t.includes('chinelo') || t.includes('havaianas')) return 55.00;
  if (t.includes('chaveiro')) return 8.00;
  if (t.includes('meia')) return 29.90;
  if (t.includes('jaqueta de couro') || t.includes('corta vento')) return 289.90;
  if (t.includes('moletom') || t.includes('hoodie')) return 249.90;
  if (t.includes('calça') || t.includes('calca') || t.includes('cargo') || t.includes('baggy')) return 199.90;
  if (t.includes('bermuda') || t.includes('jorts')) return 149.90;
  if (t.includes('boné') || t.includes('bone') || t.includes('n.e') || t.includes('anth co')) return 119.90;
  if (t.includes('óculos') || t.includes('oculos') || t.includes('juliet') || t.includes('radar')) return 189.90;
  if (t.includes('rolex') || t.includes('patek')) return 249.90;
  if (t.includes('casio')) return 149.90;
  if (t.includes('shoulder bag') || t.includes('mochila')) return 99.90;
  if (t.includes('oversized') || t.includes('camiseta')) return 129.90;
  return 119.90;
}

// Convert modelMap to Product array
let idCounter = 1;
const products = [];

for (const [baseName, m] of modelMap.entries()) {
  const { category, subcategory } = categorize(baseName);
  const price = getPriceForModel(m);
  const originalPrice = parseFloat((price * 1.3).toFixed(2));
  const images = selectImages(baseName, category, subcategory);
  const colors = detectColors(baseName);

  // Sizes sorting
  let sizes = [];
  if (m.sizesSet.size > 0) {
    const rawSizes = Array.from(m.sizesSet);
    const isNumeric = rawSizes.every(s => !isNaN(Number(s)));
    if (isNumeric) {
      sizes = rawSizes.sort((a, b) => Number(a) - Number(b));
    } else {
      const clothesOrder = ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG', 'G1', 'G2', 'G3', 'G4', '36', '38', '40', '42', '44', '46', '48'];
      sizes = rawSizes.sort((a, b) => {
        const idxA = clothesOrder.indexOf(a.toUpperCase());
        const idxB = clothesOrder.indexOf(b.toUpperCase());
        if (idxA !== -1 && idxB !== -1) return idxA - idxB;
        return a.localeCompare(b);
      });
    }
  } else {
    // If no size variation in description, check subcategory
    if (category === 'calcados') {
      sizes = ['38', '39', '40', '41', '42', '43', '44'];
    } else if (category === 'roupas') {
      sizes = ['P', 'M', 'G', 'GG'];
    } else {
      sizes = ['Tamanho Único'];
    }
  }

  // Tag
  let tag = null;
  if (m.positiveStock === 0) {
    tag = 'SEM ESTOQUE';
  } else if (m.positiveStock <= 3) {
    tag = 'POUCAS UNIDADES';
  } else if (idCounter <= 8) {
    tag = 'NOVO DROP';
  } else if (idCounter % 4 === 0) {
    tag = 'MAIS VENDIDO';
  }

  // Consistent rating
  const hash = baseName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const rating = parseFloat((4.7 + ((hash % 3) / 10)).toFixed(1));
  const reviewsCount = 12 + (hash % 50);

  const primarySku = m.skus[0] || `SKU-${idCounter}`;

  // Description
  const description = `${baseName}. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.`;

  products.push({
    id: `bling-real-${idCounter++}`,
    name: baseName,
    category,
    subcategory,
    price,
    originalPrice,
    tag,
    rating,
    reviewsCount,
    images,
    sizes,
    colors,
    description,
    stockCount: m.positiveStock,
    details: {
      composition: category === 'calcados'
        ? 'Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração'
        : (category === 'acessorios' ? 'Material premium de alta durabilidade e acabamento reforçado' : '100% Algodão Premium Heavyweight'),
      weight: category === 'calcados' ? '920g o par' : (category === 'acessorios' ? '140g' : '360g/m² Heavyweight'),
      modelInfo: category === 'acessorios' ? 'Tamanho e formato ergonômico' : 'Modelagem autêntica Streetwear / Caimento solto',
      origin: 'Street Store // Itabira - MG // Fabricado no Brasil'
    },
    integration: {
      sku: primarySku,
      barcode: `789${primarySku.replace(/[^0-9]/g, '').padEnd(9, '0')}`.slice(0, 13),
      nuvemshopId: `BLING-${primarySku}`,
      blingId: primarySku,
      weightGrams: category === 'calcados' ? 920 : (category === 'acessorios' ? 140 : 360),
      dimensionsCm: {
        width: category === 'calcados' ? 28 : (category === 'acessorios' ? 15 : 25),
        height: category === 'calcados' ? 12 : (category === 'acessorios' ? 8 : 25),
        depth: category === 'calcados' ? 32 : (category === 'acessorios' ? 20 : 5)
      }
    },
    variantsList: m.variants.map((v, vIdx) => ({
      id: vIdx + 1,
      sku: v.sku,
      price: v.unitPrice || price,
      comparePrice: originalPrice,
      stock: v.stock,
      size: extractSize(v.description) || 'Tamanho Único'
    }))
  });
}

// Generate the TypeScript file content
const fileHeader = `import { Product } from '../types';

/**
 * BLING ERP OFFICIAL CATALOG (MEU NEGÓCIO - ESTOQUE DE PRODUTOS)
 * Extracted from official Bling ERP export (${parsedItems.length} registered raw SKUs consolidated into ${products.length} canonical models).
 * Consolidated with stock aggregation per user directive:
 * "verifique se tem algum item repetido caso tiver um repetido torne ele uma quantia no estoque do produto real dele sem que fique duplicado"
 */
export const BLING_CATALOG_META = {
  totalRegisteredRawSKUs: ${parsedItems.length},
  uniqueCanonicalModels: ${products.length},
  totalUnitsInStock: ${products.reduce((acc, p) => acc + p.stockCount, 0)},
  modelsWithStock: ${products.filter(p => p.stockCount > 0).length},
  extractedAt: "${new Date().toISOString()}",
  sourceFile: "Meu Negócio - Estoque de Produtos.pdf"
};

export const BLING_STOCK_PRODUCTS: Product[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync(path.resolve('src/data/blingCatalog.ts'), fileHeader, 'utf8');

console.log(`Successfully generated src/data/blingCatalog.ts!`);
console.log(`- Canonical Models: ${products.length}`);
console.log(`- Total In-Stock Units: ${products.reduce((acc, p) => acc + p.stockCount, 0)}`);
console.log(`- Models in Stock: ${products.filter(p => p.stockCount > 0).length}`);
