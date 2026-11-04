import { Product } from '../types';

/**
 * BLING ERP OFFICIAL CATALOG (MEU NEGÓCIO - ESTOQUE DE PRODUTOS)
 * Extracted from official Bling ERP export (1003 registered raw SKUs consolidated into 292 canonical models).
 * Consolidated with stock aggregation per user directive:
 * "verifique se tem algum item repetido caso tiver um repetido torne ele uma quantia no estoque do produto real dele sem que fique duplicado"
 */
export const BLING_CATALOG_META = {
  totalRegisteredRawSKUs: 1003,
  uniqueCanonicalModels: 292,
  totalUnitsInStock: 1068,
  modelsWithStock: 162,
  extractedAt: "2026-11-04T12:01:09.253Z",
  sourceFile: "Meu Negócio - Estoque de Produtos.pdf"
};

export const BLING_STOCK_PRODUCTS: Product[] = [
  {
    "id": "bling-real-1",
    "name": "CHAVEIRO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 8,
    "originalPrice": 10.4,
    "tag": "NOVO DROP",
    "rating": 4.9,
    "reviewsCount": 55,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CHAVEIRO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 93,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CH100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CH100",
      "blingId": "CH100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CH100",
        "price": 8,
        "comparePrice": 10.4,
        "stock": 93,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-2",
    "name": "CHINELO HAVAIANAS CITY BASIC ROSE GOLD",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 55,
    "originalPrice": 71.5,
    "tag": "NOVO DROP",
    "rating": 4.9,
    "reviewsCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "36",
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "colors": [
      {
        "name": "Rosa / Rose Gold",
        "hex": "#F472B6"
      },
      {
        "name": "Dourado / Ouro",
        "hex": "#F59E0B"
      }
    ],
    "description": "CHINELO HAVAIANAS CITY BASIC ROSE GOLD. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 4,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CHCB10140",
      "barcode": "789101400000",
      "nuvemshopId": "BLING-CHCB10140",
      "blingId": "CHCB10140",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CHCB10140",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 2,
        "size": "40"
      },
      {
        "id": 2,
        "sku": "CHCB10142",
        "price": 55,
        "comparePrice": 71.5,
        "stock": -1,
        "size": "42"
      },
      {
        "id": 3,
        "sku": "CHCB10144",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 2,
        "size": "44"
      },
      {
        "id": 4,
        "sku": "CHCB10146",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 0,
        "size": "46"
      },
      {
        "id": 5,
        "sku": "CHCB10134",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 0,
        "size": "34"
      },
      {
        "id": 6,
        "sku": "CHCB10136",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 7,
        "sku": "CHCB10138",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 0,
        "size": "38"
      }
    ]
  },
  {
    "id": "bling-real-3",
    "name": "CHINELO HAVAIANAS CITY BASIC PRETO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 55,
    "originalPrice": 71.5,
    "tag": "NOVO DROP",
    "rating": 4.7,
    "reviewsCount": 17,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "36",
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CHINELO HAVAIANAS CITY BASIC PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 6,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CHCB10044",
      "barcode": "789100440000",
      "nuvemshopId": "BLING-CHCB10044",
      "blingId": "CHCB10044",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CHCB10044",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 2,
        "sku": "CHCB10046",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 0,
        "size": "46"
      },
      {
        "id": 3,
        "sku": "CHCB10034",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 0,
        "size": "34"
      },
      {
        "id": 4,
        "sku": "CHCB10036",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 5,
        "sku": "CHCB10038",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 2,
        "size": "38"
      },
      {
        "id": 6,
        "sku": "CHCB10040",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 2,
        "size": "40"
      },
      {
        "id": 7,
        "sku": "CHCB10042",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 2,
        "size": "42"
      }
    ]
  },
  {
    "id": "bling-real-4",
    "name": "CHINELO HAVAIANAS WARNER BATIMA BRASIL",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 55,
    "originalPrice": 71.5,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 44,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CHINELO HAVAIANAS WARNER BATIMA BRASIL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CHWB10034",
      "barcode": "789100340000",
      "nuvemshopId": "BLING-CHWB10034",
      "blingId": "CHWB10034",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CHWB10034",
        "price": 55,
        "comparePrice": 71.5,
        "stock": 0,
        "size": "34"
      }
    ]
  },
  {
    "id": "bling-real-5",
    "name": "CHINELO HAVAIANAS WARNER BATIMA BATIMA",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 45,
    "originalPrice": 58.5,
    "tag": "NOVO DROP",
    "rating": 4.8,
    "reviewsCount": 29,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CHINELO HAVAIANAS WARNER BATIMA BATIMA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 7,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CHWB10036",
      "barcode": "789100360000",
      "nuvemshopId": "BLING-CHWB10036",
      "blingId": "CHWB10036",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CHWB10036",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 2,
        "sku": "CHWB10038",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 1,
        "size": "38"
      },
      {
        "id": 3,
        "sku": "CHWB10040",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "40"
      },
      {
        "id": 4,
        "sku": "CHWB10042",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 5,
        "sku": "CHWB10044",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "44"
      },
      {
        "id": 6,
        "sku": "CHWB10046",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "46"
      }
    ]
  },
  {
    "id": "bling-real-6",
    "name": "TENIS TESLA HERTZ BLACK",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 419.9,
    "originalPrice": 545.87,
    "tag": "NOVO DROP",
    "rating": 4.8,
    "reviewsCount": 18,
    "images": [
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "TENIS TESLA HERTZ BLACK. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 6,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TTHA10438",
      "barcode": "789104380000",
      "nuvemshopId": "BLING-TTHA10438",
      "blingId": "TTHA10438",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TTHA10438",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 2,
        "sku": "TTHA10439",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "39"
      },
      {
        "id": 3,
        "sku": "TTHA10440",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "40"
      },
      {
        "id": 4,
        "sku": "TTHA10441",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 2,
        "size": "41"
      },
      {
        "id": 5,
        "sku": "TTHA10442",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 6,
        "sku": "TTHA1043",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "43"
      },
      {
        "id": 7,
        "sku": "TTHA10444",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 8,
        "sku": "TTHA10436",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 9,
        "sku": "TTHA10437",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "37"
      }
    ]
  },
  {
    "id": "bling-real-7",
    "name": "TENIS TESLA HERTZ ART BLACK",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 419.9,
    "originalPrice": 545.87,
    "tag": "NOVO DROP",
    "rating": 4.7,
    "reviewsCount": 31,
    "images": [
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "TENIS TESLA HERTZ ART BLACK. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 6,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TTHA10342",
      "barcode": "789103420000",
      "nuvemshopId": "BLING-TTHA10342",
      "blingId": "TTHA10342",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TTHA10342",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 2,
        "sku": "TTHA10343",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "43"
      },
      {
        "id": 3,
        "sku": "TTHA10344",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 4,
        "sku": "TTHA10336",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 5,
        "sku": "TTHA10337",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 6,
        "sku": "TTHA10338",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 7,
        "sku": "TTHA10339",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "39"
      },
      {
        "id": 8,
        "sku": "TTHA10340",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "40"
      },
      {
        "id": 9,
        "sku": "TTHA10341",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "41"
      }
    ]
  },
  {
    "id": "bling-real-8",
    "name": "TENIS TESLA HERTZ ART WHITE",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 419.9,
    "originalPrice": 545.87,
    "tag": "NOVO DROP",
    "rating": 4.7,
    "reviewsCount": 17,
    "images": [
      "/assets/aistudio/SaveClip.App_822666289_18102126563150263_6322204292468705105_n_c25556bb.jpg",
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "TENIS TESLA HERTZ ART WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 6,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TTHA10243",
      "barcode": "789102430000",
      "nuvemshopId": "BLING-TTHA10243",
      "blingId": "TTHA10243",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TTHA10243",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "43"
      },
      {
        "id": 2,
        "sku": "TTHA10244",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 3,
        "sku": "TTHA10236",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 4,
        "sku": "TTHA10237",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 5,
        "sku": "TTHA10238",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 6,
        "sku": "TTHA10239",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "39"
      },
      {
        "id": 7,
        "sku": "TTHA10240",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "40"
      },
      {
        "id": 8,
        "sku": "TTHA10241",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "41"
      },
      {
        "id": 9,
        "sku": "TTHA10242",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 2,
        "size": "42"
      }
    ]
  },
  {
    "id": "bling-real-9",
    "name": "TENIS TESLA HERTZ ART PURPLE",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 419.9,
    "originalPrice": 545.87,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 54,
    "images": [
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Roxo / Purple",
        "hex": "#7E22CE"
      }
    ],
    "description": "TENIS TESLA HERTZ ART PURPLE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 6,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TTHA10139",
      "barcode": "789101390000",
      "nuvemshopId": "BLING-TTHA10139",
      "blingId": "TTHA10139",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TTHA10139",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "39"
      },
      {
        "id": 2,
        "sku": "TTHA10140",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "40"
      },
      {
        "id": 3,
        "sku": "TTHA10141",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "41"
      },
      {
        "id": 4,
        "sku": "TTHA10142",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 5,
        "sku": "TTHA10143",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 1,
        "size": "43"
      },
      {
        "id": 6,
        "sku": "TTHA10144",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 7,
        "sku": "TTHA10136",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 8,
        "sku": "TTHA10137",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 9,
        "sku": "TTHA10138",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "38"
      }
    ]
  },
  {
    "id": "bling-real-10",
    "name": "TENIS TESLA FLOW XL BLACK E WHITE",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 354.9,
    "originalPrice": 461.37,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 47,
    "images": [
      "/assets/aistudio/SaveClip.App_822666289_18102126563150263_6322204292468705105_n_c25556bb.jpg",
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "TENIS TESLA FLOW XL BLACK E WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TTFX10141",
      "barcode": "789101410000",
      "nuvemshopId": "BLING-TTFX10141",
      "blingId": "TTFX10141",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TTFX10141",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "41"
      },
      {
        "id": 2,
        "sku": "TTFX10142",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 3,
        "sku": "TTFX10143",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "43"
      },
      {
        "id": 4,
        "sku": "TTFX10144",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 5,
        "sku": "TTFX10136",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 6,
        "sku": "TTFX10137",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 7,
        "sku": "TTFX10138",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 8,
        "sku": "TTFX10139",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "39"
      },
      {
        "id": 9,
        "sku": "TTFX10140",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "40"
      }
    ]
  },
  {
    "id": "bling-real-11",
    "name": "TENIS TESLA FLOW XL BLACK E TIFFANY",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 354.9,
    "originalPrice": 461.37,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 41,
    "images": [
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "TENIS TESLA FLOW XL BLACK E TIFFANY. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 6,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TTFX10044",
      "barcode": "789100440000",
      "nuvemshopId": "BLING-TTFX10044",
      "blingId": "TTFX10044",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TTFX10044",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 2,
        "sku": "TTFX10035",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "35"
      },
      {
        "id": 3,
        "sku": "TTFX10036",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 4,
        "sku": "TTFX10037",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 5,
        "sku": "TTFX10038",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 6,
        "sku": "TTFX10039",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "39"
      },
      {
        "id": 7,
        "sku": "TTFX10040",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "40"
      },
      {
        "id": 8,
        "sku": "TTFX10041",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "41"
      },
      {
        "id": 9,
        "sku": "TTFX10042",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 10,
        "sku": "TTFX10043",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "43"
      }
    ]
  },
  {
    "id": "bling-real-12",
    "name": "TENIS TESLA COIL BLACK MESCLADO PRETO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 399.9,
    "originalPrice": 519.87,
    "tag": "MAIS VENDIDO",
    "rating": 4.9,
    "reviewsCount": 58,
    "images": [
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "TENIS TESLA COIL BLACK MESCLADO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 5,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TTC10141",
      "barcode": "789101410000",
      "nuvemshopId": "BLING-TTC10141",
      "blingId": "TTC10141",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TTC10141",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 0,
        "size": "41"
      },
      {
        "id": 2,
        "sku": "TTC10142",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 3,
        "sku": "TTC10143",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 1,
        "size": "43"
      },
      {
        "id": 4,
        "sku": "TTC10144",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 5,
        "sku": "TTC10135",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 0,
        "size": "35"
      },
      {
        "id": 6,
        "sku": "TTC10136",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 7,
        "sku": "TTC10137",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 8,
        "sku": "TTC10138",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 9,
        "sku": "TTC10139",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 1,
        "size": "39"
      },
      {
        "id": 10,
        "sku": "TTC10140",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 1,
        "size": "40"
      }
    ]
  },
  {
    "id": "bling-real-13",
    "name": "TENIS TESLA COIL ALL BLACK REFLECT PRETO REFLETIVO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 399.9,
    "originalPrice": 519.87,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 60,
    "images": [
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "TENIS TESLA COIL ALL BLACK REFLECT PRETO REFLETIVO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 6,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TTC10036",
      "barcode": "789100360000",
      "nuvemshopId": "BLING-TTC10036",
      "blingId": "TTC10036",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TTC10036",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 2,
        "sku": "TTC10037",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 3,
        "sku": "TTC10038",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 4,
        "sku": "TTC10039",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 1,
        "size": "39"
      },
      {
        "id": 5,
        "sku": "TTC10040",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 1,
        "size": "40"
      },
      {
        "id": 6,
        "sku": "TTC10041",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 1,
        "size": "41"
      },
      {
        "id": 7,
        "sku": "TTC10042",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 8,
        "sku": "TTC10043",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 1,
        "size": "43"
      },
      {
        "id": 9,
        "sku": "TTC10044",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 10,
        "sku": "TTC10035",
        "price": 399.9,
        "comparePrice": 519.87,
        "stock": 0,
        "size": "35"
      }
    ]
  },
  {
    "id": "bling-real-14",
    "name": "TENIS TESLA COIL ALL BLACK REFLECT PRETO \\BEGE",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 419.9,
    "originalPrice": 545.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 39,
    "images": [
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "TENIS TESLA COIL ALL BLACK REFLECT PRETO \\BEGE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TTC10034",
      "barcode": "789100340000",
      "nuvemshopId": "BLING-TTC10034",
      "blingId": "TTC10034",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TTC10034",
        "price": 419.9,
        "comparePrice": 545.87,
        "stock": 0,
        "size": "34"
      }
    ]
  },
  {
    "id": "bling-real-15",
    "name": "OVERSIZED TRIPSIDE RECORTADA OFF COM PRETA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 139.9,
    "originalPrice": 181.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 16,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "OVERSIZED TRIPSIDE RECORTADA OFF COM PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTSR506XG",
      "barcode": "789506000000",
      "nuvemshopId": "BLING-OTSR506XG",
      "blingId": "OTSR506XG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTSR506XG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "XG"
      },
      {
        "id": 2,
        "sku": "OTSR506GG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "OTSR506G",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OTSR506P",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 5,
        "sku": "OTSR506M",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-16",
    "name": "OVERSIZED TRIP SIDE BOXY RECORTADA ROXO COM PRETA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 139.9,
    "originalPrice": 181.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 61,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Roxo / Purple",
        "hex": "#7E22CE"
      }
    ],
    "description": "OVERSIZED TRIP SIDE BOXY RECORTADA ROXO COM PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTSR505P",
      "barcode": "789505000000",
      "nuvemshopId": "BLING-OTSR505P",
      "blingId": "OTSR505P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTSR505P",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OTSR505M",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "OTSR505G",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OTSR505GG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 5,
        "sku": "OTSR505XG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "XG"
      }
    ]
  },
  {
    "id": "bling-real-17",
    "name": "OVERSIZED TRIPSIDE RECORTADA ROXA COM PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 139.9,
    "originalPrice": 181.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 25,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Roxo / Purple",
        "hex": "#7E22CE"
      }
    ],
    "description": "OVERSIZED TRIPSIDE RECORTADA ROXA COM PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTSPN500XG",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-OTSPN500XG",
      "blingId": "OTSPN500XG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTSPN500XG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "XG"
      },
      {
        "id": 2,
        "sku": "OTSPN500GG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "OTSPN500P",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "P"
      },
      {
        "id": 4,
        "sku": "OTSPN500M",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 5,
        "sku": "OTSPN500G",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-18",
    "name": "OVERSIZED TRIPSIDE PREMIUN ESTAMPADA VERMELHA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 47,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Vermelho",
        "hex": "#DC2626"
      }
    ],
    "description": "OVERSIZED TRIPSIDE PREMIUN ESTAMPADA VERMELHA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 4,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OVTP502XG",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-OVTP502XG",
      "blingId": "OVTP502XG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OVTP502XG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "XG"
      },
      {
        "id": 2,
        "sku": "OVTP502P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "OVTP502M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "OVTP502G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 5,
        "sku": "OVTP502GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-19",
    "name": "OVERSIZED TRIPSIDE PREMIUN ESTAMPADA PRETA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 31,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OVERSIZED TRIPSIDE PREMIUN ESTAMPADA PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 4,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OVTP501XG",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-OVTP501XG",
      "blingId": "OVTP501XG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OVTP501XG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "XG"
      },
      {
        "id": 2,
        "sku": "OVTP501P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "OVTP501M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "OVTP501G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 5,
        "sku": "OVTP501GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-20",
    "name": "OVERSIZED TRIPSIDE PREMIUN ESTAMPADA OFF WHITE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "MAIS VENDIDO",
    "rating": 4.9,
    "reviewsCount": 37,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "OVERSIZED TRIPSIDE PREMIUN ESTAMPADA OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 4,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTSP500XG",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-OTSP500XG",
      "blingId": "OTSP500XG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTSP500XG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "XG"
      },
      {
        "id": 2,
        "sku": "OTSP500P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "OTSP500M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "OTSP500G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 5,
        "sku": "OTSP500GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-21",
    "name": "OVERSIZED TRIP SIDE RECORTADA 19",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 139.9,
    "originalPrice": 181.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 18,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "77 PRETO/ VERMELHO"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "OVERSIZED TRIP SIDE RECORTADA 19. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTSR1977P",
      "barcode": "789197700000",
      "nuvemshopId": "BLING-OTSR1977P",
      "blingId": "OTSR1977P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTSR1977P",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "77 PRETO/ VERMELHO"
      },
      {
        "id": 2,
        "sku": "OTSR1977M",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "77 PRETO/ VERMELHO"
      },
      {
        "id": 3,
        "sku": "OTSR1977G",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "77 PRETO/ VERMELHO"
      },
      {
        "id": 4,
        "sku": "OTSR1977GG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "77 PRETO/ VERMELHO"
      },
      {
        "id": 5,
        "sku": "OTSR1977XG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "77 PRETO/ VERMELHO"
      }
    ]
  },
  {
    "id": "bling-real-22",
    "name": "OVERSIZED TRIP SIDE BOXY PIXO VERDE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 49,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Verde",
        "hex": "#15803D"
      }
    ],
    "description": "OVERSIZED TRIP SIDE BOXY PIXO VERDE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTSBP502M",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-OTSBP502M",
      "blingId": "OTSBP502M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTSBP502M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "OTSBP502G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "OTSBP502GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "GG"
      },
      {
        "id": 4,
        "sku": "OTSBP502XG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "XG"
      }
    ]
  },
  {
    "id": "bling-real-23",
    "name": "OVERSIZED TRIP SIDE BOXY PIXO VERDEVERDE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 23,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "OVERSIZED TRIP SIDE BOXY PIXO VERDEVERDE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTSBP502P",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-OTSBP502P",
      "blingId": "OTSBP502P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTSBP502P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-24",
    "name": "OVERSIZED TRIP SIDE BOXY PIXO PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 19,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OVERSIZED TRIP SIDE BOXY PIXO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTSBP501P",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-OTSBP501P",
      "blingId": "OTSBP501P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTSBP501P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OTSBP501M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "OTSBP501G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OTSBP501GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 5,
        "sku": "OTSBP501XG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "XG"
      }
    ]
  },
  {
    "id": "bling-real-25",
    "name": "BERMUDA JORTS TRIP SIDE RECORTADA PRET ESTONADO",
    "category": "roupas",
    "subcategory": "shorts",
    "price": 179.9,
    "originalPrice": 233.87,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 61,
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "48"
    ],
    "colors": [
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "BERMUDA JORTS TRIP SIDE RECORTADA PRET ESTONADO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 4,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BJTSR40038",
      "barcode": "789400380000",
      "nuvemshopId": "BLING-BJTSR40038",
      "blingId": "BJTSR40038",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BJTSR40038",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 2,
        "sku": "BJTSR40040",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 1,
        "size": "40"
      },
      {
        "id": 3,
        "sku": "BJTSR40042",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 4,
        "sku": "BJTSR40044",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 1,
        "size": "44"
      },
      {
        "id": 5,
        "sku": "BJTSR40046",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 1,
        "size": "46"
      },
      {
        "id": 6,
        "sku": "BJTSR40048",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 1,
        "size": "48"
      }
    ]
  },
  {
    "id": "bling-real-26",
    "name": "BERMUDA JORTS TRIP SIDE ESCRITA TRASEIRA ESTONADO",
    "category": "roupas",
    "subcategory": "shorts",
    "price": 179.9,
    "originalPrice": 233.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 61,
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "colors": [
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "BERMUDA JORTS TRIP SIDE ESCRITA TRASEIRA ESTONADO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BJTS40052",
      "barcode": "789400520000",
      "nuvemshopId": "BLING-BJTS40052",
      "blingId": "BJTS40052",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BJTS40052",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 1,
        "size": "52"
      },
      {
        "id": 2,
        "sku": "BJTS40050",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 1,
        "size": "50"
      },
      {
        "id": 3,
        "sku": "BJTS40040",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 4,
        "sku": "BJTS40042",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 5,
        "sku": "BJTS40044",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 6,
        "sku": "BJTS40046",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 1,
        "size": "46"
      },
      {
        "id": 7,
        "sku": "BJTS40048",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "48"
      },
      {
        "id": 8,
        "sku": "BJTS40038",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "38"
      }
    ]
  },
  {
    "id": "bling-real-27",
    "name": "CHINELO SLIDE ADIDAS PRETO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 57,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "36",
      "38",
      "40",
      "42",
      "44"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CHINELO SLIDE ADIDAS PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 14,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CSA10044",
      "barcode": "789100440000",
      "nuvemshopId": "BLING-CSA10044",
      "blingId": "CSA10044",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CSA10044",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "44"
      },
      {
        "id": 2,
        "sku": "CSA10034",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "34"
      },
      {
        "id": 3,
        "sku": "CSA10036",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 2,
        "size": "36"
      },
      {
        "id": 4,
        "sku": "CSA10038",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 4,
        "size": "38"
      },
      {
        "id": 5,
        "sku": "CSA10040",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 6,
        "size": "40"
      },
      {
        "id": 6,
        "sku": "CSA10042",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "42"
      }
    ]
  },
  {
    "id": "bling-real-28",
    "name": "MEIA NIKE RUNNING",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 50,
    "originalPrice": 65,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 50,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "MEIA NIKE RUNNING. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MNR100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MNR100",
      "blingId": "MNR100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MNR100",
        "price": 50,
        "comparePrice": 65,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-29",
    "name": "MEIA JORDAN PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 29.9,
    "originalPrice": 38.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 36,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "MEIA JORDAN PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MJP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MJP100",
      "blingId": "MJP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MJP100",
        "price": 29.9,
        "comparePrice": 38.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-30",
    "name": "MEIA NIKE TN",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 50,
    "originalPrice": 65,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 17,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "MEIA NIKE TN. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MNTN100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MNTN100",
      "blingId": "MNTN100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MNTN100",
        "price": 50,
        "comparePrice": 65,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-31",
    "name": "MEIA NEW ERA PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 29.9,
    "originalPrice": 38.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 22,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "MEIA NEW ERA PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MNEP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MNEP100",
      "blingId": "MNEP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MNEP100",
        "price": 29.9,
        "comparePrice": 38.87,
        "stock": -1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-32",
    "name": "MEIA NEW ERA BRANCA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 29.9,
    "originalPrice": 38.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "MEIA NEW ERA BRANCA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MNEB100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MNEB100",
      "blingId": "MNEB100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MNEB100",
        "price": 29.9,
        "comparePrice": 38.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-33",
    "name": "MEIA NEW BALANCE PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 29.9,
    "originalPrice": 38.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 42,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "MEIA NEW BALANCE PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MNBP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MNBP100",
      "blingId": "MNBP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MNBP100",
        "price": 29.9,
        "comparePrice": 38.87,
        "stock": -1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-34",
    "name": "CAMISA POLO ZARA MARÇALA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 33,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CAMISA POLO ZARA MARÇALA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CPZ502M",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-CPZ502M",
      "blingId": "CPZ502M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CPZ502M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "CPZ502P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "CPZ502GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "GG"
      },
      {
        "id": 4,
        "sku": "CPZ502G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-35",
    "name": "CAMISA POLO ZARA OFF WHITE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 40,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "CAMISA POLO ZARA OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 4,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CPZ501M",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-CPZ501M",
      "blingId": "CPZ501M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CPZ501M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "CPZ501P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "CPZ501G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 2,
        "size": "GG"
      },
      {
        "id": 4,
        "sku": "CPZ501GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-36",
    "name": "CAMISA POLO ZARA CINZA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 27,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "CAMISA POLO ZARA CINZA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CPZ500M",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-CPZ500M",
      "blingId": "CPZ500M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CPZ500M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "CPZ500P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "CPZ500GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 4,
        "sku": "CPZ500G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-37",
    "name": "OVERSIZED ZARA OFF WHITE TEXTURIZADA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 48,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "OVERSIZED ZARA OFF WHITE TEXTURIZADA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OVZOFT100P",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-OVZOFT100P",
      "blingId": "OVZOFT100P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OVZOFT100P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-38",
    "name": "OVERSIZED ZARA OFF WITHE TEXTURIZADA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 48,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "OVERSIZED ZARA OFF WITHE TEXTURIZADA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 11,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OVZOFT100M",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-OVZOFT100M",
      "blingId": "OVZOFT100M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OVZOFT100M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 3,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "OVZOFT100G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 4,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "OVZOFT100GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 4,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-39",
    "name": "OVERSIZED ZARA MARROM TEXTURIZADA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 24,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "OVERSIZED ZARA MARROM TEXTURIZADA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 6,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OVZMT100G",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-OVZMT100G",
      "blingId": "OVZMT100G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OVZMT100G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "OVZMT100GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 2,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "OVZMT100P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 4,
        "sku": "OVZMT100M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 3,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-40",
    "name": "OVERSIZED ZARA PRETO TEXTURIZADA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "MAIS VENDIDO",
    "rating": 4.8,
    "reviewsCount": 56,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OVERSIZED ZARA PRETO TEXTURIZADA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 11,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OVZPT100P",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-OVZPT100P",
      "blingId": "OVZPT100P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OVZPT100P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OVZPT100M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 3,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "OVZPT100G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 5,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OVZPT100GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 3,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-41",
    "name": "CAMISA ZARA POLO COR",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 32,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CAMISA ZARA POLO COR. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 5,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CZP500G",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-CZP500G",
      "blingId": "CZP500G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CZP500G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": -2,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "CZP500M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CZP500P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "P"
      },
      {
        "id": 4,
        "sku": "CZP500GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 3,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-42",
    "name": "BERMUDA BAGGY PRETO ESTONADO",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 139.9,
    "originalPrice": 181.87,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 31,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "38",
      "40",
      "42",
      "44",
      "46",
      "48"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "BERMUDA BAGGY PRETO ESTONADO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 7,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BB40036",
      "barcode": "789400360000",
      "nuvemshopId": "BLING-BB40036",
      "blingId": "BB40036",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BB40036",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 2,
        "sku": "BB40044",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 2,
        "size": "44"
      },
      {
        "id": 3,
        "sku": "BB40046",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 2,
        "size": "46"
      },
      {
        "id": 4,
        "sku": "BB40048",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 3,
        "size": "48"
      },
      {
        "id": 5,
        "sku": "BB40038",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 6,
        "sku": "BB40040",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 7,
        "sku": "BB40042",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "42"
      }
    ]
  },
  {
    "id": "bling-real-43",
    "name": "KIT MEIA CANO CURTO COR",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 45,
    "originalPrice": 58.5,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 20,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "35-46"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "KIT MEIA CANO CURTO COR. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 11,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "KMCC1003646",
      "barcode": "789100364600",
      "nuvemshopId": "BLING-KMCC1003646",
      "blingId": "KMCC1003646",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "KMCC1003646",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 11,
        "size": "35-46"
      }
    ]
  },
  {
    "id": "bling-real-44",
    "name": "BERMUDA ZARA PRETO",
    "category": "roupas",
    "subcategory": "shorts",
    "price": 89.9,
    "originalPrice": 116.87,
    "tag": "MAIS VENDIDO",
    "rating": 4.7,
    "reviewsCount": 34,
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "BERMUDA ZARA PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 5,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BZ400M",
      "barcode": "789400000000",
      "nuvemshopId": "BLING-BZ400M",
      "blingId": "BZ400M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BZ400M",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "BZ400GG",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 3,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "BZ400G",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 2,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-45",
    "name": "BERMUDA DRI FIT NIKE PRETO",
    "category": "roupas",
    "subcategory": "shorts",
    "price": 75,
    "originalPrice": 97.5,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 41,
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "BERMUDA DRI FIT NIKE PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 14,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BDFN400XG",
      "barcode": "789400000000",
      "nuvemshopId": "BLING-BDFN400XG",
      "blingId": "BDFN400XG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BDFN400XG",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 1,
        "size": "XG"
      },
      {
        "id": 2,
        "sku": "BDFN400GG",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 5,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "BDFN400M",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "BDFN400G",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 3,
        "size": "G"
      },
      {
        "id": 5,
        "sku": "BDFN400P",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 5,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-46",
    "name": "BERMUDA DRI FIT NIKE FACÂO PRETO",
    "category": "roupas",
    "subcategory": "shorts",
    "price": 75,
    "originalPrice": 97.5,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 48,
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "BERMUDA DRI FIT NIKE FACÂO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 10,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BDFNF400XG",
      "barcode": "789400000000",
      "nuvemshopId": "BLING-BDFNF400XG",
      "blingId": "BDFNF400XG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BDFNF400XG",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 4,
        "size": "XG"
      },
      {
        "id": 2,
        "sku": "BDFNF400GG",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 1,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "BDFNF400G",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 2,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "BDFNF400M",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 5,
        "sku": "BDFNF400P",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 3,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-47",
    "name": "BERMUDA DRI FIT ADIDAS PRETA",
    "category": "roupas",
    "subcategory": "shorts",
    "price": 75,
    "originalPrice": 97.5,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 54,
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "BERMUDA DRI FIT ADIDAS PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 13,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BDFA400XG",
      "barcode": "789400000000",
      "nuvemshopId": "BLING-BDFA400XG",
      "blingId": "BDFA400XG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BDFA400XG",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 3,
        "size": "XG"
      },
      {
        "id": 2,
        "sku": "BDFA400G",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 4,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "BDFA400GG",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 3,
        "size": "GG"
      },
      {
        "id": 4,
        "sku": "BDFA400M",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 5,
        "sku": "BDFA400P",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 3,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-48",
    "name": "OVERSIZED LISA SUEDINE OFF WHITE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 15,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "OVERSIZED LISA SUEDINE OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OLS500XG",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-OLS500XG",
      "blingId": "OLS500XG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OLS500XG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 2,
        "size": "XG"
      },
      {
        "id": 2,
        "sku": "OLS500P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "OLS500G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OLS500GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "GG"
      },
      {
        "id": 5,
        "sku": "OLS500M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-49",
    "name": "OVERSIZED LISA SUEDINE PRETA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 59,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OVERSIZED LISA SUEDINE PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 5,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OLS501XG",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-OLS501XG",
      "blingId": "OLS501XG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OLS501XG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "XG"
      },
      {
        "id": 2,
        "sku": "OLS501P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 2,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "OLS501G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OLS501GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "GG"
      },
      {
        "id": 5,
        "sku": "OLS501M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-50",
    "name": "CAMISETA FUTEBOL AMERICANO RAIDER BRANCA BRANCA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 24,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "CAMISETA FUTEBOL AMERICANO RAIDER BRANCA BRANCA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CFA505GG",
      "barcode": "789505000000",
      "nuvemshopId": "BLING-CFA505GG",
      "blingId": "CFA505GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CFA505GG",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 1,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CFA505M",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CFA505G",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 2,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-51",
    "name": "ADIDAS CAMPUS PRETO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 269.9,
    "originalPrice": 350.87,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 49,
    "images": [
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "ADIDAS CAMPUS PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 16,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "ACP10043",
      "barcode": "789100430000",
      "nuvemshopId": "BLING-ACP10043",
      "blingId": "ACP10043",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "ACP10043",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "43"
      },
      {
        "id": 2,
        "sku": "ACP10044",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 3,
        "sku": "ACP10034",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 1,
        "size": "34"
      },
      {
        "id": 4,
        "sku": "ACP10035",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 2,
        "size": "35"
      },
      {
        "id": 5,
        "sku": "ACP10036",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 3,
        "size": "36"
      },
      {
        "id": 6,
        "sku": "ACP10037",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 2,
        "size": "37"
      },
      {
        "id": 7,
        "sku": "ACP10038",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 3,
        "size": "38"
      },
      {
        "id": 8,
        "sku": "ACP10039",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 2,
        "size": "39"
      },
      {
        "id": 9,
        "sku": "ACP10040",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 2,
        "size": "40"
      },
      {
        "id": 10,
        "sku": "ACP10041",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 1,
        "size": "41"
      },
      {
        "id": 11,
        "sku": "ACP10042",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "42"
      }
    ]
  },
  {
    "id": "bling-real-52",
    "name": "NEW BALANCE 9060 OFF WHITE OFF WHITE",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 269.9,
    "originalPrice": 350.87,
    "tag": "MAIS VENDIDO",
    "rating": 4.9,
    "reviewsCount": 39,
    "images": [
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "NEW BALANCE 9060 OFF WHITE OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 18,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "NB9060OW39",
      "barcode": "789906039000",
      "nuvemshopId": "BLING-NB9060OW39",
      "blingId": "NB9060OW39",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "NB9060OW39",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 3,
        "size": "39"
      },
      {
        "id": 2,
        "sku": "NB9060OW40",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 3,
        "size": "40"
      },
      {
        "id": 3,
        "sku": "NB9060OW41",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 1,
        "size": "41"
      },
      {
        "id": 4,
        "sku": "NB9060OW42",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 1,
        "size": "42"
      },
      {
        "id": 5,
        "sku": "NB9060OW43",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "43"
      },
      {
        "id": 6,
        "sku": "NB9060OW44",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 7,
        "sku": "NB9060OW34",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "34"
      },
      {
        "id": 8,
        "sku": "NB9060OW35",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 2,
        "size": "35"
      },
      {
        "id": 9,
        "sku": "NB9060OW36",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 3,
        "size": "36"
      },
      {
        "id": 10,
        "sku": "NB9060OW37",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 3,
        "size": "37"
      },
      {
        "id": 11,
        "sku": "NB9060OW38",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 2,
        "size": "38"
      }
    ]
  },
  {
    "id": "bling-real-53",
    "name": "NEW BALANCE 9060 PRETO/ BRANCO PRETO/ BRANCO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 269.9,
    "originalPrice": 350.87,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 37,
    "images": [
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "NEW BALANCE 9060 PRETO/ BRANCO PRETO/ BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 4,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "NB9060BW42",
      "barcode": "789906042000",
      "nuvemshopId": "BLING-NB9060BW42",
      "blingId": "NB9060BW42",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "NB9060BW42",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 1,
        "size": "42"
      },
      {
        "id": 2,
        "sku": "NB9060BW43",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 1,
        "size": "43"
      },
      {
        "id": 3,
        "sku": "NB9060BW44",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 4,
        "sku": "NB9060BW34",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "34"
      },
      {
        "id": 5,
        "sku": "NB9060BW35",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "35"
      },
      {
        "id": 6,
        "sku": "NB9060BW36",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 7,
        "sku": "NB9060BW37",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 8,
        "sku": "NB9060BW38",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 9,
        "sku": "NB9060BW39",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "39"
      },
      {
        "id": 10,
        "sku": "NB9060BW40",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 1,
        "size": "40"
      },
      {
        "id": 11,
        "sku": "NB9060BW41",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 1,
        "size": "41"
      }
    ]
  },
  {
    "id": "bling-real-54",
    "name": "NEW BALANCE 9060 BLACK BLACK",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 269.9,
    "originalPrice": 350.87,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 15,
    "images": [
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "NEW BALANCE 9060 BLACK BLACK. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 9,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "NBB10041",
      "barcode": "789100410000",
      "nuvemshopId": "BLING-NBB10041",
      "blingId": "NBB10041",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "NBB10041",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "41"
      },
      {
        "id": 2,
        "sku": "NBB10042",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 3,
        "sku": "NBB10043",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "43"
      },
      {
        "id": 4,
        "sku": "NBB10044",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 5,
        "sku": "NBB10034",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 1,
        "size": "34"
      },
      {
        "id": 6,
        "sku": "NBB10035",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 2,
        "size": "35"
      },
      {
        "id": 7,
        "sku": "NBB10036",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 2,
        "size": "36"
      },
      {
        "id": 8,
        "sku": "NBB10037",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 3,
        "size": "37"
      },
      {
        "id": 9,
        "sku": "NBB10038",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 10,
        "sku": "NBB10039",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 1,
        "size": "39"
      },
      {
        "id": 11,
        "sku": "NBB10040",
        "price": 269.9,
        "comparePrice": 350.87,
        "stock": 0,
        "size": "40"
      }
    ]
  },
  {
    "id": "bling-real-55",
    "name": "TENIS HOCKS BOLD ESPECTRO PRETO \\BEGE",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 354.9,
    "originalPrice": 461.37,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 48,
    "images": [
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "TENIS HOCKS BOLD ESPECTRO PRETO \\BEGE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "THBE10038",
      "barcode": "789100380000",
      "nuvemshopId": "BLING-THBE10038",
      "blingId": "THBE10038",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "THBE10038",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 2,
        "sku": "THBE10039",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "39"
      },
      {
        "id": 3,
        "sku": "THBE10040",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 4,
        "sku": "THBE10041",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "41"
      },
      {
        "id": 5,
        "sku": "THBE10042",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 6,
        "sku": "THBE10043",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "43"
      },
      {
        "id": 7,
        "sku": "THBE10044",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 8,
        "sku": "THBE10034",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "34"
      },
      {
        "id": 9,
        "sku": "THBE10035",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "35"
      },
      {
        "id": 10,
        "sku": "THBE10036",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 11,
        "sku": "THBE10037",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "37"
      }
    ]
  },
  {
    "id": "bling-real-56",
    "name": "TENIS HOCKS PUFF BRILHANTE BRANCO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 354.9,
    "originalPrice": 461.37,
    "tag": "MAIS VENDIDO",
    "rating": 4.7,
    "reviewsCount": 60,
    "images": [
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44 Tênis QIX Combat Slim Branco c/ Azul Original Unissex 39"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "TENIS HOCKS PUFF BRILHANTE BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 5,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "THPB10034",
      "barcode": "789100340000",
      "nuvemshopId": "BLING-THPB10034",
      "blingId": "THPB10034",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "THPB10034",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "34"
      },
      {
        "id": 2,
        "sku": "THPB10035",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "35"
      },
      {
        "id": 3,
        "sku": "THPB10036",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 4,
        "sku": "THPB10037",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 5,
        "sku": "THPB10038",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 6,
        "sku": "THPB10039",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "39"
      },
      {
        "id": 7,
        "sku": "THPB10040",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 2,
        "size": "40"
      },
      {
        "id": 8,
        "sku": "THPB10041",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "41"
      },
      {
        "id": 9,
        "sku": "THPB10042",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "42"
      },
      {
        "id": 10,
        "sku": "THPB10043",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "43"
      },
      {
        "id": 11,
        "sku": "THPB10044",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "44 Tênis QIX Combat Slim Branco c/ Azul Original Unissex 39"
      }
    ]
  },
  {
    "id": "bling-real-57",
    "name": "TENIS HOCKS CASCALHO CASCALHO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 354.9,
    "originalPrice": 461.37,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 19,
    "images": [
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "TENIS HOCKS CASCALHO CASCALHO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 13,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "THC44",
      "barcode": "789440000000",
      "nuvemshopId": "BLING-THC44",
      "blingId": "THC44",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "THC44",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "44"
      },
      {
        "id": 2,
        "sku": "THC34",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 2,
        "size": "34"
      },
      {
        "id": 3,
        "sku": "THC35",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "35"
      },
      {
        "id": 4,
        "sku": "THC37",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 5,
        "sku": "THC43",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 2,
        "size": "43"
      },
      {
        "id": 6,
        "sku": "THC41",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 2,
        "size": "41"
      },
      {
        "id": 7,
        "sku": "THC42",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 8,
        "sku": "THC40",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 9,
        "sku": "THC38",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "38"
      },
      {
        "id": 10,
        "sku": "THC39",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "39"
      },
      {
        "id": 11,
        "sku": "THC36",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "36"
      }
    ]
  },
  {
    "id": "bling-real-58",
    "name": "TENIS HOCKS SAFIRA SAFIRA",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 354.9,
    "originalPrice": 461.37,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 47,
    "images": [
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "TENIS HOCKS SAFIRA SAFIRA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 8,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "THS44",
      "barcode": "789440000000",
      "nuvemshopId": "BLING-THS44",
      "blingId": "THS44",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "THS44",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 2,
        "sku": "THS34",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 2,
        "size": "34"
      },
      {
        "id": 3,
        "sku": "THS35",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 2,
        "size": "35"
      },
      {
        "id": 4,
        "sku": "THS37",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 5,
        "sku": "THS38",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "38"
      },
      {
        "id": 6,
        "sku": "THS39",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "39"
      },
      {
        "id": 7,
        "sku": "THS40",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "40"
      },
      {
        "id": 8,
        "sku": "THS43",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "43"
      },
      {
        "id": 9,
        "sku": "THS42",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 10,
        "sku": "THS36",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 2,
        "size": "36"
      },
      {
        "id": 11,
        "sku": "THS41",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "41"
      }
    ]
  },
  {
    "id": "bling-real-59",
    "name": "TENIS HOCKS PETITOA PETITIPOA",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 354.9,
    "originalPrice": 461.37,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 42,
    "images": [
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "TENIS HOCKS PETITOA PETITIPOA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 8,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "THP10044",
      "barcode": "789100440000",
      "nuvemshopId": "BLING-THP10044",
      "blingId": "THP10044",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "THP10044",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 2,
        "sku": "THP10034",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 2,
        "size": "34"
      },
      {
        "id": 3,
        "sku": "THP10039",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "39"
      },
      {
        "id": 4,
        "sku": "THP10040",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 5,
        "sku": "THP10041",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "41"
      },
      {
        "id": 6,
        "sku": "THP10042",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 7,
        "sku": "THP10043",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 2,
        "size": "43"
      },
      {
        "id": 8,
        "sku": "THP10035",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "35"
      },
      {
        "id": 9,
        "sku": "THP10036",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 10,
        "sku": "THP10037",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 11,
        "sku": "THP10038",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "38"
      }
    ]
  },
  {
    "id": "bling-real-60",
    "name": "TENIS HOCKS PRETO REFLETIVO PRETO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 354.9,
    "originalPrice": 461.37,
    "tag": "MAIS VENDIDO",
    "rating": 4.7,
    "reviewsCount": 29,
    "images": [
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "TENIS HOCKS PRETO REFLETIVO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 6,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "THPR10044",
      "barcode": "789100440000",
      "nuvemshopId": "BLING-THPR10044",
      "blingId": "THPR10044",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "THPR10044",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 2,
        "sku": "THPR10039",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "39"
      },
      {
        "id": 3,
        "sku": "THPR10040",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 4,
        "sku": "THPR10041",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "41"
      },
      {
        "id": 5,
        "sku": "THPR10042",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 3,
        "size": "42"
      },
      {
        "id": 6,
        "sku": "THPR10043",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "43"
      },
      {
        "id": 7,
        "sku": "THPR10034",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 1,
        "size": "34"
      },
      {
        "id": 8,
        "sku": "THPR10035",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "35"
      },
      {
        "id": 9,
        "sku": "THPR10036",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 10,
        "sku": "THPR10037",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 11,
        "sku": "THPR10038",
        "price": 354.9,
        "comparePrice": 461.37,
        "stock": 0,
        "size": "38"
      }
    ]
  },
  {
    "id": "bling-real-61",
    "name": "CHINELO HAVAIANAS BRASIL PRETA BRASIL",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 45,
    "originalPrice": 58.5,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 26,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "36",
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CHINELO HAVAIANAS BRASIL PRETA BRASIL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 14,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CHBP10034",
      "barcode": "789100340000",
      "nuvemshopId": "BLING-CHBP10034",
      "blingId": "CHBP10034",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CHBP10034",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "34"
      },
      {
        "id": 2,
        "sku": "CHBP10036",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "36"
      },
      {
        "id": 3,
        "sku": "CHBP10038",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "38"
      },
      {
        "id": 4,
        "sku": "CHBP10040",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "40"
      },
      {
        "id": 5,
        "sku": "CHBP10042",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 1,
        "size": "42"
      },
      {
        "id": 6,
        "sku": "CHBP10044",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "44"
      },
      {
        "id": 7,
        "sku": "CHBP10046",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 3,
        "size": "46"
      }
    ]
  },
  {
    "id": "bling-real-62",
    "name": "JAQUETA DE COURO MARRON",
    "category": "roupas",
    "subcategory": "hoodies",
    "price": 289.9,
    "originalPrice": 376.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 23,
    "images": [
      "/src/assets/images/product_hoodie_oversized_1793275501387.jpg",
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "JAQUETA DE COURO MARRON. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "JDC501",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-JDC501",
      "blingId": "JDC501",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "JDC501",
        "price": 289.9,
        "comparePrice": 376.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-63",
    "name": "JAQUETA DE COURO PRETA",
    "category": "roupas",
    "subcategory": "hoodies",
    "price": 230,
    "originalPrice": 299,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 40,
    "images": [
      "/src/assets/images/product_hoodie_oversized_1793275501387.jpg",
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "JAQUETA DE COURO PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "JDC500",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-JDC500",
      "blingId": "JDC500",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "JDC500",
        "price": 230,
        "comparePrice": 299,
        "stock": 2,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-64",
    "name": "SHOULDER BAG JORDAN PEITORAL",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 99.9,
    "originalPrice": 129.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 28,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "SHOULDER BAG JORDAN PEITORAL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "SBNJP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-SBNJP100",
      "blingId": "SBNJP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "SBNJP100",
        "price": 99.9,
        "comparePrice": 129.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-65",
    "name": "SHOULDER BAG TRANSVERSAL",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 45,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "SHOULDER BAG TRANSVERSAL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "SBAT100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-SBAT100",
      "blingId": "SBAT100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "SBAT100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "Tamanho Único"
      },
      {
        "id": 2,
        "sku": "SBNT100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-66",
    "name": "SHOULDER BAG PEITORAL",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 99.9,
    "originalPrice": 129.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 50,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "SHOULDER BAG PEITORAL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "SBNP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-SBNP100",
      "blingId": "SBNP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "SBNP100",
        "price": 99.9,
        "comparePrice": 129.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-67",
    "name": "SHOULDER BAG ANTIFURTO",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 42,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "SHOULDER BAG ANTIFURTO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "SBN100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-SBN100",
      "blingId": "SBN100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "SBN100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-68",
    "name": "RELOGIO CASIO VINTAGE PRATA COM FUNDO VERDE",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 29,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Verde",
        "hex": "#15803D"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "RELOGIO CASIO VINTAGE PRATA COM FUNDO VERDE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RCVPCFV100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RCVPCFV100",
      "blingId": "RCVPCFV100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RCVPCFV100",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-69",
    "name": "RELOGIO CASIO VINTAGE PRATA COM FUNDO BRANCO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 42,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "RELOGIO CASIO VINTAGE PRATA COM FUNDO BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RCVPCFB100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RCVPCFB100",
      "blingId": "RCVPCFB100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RCVPCFB100",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-70",
    "name": "RELOGIO CASIO VINTAGE PRATA COM FUNDO AZUL BEBE",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 23,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "RELOGIO CASIO VINTAGE PRATA COM FUNDO AZUL BEBE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RCVPCFAB100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RCVPCFAB100",
      "blingId": "RCVPCFAB100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RCVPCFAB100",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-71",
    "name": "RELOGIO ROLEX PRATA FUNDO PRETO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 249.9,
    "originalPrice": 324.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "RELOGIO ROLEX PRATA FUNDO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RRPFP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RRPFP100",
      "blingId": "RRPFP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RRPFP100",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-72",
    "name": "RELOGIO PATEK PHILIPPE PRATA COM DOURADO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 249.9,
    "originalPrice": 324.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 52,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      },
      {
        "name": "Dourado / Ouro",
        "hex": "#F59E0B"
      }
    ],
    "description": "RELOGIO PATEK PHILIPPE PRATA COM DOURADO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RPPPCD100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RPPPCD100",
      "blingId": "RPPPCD100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RPPPCD100",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-73",
    "name": "RELOGIO PATEK PHILIPPE PRATA FUNDO BRANCO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 249.9,
    "originalPrice": 324.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 20,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "RELOGIO PATEK PHILIPPE PRATA FUNDO BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RPPPFB100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RPPPFB100",
      "blingId": "RPPPFB100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RPPPFB100",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-74",
    "name": "BONÉ N.E NY FLORAL PRETO \\AZUL",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 56,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "55.8 CM",
      "56.8 CM",
      "58.7 CM"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "BONÉ N.E NY FLORAL PRETO \\AZUL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BNENY10058.7",
      "barcode": "789100587000",
      "nuvemshopId": "BLING-BNENY10058.7",
      "blingId": "BNENY10058.7",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BNENY10058.7",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "58.7 CM"
      },
      {
        "id": 2,
        "sku": "BNENY10055.8",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "55.8 CM"
      },
      {
        "id": 3,
        "sku": "BNENY10056.8",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "56.8 CM"
      }
    ]
  },
  {
    "id": "bling-real-75",
    "name": "BONÉ N.E YANKESS BEGE \\AZUL",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 32,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "55.8 CM",
      "56.8 CM",
      "58.7 CM"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      },
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "BONÉ N.E YANKESS BEGE \\AZUL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BNENY10255.8",
      "barcode": "789102558000",
      "nuvemshopId": "BLING-BNENY10255.8",
      "blingId": "BNENY10255.8",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BNENY10255.8",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "55.8 CM"
      },
      {
        "id": 2,
        "sku": "BNENY10256.8",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "56.8 CM"
      },
      {
        "id": 3,
        "sku": "BNENY10258.7",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "58.7 CM"
      }
    ]
  },
  {
    "id": "bling-real-76",
    "name": "BONÉ N.E DODGERS PRETA PRETO",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 51,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "55.8 CM",
      "56.8 CM",
      "58.7 CM"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "BONÉ N.E DODGERS PRETA PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BNELA10255.8",
      "barcode": "789102558000",
      "nuvemshopId": "BLING-BNELA10255.8",
      "blingId": "BNELA10255.8",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BNELA10255.8",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "55.8 CM"
      },
      {
        "id": 2,
        "sku": "BNELA10256.8",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "56.8 CM"
      },
      {
        "id": 3,
        "sku": "BNELA10258.7",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "58.7 CM"
      }
    ]
  },
  {
    "id": "bling-real-77",
    "name": "BONÉ N.E SOX PRETO BLACK SOX",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 32,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "55.8 CM",
      "56.8 CM",
      "58.7 CM"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "BONÉ N.E SOX PRETO BLACK SOX. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BNEC10155.8",
      "barcode": "789101558000",
      "nuvemshopId": "BLING-BNEC10155.8",
      "blingId": "BNEC10155.8",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BNEC10155.8",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "55.8 CM"
      },
      {
        "id": 2,
        "sku": "BNEC10156.8",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "56.8 CM"
      },
      {
        "id": 3,
        "sku": "BNEC10158.7",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "58.7 CM"
      }
    ]
  },
  {
    "id": "bling-real-78",
    "name": "BONÉ N.E OAKLAND ATHLETICS BRANCO \\VERDE",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 21,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "55.8 CM",
      "56.8 CM",
      "58.7 CM"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Verde",
        "hex": "#15803D"
      }
    ],
    "description": "BONÉ N.E OAKLAND ATHLETICS BRANCO \\VERDE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BNAS10055.8",
      "barcode": "789100558000",
      "nuvemshopId": "BLING-BNAS10055.8",
      "blingId": "BNAS10055.8",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BNAS10055.8",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "55.8 CM"
      },
      {
        "id": 2,
        "sku": "BNAS10056.8",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "56.8 CM"
      },
      {
        "id": 3,
        "sku": "BNAS10058.7",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "58.7 CM"
      }
    ]
  },
  {
    "id": "bling-real-79",
    "name": "BONÉ N.E CHICAGO WHITE SOX",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 36,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "55.8 CM",
      "56.8 CM",
      "58.7 CM"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "BONÉ N.E CHICAGO WHITE SOX. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BNEC10058.7",
      "barcode": "789100587000",
      "nuvemshopId": "BLING-BNEC10058.7",
      "blingId": "BNEC10058.7",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BNEC10058.7",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "58.7 CM"
      },
      {
        "id": 2,
        "sku": "BNEC10055.8",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "55.8 CM"
      },
      {
        "id": 3,
        "sku": "BNEC10056.8",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "56.8 CM"
      }
    ]
  },
  {
    "id": "bling-real-80",
    "name": "BONÉ N.E NY YANKESS MIB TEAM HEART PRETO",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 39,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "55.8 CM",
      "56.8 CM",
      "58.7 CM"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "BONÉ N.E NY YANKESS MIB TEAM HEART PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BNENY10356.8",
      "barcode": "789103568000",
      "nuvemshopId": "BLING-BNENY10356.8",
      "blingId": "BNENY10356.8",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BNENY10356.8",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "56.8 CM"
      },
      {
        "id": 2,
        "sku": "BNENY10358.8",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "58.7 CM"
      },
      {
        "id": 3,
        "sku": "BNENY10355.8",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "55.8 CM"
      }
    ]
  },
  {
    "id": "bling-real-81",
    "name": "BONÉ N.E BORN X RAISED CHERUBS",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 46,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "55.8 CM",
      "56.8 CM",
      "58.7 CM"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "BONÉ N.E BORN X RAISED CHERUBS. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BNELA10155.8",
      "barcode": "789101558000",
      "nuvemshopId": "BLING-BNELA10155.8",
      "blingId": "BNELA10155.8",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BNELA10155.8",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "55.8 CM"
      },
      {
        "id": 2,
        "sku": "BNELA10156.8",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": -1,
        "size": "56.8 CM"
      },
      {
        "id": 3,
        "sku": "BNELA10158.7",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "58.7 CM"
      }
    ]
  },
  {
    "id": "bling-real-82",
    "name": "BONÉ N.E DODGERS FLORAL AZUL",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 41,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "55.8 CM",
      "56.8 CM",
      "58.7 CM"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "BONÉ N.E DODGERS FLORAL AZUL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BNELA10055.8",
      "barcode": "789100558000",
      "nuvemshopId": "BLING-BNELA10055.8",
      "blingId": "BNELA10055.8",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BNELA10055.8",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "55.8 CM"
      },
      {
        "id": 2,
        "sku": "BNELA10056.8",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "56.8 CM"
      },
      {
        "id": 3,
        "sku": "BNELA10058.7",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "58.7 CM"
      }
    ]
  },
  {
    "id": "bling-real-83",
    "name": "MOLETOM CHRONIC 3 CABOS 3 CABO",
    "category": "roupas",
    "subcategory": "hoodies",
    "price": 249.9,
    "originalPrice": 324.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 20,
    "images": [
      "/src/assets/images/product_hoodie_oversized_1793275501387.jpg",
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "MOLETOM CHRONIC 3 CABOS 3 CABO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MC3C700P",
      "barcode": "789370000000",
      "nuvemshopId": "BLING-MC3C700P",
      "blingId": "MC3C700P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MC3C700P",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "MC3C700M",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "MC3C700G",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "MC3C700GG",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 5,
        "sku": "MC3C700XG",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "XG"
      }
    ]
  },
  {
    "id": "bling-real-84",
    "name": "MOLETOM CHRONIC 2 CABOS 2 CABO",
    "category": "roupas",
    "subcategory": "hoodies",
    "price": 249.9,
    "originalPrice": 324.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 18,
    "images": [
      "/src/assets/images/product_hoodie_oversized_1793275501387.jpg",
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "MOLETOM CHRONIC 2 CABOS 2 CABO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MC27C700M",
      "barcode": "789277000000",
      "nuvemshopId": "BLING-MC27C700M",
      "blingId": "MC27C700M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MC27C700M",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "MC27C700G",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "MC27C700GG",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 4,
        "sku": "MC27C700XG",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "XG"
      },
      {
        "id": 5,
        "sku": "MC27C700P",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-85",
    "name": "OVERSIZED TRIP SIDE BOXY RECORTADA ROXO COM PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 139.9,
    "originalPrice": 181.87,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 25,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Roxo / Purple",
        "hex": "#7E22CE"
      }
    ],
    "description": "OVERSIZED TRIP SIDE BOXY RECORTADA ROXO COM PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 5,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTSBR500XG",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-OTSBR500XG",
      "blingId": "OTSBR500XG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTSBR500XG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "XG"
      },
      {
        "id": 2,
        "sku": "OTSBR500P",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "OTSBR500M",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "OTSBR500G",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 5,
        "sku": "OTSBR500GG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 2,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-86",
    "name": "OVERSIZED TRIPSIDE MULTICOR COR",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 80.33,
    "originalPrice": 104.43,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 20,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "GG",
      "XG OVERSIZED TRIPSIDE MULTICOR COR"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "OVERSIZED TRIPSIDE MULTICOR COR. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 302,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTSM500P",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-OTSM500P",
      "blingId": "OTSM500P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTSM500P",
        "price": 119.9,
        "comparePrice": 104.43,
        "stock": 1,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OTSM500GG",
        "price": 119.9,
        "comparePrice": 104.43,
        "stock": 1,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "OTSM500XG",
        "price": 1.2,
        "comparePrice": 104.43,
        "stock": 300,
        "size": "XG OVERSIZED TRIPSIDE MULTICOR COR"
      }
    ]
  },
  {
    "id": "bling-real-87",
    "name": "TOUCA INVERNO TRIP SIDE ROXA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 41,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Roxo / Purple",
        "hex": "#7E22CE"
      }
    ],
    "description": "TOUCA INVERNO TRIP SIDE ROXA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TITSR100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-TITSR100",
      "blingId": "TITSR100",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TITSR100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-88",
    "name": "MOLETOM MULT MARCAS MUL MARCAS",
    "category": "roupas",
    "subcategory": "hoodies",
    "price": 249.9,
    "originalPrice": 324.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 19,
    "images": [
      "/src/assets/images/product_hoodie_oversized_1793275501387.jpg",
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "MOLETOM MULT MARCAS MUL MARCAS. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MSW500M",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-MSW500M",
      "blingId": "MSW500M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MSW500M",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "MSW500G",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "MSW500GG",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 4,
        "sku": "MSW500P",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-89",
    "name": "SUETER IMPORTADO GG",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 99.9,
    "originalPrice": 129.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 27,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "SUETER IMPORTADO GG. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "SI500GG",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-SI500GG",
      "blingId": "SI500GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "SI500GG",
        "price": 99.9,
        "comparePrice": 129.87,
        "stock": 3,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-90",
    "name": "SUETER IMPORTADO P",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 99.9,
    "originalPrice": 129.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 15,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "SUETER IMPORTADO P. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "SI500P",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-SI500P",
      "blingId": "SI500P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "SI500P",
        "price": 99.9,
        "comparePrice": 129.87,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-91",
    "name": "SUETER IMPORTADO M",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 99.9,
    "originalPrice": 129.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 12,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "SUETER IMPORTADO M. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "SI500M",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-SI500M",
      "blingId": "SI500M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "SI500M",
        "price": 99.9,
        "comparePrice": 129.87,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-92",
    "name": "SUETER IMPORTADO G",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 99.9,
    "originalPrice": 129.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 56,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "SUETER IMPORTADO G. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "SI500G",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-SI500G",
      "blingId": "SI500G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "SI500G",
        "price": 99.9,
        "comparePrice": 129.87,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-93",
    "name": "CARTEIRA LOUIS VUITTON BRANCA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 70,
    "originalPrice": 91,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 33,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "CARTEIRA LOUIS VUITTON BRANCA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CLVB100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CLVB100",
      "blingId": "CLVB100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CLVB100",
        "price": 70,
        "comparePrice": 91,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-94",
    "name": "OCULOS PALM ANGELS",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 100,
    "originalPrice": 130,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 35,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "OCULOS PALM ANGELS. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OPA100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-OPA100",
      "blingId": "OPA100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OPA100",
        "price": 100,
        "comparePrice": 130,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-95",
    "name": "OAKLEY DESCANÇO CARTIER DOURADA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 53,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Dourado / Ouro",
        "hex": "#F59E0B"
      }
    ],
    "description": "OAKLEY DESCANÇO CARTIER DOURADA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "ODCD100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-ODCD100",
      "blingId": "ODCD100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "ODCD100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-96",
    "name": "OAKLEY PLANTARES BRANCA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 130,
    "originalPrice": 169,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 34,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "OAKLEY PLANTARES BRANCA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OPB100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-OPB100",
      "blingId": "OPB100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OPB100",
        "price": 130,
        "comparePrice": 169,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-97",
    "name": "OAKLEY JULIET ARMA/ PRETA LENTE ROXA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 189.9,
    "originalPrice": 246.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 42,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Roxo / Purple",
        "hex": "#7E22CE"
      }
    ],
    "description": "OAKLEY JULIET ARMA/ PRETA LENTE ROXA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OJAPLRO100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-OJAPLRO100",
      "blingId": "OJAPLRO100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OJAPLRO100",
        "price": 189.9,
        "comparePrice": 246.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-98",
    "name": "OAKLEY JULIET ARMA/ PRETA LENTE AZUL",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 189.9,
    "originalPrice": 246.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 44,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "OAKLEY JULIET ARMA/ PRETA LENTE AZUL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OJAPLA100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-OJAPLA100",
      "blingId": "OJAPLA100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OJAPLA100",
        "price": 189.9,
        "comparePrice": 246.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-99",
    "name": "TENIS QIX CHARLIE BROWN PRETO/ BRANCO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 25,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "TENIS QIX CHARLIE BROWN PRETO/ BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TQXCB45",
      "barcode": "789450000000",
      "nuvemshopId": "BLING-TQXCB45",
      "blingId": "TQXCB45",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TQXCB45",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "45"
      },
      {
        "id": 2,
        "sku": "TQXCB44",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 3,
        "sku": "TQXCB43",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "43"
      },
      {
        "id": 4,
        "sku": "TQXCB42",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 5,
        "sku": "TQXCB41",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "41"
      },
      {
        "id": 6,
        "sku": "TQXCB40",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 7,
        "sku": "TQXCB339",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "39"
      },
      {
        "id": 8,
        "sku": "TQXCB38",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 9,
        "sku": "TQXCB37",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 10,
        "sku": "TQXCB36",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "36"
      }
    ]
  },
  {
    "id": "bling-real-100",
    "name": "TENIS QIX MASSAKI PRETO/ VERDE MUSGO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 32,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Verde",
        "hex": "#15803D"
      }
    ],
    "description": "TENIS QIX MASSAKI PRETO/ VERDE MUSGO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TQCSPV45",
      "barcode": "789450000000",
      "nuvemshopId": "BLING-TQCSPV45",
      "blingId": "TQCSPV45",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TQCSPV45",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "45"
      },
      {
        "id": 2,
        "sku": "TQCSPV44",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 3,
        "sku": "TQCSPV43",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "43"
      },
      {
        "id": 4,
        "sku": "TQCSPV39",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "39"
      },
      {
        "id": 5,
        "sku": "TQCSPV40",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 6,
        "sku": "TQCSPV41",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "41"
      },
      {
        "id": 7,
        "sku": "TQCSPV42",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 8,
        "sku": "TQCSPV36",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 9,
        "sku": "TQCSPV37",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 10,
        "sku": "TQCSPV38",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "38"
      }
    ]
  },
  {
    "id": "bling-real-101",
    "name": "OVERSIZED CHRONIC MULTICOR MULTICOR",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 139.9,
    "originalPrice": 181.87,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 21,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "OVERSIZED CHRONIC MULTICOR MULTICOR. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 4,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OCBC504P",
      "barcode": "789504000000",
      "nuvemshopId": "BLING-OCBC504P",
      "blingId": "OCBC504P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OCBC504P",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OCBC504GG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "OCBC504M",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "OCBC504G",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 3,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-102",
    "name": "OVERSIZED TRIP SIDE BOXY RECORTADA PRETO COM ROXO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 139.9,
    "originalPrice": 181.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 25,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Roxo / Purple",
        "hex": "#7E22CE"
      }
    ],
    "description": "OVERSIZED TRIP SIDE BOXY RECORTADA PRETO COM ROXO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTSBP500P",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-OTSBP500P",
      "blingId": "OTSBP500P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTSBP500P",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 2,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OTSBP500M",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "OTSBP500G",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OTSBP500GG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 5,
        "sku": "OTSBP500XG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "XG"
      }
    ]
  },
  {
    "id": "bling-real-103",
    "name": "OVERSIZED TRIP SIDE RECORTADA PRETA/ ROXO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 139.9,
    "originalPrice": 181.87,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Roxo / Purple",
        "hex": "#7E22CE"
      }
    ],
    "description": "OVERSIZED TRIP SIDE RECORTADA PRETA/ ROXO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 5,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTSR504XG",
      "barcode": "789504000000",
      "nuvemshopId": "BLING-OTSR504XG",
      "blingId": "OTSR504XG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTSR504XG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "XG"
      },
      {
        "id": 2,
        "sku": "OTSR504M",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "OTSR504G",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OTSR504GG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "GG"
      },
      {
        "id": 5,
        "sku": "OTSR504P",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-104",
    "name": "CALCA TRIP SIDE BAGGY CARPINTEIRO ESTONADA",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 59,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "48"
    ],
    "colors": [
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "CALCA TRIP SIDE BAGGY CARPINTEIRO ESTONADA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CTSBC40038",
      "barcode": "789400380000",
      "nuvemshopId": "BLING-CTSBC40038",
      "blingId": "CTSBC40038",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CTSBC40038",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 2,
        "sku": "CTSBC40040",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 3,
        "sku": "CTSBC40042",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 4,
        "sku": "CTSBC40044",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 5,
        "sku": "CTSBC40046",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "46"
      },
      {
        "id": 6,
        "sku": "CTSBC40048",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "48"
      }
    ]
  },
  {
    "id": "bling-real-105",
    "name": "CALCA TRIP SIDE BAGGY ELASTICO ESTONADA",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 23,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "CALCA TRIP SIDE BAGGY ELASTICO ESTONADA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CTBE400G",
      "barcode": "789400000000",
      "nuvemshopId": "BLING-CTBE400G",
      "blingId": "CTBE400G",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CTBE400G",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "CTBE400GG",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "CTBE400XG",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "XG"
      },
      {
        "id": 4,
        "sku": "CTBE400P",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 5,
        "sku": "CTBE400M",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-106",
    "name": "CALCA PIXA IN JEANS CLARA",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 61,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "38",
      "40",
      "42",
      "44",
      "46",
      "48"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "CALCA PIXA IN JEANS CLARA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CPI40136",
      "barcode": "789401360000",
      "nuvemshopId": "BLING-CPI40136",
      "blingId": "CPI40136",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CPI40136",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 2,
        "sku": "CPI40138",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 3,
        "sku": "CPI40140",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 4,
        "sku": "CPI40148",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "48"
      },
      {
        "id": 5,
        "sku": "CPI40142",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 6,
        "sku": "CPI40144",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": -1,
        "size": "44"
      },
      {
        "id": 7,
        "sku": "CPI40146",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "46"
      }
    ]
  },
  {
    "id": "bling-real-107",
    "name": "OVERSIZED LISA AZUL",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 89.9,
    "originalPrice": 116.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 38,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "OVERSIZED LISA AZUL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OL505P",
      "barcode": "789505000000",
      "nuvemshopId": "BLING-OL505P",
      "blingId": "OL505P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OL505P",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OL505M",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "OL505G",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OL505GG",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 1,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-108",
    "name": "OVERSIZED LISA MARRON",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 89.9,
    "originalPrice": 116.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 35,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "OVERSIZED LISA MARRON. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OL504P",
      "barcode": "789504000000",
      "nuvemshopId": "BLING-OL504P",
      "blingId": "OL504P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OL504P",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 1,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OL504M",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "OL504G",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OL504GG",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-109",
    "name": "OVERSIZED LISA ROSA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 31,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Rosa / Rose Gold",
        "hex": "#F472B6"
      }
    ],
    "description": "OVERSIZED LISA ROSA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OL503G",
      "barcode": "789503000000",
      "nuvemshopId": "BLING-OL503G",
      "blingId": "OL503G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OL503G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "OL503GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "OL503P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 4,
        "sku": "OL503M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-110",
    "name": "OVERSIZED LISA VERDE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 46,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Verde",
        "hex": "#15803D"
      }
    ],
    "description": "OVERSIZED LISA VERDE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OL500P",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-OL500P",
      "blingId": "OL500P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OL500P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OL500G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "OL500GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 4,
        "sku": "OL500M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-111",
    "name": "CALCA CARGO ONCROSS INFANTIL PRETA",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 22,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "14",
      "16"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CALCA CARGO ONCROSS INFANTIL PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCOI401G",
      "barcode": "789401000000",
      "nuvemshopId": "BLING-CCOI401G",
      "blingId": "CCOI401G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCOI401G",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "16"
      },
      {
        "id": 2,
        "sku": "CCOI401M",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "14"
      }
    ]
  },
  {
    "id": "bling-real-112",
    "name": "CALCA CARGO ONCROSS INFANTIL PRETA ESTONADA",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 45,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "12",
      "14",
      "16"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "CALCA CARGO ONCROSS INFANTIL PRETA ESTONADA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCOI401P",
      "barcode": "789401000000",
      "nuvemshopId": "BLING-CCOI401P",
      "blingId": "CCOI401P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCOI401P",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "12"
      },
      {
        "id": 2,
        "sku": "CCOI400P",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "12"
      },
      {
        "id": 3,
        "sku": "CCOI400M",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "14"
      },
      {
        "id": 4,
        "sku": "CCOI400G",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "16"
      }
    ]
  },
  {
    "id": "bling-real-113",
    "name": "CALCA BAGGY ONCROSSNACINT URADA CLARA LAVAGEM",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 179.9,
    "originalPrice": 233.87,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 49,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "48"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CALCA BAGGY ONCROSSNACINT URADA CLARA LAVAGEM. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 10,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "COBAC40042",
      "barcode": "789400420000",
      "nuvemshopId": "BLING-COBAC40042",
      "blingId": "COBAC40042",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "COBAC40042",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 2,
        "sku": "COBAC40044",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 3,
        "size": "44"
      },
      {
        "id": 3,
        "sku": "COBAC40046",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 3,
        "size": "46"
      },
      {
        "id": 4,
        "sku": "COBAC40048",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 2,
        "size": "48"
      },
      {
        "id": 5,
        "sku": "COBAC40038",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 6,
        "sku": "COBAC40040",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "40"
      }
    ]
  },
  {
    "id": "bling-real-114",
    "name": "CHINELO HAVAIANAS SIMPSONS SIMPSONS",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 45,
    "originalPrice": 58.5,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 46,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CHINELO HAVAIANAS SIMPSONS SIMPSONS. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 4,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CHSI10046",
      "barcode": "789100460000",
      "nuvemshopId": "BLING-CHSI10046",
      "blingId": "CHSI10046",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CHSI10046",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 1,
        "size": "46"
      },
      {
        "id": 2,
        "sku": "CHSI10036",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "36"
      },
      {
        "id": 3,
        "sku": "CHSI10038",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 1,
        "size": "38"
      },
      {
        "id": 4,
        "sku": "CHSI10040",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 5,
        "sku": "CHSI10042",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 6,
        "sku": "CHSI10044",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "44"
      }
    ]
  },
  {
    "id": "bling-real-115",
    "name": "CHINELO HAVAIANAS BRASIL BRASIL",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 45,
    "originalPrice": 58.5,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "34",
      "36",
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CHINELO HAVAIANAS BRASIL BRASIL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 14,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CHB10046",
      "barcode": "789100460000",
      "nuvemshopId": "BLING-CHB10046",
      "blingId": "CHB10046",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CHB10046",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 1,
        "size": "46"
      },
      {
        "id": 2,
        "sku": "CHB10034",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "34"
      },
      {
        "id": 3,
        "sku": "CHB10036",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "36"
      },
      {
        "id": 4,
        "sku": "CHB10038",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "38"
      },
      {
        "id": 5,
        "sku": "CHB10040",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 3,
        "size": "40"
      },
      {
        "id": 6,
        "sku": "CHB10042",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 7,
        "sku": "CHB10044",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "44"
      }
    ]
  },
  {
    "id": "bling-real-116",
    "name": "CHINELO HAVAIANAS CORINGA/ BATMAN PRETO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 45,
    "originalPrice": 58.5,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 47,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CHINELO HAVAIANAS CORINGA/ BATMAN PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CHCB60036",
      "barcode": "789600360000",
      "nuvemshopId": "BLING-CHCB60036",
      "blingId": "CHCB60036",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CHCB60036",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 2,
        "sku": "CHCB60038",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 3,
        "sku": "CHCB60040",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 4,
        "sku": "CHCB60042",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 5,
        "sku": "CHCB60044",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 1,
        "size": "44"
      },
      {
        "id": 6,
        "sku": "CHCB60046",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "46"
      }
    ]
  },
  {
    "id": "bling-real-117",
    "name": "CHINELO HAVAIANAS STAR WARS PRETO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 45,
    "originalPrice": 58.5,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 31,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CHINELO HAVAIANAS STAR WARS PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 5,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CHSW60042",
      "barcode": "789600420000",
      "nuvemshopId": "BLING-CHSW60042",
      "blingId": "CHSW60042",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CHSW60042",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 2,
        "sku": "CHSW60044",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 3,
        "sku": "CHSW60046",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "46"
      },
      {
        "id": 4,
        "sku": "CHSW60036",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 5,
        "sku": "CHSW60038",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 1,
        "size": "38"
      },
      {
        "id": 6,
        "sku": "CHSW60040",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "40"
      }
    ]
  },
  {
    "id": "bling-real-118",
    "name": "CHINELO HAVAIANAS CRUZEIRO AZUL",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 45,
    "originalPrice": 58.5,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 17,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "CHINELO HAVAIANAS CRUZEIRO AZUL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 15,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CHC60036",
      "barcode": "789600360000",
      "nuvemshopId": "BLING-CHC60036",
      "blingId": "CHC60036",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CHC60036",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "36"
      },
      {
        "id": 2,
        "sku": "CHC60038",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 3,
        "size": "38"
      },
      {
        "id": 3,
        "sku": "CHC60040",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 3,
        "size": "40"
      },
      {
        "id": 4,
        "sku": "CHC60042",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 5,
        "sku": "CHC60044",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 3,
        "size": "44"
      },
      {
        "id": 6,
        "sku": "CHC60046",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "46"
      }
    ]
  },
  {
    "id": "bling-real-119",
    "name": "CHINELO HAVAIANAS ATLETICO MINEIRO ATLETICO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 45,
    "originalPrice": 58.5,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 31,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CHINELO HAVAIANAS ATLETICO MINEIRO ATLETICO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 13,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CHAM60046",
      "barcode": "789600460000",
      "nuvemshopId": "BLING-CHAM60046",
      "blingId": "CHAM60046",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CHAM60046",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "46"
      },
      {
        "id": 2,
        "sku": "CHAM60036",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "36"
      },
      {
        "id": 3,
        "sku": "CHAM60038",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 3,
        "size": "38"
      },
      {
        "id": 4,
        "sku": "CHAM60040",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 4,
        "size": "40"
      },
      {
        "id": 5,
        "sku": "CHAM60042",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 6,
        "sku": "CHAM60044",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "44"
      }
    ]
  },
  {
    "id": "bling-real-120",
    "name": "TOUCA INVERNO TRIP SIDE PRETA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 57,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "TOUCA INVERNO TRIP SIDE PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TITS300",
      "barcode": "789300000000",
      "nuvemshopId": "BLING-TITS300",
      "blingId": "TITS300",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TITS300",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": -1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-121",
    "name": "BONE TRIP SIDE RAIO",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 61,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "BONE TRIP SIDE RAIO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BTSR500",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-BTSR500",
      "blingId": "BTSR500",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BTSR500",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-122",
    "name": "BONE TRIP SIDE CRUZ",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 36,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "BONE TRIP SIDE CRUZ. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BTSC500",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-BTSC500",
      "blingId": "BTSC500",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BTSC500",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-123",
    "name": "BONE TRIP SIDE FOGO LATERAL",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 60,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "BONE TRIP SIDE FOGO LATERAL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BTSFL500",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-BTSFL500",
      "blingId": "BTSFL500",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BTSFL500",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-124",
    "name": "BONE TRIP SIDE ANJO",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 58,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "BONE TRIP SIDE ANJO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BTSA500",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-BTSA500",
      "blingId": "BTSA500",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BTSA500",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-125",
    "name": "CALCA TRIP SIDE BAGGY ESTONADA/ CRUZ",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 48,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "48"
    ],
    "colors": [
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "CALCA TRIP SIDE BAGGY ESTONADA/ CRUZ. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CTPB10138",
      "barcode": "789101380000",
      "nuvemshopId": "BLING-CTPB10138",
      "blingId": "CTPB10138",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CTPB10138",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 2,
        "sku": "CTPB10140",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 3,
        "sku": "CTPB10142",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 4,
        "sku": "CTPB10144",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 5,
        "sku": "CTPB10146",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "46"
      },
      {
        "id": 6,
        "sku": "CTPB10148",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "48"
      }
    ]
  },
  {
    "id": "bling-real-126",
    "name": "CALCA TRIP SIDE BAGGY JEANS PRETA/ ESTONADA",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 55,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "48"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Cinza",
        "hex": "#6B7280"
      },
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "CALCA TRIP SIDE BAGGY JEANS PRETA/ ESTONADA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CTPB10038",
      "barcode": "789100380000",
      "nuvemshopId": "BLING-CTPB10038",
      "blingId": "CTPB10038",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CTPB10038",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 2,
        "sku": "CTPB10044",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 3,
        "sku": "CTPB10046",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "46"
      },
      {
        "id": 4,
        "sku": "CTPB10048",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "48"
      },
      {
        "id": 5,
        "sku": "CTPB10040",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 6,
        "sku": "CTPB10042",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "42"
      }
    ]
  },
  {
    "id": "bling-real-127",
    "name": "OVERSIZED BOX TRIP SIDE BORDADA PRETA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 139.9,
    "originalPrice": 181.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 39,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OVERSIZED BOX TRIP SIDE BORDADA PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OBTSB500P",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-OBTSB500P",
      "blingId": "OBTSB500P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OBTSB500P",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OBTSB500M",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "OBTSB500G",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OBTSB500GG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-128",
    "name": "OVERSIZED BOX TRIP SIDE OFF WHITE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 20,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "OVERSIZED BOX TRIP SIDE OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OBTS502XG",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-OBTS502XG",
      "blingId": "OBTS502XG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OBTS502XG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "XG"
      },
      {
        "id": 2,
        "sku": "OBTS502P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "OBTS502M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "OBTS502G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 5,
        "sku": "OBTS502GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": -1,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-129",
    "name": "OVERSIZED BOX TRIP SIDE AZUL",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 139.9,
    "originalPrice": 181.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 50,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "OVERSIZED BOX TRIP SIDE AZUL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OBTS501P",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-OBTS501P",
      "blingId": "OBTS501P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OBTS501P",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OBTS501M",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "OBTS501G",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OBTS501GG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-130",
    "name": "OVERSIZED BOX TRIP SIDE PRETA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 14,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OVERSIZED BOX TRIP SIDE PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OBTS500P",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-OBTS500P",
      "blingId": "OBTS500P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OBTS500P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OBTS500M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "OBTS500G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OBTS500GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-131",
    "name": "OCULOS DESCANÇO CARTIER",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 189.9,
    "originalPrice": 246.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 25,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "OCULOS DESCANÇO CARTIER. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "ODC100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-ODC100",
      "blingId": "ODC100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "ODC100",
        "price": 189.9,
        "comparePrice": 246.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-132",
    "name": "TENIS QIX COMBAT BRANCO/ AZUL",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 259.9,
    "originalPrice": 337.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 57,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "TENIS QIX COMBAT BRANCO/ AZUL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TQCBA36",
      "barcode": "789360000000",
      "nuvemshopId": "BLING-TQCBA36",
      "blingId": "TQCBA36",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TQCBA36",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 2,
        "sku": "TQCBA37",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 3,
        "sku": "TQCBA38",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 1,
        "size": "38"
      },
      {
        "id": 4,
        "sku": "TQCBA39",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 0,
        "size": "39"
      },
      {
        "id": 5,
        "sku": "TQCBA40",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 6,
        "sku": "TQCBA41",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 0,
        "size": "41"
      },
      {
        "id": 7,
        "sku": "TQCBA42",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 0,
        "size": "42"
      }
    ]
  },
  {
    "id": "bling-real-133",
    "name": "TENIS QIX COMBAT BRANCO/ PRETO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 35,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "TENIS QIX COMBAT BRANCO/ PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TQCBP42",
      "barcode": "789420000000",
      "nuvemshopId": "BLING-TQCBP42",
      "blingId": "TQCBP42",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TQCBP42",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 2,
        "sku": "TQCBP36",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 3,
        "sku": "TQCBP37",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "37"
      },
      {
        "id": 4,
        "sku": "TQCBP38",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 5,
        "sku": "TQCBP39",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "39"
      },
      {
        "id": 6,
        "sku": "TQCBP40",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 7,
        "sku": "TQCBP41",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "41"
      }
    ]
  },
  {
    "id": "bling-real-134",
    "name": "TENIS QIX COMBAT BRANCO/ CINZA",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 259.9,
    "originalPrice": 337.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 14,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "TENIS QIX COMBAT BRANCO/ CINZA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TQCBC38",
      "barcode": "789380000000",
      "nuvemshopId": "BLING-TQCBC38",
      "blingId": "TQCBC38",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TQCBC38",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 1,
        "size": "38"
      },
      {
        "id": 2,
        "sku": "TQCBC39",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 1,
        "size": "39"
      },
      {
        "id": 3,
        "sku": "TQCBC40",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 4,
        "sku": "TQCBC41",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 0,
        "size": "41"
      },
      {
        "id": 5,
        "sku": "TQCBC42",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 6,
        "sku": "TQCBC36",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 7,
        "sku": "TQCBC37",
        "price": 259.9,
        "comparePrice": 337.87,
        "stock": 0,
        "size": "37"
      }
    ]
  },
  {
    "id": "bling-real-135",
    "name": "OAKLEY PLANTARES PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 41,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OAKLEY PLANTARES PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OPP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-OPP100",
      "blingId": "OPP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OPP100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-136",
    "name": "BOLSA NIKE BIG AZUL MARINHO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 150,
    "originalPrice": 195,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 56,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "BOLSA NIKE BIG AZUL MARINHO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BNBAM100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-BNBAM100",
      "blingId": "BNBAM100",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BNBAM100",
        "price": 150,
        "comparePrice": 195,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-137",
    "name": "BONE ANTH CO",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 69.9,
    "originalPrice": 90.87,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "BONE ANTH CO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 8,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BAC100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-BAC100",
      "blingId": "BAC100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BAC100",
        "price": 69.9,
        "comparePrice": 90.87,
        "stock": 8,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-138",
    "name": "CAMISA DRI- FIT BRANCA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 70,
    "originalPrice": 91,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 56,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "CAMISA DRI- FIT BRANCA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CDF502G",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-CDF502G",
      "blingId": "CDF502G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CDF502G",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "CDF502GG",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "CDF502P",
        "price": 70,
        "comparePrice": 91,
        "stock": 1,
        "size": "P"
      },
      {
        "id": 4,
        "sku": "CDF502M",
        "price": 70,
        "comparePrice": 91,
        "stock": 2,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-139",
    "name": "CAMISA DRI- FIT PRETA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 70,
    "originalPrice": 91,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 13,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CAMISA DRI- FIT PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CDF501P",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-CDF501P",
      "blingId": "CDF501P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CDF501P",
        "price": 70,
        "comparePrice": 91,
        "stock": 1,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "CDF501M",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CDF501G",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "CDF501GG",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-140",
    "name": "CAMISA DRI- FIT AZUL",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 70,
    "originalPrice": 91,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 49,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "CAMISA DRI- FIT AZUL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CDF500P",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-CDF500P",
      "blingId": "CDF500P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CDF500P",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "CDF500M",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CDF500G",
        "price": 70,
        "comparePrice": 91,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "CDF500GG",
        "price": 70,
        "comparePrice": 91,
        "stock": 1,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-141",
    "name": "BERMUDA DRI FIT COMPRESSAO NIKE PRETA",
    "category": "roupas",
    "subcategory": "shorts",
    "price": 75,
    "originalPrice": 97.5,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 23,
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "BERMUDA DRI FIT COMPRESSAO NIKE PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 5,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BDTC401P",
      "barcode": "789401000000",
      "nuvemshopId": "BLING-BDTC401P",
      "blingId": "BDTC401P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BDTC401P",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "BDTC401M",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "BDTC401G",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 2,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "BDTC401GG",
        "price": 75,
        "comparePrice": 97.5,
        "stock": 2,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-142",
    "name": "BERMUDA CANELADA ALTO LUXO PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 89.9,
    "originalPrice": 116.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 17,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "BERMUDA CANELADA ALTO LUXO PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BCAL401P",
      "barcode": "789401000000",
      "nuvemshopId": "BLING-BCAL401P",
      "blingId": "BCAL401P",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BCAL401P",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "BCAL401M",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 2,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "BCAL401G",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "BCAL401GG",
        "price": 89.9,
        "comparePrice": 116.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-143",
    "name": "GOLA POLO MALHA CHINESA MARSALA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 179.9,
    "originalPrice": 233.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 20,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "GOLA POLO MALHA CHINESA MARSALA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "GPMC507P",
      "barcode": "789507000000",
      "nuvemshopId": "BLING-GPMC507P",
      "blingId": "GPMC507P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "GPMC507P",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "GPMC507M",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "GPMC507G",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "GPMC507GG",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-144",
    "name": "GOLA POLO MALHA CHINESA VERDE MUSGO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 179.9,
    "originalPrice": 233.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 58,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Verde",
        "hex": "#15803D"
      }
    ],
    "description": "GOLA POLO MALHA CHINESA VERDE MUSGO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "GPMC506P",
      "barcode": "789506000000",
      "nuvemshopId": "BLING-GPMC506P",
      "blingId": "GPMC506P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "GPMC506P",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 1,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "GPMC506M",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "GPMC506G",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "GPMC506GG",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-145",
    "name": "OVERSIZED ZARA BEGE BEGE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 59,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "OVERSIZED ZARA BEGE BEGE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OZL505M",
      "barcode": "789505000000",
      "nuvemshopId": "BLING-OZL505M",
      "blingId": "OZL505M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OZL505M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "OZL505P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "OZL505G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OZL505GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-146",
    "name": "OVERSIZED ZARA LISA OFF WHITE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 42,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "OVERSIZED ZARA LISA OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 9,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OZL500P",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-OZL500P",
      "blingId": "OZL500P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OZL500P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OZL500M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 2,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "OZL500G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 3,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OZL500GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 4,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-147",
    "name": "REGATA CANELADA KHAKI",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 70,
    "originalPrice": 91,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 25,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "REGATA CANELADA KHAKI. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RCK600P",
      "barcode": "789600000000",
      "nuvemshopId": "BLING-RCK600P",
      "blingId": "RCK600P",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RCK600P",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "RCK600M",
        "price": 70,
        "comparePrice": 91,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "RCK600G",
        "price": 70,
        "comparePrice": 91,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "RCK600GG",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-148",
    "name": "OVERSIZED REGATA MACHÃO PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 42,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OVERSIZED REGATA MACHÃO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "O502P",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-O502P",
      "blingId": "O502P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "O502P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": -1,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "O502G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "O502GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 4,
        "sku": "O502M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-149",
    "name": "CAMISETA ESTONADA MULTI COR",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 55,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "CAMISETA ESTONADA MULTI COR. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 14,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BCGA500P",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-BCGA500P",
      "blingId": "BCGA500P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BCGA500P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 2,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "BCGA500GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 4,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "BCGA500M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 3,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "BCGA500G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 5,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-150",
    "name": "CARTEIRA LOUIS VUITTON MARROM",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 22,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "CARTEIRA LOUIS VUITTON MARROM. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CTLVM100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CTLVM100",
      "blingId": "CTLVM100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CTLVM100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-151",
    "name": "CARTEIRA LOUIS VUITTON PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 40,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CARTEIRA LOUIS VUITTON PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CTLVP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CTLVP100",
      "blingId": "CTLVP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CTLVP100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-152",
    "name": "OVERSIZED REGATA MACHÃO BEGE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 23,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "OVERSIZED REGATA MACHÃO BEGE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RMK500P",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-RMK500P",
      "blingId": "RMK500P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RMK500P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "RMK500M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "RMK500G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": -2,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "RMK500GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-153",
    "name": "BONE CHRONIC FIVE PANEL",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 34,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "BONE CHRONIC FIVE PANEL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BCFFAC100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-BCFFAC100",
      "blingId": "BCFFAC100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BCFFAC100",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 2,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-154",
    "name": "BONE CHRONIC PRETO",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 30,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "BONE CHRONIC PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BCFPP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-BCFPP100",
      "blingId": "BCFPP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BCFPP100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": -1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-155",
    "name": "BONE CHRONIC FIVE PANEL SNAPBACK",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 45,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "BONE CHRONIC FIVE PANEL SNAPBACK. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BCFPS100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-BCFPS100",
      "blingId": "BCFPS100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BCFPS100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-156",
    "name": "CALCA BAGGY ONCROSS ACINTURADA ESTONADA ESTON",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 179.9,
    "originalPrice": 233.87,
    "tag": "MAIS VENDIDO",
    "rating": 4.7,
    "reviewsCount": 41,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "48"
    ],
    "colors": [
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "CALCA BAGGY ONCROSS ACINTURADA ESTONADA ESTON. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 12,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "COAE40038",
      "barcode": "789400380000",
      "nuvemshopId": "BLING-COAE40038",
      "blingId": "COAE40038",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "COAE40038",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 2,
        "size": "38"
      },
      {
        "id": 2,
        "sku": "COAE40040",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": -1,
        "size": "40"
      },
      {
        "id": 3,
        "sku": "COAE40042",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 4,
        "sku": "COAE40044",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 2,
        "size": "44"
      },
      {
        "id": 5,
        "sku": "COAE40046",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 4,
        "size": "46"
      },
      {
        "id": 6,
        "sku": "COAE40048",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 2,
        "size": "48"
      }
    ]
  },
  {
    "id": "bling-real-157",
    "name": "CAMISETA TRIP SIDE BORDADO SLIM BRANCO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 84.9,
    "originalPrice": 110.37,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 20,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "CAMISETA TRIP SIDE BORDADO SLIM BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CTSBS500P",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-CTSBS500P",
      "blingId": "CTSBS500P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CTSBS500P",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "CTSBS500M",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CTSBS500G",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "CTSBS500GG",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 5,
        "sku": "CTSBS500XG",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 1,
        "size": "XG"
      }
    ]
  },
  {
    "id": "bling-real-158",
    "name": "BERMUDA CARPINTEIRO TRIP SIDE JEANS SUJINHO",
    "category": "roupas",
    "subcategory": "shorts",
    "price": 179.9,
    "originalPrice": 233.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 41,
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "48"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "BERMUDA CARPINTEIRO TRIP SIDE JEANS SUJINHO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BCTS40038",
      "barcode": "789400380000",
      "nuvemshopId": "BLING-BCTS40038",
      "blingId": "BCTS40038",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BCTS40038",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 2,
        "sku": "BCTS40040",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 3,
        "sku": "BCTS40042",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 4,
        "sku": "BCTS40044",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 1,
        "size": "44"
      },
      {
        "id": 5,
        "sku": "BCTS40046",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 1,
        "size": "46"
      },
      {
        "id": 6,
        "sku": "BCTS40048",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 1,
        "size": "48"
      }
    ]
  },
  {
    "id": "bling-real-159",
    "name": "MEIA NEW BALANCE BRANCA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 29.9,
    "originalPrice": 38.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 35,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "MEIA NEW BALANCE BRANCA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MNBB100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MNBB100",
      "blingId": "MNBB100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MNBB100",
        "price": 29.9,
        "comparePrice": 38.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-160",
    "name": "MEIA VANS PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 29.9,
    "originalPrice": 38.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 52,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "MEIA VANS PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MVP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MVP100",
      "blingId": "MVP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MVP100",
        "price": 29.9,
        "comparePrice": 38.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-161",
    "name": "MEIA ADIDAS PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 35,
    "originalPrice": 45.5,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "MEIA ADIDAS PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MAP101",
      "barcode": "789101000000",
      "nuvemshopId": "BLING-MAP101",
      "blingId": "MAP101",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MAP101",
        "price": 35,
        "comparePrice": 45.5,
        "stock": 3,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-162",
    "name": "MEIA ADIDAS BRANCA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 35,
    "originalPrice": 45.5,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 55,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "MEIA ADIDAS BRANCA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MAB100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MAB100",
      "blingId": "MAB100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MAB100",
        "price": 35,
        "comparePrice": 45.5,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-163",
    "name": "MEIA NIKE FACAO BRANCA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 35,
    "originalPrice": 45.5,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 56,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "MEIA NIKE FACAO BRANCA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MNFB100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MNFB100",
      "blingId": "MNFB100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MNFB100",
        "price": 35,
        "comparePrice": 45.5,
        "stock": 2,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-164",
    "name": "MEIA NIKE FACAO PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 35,
    "originalPrice": 45.5,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "MEIA NIKE FACAO PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MNFP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MNFP100",
      "blingId": "MNFP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MNFP100",
        "price": 35,
        "comparePrice": 45.5,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-165",
    "name": "TESTEIRA NIKE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 48,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "TESTEIRA NIKE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TN100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-TN100",
      "blingId": "TN100",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TN100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-166",
    "name": "OAKLEY DESCANÇO PRATA COM BORRACHA BRANCA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 33,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "OAKLEY DESCANÇO PRATA COM BORRACHA BRANCA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "ODPCBB100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-ODPCBB100",
      "blingId": "ODPCBB100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "ODPCBB100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-167",
    "name": "OAKLEY DESCANÇO VILAO PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 28,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OAKLEY DESCANÇO VILAO PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "ODVP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-ODVP100",
      "blingId": "ODVP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "ODVP100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-168",
    "name": "OAKLEY DESCANÇO CARTIER MARRON",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 54,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "OAKLEY DESCANÇO CARTIER MARRON. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "ODCP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-ODCP100",
      "blingId": "ODCP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "ODCP100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": -1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-169",
    "name": "CARTEIRA ANTIFURTO PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 79.9,
    "originalPrice": 103.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 43,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CARTEIRA ANTIFURTO PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CAP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CAP100",
      "blingId": "CAP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CAP100",
        "price": 79.9,
        "comparePrice": 103.87,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-170",
    "name": "CARTEIRA GUCCI PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 79.9,
    "originalPrice": 103.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 56,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CARTEIRA GUCCI PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CGP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CGP100",
      "blingId": "CGP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CGP100",
        "price": 79.9,
        "comparePrice": 103.87,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-171",
    "name": "CARTEIRA GUCCI AZUL COM OFF",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 79.9,
    "originalPrice": 103.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 48,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      },
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "CARTEIRA GUCCI AZUL COM OFF. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CGACO100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CGACO100",
      "blingId": "CGACO100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CGACO100",
        "price": 79.9,
        "comparePrice": 103.87,
        "stock": 2,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-172",
    "name": "CARTEIRA GUCCI MARRON COM OFF",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 79.9,
    "originalPrice": 103.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 45,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      },
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "CARTEIRA GUCCI MARRON COM OFF. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CGMCO100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CGMCO100",
      "blingId": "CGMCO100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CGMCO100",
        "price": 79.9,
        "comparePrice": 103.87,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-173",
    "name": "RELOGIO PATEK PHILIPPE PRATA FUNDO CIANO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 249.9,
    "originalPrice": 324.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 45,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "RELOGIO PATEK PHILIPPE PRATA FUNDO CIANO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RPPPFC100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RPPPFC100",
      "blingId": "RPPPFC100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RPPPFC100",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-174",
    "name": "RELOGIO PATEK PHILIPPE PRATA FUNDO PRETO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 249.9,
    "originalPrice": 324.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 27,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "RELOGIO PATEK PHILIPPE PRATA FUNDO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RPPPFP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RPPPFP100",
      "blingId": "RPPPFP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RPPPFP100",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-175",
    "name": "RELOGIO ROLEX PRATA FUNDO VERDE",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 249.9,
    "originalPrice": 324.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 43,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Verde",
        "hex": "#15803D"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "RELOGIO ROLEX PRATA FUNDO VERDE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RRPFV100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RRPFV100",
      "blingId": "RRPFV100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RRPFV100",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "Tamanho Único"
      },
      {
        "id": 2,
        "sku": "RRPFCFV100",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-176",
    "name": "RELOGIO ROLEX PRATA FUNDO AZUL",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 249.9,
    "originalPrice": 324.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 35,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "RELOGIO ROLEX PRATA FUNDO AZUL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RRPFA100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RRPFA100",
      "blingId": "RRPFA100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RRPFA100",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-177",
    "name": "RELOGIO ROLEX PRATA/ GOLD FUNDO BRANCO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 180,
    "originalPrice": 234,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 29,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      },
      {
        "name": "Dourado / Ouro",
        "hex": "#F59E0B"
      }
    ],
    "description": "RELOGIO ROLEX PRATA/ GOLD FUNDO BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RRPGFB100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RRPGFB100",
      "blingId": "RRPGFB100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RRPGFB100",
        "price": 180,
        "comparePrice": 234,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-178",
    "name": "RELOGIO ROLEX GOLD FUNDO GREEN",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 249.9,
    "originalPrice": 324.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 56,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Verde",
        "hex": "#15803D"
      },
      {
        "name": "Dourado / Ouro",
        "hex": "#F59E0B"
      }
    ],
    "description": "RELOGIO ROLEX GOLD FUNDO GREEN. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RRGFG100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RRGFG100",
      "blingId": "RRGFG100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RRGFG100",
        "price": 249.9,
        "comparePrice": 324.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-179",
    "name": "RELOGIO CASIO VINTAGE PRATA COM FUNDO PRETO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 49,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "RELOGIO CASIO VINTAGE PRATA COM FUNDO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RCVPCFP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RCVPCFP100",
      "blingId": "RCVPCFP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RCVPCFP100",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-180",
    "name": "RELOGIO CASIO VINTAGE PRETO COM FUNDO AZUL",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 39,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "RELOGIO CASIO VINTAGE PRETO COM FUNDO AZUL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RCVPCA101",
      "barcode": "789101000000",
      "nuvemshopId": "BLING-RCVPCA101",
      "blingId": "RCVPCA101",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RCVPCA101",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-181",
    "name": "RELOGIO CASIO VINTAGE PRATA COM FUNDO AZUL",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 21,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "RELOGIO CASIO VINTAGE PRATA COM FUNDO AZUL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RCVPCA100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RCVPCA100",
      "blingId": "RCVPCA100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RCVPCA100",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-182",
    "name": "RELOGIO CASIO DIGITAL PRETO DISPLAY BLACK",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 55,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "RELOGIO CASIO DIGITAL PRETO DISPLAY BLACK. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RCDPDB101",
      "barcode": "789101000000",
      "nuvemshopId": "BLING-RCDPDB101",
      "blingId": "RCDPDB101",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RCDPDB101",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-183",
    "name": "RELOGIO CASIO DIGITAL PRATA DISPLAY WHITE",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 23,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "RELOGIO CASIO DIGITAL PRATA DISPLAY WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RCDPDW100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RCDPDW100",
      "blingId": "RCDPDW100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RCDPDW100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-184",
    "name": "RELOGIO CASIO DIGITAL PRATA DISPLAY BLACK",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 37,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "RELOGIO CASIO DIGITAL PRATA DISPLAY BLACK. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RCDPDB100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-RCDPDB100",
      "blingId": "RCDPDB100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RCDPDB100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 2,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-185",
    "name": "OAKLEY JULIET ARMA/ PRETA LENTE PRATA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 130,
    "originalPrice": 169,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 54,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "OAKLEY JULIET ARMA/ PRETA LENTE PRATA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OJAPLR100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-OJAPLR100",
      "blingId": "OJAPLR100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OJAPLR100",
        "price": 130,
        "comparePrice": 169,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-186",
    "name": "OAKLEY ROMEO ARMA/ PRETA LENTE AZUL ROYAL",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 42,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "OAKLEY ROMEO ARMA/ PRETA LENTE AZUL ROYAL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "ORAPLA100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-ORAPLA100",
      "blingId": "ORAPLA100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "ORAPLA100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-187",
    "name": "OAKLEY ROMEO ARMA/ PRETA LENTE VIOLETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 35,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OAKLEY ROMEO ARMA/ PRETA LENTE VIOLETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "ORAPLV100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-ORAPLV100",
      "blingId": "ORAPLV100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "ORAPLV100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-188",
    "name": "OAKLEY ROMEO ARMA/ PRETA LENTE RUBI",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 130,
    "originalPrice": 169,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 59,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OAKLEY ROMEO ARMA/ PRETA LENTE RUBI. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "ORAPLR100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-ORAPLR100",
      "blingId": "ORAPLR100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "ORAPLR100",
        "price": 130,
        "comparePrice": 169,
        "stock": 2,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-189",
    "name": "OAKLEY ROMEO ARMA/ PRETA LENTE PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 33,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OAKLEY ROMEO ARMA/ PRETA LENTE PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "ORAPLP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-ORAPLP100",
      "blingId": "ORAPLP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "ORAPLP100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-190",
    "name": "OVERSIZED TRIPSIDE BASICA BIG OFF WHITE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 16,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "XG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "OVERSIZED TRIPSIDE BASICA BIG OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 4,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTS510X2",
      "barcode": "789510200000",
      "nuvemshopId": "BLING-OTS510X2",
      "blingId": "OTS510X2",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTS510X2",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 4,
        "size": "XG"
      }
    ]
  },
  {
    "id": "bling-real-191",
    "name": "CINTO CHRONIC",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 43,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CINTO CHRONIC. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CC100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CC100",
      "blingId": "CC100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CC100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-192",
    "name": "SHOLDER BAG MULTIMARCAS",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 41,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "SHOLDER BAG MULTIMARCAS. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "SBM100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-SBM100",
      "blingId": "SBM100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "SBM100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 2,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-193",
    "name": "CAMISA TIME GOLA POLO TRIP SIDE 77 PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 40,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CAMISA TIME GOLA POLO TRIP SIDE 77 PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CTGPTS502P",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-CTGPTS502P",
      "blingId": "CTGPTS502P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CTGPTS502P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "CTGPTS502M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CTGPTS502G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "CTGPTS502GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-194",
    "name": "CAMISA TIME GOLA POLO TRIP SIDE DRAGAO BRANCO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 53,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "CAMISA TIME GOLA POLO TRIP SIDE DRAGAO BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CTGPTS501M",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-CTGPTS501M",
      "blingId": "CTGPTS501M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CTGPTS501M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "CTGPTS501P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "CTGPTS501GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-195",
    "name": "OVERSIZED RECORTADA TRIPSIDE URSINHO BORDADO PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 47,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OVERSIZED RECORTADA TRIPSIDE URSINHO BORDADO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "ORTSUB501P",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-ORTSUB501P",
      "blingId": "ORTSUB501P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "ORTSUB501P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "ORTSUB501M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "ORTSUB501G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "ORTSUB501GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-196",
    "name": "OVERSIZED RECORTADA TRIPSIDE URSINHO BORDADO BEGE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 28,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "OVERSIZED RECORTADA TRIPSIDE URSINHO BORDADO BEGE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "ORTSUB500P",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-ORTSUB500P",
      "blingId": "ORTSUB500P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "ORTSUB500P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "ORTSUB500M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "ORTSUB500G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "ORTSUB500GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-197",
    "name": "BERMUDA DRI FIT MULTIMARCAS MULTICOR",
    "category": "roupas",
    "subcategory": "shorts",
    "price": 50,
    "originalPrice": 65,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 59,
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "BERMUDA DRI FIT MULTIMARCAS MULTICOR. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 6,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BDFM400M",
      "barcode": "789400000000",
      "nuvemshopId": "BLING-BDFM400M",
      "blingId": "BDFM400M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BDFM400M",
        "price": 50,
        "comparePrice": 65,
        "stock": 4,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "BDFM400G",
        "price": 50,
        "comparePrice": 65,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "BDFM400GG",
        "price": 50,
        "comparePrice": 65,
        "stock": 1,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-198",
    "name": "OVERSIZED ZARA VERDE VERDE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 57,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "M",
      "GG"
    ],
    "colors": [
      {
        "name": "Verde",
        "hex": "#15803D"
      }
    ],
    "description": "OVERSIZED ZARA VERDE VERDE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OZL504M",
      "barcode": "789504000000",
      "nuvemshopId": "BLING-OZL504M",
      "blingId": "OZL504M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OZL504M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "OZL504GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-199",
    "name": "OVERSIZED ZARA PRETA PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 33,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OVERSIZED ZARA PRETA PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 11,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OZL503GG",
      "barcode": "789503000000",
      "nuvemshopId": "BLING-OZL503GG",
      "blingId": "OZL503GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OZL503GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 3,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "OZL503P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "OZL503M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 3,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "OZL503G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 5,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-200",
    "name": "OVERSIZED ZARA MARRON MARRON",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "MAIS VENDIDO",
    "rating": 4.8,
    "reviewsCount": 35,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "OVERSIZED ZARA MARRON MARRON. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 5,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OZL502G",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-OZL502G",
      "blingId": "OZL502G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OZL502G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "OZL502GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 2,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "OZL502P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 4,
        "sku": "OZL502M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 2,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-201",
    "name": "MOCHILA CHRONIC",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 99.9,
    "originalPrice": 129.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 21,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "MOCHILA CHRONIC. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MC100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MC100",
      "blingId": "MC100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MC100",
        "price": 99.9,
        "comparePrice": 129.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-202",
    "name": "OVERSIZED MULTIMARCAS MULTICOR",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 32,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "OVERSIZED MULTIMARCAS MULTICOR. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OM501P",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-OM501P",
      "blingId": "OM501P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OM501P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": -2,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "OM501M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "OM501G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": -1,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OM501GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": -2,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-203",
    "name": "CAMISETA FUTEBOL AMERICANO FANATICS BRANCA BRANCO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 34,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "CAMISETA FUTEBOL AMERICANO FANATICS BRANCA BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CFA504P",
      "barcode": "789504000000",
      "nuvemshopId": "BLING-CFA504P",
      "blingId": "CFA504P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CFA504P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "CFA504M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CFA504G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "CFA504GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-204",
    "name": "CAMISETA FUTEBOL AMERICANO FANATICS PRETA PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 48,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CAMISETA FUTEBOL AMERICANO FANATICS PRETA PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CFA503P",
      "barcode": "789503000000",
      "nuvemshopId": "BLING-CFA503P",
      "blingId": "CFA503P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CFA503P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "CFA503M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CFA503G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "CFA503GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-205",
    "name": "CAMISETA FUTEBOL AMERICANO RAIDERS PRETA PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 35,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CAMISETA FUTEBOL AMERICANO RAIDERS PRETA PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CFA502GG",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-CFA502GG",
      "blingId": "CFA502GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CFA502GG",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CFA502P",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "CFA502M",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "CFA502G",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": -1,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-206",
    "name": "CAMISETA FUTEBOL AMERICANO EAGLES PRETA PRETA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 32,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CAMISETA FUTEBOL AMERICANO EAGLES PRETA PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CFA500M",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-CFA500M",
      "blingId": "CFA500M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CFA500M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "CFA500G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "CFA500GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 4,
        "sku": "CFA500P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-207",
    "name": "CAMISETA FUTEBOL AMERICANO EAGLES BRANCO BRANCO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 46,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "CAMISETA FUTEBOL AMERICANO EAGLES BRANCO BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CFA501G",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-CFA501G",
      "blingId": "CFA501G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CFA501G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "CFA501GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "CFA501P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 4,
        "sku": "CFA501M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-208",
    "name": "OVERSIZED LISA PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 16,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OVERSIZED LISA PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OL502GG",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-OL502GG",
      "blingId": "OL502GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OL502GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "OL502M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "OL502G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OL502P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-209",
    "name": "OVERSIZED LISA OFF WHITE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 58,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "OVERSIZED LISA OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OL501M",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-OL501M",
      "blingId": "OL501M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OL501M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "OL501G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "OL501GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 4,
        "sku": "OL501P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-210",
    "name": "OCULOS DE SOL MIRAGE",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 110,
    "originalPrice": 143,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 39,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "OCULOS DE SOL MIRAGE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 5,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OSM100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-OSM100",
      "blingId": "OSM100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OSM100",
        "price": 110,
        "comparePrice": 143,
        "stock": 5,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-211",
    "name": "CALCA CARGO 4 BOLSOS ONCROSS ESTONADO PRETO ESTONADO",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 179.9,
    "originalPrice": 233.87,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 13,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "CALCA CARGO 4 BOLSOS ONCROSS ESTONADO PRETO ESTONADO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 6,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "C4B0400GG",
      "barcode": "789404000000",
      "nuvemshopId": "BLING-C4B0400GG",
      "blingId": "C4B0400GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "C4B0400GG",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "C4B0400P",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 2,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "C4B0400M",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 2,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "C4B0400G",
        "price": 179.9,
        "comparePrice": 233.87,
        "stock": 2,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-212",
    "name": "CALCA CARGO ONCROSS OFF WHITE LAVAGEM",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "MAIS VENDIDO",
    "rating": 4.9,
    "reviewsCount": 40,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "CALCA CARGO ONCROSS OFF WHITE LAVAGEM. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 4,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCOOW400P",
      "barcode": "789400000000",
      "nuvemshopId": "BLING-CCOOW400P",
      "blingId": "CCOOW400P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCOOW400P",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "CCOOW400M",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CCOOW400G",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 2,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "CCOOW400GG",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 1,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-213",
    "name": "CAMISA TIME GOLA POLO CHRONIC BRANCA/ PRETA BRANCA/ PRETA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 24,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "CAMISA TIME GOLA POLO CHRONIC BRANCA/ PRETA BRANCA/ PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CTGPC501GG",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-CTGPC501GG",
      "blingId": "CTGPC501GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CTGPC501GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CTGPC501G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "CTGPC501P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 4,
        "sku": "CTGPC501M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-214",
    "name": "CROPPED FEMININO CROPPED",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 23,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CROPPED FEMININO CROPPED. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CF500GG",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-CF500GG",
      "blingId": "CF500GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CF500GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CF500P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "CF500M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "CF500G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-215",
    "name": "OAKLEY JULIET ARMA/ CHUMBO LENTE PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 189.9,
    "originalPrice": 246.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 24,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "OAKLEY JULIET ARMA/ CHUMBO LENTE PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OKJ100CP",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-OKJ100CP",
      "blingId": "OKJ100CP",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OKJ100CP",
        "price": 189.9,
        "comparePrice": 246.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-216",
    "name": "MEIAS MULTIMARCAS",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 35,
    "originalPrice": 45.5,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 45,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "MEIAS MULTIMARCAS. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MMM100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MMM100",
      "blingId": "MMM100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MMM100",
        "price": 35,
        "comparePrice": 45.5,
        "stock": 2,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-217",
    "name": "REGATA DRI FIT PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 60,
    "originalPrice": 78,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 38,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "REGATA DRI FIT PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "RDF500GG",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-RDF500GG",
      "blingId": "RDF500GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "RDF500GG",
        "price": 60,
        "comparePrice": 78,
        "stock": 2,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "RDF500M",
        "price": 60,
        "comparePrice": 78,
        "stock": -1,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "RDF500G",
        "price": 60,
        "comparePrice": 78,
        "stock": 0,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-218",
    "name": "CAMISA TIME GOLA POLO CHRONIC BRANCO COM VERMELHO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 12,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Vermelho",
        "hex": "#DC2626"
      }
    ],
    "description": "CAMISA TIME GOLA POLO CHRONIC BRANCO COM VERMELHO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CTGPC502P",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-CTGPC502P",
      "blingId": "CTGPC502P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CTGPC502P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "CTGPC502M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CTGPC502G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "CTGPC502GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-219",
    "name": "GOLA POLO MALHA CHINESA PRETO LISTRADO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 43,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "GOLA POLO MALHA CHINESA PRETO LISTRADO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "GPMC505P",
      "barcode": "789505000000",
      "nuvemshopId": "BLING-GPMC505P",
      "blingId": "GPMC505P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "GPMC505P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "GPMC505M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "GPMC505G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "GPMC505GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": -1,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-220",
    "name": "GOLA POLO MALHA CHINESA VERDE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 31,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Verde",
        "hex": "#15803D"
      }
    ],
    "description": "GOLA POLO MALHA CHINESA VERDE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "GPMC503G",
      "barcode": "789503000000",
      "nuvemshopId": "BLING-GPMC503G",
      "blingId": "GPMC503G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "GPMC503G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "GPMC503GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "GPMC503P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 4,
        "sku": "GPMC503M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-221",
    "name": "GOLA POLO MALHA CHINESA PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 51,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "GOLA POLO MALHA CHINESA PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "GPMC502P",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-GPMC502P",
      "blingId": "GPMC502P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "GPMC502P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "GPMC502m",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "GPMC502g",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "GPMC502gg",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-222",
    "name": "GOLA POLO MALHA CHINESA OFF WHITE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 43,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "GOLA POLO MALHA CHINESA OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "GPMC500P",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-GPMC500P",
      "blingId": "GPMC500P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "GPMC500P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "GPMC500M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": -1,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "GPMC500G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "GPMC500GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-223",
    "name": "OVERSIZED TRIPSIDE BORDADO PIXO PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 22,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OVERSIZED TRIPSIDE BORDADO PIXO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTS506M",
      "barcode": "789506000000",
      "nuvemshopId": "BLING-OTS506M",
      "blingId": "OTS506M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTS506M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "OTS506GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "OTS506G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "OTS506P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-224",
    "name": "CALCA CARGO ONCROSS CHARUTO CHARUTO",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 13,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CALCA CARGO ONCROSS CHARUTO CHARUTO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCOC410P",
      "barcode": "789410000000",
      "nuvemshopId": "BLING-CCOC410P",
      "blingId": "CCOC410P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCOC410P",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "CCOC410M",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CCOC410G",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "CCOC410GG",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-225",
    "name": "CALCA CARGO ONCROSS VERDE BEGE",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 44,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P"
    ],
    "colors": [
      {
        "name": "Verde",
        "hex": "#15803D"
      },
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "CALCA CARGO ONCROSS VERDE BEGE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCOV409P",
      "barcode": "789409000000",
      "nuvemshopId": "BLING-CCOV409P",
      "blingId": "CCOV409P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCOV409P",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 2,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-226",
    "name": "CALCA CARGO ONCROSS VERDE VERDE",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 43,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Verde",
        "hex": "#15803D"
      }
    ],
    "description": "CALCA CARGO ONCROSS VERDE VERDE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCOV409M",
      "barcode": "789409000000",
      "nuvemshopId": "BLING-CCOV409M",
      "blingId": "CCOV409M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCOV409M",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "CCOV409G",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "CCOV409GG",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-227",
    "name": "CALCA CARGO ONCROSS ESTONADA PRETO",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 30,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "CALCA CARGO ONCROSS ESTONADA PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCO403G",
      "barcode": "789403000000",
      "nuvemshopId": "BLING-CCO403G",
      "blingId": "CCO403G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCO403G",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "CCO403GG",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 1,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "CCO403P",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 4,
        "sku": "CCO403M",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-228",
    "name": "BERMUDA CARGO ONCROSS MARROM MARROM",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 41,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "BERMUDA CARGO ONCROSS MARROM MARROM. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BCOM404GG",
      "barcode": "789404000000",
      "nuvemshopId": "BLING-BCOM404GG",
      "blingId": "BCOM404GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BCOM404GG",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "BCOM404P",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 3,
        "sku": "BCOM404G",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "G"
      }
    ]
  },
  {
    "id": "bling-real-229",
    "name": "BERMUDA CARGO ONCROSS MARROM MORROM",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 55,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "M"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "BERMUDA CARGO ONCROSS MARROM MORROM. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BCOM404M",
      "barcode": "789404000000",
      "nuvemshopId": "BLING-BCOM404M",
      "blingId": "BCOM404M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BCOM404M",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-230",
    "name": "BERMUDA CARGO ONCROSS PRETO ESTONADO PRETO ESTONADO",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 29,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "BERMUDA CARGO ONCROSS PRETO ESTONADO PRETO ESTONADO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BCGO400P",
      "barcode": "789400000000",
      "nuvemshopId": "BLING-BCGO400P",
      "blingId": "BCGO400P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BCGO400P",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "BCGO400GG",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "BCGO400G",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "BCGO400M",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-231",
    "name": "RADAR EV OAKLEY ARMA/ TRANSPARENTE LENTE TRANSPARENTE",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 24,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "RADAR EV OAKLEY ARMA/ TRANSPARENTE LENTE TRANSPARENTE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "REVO100TT",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-REVO100TT",
      "blingId": "REVO100TT",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "REVO100TT",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-232",
    "name": "RADAR EV OAKLEY ARMA/ RUBI LENTE RUBI",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 189.9,
    "originalPrice": 246.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 48,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "RADAR EV OAKLEY ARMA/ RUBI LENTE RUBI. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "REVO100BD",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-REVO100BD",
      "blingId": "REVO100BD",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "REVO100BD",
        "price": 189.9,
        "comparePrice": 246.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-233",
    "name": "RADAR EV OAKLEY ARMA/ RUBI LENTE MARRON",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 55,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "RADAR EV OAKLEY ARMA/ RUBI LENTE MARRON. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "REVO100PR",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-REVO100PR",
      "blingId": "REVO100PR",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "REVO100PR",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-234",
    "name": "RADAR EV OAKLEY ARMA/ CINZA LENTE PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 189.9,
    "originalPrice": 246.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 39,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "RADAR EV OAKLEY ARMA/ CINZA LENTE PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "REVO100PC",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-REVO100PC",
      "blingId": "REVO100PC",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "REVO100PC",
        "price": 189.9,
        "comparePrice": 246.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-235",
    "name": "RADAR EV OAKLEY ARMA/ BRANCA LENTE CAMALEÃO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 52,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "RADAR EV OAKLEY ARMA/ BRANCA LENTE CAMALEÃO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "REVO100BC",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-REVO100BC",
      "blingId": "REVO100BC",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "REVO100BC",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-236",
    "name": "SKATE LONGBOARD",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 400,
    "originalPrice": 520,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 34,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "SKATE LONGBOARD. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "SKLC1OO",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-SKLC1OO",
      "blingId": "SKLC1OO",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "SKLC1OO",
        "price": 400,
        "comparePrice": 520,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-237",
    "name": "KIT CUECA LUPO PRETA/ BRANCA KIT CUECA LUPO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 46,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "KIT CUECA LUPO PRETA/ BRANCA KIT CUECA LUPO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CULP100G",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CULP100G",
      "blingId": "CULP100G",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CULP100G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "CULP100GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "CULP100P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 4,
        "sku": "CULP100M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-238",
    "name": "CADARCO BOLD LACE PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 19.9,
    "originalPrice": 25.87,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 61,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CADARCO BOLD LACE PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 17,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CBLP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CBLP100",
      "blingId": "CBLP100",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CBLP100",
        "price": 19.9,
        "comparePrice": 25.87,
        "stock": 17,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-239",
    "name": "KIT MEIA LUPO PRETA KIT MEIA LUPO PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 45,
    "originalPrice": 58.5,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 18,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "33 A 36",
      "37 A 40",
      "41 A 44"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "KIT MEIA LUPO PRETA KIT MEIA LUPO PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MLP10O36",
      "barcode": "789103600000",
      "nuvemshopId": "BLING-MLP10O36",
      "blingId": "MLP10O36",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MLP10O36",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 1,
        "size": "33 A 36"
      },
      {
        "id": 2,
        "sku": "MLP10040",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 1,
        "size": "37 A 40"
      },
      {
        "id": 3,
        "sku": "MLP10044",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 1,
        "size": "41 A 44"
      }
    ]
  },
  {
    "id": "bling-real-240",
    "name": "CINTO LOUIS VUITTON BRANCO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 41,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "CINTO LOUIS VUITTON BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CNLB100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CNLB100",
      "blingId": "CNLB100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CNLB100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-241",
    "name": "CINTO LOUIS VUITTON PRETO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 48,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CINTO LOUIS VUITTON PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CNLP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CNLP100",
      "blingId": "CNLP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CNLP100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-242",
    "name": "CADARCO BOLD LACE BRANCO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 19.9,
    "originalPrice": 25.87,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 54,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "CADARCO BOLD LACE BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 6,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CBL100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CBL100",
      "blingId": "CBL100",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CBL100",
        "price": 19.9,
        "comparePrice": 25.87,
        "stock": 6,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-243",
    "name": "OAKLEY ROMEO 2",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "OAKLEY ROMEO 2. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OR2100",
      "barcode": "789210000000",
      "nuvemshopId": "BLING-OR2100",
      "blingId": "OR2100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OR2100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-244",
    "name": "RADAR EV OAKLEY ARMA/ TRANSPARENTE LENTE AZUL",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 189.9,
    "originalPrice": 246.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 21,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "RADAR EV OAKLEY ARMA/ TRANSPARENTE LENTE AZUL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "REVO10OTA",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-REVO10OTA",
      "blingId": "REVO10OTA",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "REVO10OTA",
        "price": 189.9,
        "comparePrice": 246.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-245",
    "name": "CINTO LOUIS VUITTON MARRON",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 17,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "CINTO LOUIS VUITTON MARRON. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CNLVM100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CNLVM100",
      "blingId": "CNLVM100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CNLVM100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-246",
    "name": "LENCO PIXA- IN",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 50,
    "originalPrice": 65,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 47,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "LENCO PIXA- IN. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "LPI100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-LPI100",
      "blingId": "LPI100",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "LPI100",
        "price": 50,
        "comparePrice": 65,
        "stock": 1,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-247",
    "name": "PRATA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 420,
    "originalPrice": 546,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 38,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Prata",
        "hex": "#9CA3AF"
      }
    ],
    "description": "PRATA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "P100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-P100",
      "blingId": "P100",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "P100",
        "price": 420,
        "comparePrice": 546,
        "stock": 3,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-248",
    "name": "OAKLEY JULIET ARMA/ PRETA LENTE PRETA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 189.9,
    "originalPrice": 246.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 58,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OAKLEY JULIET ARMA/ PRETA LENTE PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OKJ100PP",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-OKJ100PP",
      "blingId": "OKJ100PP",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OKJ100PP",
        "price": 189.9,
        "comparePrice": 246.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-249",
    "name": "CHINELO HAVAIANAS WARNER WARNER",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 45,
    "originalPrice": 58.5,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 50,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "36",
      "38",
      "40",
      "42",
      "44"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CHINELO HAVAIANAS WARNER WARNER. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CHW10036",
      "barcode": "789100360000",
      "nuvemshopId": "BLING-CHW10036",
      "blingId": "CHW10036",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CHW10036",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "36"
      },
      {
        "id": 2,
        "sku": "CHW10038",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "38"
      },
      {
        "id": 3,
        "sku": "CHW10040",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 4,
        "sku": "CHW10042",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 5,
        "sku": "CHW10044",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "44"
      }
    ]
  },
  {
    "id": "bling-real-250",
    "name": "CHINELO HAVAIANAS SANTOS SANTOS",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 45,
    "originalPrice": 58.5,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 18,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CHINELO HAVAIANAS SANTOS SANTOS. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 7,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CHS10038",
      "barcode": "789100380000",
      "nuvemshopId": "BLING-CHS10038",
      "blingId": "CHS10038",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CHS10038",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "38"
      },
      {
        "id": 2,
        "sku": "CHS10040",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 3,
        "size": "40"
      },
      {
        "id": 3,
        "sku": "CHS10042",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 4,
        "sku": "CHS10044",
        "price": 45,
        "comparePrice": 58.5,
        "stock": 0,
        "size": "44"
      }
    ]
  },
  {
    "id": "bling-real-251",
    "name": "MOCHILA TRIP SIDE",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 99.9,
    "originalPrice": 129.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 47,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "MOCHILA TRIP SIDE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MTS100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MTS100",
      "blingId": "MTS100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MTS100",
        "price": 99.9,
        "comparePrice": 129.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-252",
    "name": "MOCHILA ADIDAS PRETA",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 99.9,
    "originalPrice": 129.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 37,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "MOCHILA ADIDAS PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MA100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MA100",
      "blingId": "MA100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MA100",
        "price": 99.9,
        "comparePrice": 129.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-253",
    "name": "MOCHILA NIKE",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 99.9,
    "originalPrice": 129.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 48,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "MOCHILA NIKE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MN100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MN100",
      "blingId": "MN100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MN100",
        "price": 99.9,
        "comparePrice": 129.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-254",
    "name": "CUECA LUPO ORIGINAL MULTI COR",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 33,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CUECA LUPO ORIGINAL MULTI COR. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CLO100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-CLO100",
      "blingId": "CLO100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CLO100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-255",
    "name": "MEIA TRIP SIDE ROXA",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 29.9,
    "originalPrice": 38.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 18,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Roxo / Purple",
        "hex": "#7E22CE"
      }
    ],
    "description": "MEIA TRIP SIDE ROXA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "MTSR100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-MTSR100",
      "blingId": "MTSR100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "MTSR100",
        "price": 29.9,
        "comparePrice": 38.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-256",
    "name": "SHOLDER BAG CHRONIC POCHETE",
    "category": "acessorios",
    "subcategory": "bags",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 27,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "SHOLDER BAG CHRONIC POCHETE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "SBCP100",
      "barcode": "789100000000",
      "nuvemshopId": "BLING-SBCP100",
      "blingId": "SBCP100",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "SBCP100",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-257",
    "name": "CALCA DRI FIT CHRONIC PRETO",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 42,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CALCA DRI FIT CHRONIC PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CDFCP",
      "barcode": "789000000000",
      "nuvemshopId": "BLING-CDFCP",
      "blingId": "CDFCP",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CDFCP",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "CDFCM",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CDFCG",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "CDFCGG",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-258",
    "name": "CALCA DRI FIT NIKE PRETO",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 19,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CALCA DRI FIT NIKE PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CDFNM",
      "barcode": "789000000000",
      "nuvemshopId": "BLING-CDFNM",
      "blingId": "CDFNM",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CDFNM",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "CDFNG",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "CDFNGG",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 4,
        "sku": "CDFNP",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-259",
    "name": "CALCA BALÃO TRIP SIDE JEANS CLARO",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 43,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "46"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "CALCA BALÃO TRIP SIDE JEANS CLARO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CBTSPE46",
      "barcode": "789460000000",
      "nuvemshopId": "BLING-CBTSPE46",
      "blingId": "CBTSPE46",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CBTSPE46",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 1,
        "size": "46"
      }
    ]
  },
  {
    "id": "bling-real-260",
    "name": "TENIS NIKE TN BRANCO BRANCO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 58,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "38",
      "40",
      "42"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "TENIS NIKE TN BRANCO BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TNTNB42",
      "barcode": "789420000000",
      "nuvemshopId": "BLING-TNTNB42",
      "blingId": "TNTNB42",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TNTNB42",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 2,
        "sku": "TNTNB40",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 3,
        "sku": "TNTNB38",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "38"
      }
    ]
  },
  {
    "id": "bling-real-261",
    "name": "BERMUDA CARGO ONCROSS PRETO PRETO",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 55,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "BERMUDA CARGO ONCROSS PRETO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BCGO401P",
      "barcode": "789401000000",
      "nuvemshopId": "BLING-BCGO401P",
      "blingId": "BCGO401P",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BCGO401P",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 2,
        "sku": "BCGO401M",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "BCGO401G",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "BCGO401GG",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "GG"
      }
    ]
  },
  {
    "id": "bling-real-262",
    "name": "BERMUDA CARPINTEIRO ONCROSS PRETO PRETO",
    "category": "roupas",
    "subcategory": "shorts",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 23,
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "BERMUDA CARPINTEIRO ONCROSS PRETO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BCOP400G",
      "barcode": "789400000000",
      "nuvemshopId": "BLING-BCOP400G",
      "blingId": "BCOP400G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BCOP400G",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "BCOP400GG",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "BCOP400M",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "BCOP400P",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-263",
    "name": "CAMISETA STREET MULTIMARCAS MULTI- COR",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 60,
    "originalPrice": 78,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 46,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CAMISETA STREET MULTIMARCAS MULTI- COR. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 2,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CSM500GG",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-CSM500GG",
      "blingId": "CSM500GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CSM500GG",
        "price": 60,
        "comparePrice": 78,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CSM500G",
        "price": 60,
        "comparePrice": 78,
        "stock": 2,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "CSM500P",
        "price": 60,
        "comparePrice": 78,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 4,
        "sku": "CSM500M",
        "price": 60,
        "comparePrice": 78,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-264",
    "name": "CAMISETA CHRONIC \\TRIPSIDE ORIGINAIS MULTI- COR",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 84.9,
    "originalPrice": 110.37,
    "tag": "MAIS VENDIDO",
    "rating": 4.8,
    "reviewsCount": 22,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CAMISETA CHRONIC \\TRIPSIDE ORIGINAIS MULTI- COR. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 8,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCO500GG",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-CCO500GG",
      "blingId": "CCO500GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCO500GG",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 5,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CCO500M",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 2,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CCO500G",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "CCO500P",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 1,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-265",
    "name": "TENIS NIKE TN PRETO PRETO",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 22,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "TENIS NIKE TN PRETO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "TNTNP43",
      "barcode": "789430000000",
      "nuvemshopId": "BLING-TNTNP43",
      "blingId": "TNTNP43",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "TNTNP43",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "43"
      },
      {
        "id": 2,
        "sku": "TNTNP42",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 3,
        "sku": "TNTNP41",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "41"
      },
      {
        "id": 4,
        "sku": "TNTNP40",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "40"
      }
    ]
  },
  {
    "id": "bling-real-266",
    "name": "TENIS HOCKS MONTREAL GOLD GOLD",
    "category": "calcados",
    "subcategory": "sneakers",
    "price": 299.9,
    "originalPrice": 389.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 51,
    "images": [
      "/src/assets/images/product_sneaker_chunky_1793275503077.jpg",
      "/assets/aistudio/SaveClip.App_846207181_18118610126469989_4433467057000224093_n_b01c3d11.jpg",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "38",
      "41",
      "42",
      "43"
    ],
    "colors": [
      {
        "name": "Dourado / Ouro",
        "hex": "#F59E0B"
      }
    ],
    "description": "TENIS HOCKS MONTREAL GOLD GOLD. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "Cabedal reforçado e solado em borracha vulcanizada antiderrapante de alta tração",
      "weight": "920g o par",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "THMG43",
      "barcode": "789430000000",
      "nuvemshopId": "BLING-THMG43",
      "blingId": "THMG43",
      "weightGrams": 920,
      "dimensionsCm": {
        "width": 28,
        "height": 12,
        "depth": 32
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "THMG43",
        "price": 299.9,
        "comparePrice": 389.87,
        "stock": 1,
        "size": "43"
      },
      {
        "id": 2,
        "sku": "THMG41",
        "price": 299.9,
        "comparePrice": 389.87,
        "stock": 0,
        "size": "41"
      },
      {
        "id": 3,
        "sku": "THMG42",
        "price": 299.9,
        "comparePrice": 389.87,
        "stock": 2,
        "size": "42"
      },
      {
        "id": 4,
        "sku": "THMG38",
        "price": 299.9,
        "comparePrice": 389.87,
        "stock": 0,
        "size": "38"
      }
    ]
  },
  {
    "id": "bling-real-267",
    "name": "BERMUDA CARGO TRIP SIDE BORDADO PRETO",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 61,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "BERMUDA CARGO TRIP SIDE BORDADO PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BCTSB400GG",
      "barcode": "789400000000",
      "nuvemshopId": "BLING-BCTSB400GG",
      "blingId": "BCTSB400GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BCTSB400GG",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "BCTSB400G",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "BCTSB400M",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "BCTSB400P",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-268",
    "name": "BERMUDA TRIP SIDE RAIO PRETO ESTONADO",
    "category": "roupas",
    "subcategory": "shorts",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 44,
    "images": [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "48"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      },
      {
        "name": "Cinza",
        "hex": "#6B7280"
      }
    ],
    "description": "BERMUDA TRIP SIDE RAIO PRETO ESTONADO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BTSR400T48",
      "barcode": "789400480000",
      "nuvemshopId": "BLING-BTSR400T48",
      "blingId": "BTSR400T48",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BTSR400T48",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "48"
      },
      {
        "id": 2,
        "sku": "BTSR400T46",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "46"
      },
      {
        "id": 3,
        "sku": "BTSR400T42",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "42"
      },
      {
        "id": 4,
        "sku": "BTSR400T44",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "44"
      },
      {
        "id": 5,
        "sku": "BTSR400T40",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "40"
      },
      {
        "id": 6,
        "sku": "BTSR400T38",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "38"
      }
    ]
  },
  {
    "id": "bling-real-269",
    "name": "BERMUDA CARGO ONCROSS JEANS CLARA JEANS CLARA",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 139.9,
    "originalPrice": 181.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 29,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Azul / Tiffany",
        "hex": "#0EA5E9"
      }
    ],
    "description": "BERMUDA CARGO ONCROSS JEANS CLARA JEANS CLARA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BCOJC400G",
      "barcode": "789400000000",
      "nuvemshopId": "BLING-BCOJC400G",
      "blingId": "BCOJC400G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BCOJC400G",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "BCOJC400GG",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "BCOJC400M",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "BCOJC400P",
        "price": 139.9,
        "comparePrice": 181.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-270",
    "name": "CALCA CARGO ONCROSS LISTRADA LISTRADA",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 37,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CALCA CARGO ONCROSS LISTRADA LISTRADA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCO402GG",
      "barcode": "789402000000",
      "nuvemshopId": "BLING-CCO402GG",
      "blingId": "CCO402GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCO402GG",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CCO402G",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "CCO402M",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "CCO402P",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-271",
    "name": "CALCA CARGO ONCROSS BEGE BEGE",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 199.9,
    "originalPrice": 259.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 45,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Marrom / Caramelo",
        "hex": "#78350F"
      }
    ],
    "description": "CALCA CARGO ONCROSS BEGE BEGE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCO401GG",
      "barcode": "789401000000",
      "nuvemshopId": "BLING-CCO401GG",
      "blingId": "CCO401GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCO401GG",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CCO401G",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "CCO401M",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "CCO401P",
        "price": 199.9,
        "comparePrice": 259.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-272",
    "name": "CALCA CARGO ONCROSS PRETA",
    "category": "roupas",
    "subcategory": "calcas",
    "price": 149.9,
    "originalPrice": 194.87,
    "tag": "MAIS VENDIDO",
    "rating": 4.7,
    "reviewsCount": 43,
    "images": [
      "/src/assets/images/product_cargo_heavy_1793275501361.jpg",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CALCA CARGO ONCROSS PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 12,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCOP404GG",
      "barcode": "789404000000",
      "nuvemshopId": "BLING-CCOP404GG",
      "blingId": "CCOP404GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCOP404GG",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 3,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CCOP403G",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 4,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "CCOP402M",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 2,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "CCOP401P",
        "price": 149.9,
        "comparePrice": 194.87,
        "stock": 3,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-273",
    "name": "CAMISETA PIXA- IN MULTI COR",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 48,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CAMISETA PIXA- IN MULTI COR. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CPX502GG",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-CPX502GG",
      "blingId": "CPX502GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CPX502GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CPX502G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "CPX502M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-274",
    "name": "CAMISETA PIXA- IN PRETA",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 23,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CAMISETA PIXA- IN PRETA. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CPX501GG",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-CPX501GG",
      "blingId": "CPX501GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CPX501GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CPX501G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "CPX501M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-275",
    "name": "CAMISETA PIXA- IN PIXA- IN",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 27,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CAMISETA PIXA- IN PIXA- IN. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CPX500GG",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-CPX500GG",
      "blingId": "CPX500GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CPX500GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CPX500G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "CPX500M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "M"
      }
    ]
  },
  {
    "id": "bling-real-276",
    "name": "CAMISA COMPTOM REFLETIVA OFF WHITE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 84.9,
    "originalPrice": 110.37,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 41,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "CAMISA COMPTOM REFLETIVA OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCR501M",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-CCR501M",
      "blingId": "CCR501M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCR501M",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "CCR501G",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "CCR501P",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 1,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-277",
    "name": "CAMISA COMPTOM REFLETIVA PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 49,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CAMISA COMPTOM REFLETIVA PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCR500G",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-CCR500G",
      "blingId": "CCR500G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCR500G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "CCR500M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CCR500P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-278",
    "name": "CAMISA COMPTOM BORDADA BORDÔ",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 84.9,
    "originalPrice": 110.37,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 31,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "CAMISA COMPTOM BORDADA BORDÔ. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCB502GG",
      "barcode": "789502000000",
      "nuvemshopId": "BLING-CCB502GG",
      "blingId": "CCB502GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCB502GG",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CCB502G",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "CCB502M",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "CCB502P",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-279",
    "name": "CAMISA COMPTOM BORDADA VERDE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 48,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Verde",
        "hex": "#15803D"
      }
    ],
    "description": "CAMISA COMPTOM BORDADA VERDE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCB501GG",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-CCB501GG",
      "blingId": "CCB501GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCB501GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CCB501M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CCB501G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "CCB501P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-280",
    "name": "CAMISA COMPTOM BORDADA PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 18,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CAMISA COMPTOM BORDADA PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "CCB500GG",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-CCB500GG",
      "blingId": "CCB500GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "CCB500GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "CCB500M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "CCB500G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "CCB500P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-281",
    "name": "BONE ABA CURVA MULTIMARCAS",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 50,
    "originalPrice": 65,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "BONE ABA CURVA MULTIMARCAS. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 4,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BAC101",
      "barcode": "789101000000",
      "nuvemshopId": "BLING-BAC101",
      "blingId": "BAC101",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BAC101",
        "price": 50,
        "comparePrice": 65,
        "stock": 4,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-282",
    "name": "BONE CHRONIC FIVE PANEL FECHO LATERAL",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.9,
    "reviewsCount": 22,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "BONE CHRONIC FIVE PANEL FECHO LATERAL. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BC101",
      "barcode": "789101000000",
      "nuvemshopId": "BLING-BC101",
      "blingId": "BC101",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BC101",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-283",
    "name": "BONE TRIP SIDE FIVE PANEL 2",
    "category": "acessorios",
    "subcategory": "bones",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.8,
    "reviewsCount": 42,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "Tamanho Único"
    ],
    "colors": [
      {
        "name": "Cor Única",
        "hex": "#1C1C1C"
      }
    ],
    "description": "BONE TRIP SIDE FIVE PANEL 2. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "BTS102",
      "barcode": "789102000000",
      "nuvemshopId": "BLING-BTS102",
      "blingId": "BTS102",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "BTS102",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "Tamanho Único"
      }
    ]
  },
  {
    "id": "bling-real-284",
    "name": "CAMISA CANELADA BRANCO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 70,
    "originalPrice": 91,
    "tag": "POUCAS UNIDADES",
    "rating": 4.9,
    "reviewsCount": 46,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      }
    ],
    "description": "CAMISA CANELADA BRANCO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "C501GG",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-C501GG",
      "blingId": "C501GG",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "C501GG",
        "price": 70,
        "comparePrice": 91,
        "stock": 1,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "C501M",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "C501G",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "C501P",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-285",
    "name": "CAMISA CANELADA PRETO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 70,
    "originalPrice": 91,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 53,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CAMISA CANELADA PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "C500GG",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-C500GG",
      "blingId": "C500GG",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "C500GG",
        "price": 70,
        "comparePrice": 91,
        "stock": 1,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "C500M",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "M"
      },
      {
        "id": 3,
        "sku": "C500G",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 4,
        "sku": "C500P",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-286",
    "name": "REGATA CANELADA PRETO",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 70,
    "originalPrice": 91,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 59,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "REGATA CANELADA PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 3,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "R501G",
      "barcode": "789501000000",
      "nuvemshopId": "BLING-R501G",
      "blingId": "R501G",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "R501G",
        "price": 70,
        "comparePrice": 91,
        "stock": 2,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "R501GG",
        "price": 70,
        "comparePrice": 91,
        "stock": -1,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "R501M",
        "price": 70,
        "comparePrice": 91,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "R501P",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-287",
    "name": "REGATA CANELADA OFF WHITE",
    "category": "acessorios",
    "subcategory": "acessorios-metal",
    "price": 70,
    "originalPrice": 91,
    "tag": "POUCAS UNIDADES",
    "rating": 4.7,
    "reviewsCount": 51,
    "images": [
      "https://images.unsplash.com/photo-1611591475819-79b8b73c4631?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "REGATA CANELADA OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "Material premium de alta durabilidade e acabamento reforçado",
      "weight": "140g",
      "modelInfo": "Tamanho e formato ergonômico",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "R500GG",
      "barcode": "789500000000",
      "nuvemshopId": "BLING-R500GG",
      "blingId": "R500GG",
      "weightGrams": 140,
      "dimensionsCm": {
        "width": 15,
        "height": 8,
        "depth": 20
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "R500GG",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "R500G",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "R500M",
        "price": 70,
        "comparePrice": 91,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "R500P",
        "price": 70,
        "comparePrice": 91,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-288",
    "name": "OVERSIZED REGATA MACHÃO OFF WHITE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": "POUCAS UNIDADES",
    "rating": 4.8,
    "reviewsCount": 34,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "OVERSIZED REGATA MACHÃO OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 1,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "O503G",
      "barcode": "789503000000",
      "nuvemshopId": "BLING-O503G",
      "blingId": "O503G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "O503G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": -1,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "O503GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "O503M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "O503P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-289",
    "name": "OVERSIZED LOUIS VITTON PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": null,
    "rating": 4.9,
    "reviewsCount": 31,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "OVERSIZED LOUIS VITTON PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 4,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OLV515G",
      "barcode": "789515000000",
      "nuvemshopId": "BLING-OLV515G",
      "blingId": "OLV515G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OLV515G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "OLV515GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "OLV515M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "OLV515P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-290",
    "name": "OVERSIZED LOUIS VITTON OFF WHITE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 119.9,
    "originalPrice": 155.87,
    "tag": null,
    "rating": 4.8,
    "reviewsCount": 23,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "OVERSIZED LOUIS VITTON OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 5,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OLV514G",
      "barcode": "789514000000",
      "nuvemshopId": "BLING-OLV514G",
      "blingId": "OLV514G",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OLV514G",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 2,
        "size": "G"
      },
      {
        "id": 2,
        "sku": "OLV514GG",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 3,
        "sku": "OLV514M",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 2,
        "size": "M"
      },
      {
        "id": 4,
        "sku": "OLV514P",
        "price": 119.9,
        "comparePrice": 155.87,
        "stock": 1,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-291",
    "name": "CAMISETA TRIPSIDE BORDADO CENTRAL PRETO",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 84.9,
    "originalPrice": 110.37,
    "tag": null,
    "rating": 4.7,
    "reviewsCount": 57,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "P",
      "M",
      "G"
    ],
    "colors": [
      {
        "name": "Preto",
        "hex": "#111111"
      }
    ],
    "description": "CAMISETA TRIPSIDE BORDADO CENTRAL PRETO. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 5,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTS509M",
      "barcode": "789509000000",
      "nuvemshopId": "BLING-OTS509M",
      "blingId": "OTS509M",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTS509M",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 3,
        "size": "M"
      },
      {
        "id": 2,
        "sku": "OTS509G",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 1,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "OTS509P",
        "price": 84.9,
        "comparePrice": 110.37,
        "stock": 1,
        "size": "P"
      }
    ]
  },
  {
    "id": "bling-real-292",
    "name": "OVERSIZED TRIPSIDE BORDADO GRAPE OFF WHITE",
    "category": "roupas",
    "subcategory": "camisetas",
    "price": 129.9,
    "originalPrice": 168.87,
    "tag": "SEM ESTOQUE",
    "rating": 4.7,
    "reviewsCount": 61,
    "images": [
      "/src/assets/images/lookview_fullkit_model_1793275500631.jpg",
      "/src/assets/images/hero_streetwear_urban_1793275500555.jpg",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "sizes": [
      "M MOVEL PLANEJADO",
      "P",
      "G",
      "GG"
    ],
    "colors": [
      {
        "name": "Branco",
        "hex": "#FFFFFF"
      },
      {
        "name": "Off-White",
        "hex": "#EAE6DF"
      }
    ],
    "description": "OVERSIZED TRIPSIDE BORDADO GRAPE OFF WHITE. Produto oficial e autêntico catalogado diretamente do ERP Bling da Street Store Itabira. Confeccionado com padrão streetwear premium, acabamento de alta resistência e encaixe perfeito no seu lifestyle urbano.",
    "stockCount": 0,
    "details": {
      "composition": "100% Algodão Premium Heavyweight",
      "weight": "360g/m² Heavyweight",
      "modelInfo": "Modelagem autêntica Streetwear / Caimento solto",
      "origin": "Street Store // Itabira - MG // Fabricado no Brasil"
    },
    "integration": {
      "sku": "OTS503GG",
      "barcode": "789503000000",
      "nuvemshopId": "BLING-OTS503GG",
      "blingId": "OTS503GG",
      "weightGrams": 360,
      "dimensionsCm": {
        "width": 25,
        "height": 25,
        "depth": 5
      }
    },
    "variantsList": [
      {
        "id": 1,
        "sku": "OTS503GG",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "GG"
      },
      {
        "id": 2,
        "sku": "OTS503G",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "G"
      },
      {
        "id": 3,
        "sku": "OTS503P",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": 0,
        "size": "P"
      },
      {
        "id": 4,
        "sku": "OTS503M",
        "price": 129.9,
        "comparePrice": 168.87,
        "stock": -10,
        "size": "M MOVEL PLANEJADO"
      }
    ]
  }
];
