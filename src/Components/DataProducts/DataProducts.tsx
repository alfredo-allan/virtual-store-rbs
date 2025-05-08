export interface Product {
    id: number;
    name: string;
    description?: string;
    priceFisica?: number;
    priceJuridica?: number;
    discount?: string;
    imageUrl?: string;
    secondaryImageUrl?: string;
    gallery?: string[];
    productInfo?: string;
    oldPrice?: number;
    price?: number;
    caracteristicas?: {
        marca?: string;
        modelo?: string;
        largura?: string;
        comprimento?: string;
        distanciaEntreEixos?: string;
        peso?: string;
        material?: string;
        quantidadeDeCamadas?: string | number;
        [key: string]: any;
    };
    peso_kg?: number; // Novo campo para o peso em kg
    altura_cm?: number; // Novo campo para a altura em cm
    largura_cm?: number; // Novo campo para a largura em cm
    comprimento_cm?: number; // Novo campo para o comprimento em cm
    videoUrl?: string; // Campo para a URL do vídeo
    category?: string;
}

const DataProducts: Product[] = [
    {
        id: 1,
        name: 'Shape Skate Toy Machine Old School Maple + Chave Y',
        priceFisica: 299.90,
        priceJuridica: 285.00,
        imageUrl: require("../../Assets/ProductsImg/ShapeSkateToyMachineOldSchoolMaple+ChaveY_1.webp"),
        secondaryImageUrl: require("../../Assets/ProductsImg/ShapeSkateToyMachineOldSchoolMaple+ChaveY_2.webp"),
        gallery: [
            require("../../Assets/ProductsImg/ShapeSkateToyMachineOldSchoolMaple+ChaveY_3.webp"),
            require("../../Assets/ProductsImg/ShapeSkateToyMachineOldSchoolMaple+ChaveY_4.webp"),
        ],
        oldPrice: 350.00,
        price: 310.00,
        caracteristicas: {
            marca: 'Toy Machine',
            modelo: 'Old School',
            largura: '24.89 cm',
            comprimento: '82.55 cm',
            distanciaEntreEixos: '38,1 cm',
            peso: "800g",
            material: 'MAPLE',
            quantidadeDeCamadas: 7,
        },
        productInfo: 'Shape de skate Old School da marca Toy Machine, feito em maple com 7 camadas. Acompanha chave T.',
        description: 'Shape Skate Old School Toy Machine + Chave T Brinde. O Shape Skate Old School Toy Machine Maple + Chave T é a escolha perfeita para os amantes do skate que buscam qualidade e estilo. Com uma largura de 9.80 polegadas e um comprimento de 32.5 polegadas, este shape oferece uma base estável e ampla, ideal para manobras e deslizes. Seu design Old School traz um toque nostálgico, perfeito para quem aprecia a cultura do skate. Fabricado em maple de alta qualidade, o shape possui 7 camadas que garantem resistência e durabilidade, suportando os impactos mais exigentes. A distância entre eixos de 14 polegadas proporciona um ótimo equilíbrio, permitindo que você execute suas manobras com confiança. Seja você um skatista iniciante ou experiente, este shape é uma adição valiosa ao seu equipamento. Acompanha uma chave T, facilitando a montagem e ajustes, para que você possa se concentrar no que realmente importa: andar de skate e se divertir. Garantia do vendedor: 10 dias',
        peso_kg: 0.8,
        altura_cm: 5,
        largura_cm: 24.89,
        comprimento_cm: 82.55,
        category: 'shape',
    },
    {
        id: 2,
        name: 'Shape Skate Milk 8.0 Maple Canadense + Lixa',
        priceFisica: 229.41,
        priceJuridica: 285.00,
        imageUrl: require("../../Assets/ProductsImg/ShapeSkateMilk8.0MapleCanadense+LixaEmborrachada_1.webp"),
        secondaryImageUrl: require("../../Assets/ProductsImg/ShapeSkateMilk8.0MapleCanadense+LixaEmborrachada_2.webp"),
        gallery: [
            require("../../Assets/ProductsImg/ShapeSkateMilk8.0MapleCanadense+LixaEmborrachada_3.webp"),
            require("../../Assets/ProductsImg/ShapeSkateToyMachineOldSchoolMaple+ChaveY_4.webp"),
            require('../../Assets/ProductsImg/ShapeSkateMilk8.0MapleCanadense+LixaEmborrachada_4.mp4'), // Adicione a URL do vídeo ao gallery
        ],
        oldPrice: 350.00,
        price: 310.00,
        caracteristicas: {
            marca: 'MILK SKATEBOARD',
            modelo: 'Maple Canadense',
            largura: '20,32 cm',
            comprimento: '80,6 cm',
            distanciaEntreEixos: '36,1 cm',
            peso: "800g",
            material: 'MAPLE CANADENSE',
            quantidadeDeCamadas: 7,
        },
        productInfo: 'SHAPE MILK 8.0 MAPLE CANADENSE, LIXA EMBORRACHADA GRÁTIS',
        description: 'Os Shapes Maple Milk são fabricados na fábrica BBS Manufacturing que também fazem os shapes da BAKER Skateboard, Real, Deathwish, DGK e outras marcas internacionais. Shape composto por 7 laminas de Maple Canadense calibradas , leve e resistente Shape super leve e resistente com muito Pop Shape Importado Marca: Milk Skateboards Modelo: Milk 100% Maple Canadense PRODUTO NOVO LACRADO',
        peso_kg: 0.8,
        altura_cm: 5,
        largura_cm: 20.32,
        comprimento_cm: 80.6,
        category: 'shape',
    },
    {
        id: 3,
        name: 'Shape Skate Milk 8.10 Maple Canadense + Lixa Emborrachada ',
        priceFisica: 229.41,
        priceJuridica: 229.00,
        imageUrl: require("../../Assets/ProductsImg/shapeSkateMilk8.10MapleCanadense+LixaEmborrachada_1.webp"),
        secondaryImageUrl: require("../../Assets/ProductsImg/shapeSkateMilk8.10MapleCanadense+LixaEmborrachada_2.webp"),
        gallery: [
            require("../../Assets/ProductsImg/shapeSkateMilk8.10MapleCanadense+LixaEmborrachada_3.webp"),
            // require("../../Assets/ProductsImg/shapeSkateMilk8.10MapleCanadense+LixaEmborrachada_4.webp"),
            require('../../Assets/ProductsImg/shapeSkateMilk8.10MapleCanadense+LixaEmborrachada_4.mp4'), // Adicione a URL do vídeo ao gallery
        ],
        oldPrice: 269.00,
        price: 229.00,
        caracteristicas: {
            marca: 'MILK SKATEBOARD',
            modelo: 'Maple Canadense',
            largura: '20,5 cm',
            comprimento: '80,6 cm',
            distanciaEntreEixos: '36,1 cm',
            peso: "800g",
            material: 'MAPLE CANADENSE',
            quantidadeDeCamadas: 7,
        },
        productInfo: 'SHAPE MILK 8.0 MAPLE CANADENSE, LIXA EMBORRACHADA GRÁTIS',
        description: 'Os Shapes Maple Milk são fabricados na fábrica BBS Manufacturing que também fazem os shapes da BAKER Skateboard, Real, Deathwish, DGK e outras marcas internacionais. Shape composto por 7 laminas de Maple Canadense calibradas , leve e resistente Shape super leve e resistente com muito Pop Shape Importado Marca: Milk Skateboards Modelo: Milk 100% Maple Canadense PRODUTO NOVO LACRADO',
        peso_kg: 0.8,
        altura_cm: 5,
        largura_cm: 20.32,
        comprimento_cm: 80.6,
        category: 'shape',
    },
    {
        id: 4,
        name: 'Shape Skate Original G 8.25 Maple + Lixa Emborrachada',
        priceFisica: 227.05,
        priceJuridica: 200.00,
        imageUrl: require("../../Assets/ProductsImg/ShapeSkateOriginalG8.25Maple+LixaEmborrachada_1.webp"),
        secondaryImageUrl: require("../../Assets/ProductsImg/ShapeSkateOriginalG8.25Maple+LixaEmborrachada_2.webp"),
        gallery: [
            require("../../Assets/ProductsImg/ShapeSkateOriginalG8.25Maple+LixaEmborrachada_3.webp"),
            // require("../../Assets/ProductsImg/shapeSkateMilk8.10MapleCanadense+LixaEmborrachada_4.webp"),
            require('../../Assets/ProductsImg/ShapeSkateOriginalG8.25Maple+LixaEmborrachada_4.mp4'), // Adicione a URL do vídeo ao gallery
        ],
        oldPrice: 269.00,
        price: 229.00,
        caracteristicas: {
            marca: 'ORIGINAL G',
            modelo: 'STREET MAPLE',
            largura: '20,9 cm',
            comprimento: '80,0 cm',
            distanciaEntreEixos: '36,1 cm',
            peso: "800g",
            material: 'MAPLE',
            quantidadeDeCamadas: 7,
        },
        productInfo: 'Shape Skate Original G 8.25 Maple + Lixa Emborrachada',
        description: 'SHAPE MAPLE ORIGINAL G MEDIDA 8.25 LEVE E SUPER RESISTENTE GRÁTIS LIXA EMBORRACHADA BUBLEE FREE IMPORTADA 7 LÂMINAS CALIBRADAS SKATE LESTE !!!! RECOMENDA USE SEM DÓ!!!',
        peso_kg: 0.8,
        altura_cm: 5,
        largura_cm: 20.9,
        comprimento_cm: 80.0,
        category: 'shape',
    },
    {
        id: 5,
        name: "Shape Skate Original G 7.75'' Maple + Lixa Emborrachada",
        priceFisica: 239.00,
        priceJuridica: 200.00,
        imageUrl: require("../../Assets/ProductsImg/ShapeSkateOriginalG 7.75''Maple+LixaEmborrachada_1.webp"),
        secondaryImageUrl: require("../../Assets/ProductsImg/ShapeSkateOriginalG 7.75''Maple+LixaEmborrachada_2.webp"),
        gallery: [
            require("../../Assets/ProductsImg/ShapeSkateOriginalG 7.75''Maple+LixaEmborrachada_3.webp"),
            // require("../../Assets/ProductsImg/shapeSkateMilk8.10MapleCanadense+LixaEmborrachada_4.webp"),
            require("../../Assets/ProductsImg/ShapeSkateOriginalG 7.75''Maple+LixaEmborrachada_4.mp4"), // Adicione a URL do vídeo ao gallery
        ],
        oldPrice: 269.00,
        price: 229.00,
        caracteristicas: {
            marca: 'ORIGINAL G',
            modelo: 'STREET MAPLE',
            largura: '19,6 cm',
            comprimento: '79,3 cm',
            distanciaEntreEixos: '35,5 cm',
            peso: "800g",
            material: 'MAPLE',
            quantidadeDeCamadas: 7,
        },
        productInfo: 'Shape Skate Original G 8.25 Maple + Lixa Emborrachada',
        description: 'SHAPE MAPLE ORIGINAL G MEDIDA 8.25 LEVE E SUPER RESISTENTE GRÁTIS LIXA EMBORRACHADA BUBLEE FREE IMPORTADA 7 LÂMINAS CALIBRADAS SKATE LESTE !!!! RECOMENDA USE SEM DÓ!!!',
        peso_kg: 0.8,
        altura_cm: 5,
        largura_cm: 19.6,
        comprimento_cm: 79.3,
        category: 'shape',
    },
    {
        id: 6,
        name: "",
        priceFisica: 239.00,
        priceJuridica: 200.00,
        imageUrl: require("../../Assets/ProductsImg/ShapeSkateOriginalG 8.12Maple+LixaEmborrachada_2.webp"),
        secondaryImageUrl: require("../../Assets/ProductsImg/ShapeSkateOriginalG 8.12Maple+LixaEmborrachada_2.webp"),
        gallery: [
            require("../../Assets/ProductsImg/ShapeSkateOriginalG 8.12Maple+LixaEmborrachada_3.webp"),
            // require("../../Assets/ProductsImg/shapeSkateMilk8.10MapleCanadense+LixaEmborrachada_4.webp"),
            require("../../Assets/ProductsImg/ShapeSkateOriginalG 8.12Maple+LixaEmborrachada_4.mp4"), // Adicione a URL do vídeo ao gallery
        ],
        oldPrice: 269.00,
        price: 229.00,
        caracteristicas: {
            marca: 'ORIGINAL G',
            modelo: 'STREET MAPLE',
            largura: '19,6 cm',
            comprimento: '79,3 cm',
            distanciaEntreEixos: '35,5 cm',
            peso: "800g",
            material: 'MAPLE',
            quantidadeDeCamadas: 7,
        },
        productInfo: 'Shape Skate Original G 8.25 Maple + Lixa Emborrachada',
        description: 'SHAPE MAPLE ORIGINAL G MEDIDA 8.25 LEVE E SUPER RESISTENTE GRÁTIS LIXA EMBORRACHADA BUBLEE FREE IMPORTADA 7 LÂMINAS CALIBRADAS SKATE LESTE !!!! RECOMENDA USE SEM DÓ!!!',
        peso_kg: 0.8,
        altura_cm: 5,
        largura_cm: 19.6,
        comprimento_cm: 79.3,
        category: 'shape',
    },
    {
        id: 7,
        name: 'Shape Skate Milk 8.0 Maple Canadense + Lixa Emborrachada',
        priceFisica: 200,
        priceJuridica: 200,
        imageUrl: require('../../Assets/ProductsImg/ShapeSkateMilk 8.0MapleCanadense+LixaEmborrachada_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/ShapeSkateMilk 8.0MapleCanadense+LixaEmborrachada_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/ShapeSkateMilk 8.0MapleCanadense+LixaEmborrachada_3.webp'),
            require("../../Assets/ProductsImg/ShapeSkateMilk_8.0MapleCanadense_LixaEmborrachada_4.mp4"), // Adicione a URL do vídeo ao gallery
        ],
        oldPrice: 200,
        price: 200,
        caracteristicas: { 'marca': 'MILK SKATEBOARD', 'modelo': 'Maple Canadense', 'largura': '19,6 cm', 'comprimento': '79.3 cm', 'distanciaEntreEixos': '35,5', 'peso': '800G', 'material': 'Maple', 'quantidadeDeCamadas': 7 },
        productInfo: 'Shape Skate Milk 8.0 Maple Canadense + Lixa Emborrachada',
        description: 'SHAPE MILK 8.0 MAPLE CANADENSE LIXA EMBORRACHADA GRÁTIS Os Shapes Maple Milk são fabricados na fábrica BBS Manufacturing que também fazem os shapes da BAKER Skateboard, Real, Deathwish, DGK e outras marcas internacionais. Shape composto por 7 laminas de Maple Canadense calibradas , leve e resistente Shape super leve e resistente com muito Pop Shape Importado Marca: Milk Skateboards Modelo: Milk 100% Maple Canadense PRODUTO NOVO LACRADO', peso_kg: 0.8, altura_cm: 5, largura_cm: 19.6, comprimento_cm: 79.3, category: 'shape',
    },
    {
        id: 10,
        name: "Shape Skate Hard Maple Milk 7.9'' + Lixa Emborrachada",
        priceFisica: 237.4,
        priceJuridica: 200,
        imageUrl: require('../../Assets/ProductsImg/ShapeSkateHardMapleMilk_7.9_LixaEmborrachada_1_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/ShapeSkateHardMapleMilk_7.9_LixaEmborrachada_2_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/ShapeSkateHardMapleMilk_7.9_LixaEmborrachada_3_3.webp')
        ],
        oldPrice: 249.9,
        price: 237.4,
        caracteristicas: { 'marca': 'MILK SKATEBOARD', 'modelo': 'Maple Milk', 'largura': '20,06', 'comprimento': '78,74', 'distanciaEntreEixos': '', 'peso': '800g', 'material': 'Maple ', 'quantidadeDeCamadas': 7 },
        productInfo: "Shape Skate Hard Maple Milk 7.9'' + Lixa Emborrachada",
        description: "SHAPE MILK 7.90'' MAPLE CANADENSE + Lixa Emborrachada Lisa Importada\n\nLIXA EMBORRACHADA GRÁTIS\nOs Shapes Maple Milk são fabricados na fábrica BBS Manufacturing que também fazem os shapes da BAKER Skateboard, Real, Deathwish, DGK e outras marcas internacionais.\n\nShape composto por 7 laminas de Maple Canadense calibradas , leve e resistente\n\nShape super leve e resistente com muito Pop\n\nShape Importado\n\nMarca: Milk Skateboards\n\nModelo: Milk\n\n100% Maple Canadense\n\nPRODUTO NOVO LACRADO\n\nGarantia do vendedor: 10 dias",
        peso_kg: 0.8,
        altura_cm: 5,
        largura_cm: 20.06,
        comprimento_cm: 78.74,
        category: 'shape',
    },
    {
        id: 11,
        name: "Shape Skate Wood Light 7.3'' Maple + Lixa Emborrachada",
        priceFisica: 210,
        priceJuridica: 200,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_961070-MLB82610649631_022025-O-shape-skate-wood-light-73-maple-lixa-emborrachada_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_961070-MLB82610649631_022025-O-shape-skate-wood-light-73-maple-lixa-emborrachada_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_804101-MLB82325664700_022025-O-shape-skate-wood-light-73-maple-lixa-emborrachada_3.webp'),
            require("../../Assets/ProductsImg/Shape Skate Wood Light 7.3'' Maple + Lixa Emborrachada_4.mp4"), // Adicione a URL do vídeo ao gallery

        ],
        oldPrice: 240,
        price: 210,
        caracteristicas: { 'marca': '', 'modelo': '', 'largura': '', 'comprimento': '', 'distanciaEntreEixos': '', 'peso': '', 'material': '', 'quantidadeDeCamadas': 0 },
        productInfo: "Shape Skate Wood Light 7.3'' Maple + Lixa Emborrachada",
        description: "Apresentamos o Shape Skate Wood Light 7.3'' Maple + Lixa Emborrachada, a escolha ideal para skatistas que buscam desempenho e estilo. Com um comprimento de 30 polegadas e uma largura de 7.3 polegadas, este shape é perfeito para manobras urbanas e para quem deseja um controle preciso sobre o skate.\n\nFabricado em maple de alta qualidade, o modelo Street Mini Model Maple conta com 7 camadas que garantem resistência e durabilidade. A distância entre eixos de 13.5 polegadas proporciona estabilidade, permitindo que você execute suas manobras com confiança.\n\nA lixa emborrachada inclusa oferece uma aderência excepcional, assegurando que seus pés permaneçam firmes durante as sessões de skate. Este shape é ideal tanto para iniciantes quanto para skatistas experientes que desejam aprimorar suas habilidades.\n\nSe você procura um shape que combine qualidade, resistência e um design atraente, o Shape Skate Wood Light é a escolha certa. Prepare-se para levar suas manobras a um novo nível com este produto que atende às necessidades dos skatistas modernos.\n\nGarantia do vendedor: 10 dias",
        peso_kg: 800,
        altura_cm: 5,
        largura_cm: 18.54,
        comprimento_cm: 76.2,
        category: 'shape',
    },
];

export default DataProducts;