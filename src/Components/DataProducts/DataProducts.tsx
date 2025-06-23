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
        description: 'SHAPE MAPLE ORIGINAL G MEDIDA 8.25 LEVE E SUPER RESISTENTE GRÁTIS LIXA EMBORRACHADA BUBLEE FREE IMPORTADA 7 LÂMINAS CALIBRADAS  !!!! RECOMENDA USE SEM DÓ!!!',
        peso_kg: 0.8,
        altura_cm: 5,
        largura_cm: 20.9,
        comprimento_cm: 80.0,
        category: 'shape',
    },

    {
        id: 5,
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
        id: 6,
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

    {
        id: 7,
        name: 'Shape Skate Milk 8.0 Maple Canadense + Lixa Emborrachada',
        priceFisica: 242,
        priceJuridica: 200,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_949604-MLB84651333883_052025-O-shape-skate-milk-80-maple-canadense-lixa-emborrachada_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_949604-MLB84651333883_052025-O-shape-skate-milk-80-maple-canadense-lixa-emborrachada_1.webp'),
        gallery: [
            // require('../../Assets/ProductsImg/D_Q_NP_895409-MLB84354508732_052025-R-shape-skate-milk-80-maple-canadense-lixa-emborrachada_3.webp'),
            require("../../Assets/ProductsImg/Screencast From 2025-05-18 18-02-35.mp4"), // Adicione a URL do vídeo ao gallery

        ],
        oldPrice: 269,
        price: 242,
        caracteristicas: { "Marca": 'MILK SKATEBOARD', "Modelo": 'Maple Canadense', "Largura": '20,32', "Comprimento": '31,75', "Distancia entre eixos": "'14,25", "Quantidade de Camadas": "'7'" },
        productInfo: 'Shape Skate Milk 8.0 Maple Canadense + Lixa Emborrachada',
        description: 'SHAPE MILK 8.0 MAPLE CANADENSE\n\nLIXA EMBORRACHADA GRÁTIS\n\n\nOs Shapes Maple Milk são fabricados na fábrica BBS Manufacturing que também fazem os shapes da BAKER Skateboard, Real, Deathwish, DGK e outras marcas internacionais.\n\nShape composto por 7 laminas de Maple Canadense calibradas , leve e resistente\n\nShape super leve e resistente com muito Pop\n\nShape Importado\n\nMarca: Milk Skateboards\n\nModelo: Milk\n\n100% Maple Canadense\n\nPRODUTO NOVO LACRADO',
        peso_kg: 0.8,
        altura_cm: 5,
        largura_cm: 21,
        comprimento_cm: 31,
        category: 'shape',
    },

    {
        id: 8,
        name: 'Roda De Skate Moska Wsc Wide Side Cut 55mm Dureza 55d',
        priceFisica: 140.96,
        priceJuridica: 120,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_864647-MLU78762796169_082024-O_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_855852-MLU78762796205_082024-O_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_864647-MLU78762796169_082024-O_3.webp'), require('../../Assets/ProductsImg/D_NQ_NP_901452-MLU78762727683_082024-O_4.webp'), require('../../Assets/ProductsImg/D_NQ_NP_792101-MLU78529757458_082024-O_5.webp')
        ],
        oldPrice: 150.99,
        price: 10.96,
        caracteristicas: {
            "Marca": 'Moka',
            "Modelo": 'Solar',
            "Unidade por kit": '4',
            "Material": 'Poliuretano',
            "Dureza": '101A',
            "Textura": 'Smooth',
            "Diâmetro": '5,5 cm',
            "Com luz": 'Não'
        },
        productInfo: 'Roda De Skate Moska Wsc Wide Side Cut 55mm Dureza 55d',
        description: 'Rodas de Skate Brancas 55mm Wide Side Cut com dureza 55D fabricadas pela Moska\n\nDesde 1988 fabricando rodinhas, a Moska se tornou referência no Brasil. Suas rodinhas são fabricadas com os melhores materiais e têm durabilidade igual ou superior às melhores marcas importadas.\n\nRodas lacradas em uma prática bolsinha de plástico com zíper, inclui adesivo com o logo da Moska.\n\nDados Técnicos:\n- Modelo: MOSKA WIDE SIDE CUT 55\n- Medida: 55mm\n- Shore: 55D\n- Tipo: Street\n- Largura: 34mm\n- Banda / Rodagem: 18mm',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'rodas',
    },

    {
        id: 9,
        name: 'Rodinha Do Reformer Pilates Kit 4 Roda Carrinho + Rolamentos',
        priceFisica: 55.19,
        priceJuridica: 50,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_682032-MLB73120423533_112023-O-rodinha-do-reformer-pilates-kit-4-roda-carrinho-rolamentos_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_746666-MLB73120956181_112023-O-rodinha-do-reformer-pilates-kit-4-roda-carrinho-rolamentos_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_832288-MLB73038968210_112023-O-rodinha-do-reformer-pilates-kit-4-roda-carrinho-rolamentos_3.webp')
        ],
        oldPrice: 60,
        price: 55.19,
        caracteristicas: {

        },
        productInfo: 'Rodinha Do Reformer Pilates Kit 4 Roda Carrinho + Rolamentos',
        description: 'KIT para reformer de Pilates, sendo com 4 Rodas com e 8 Rolamentos.\n\nCada uma das rodas está equipada com dois rolamentos, ou seja, um de cada lado. É muito fácil de instalar e utilizar equipamentos de fitness e do reformer Pilates.\n\nJá acompanha os rolamentos e vão colocados na roda, basta retirar o roda antiga e colocar a nova.\n\n\n\nDetalhes do item:\n- 8 Rodas;\n- Cor: Preta;\n- Diamentro: 51mm;\n- Material de Poliuretano;\n- 16 rolamentos;\n- 608 ZZ\n- 8x22x7;\n- Abec1; e\n- Blindagem de aço.\n\nGarantia do vendedor: 30 dias',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'rodas',
    }, {

        id: 10,
        name: 'Rodas Lyons Skate 70mm 78a Diversas Cores + Rolamentos',
        priceFisica: 144.96,
        priceJuridica: 140,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_938951-MLB82735480527_022025-O-rodas-lyons-skate-70mm-78a-diversas-cores-rolamentos_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_884039-MLB72962801800_112023-O-rodas-lyons-skate-70mm-78a-diversas-cores-rolamentos_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_631936-MLB72001997814_102023-O-rodas-lyons-skate-70mm-78a-diversas-cores-rolamentos_3.webp'), require('../../Assets/ProductsImg/D_NQ_NP_803510-MLB72001911734_102023-O-rodas-lyons-skate-70mm-78a-diversas-cores-rolamentos_4.webp')
        ],
        oldPrice: 150.8,
        price: 144.96,
        caracteristicas: {
            "Marca": 'LYONS SKATE',
            "Unidades por embalagem": '4'
        },
        productInfo: 'Rodas Lyons Skate 70mm 78a Diversas Cores + Rolamentos',
        description: 'Rodas Longboard 70mm 78a + Rolamentos Abec 15 LYONS + Espaçadores\n\n(ESCOLHER COR NA TABELA )\n\nA Roda Longboard Urethano 70mm 78A é fabricada em poliuretano, com alto nível tecnológico. A dureza dessa roda é ideal para uso em superfícies mais lisas e velocidades mais altas, possui Otimo nível de aderência. Roda indicada para speed, possuindo bom desempenho de ótima qualidade. O acabamento e a performance das rodas são características dessa roda.\n\nESPECIFICAÇÕES:\n\nFabricada em Urethano Fundido High Rebound;\nIndicada as modalidades: Speed ,Cruiser , Dancing , slalon e simulador de surf\nCor: ( Escolher na tabela )\nDiâmetro: 70 mm;\nLargura: 50 mm;\nBanda / Rodagem: 48,5 mm\nPeso Aproximado: 575 g;\nSem Tampografia ;\nÓtima Resiliência;\nQualidade e durabilidade necessária para você se superar em seus rolês;\nAderência balanceada;\nFabricação Importada\n\nGarantia do vendedor: 30 dias',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'rodas',
    },

    {
        id: 11,
        name: 'Roda Next 54mm 101a Conica + Jogo Porca De Roda Grátis',
        priceFisica: 78.9,
        priceJuridica: 70,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_753314-MLB46897199297_072021-O-roda-next-54mm-101a-conica-jogo-porca-de-roda-gratis_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_735652-MLB46897237089_072021-O-roda-next-54mm-101a-conica-jogo-porca-de-roda-gratis_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_753314-MLB46897199297_072021-O-roda-next-54mm-101a-conica-jogo-porca-de-roda-gratis_1.webp')
        ],
        oldPrice: 80.99,
        price: 78.9,
        caracteristicas: {
            "Marca": 'Next',
            "Modelo": 'Katana 54mm',
            "Cor": 'Branco',
            "Formato da venda": 'Kit',
            "Unidades por kit": '4',
            "Material": 'Poliuretano',
            "Dureza": '52D',
            "Diâmentro": '54 mm'
        },
        productInfo: 'Roda Next 54mm 101a Conica + Jogo Porca De Roda Grátis',
        description: 'Roda de Skate Next 54mm\n\nModelo: Katana\n\nTipo: Street\n\nDureza: 52D - 100A\n\nDiâmetro: 54mm\n\nÁrea de contato: 15mm\n\nLargura: 28mm\n\nBorda: Arredondada\n\nEstampa lateral\n\nCor: Branca\n\nPeso Aproximado: 235g\n\nEmbalagem com 4 rodas\n\nComposição: Poliuretano\n\nMarca: Moska\n\nImagens Meramente Ilustrativas\n\nRef.: 54NXKatana\n\nConteúdo da Embalagem:\n\n1 x jogo de Roda de Skate Next 54mm 52D Katana',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'rodas',
    },
    {
        id: 12,
        name: 'Rodas Longboard 70mm 78a Diversas Cores e Rolamentos Lyons Red',
        priceFisica: 144.96,
        priceJuridica: 140,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_672505-MLU75684269012_042024-O_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_782666-MLU75684269022_042024-O_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_656112-MLU75684210518_042024-O_3.webp')
        ],
        oldPrice: 151.99,
        price: 144.96,
        caracteristicas: {
            "Marca": 'LYONS SKATE',
            "Modelo": '70mm 78a',
            "Cor": 'Vermelho',
            "Desenho": 'Lyons',
            "Formato de venda": 'Kit',
            "Unidade por kit": '4',
            "Material": 'Urethano',
            "Estilo": 'Longboard',
            "Dureza": '78A',
            "Textura da roda": 'Lisa',
            "Diâmetro": '70 mm',
            "Com Luz": 'Não'
        },
        productInfo: 'Rodas Longboard 70mm 78a Diversas Cores e Rolamentos Lyons Red',
        description: 'Rodas Longboard Urethano 70mm 78A são fabricadas em poliuretano de alto nível tecnológico, proporcionando um desempenho adequado para superfícies lisas e velocidades elevadas, com excelente aderência. São recomendadas para as modalidades de speed, cruiser, dancing, slalon e simulador de surf.\n\nESPECIFICAÇÕES:\n\n- Fabricadas em Urethano Fundido High Rebound;\n- Cor: (Escolher na tabela);\n- Diâmetro: 70 mm;\n- Largura: 50 mm;\n- Banda / Rodagem: 48,5 mm;\n- Peso Aproximado: 575 g;\n- Sem Tampografia;\n- Resiliência otimizada;\n- Durabilidade e qualidade para superação nos percursos;\n- Aderência equilibrada;\n- Fabricação Importada.',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'rodas',
    },

    {
        id: 13,
        name: 'Rodas Spitfire 56mm F4 Cônical Full Dureza 101a + Brinde',
        priceFisica: 474.05,
        priceJuridica: 470,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_772393-MLB72364635791_102023-O-rodas-spitfire-56mm-f4-cnical-full-dureza-101a-brinde_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_675405-MLB72299573936_102023-O-rodas-spitfire-56mm-f4-cnical-full-dureza-101a-brinde_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_879237-MLB78818899949_082024-O-rodas-spitfire-56mm-f4-cnical-full-dureza-101a-brinde_3.webp'),
            require('../../Assets/ProductsImg/D_NQ_NP_879237-MLB78818899949_082024-O-rodas-spitfire-56mm-f4-cnical-full-dureza-101a-brinde_4.mp4')

        ],
        oldPrice: 499.99,
        price: 474.05,
        caracteristicas: {
            "Marca": 'Spitfire',
            "Modelo": 'Spitfire 56mm F4 Cônica Full Dureza 101a',
            "Unidades por kit": '4',
            "Material": 'Urethano',
            "Dureza": '101',
            "Diâmetro": '50 mm'
        },
        productInfo: 'Rodas Spitfire 56mm F4 Cônical Full Dureza 101a + Brinde',
        description: 'Descrição\n\nRoda Spitfire Fórmula Four 56mm Cônical Full Dureza 101a Importada + Chave T Brinde\n\nA Spitfire Wheels continua a impulsionar a tecnologia das rodas de skate por meio de novas fórmulas de uretano com destaque para Formula Four e Classic Formula, projetadas especificamente para tipos específicos de skate, oferecendo aos skatistas a oportunidade de escolher as rodas Spitfire com base no fato de gostarem de andar de skate em um parque, nas ruas, no concreto e no asfalto.\n\nProduto Detalhes\nJogo de Rodas Spitfire\nMateriais: Uretano\nDureza: 101A Importada\nModelo: Fórmula Four/ Cônical Full\nTamanho: 56 mm\nCor: Red\n\nGarantia do vendedor: 30 dias',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'rodas',
    },

    {
        id: 14,
        name: 'Roda Skate Moska 58mm 53d Bowls Banks + Parafuso Base 10',
        priceFisica: 157.07,
        priceJuridica: 150,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_750537-MLB46566802958_062021-O-roda-skate-moska-58mm-53d-bowls-banks-parafuso-base-10_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_865128-MLB78388904309_082024-O-roda-skate-moska-58mm-53d-bowls-banks-parafuso-base-10_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_687835-MLB46566895158_062021-O-roda-skate-moska-58mm-53d-bowls-banks-parafuso-base-10_3.webp'),
            require('../../Assets/ProductsImg/D_NQ_NP_687835-MLB46566895158_062021-O-roda-skate-moska-58mm-53d-bowls-banks-parafuso-base-10_4.mp4')
        ],
        oldPrice: 165.99,
        price: 157.07,
        caracteristicas: {
            "Marca": 'Moska',
            "Modelo": 'Bowls Banks',
            "Formato de venda": 'Kit',
            "Unidade por kit": '4',
            "Material": 'Poliuretano',
            "Dureza": '53d',
            "Diâmetro": '5,8 cm'
        },
        productInfo: 'Roda Skate Moska 58mm 53d Bowls Banks + Parafuso Base 10',
        description: 'Roda Skate\n\nMarca: Moska\nModelo: Bowls Banks\nTamanho: 58mm\nDureza: 53d\nJogo composto por 4 rodas + Adesivo moska\n100% novo e original',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'rodas',
    },

    {
        id: 15,
        name: 'Roda Skate Chocolate 51mm 99a Promocional + Brinde',
        priceFisica: 159.9,
        priceJuridica: 150,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_870491-MLB80398140290_112024-O-roda-skate-chocolate-51mm-99a-promocional-brinde_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_770353-MLB80398160218_112024-O-roda-skate-chocolate-51mm-99a-promocional-brinde_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_966426-MLB80398140286_112024-O-roda-skate-chocolate-51mm-99a-promocional-brinde_3.webp'), require('../../Assets/ProductsImg/D_NQ_NP_779080-MLB80657362263_112024-O-roda-skate-chocolate-51mm-99a-promocional-brinde_4.webp'),
            require('../../Assets/ProductsImg/Screencast From 2025-06-22 13-12-29.mp4')
        ],
        oldPrice: 169.9,
        price: 159.9,
        caracteristicas: {
            "Marca": 'Chocolate',
            "Modelo": 'Street',
            "Formato de venda": 'Kit',
            "Unidades por kit": '4',
            "Material": 'Urethano',
            "Dureza": '99a',
            "Diâmetro": '5,1 cm'
        },
        productInfo: 'Roda Skate Chocolate 51mm 99a Promocional + Brinde',
        description: 'Roda Skate Chocolate 51mm 99a + Porcas De Roda Brinde\n\n*PROMOÇÃO VÁLIDA APENAS PARA A MEDIDA 51MM ANUNCIADAS AQUI.\n\n- Marca: Chocolate\n- Medida: 51mm\n- Dureza: 99a\n- Cor: Branca\n- Modelos: Street\n- Área de contato Classic: 16mm\n- Largura Classic: 31mm\n\nIndicada para Street.\n\nBoa velocidade e aderência.\n\nPara andar em superfícies lisas\n\nCom a mesma qualidade dos shapes de skate, as rodas de skate da Chocolate Skateboards é outro destaque da marca.\n\nCom uma grande variedade de modelos e tamanhos as rodas da Chocolate Skateboards vem conquistando cada vez mais os skatistas amadores e profissionais, sendo na rua, skatepark, bowl e vertical.\n\nProdutos de alta qualidade projetados por skatistas especificamente para o skate.\n\nProduto 100% Original com nota Fiscal.\n\nGarantia do vendedor: 10 dias',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'rodas',
    },

    {
        id: 16,
        name: 'Roda De Skate Next Wsc Wide Side Cut 53mm Dureza 100a',
        priceFisica: 78.9,
        priceJuridica: 70,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_926697-MLB70042304476_062023-O-roda-de-skate-next-wsc-wide-side-cut-53mm-dureza-100a_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_743842-MLB70062367775_062023-O-roda-de-skate-next-wsc-wide-side-cut-53mm-dureza-100a_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_932448-MLB78211885022_082024-O-roda-de-skate-next-wsc-wide-side-cut-53mm-dureza-100a_3.webp')
        ],
        oldPrice: 81.99,
        price: 78.99,
        caracteristicas: {
            "Marca": 'Next',
            "Modelo": 'WSC Wide Side Cut 53mm',
            "Unidades por embalagem": '4',
            "Material": 'Poliuretano',
            "Dureza": '100a',
            "Diâmetro": '53 mm'
        },
        productInfo: 'Roda De Skate Next Wsc Wide Side Cut 53mm Dureza 100a',
        description: 'Rodas de Skate Brancas Next 53mm Wide Side Cut com dureza 100A fabricadas pela Moska\n\nDesde 1988 fabricando rodinhas a Moska se tornou referência no Brasil. Suas rodinhas são fabricadas com os melhores materiais e tem durabilidade igual ou superior as melhores marcas importadas.\n\n\nDados Técnicos:\n- Modelo: NEXT WIDE SIDE CUT 53\n- Medida: 53mm\n- Shore: 100A\n- Tipo: Street\n- Largura: 33mm\n- Banda / Rodagem: 18mm\n\nProduto 100% original com garantia e nota fiscal.',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'rodas',
    },
    {
        id: 17,
        name: 'Roda De Skate Next 53mm 101a Moska + Rolamento Black Sheep',
        priceFisica: 120.96,
        priceJuridica: 120.96,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_731111-MLB71635726573_092023-O-roda-de-skate-next-53mm-101a-moska-rolamento-black-sheep_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_711883-MLB70797018279_072023-O-roda-de-skate-next-53mm-101a-moska-rolamento-black-sheep_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_939776-MLB71635334525_092023-O-roda-de-skate-next-53mm-101a-moska-rolamento-black-sheep_3.webp'), require('../../Assets/ProductsImg/D_NQ_NP_825054-MLB71586772900_092023-O-roda-de-skate-next-53mm-101a-moska-rolamento-black-sheep_4.webp')
        ],
        oldPrice: 125.99,
        price: 12.96,
        caracteristicas: {
            "Marca": 'Next',
            "Modelo": '53mm',
            "Formato de venda": 'Kit',
            "Unidades por kit": '4',
            "Material": 'Urethano',
            "Dureza": '52D',
            "Diâmetro": '5,3 cm'
        },
        productInfo: 'Roda De Skate Next 53mm 101a Moska + Rolamento Black Sheep',
        description: 'Rodas de Skate Brancas 53mm com dureza 52D 101a fabricadas pela Moska\n+\nRolamento Black Sheep Precision com espaçadores\n\n\nDesde 1988 fabricando rodinhas a Moska se tornou referência no Brasil. Suas rodinhas são fabricadas com os melhores materiais e tem durabilidade igual ou superior as melhores marcas importadas.\n\n\nDados Técnicos:\n\n- Modelo: NEXT II\n\n- Medida: 53mm\n\n- Shore: 52D (101a)\n\n- Tipo: Street\n\n- Largura: 30mm\n\n- Banda / Rodagem: 15mm\n\nRolamento Black sheep Skate Red 608zz Skate Ou Longboard Precisão\n\nNovos Rolamentos importados Black Sheep !\n\nO Rolamento de precisão Black Sheep possui alta durabilidade e precisão, garantindo uma grande velocidade para o seu skate, patins ou patinete. São rolamentos de precisão superior aos rolamentos Abec.\n\nFeito em aço garante proteção contra ferrugem e a coroa em Nylon, que retém poeira e areia, o rolamento Black Sheep é a escolha perfeita para seu rolê. Além disso é feito com 7 esferas em aço que permite aguentar alta rotação e velocidade sem perder a resistência, suportando o impactos das manobras.\n\nRolamentos para Skate-Patins-Waweboard- Esporte profissional\n\nDESCRIÇÃO TÉCNICA\n\n\nMarca: Black Sheep\nModelo: - alta precisão\nPara eixo com diamêtro: 8mm\nSelagem: Aberto com gaiola em Nylon\nDesmontável: Sim\nMaterial: Aço Carbono\nQuantidade por embalagem: 8 rolamentos\nFabricação: China',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'rodas',
    },

    {
        id: 18,
        name: 'Capacete Skate Patins Bel Sports',
        priceFisica: 72,
        priceJuridica: 72,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_909282-MLB77165456814_072024-O-capacete-skate-patins-bel-sports_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_713256-MLB77165044366_072024-O-capacete-skate-patins-bel-sports_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_877733-MLB46194537464_052021-O-capacete-skate-patins-bel-sports_3.webp'),
            require('../../Assets/ProductsImg/D_NQ_NP_875256-MLB77165073494_072024-O-capacete-skate-patins-bel-sports_4.webp'),
            require('../../Assets/ProductsImg/D_NQ_NP_955748-MLB77165073538_072024-O-capacete-skate-patins-bel-sports_5.webp')
        ],
        oldPrice: 79.99,
        price: 72,
        caracteristicas: {
            "Marca": 'Lyons',
            "Linha": 'Profissional',
            "Idade": 'Adultos',
            "Desenho": 'Preto',
            "Peso": '0,38g',
            "Com alças ajustáveis": 'Sim',
            "Com viseira removível": 'Não',
            "Com luz": 'Não',
            "Com oculos de proteção": 'Não',
            "Com ventilação": 'Sim',
            "Uso recomendados": 'Bike patins skate',
            "Gênero": 'Sem gênero',
            "Material": 'EPS',
            "Idade míníma recomendada": '8 anos',
            "É kit": 'Não'
        },
        productInfo: 'Capacete Skate Patins Bel Sports',
        description: 'Capacete iniciante P - M - G\n\nCasco em ABS\n\nRevestimento dual layer\n\nem EVA + espuma em PU\n\nResistência a impactos\n\nEntrada de ar para maior conforto e ventilação ,\n\n(P) Circuferência 48-52 cm\n\n(M) Circunferência 52 - 56 cm\n\n(G) Circunferência 56 - 60 cm',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'capacetes',
    },

    {
        id: 19,
        name: 'Kit Proteção Profissional Skate Patins Bike P - M - G',
        priceFisica: 147.34,
        priceJuridica: 147.34,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_685211-MLB69587139403_052023-O-kit-proteco-profissional-skate-patins-bike-p-m-g_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_973370-MLB81560666516_012025-O-kit-proteco-profissional-skate-patins-bike-p-m-g_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_667981-MLB81831000527_012025-O-kit-proteco-profissional-skate-patins-bike-p-m-g_3.webp'),
            require('../../Assets/ProductsImg/ScreencastFrom2025-06-23 19-39-02.mp4')
        ],
        oldPrice: 155.99,
        price: 147.34,
        caracteristicas: {
            "Marca": 'Lyons',
            "Modelo": 'KIT PROTEÇÃO PROFISIONAL',
            "Quantidade de peças": '6',
            "Gênero": 'Sem gênero',
            "É kit de fabrica": 'Sim'
        },
        productInfo: 'Kit Proteção Profissional Skate Patins Bike P - M - G',
        description: 'KIT PROTEÇÃO SKATE LYONS (TAMANHOS P-M-G)\n\nCOMPOSTO POR :\n\n2 JOELHEIRA\n\n2 COTOVELEIRAS\n\n2 WRIST GUARD\n\nSe você está iniciando no skate é sempre bom ter um Kit de proteção em mãos, porque mais cedo ou mais tarde, você vai cair e nada melhor que um kit de proteção Fomo Vertical para ajudar amortecer a queda e evitar lesões mais sérias no seu corpo.\n\nEsse kit de proteção da LYONS é indicada para adultos, possui um par de cotoveleiras, um par de joelheiras e um par de wrist guard, que serve para proteger os punhos. Todas os equipamentos de proteção possuem ajustes para deixar no tamanho ideal para você.',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'kit proteção',
    },

    {
        id: 20,
        name: 'Kit Proteção Adulto Vertical Profissional Completo',
        priceFisica: 197.79,
        priceJuridica: 197.79,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_713713-MLB50987377568_082022-O-kit-proteco-adulto-vertical-profissional-completo_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_890793-MLB50987395514_082022-O-kit-proteco-adulto-vertical-profissional-completo_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_810111-MLB50987402484_082022-O-kit-proteco-adulto-vertical-profissional-completo_3.webp')
        ],
        oldPrice: 200,
        price: 197.79,
        caracteristicas: {
            "Marca": 'Fomo Vertical',
            "Modelo": 'KIT PROTEÇÃO PROFISIONAL',
            "Idade": 'Adultos',
            "Quantidade de peças": '6',
            "Gênero": 'Sem gênero',
            "Esportes recomendados": 'Bike, patins, skate, patinete',
            "É kit de fabrica": 'Sim'
        },
        productInfo: 'Kit Proteção Adulto Vertical Profissional Completo',
        description: 'KIT PROTEÇÃO SKATE ADULTO FOMO VERTICAL\n\nCOMPOSTO POR :\n\n2 JOELHEIRA COM CASQUILHO REMOVÍVEL\n\n2 COTOVELEIRAS\n\n2 WRIST GUARD\n\nSe você está iniciando no skate é sempre bom ter um Kit de proteção em mãos, porque mais cedo ou mais tarde, você vai cair e nada melhor que um kit de proteção Fomo Vertical para ajudar amortecer a queda e evitar lesões mais sérias no seu corpo.\n\nEsse kit de proteção da Fomo Vertical é indicada para adultos, possui um par de cotoveleiras, um par de joelheiras e um par de wrist guard, que serve para proteger os punhos. Todas os equipamentos de proteção possuem ajustes para deixar no tamanho ideal para você.\n\nGarantia do vendedor: 30 dias',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'kit proteção',
    },

    {
        id: 21,
        name: 'Kit De Espaçador Em Aço Para Skate Com Porcas E Arruelas',
        priceFisica: 14.9,
        priceJuridica: 14.9,
        imageUrl: require('../../Assets/ProductsImg/D_NQ_NP_678803-MLB75546904658_042024-O-kit-de-espacador-em-aco-para-skate-com-porcas-e-arruelas_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/D_NQ_NP_885878-MLB77627108981_072024-O-kit-de-espacador-em-aco-para-skate-com-porcas-e-arruelas_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/D_NQ_NP_934173-MLB77627148069_072024-O-kit-de-espacador-em-aco-para-skate-com-porcas-e-arruelas_3.webp')
        ],
        oldPrice: 14.9,
        price: 14.9,
        caracteristicas: {
            "Marca": 'Lyons',
            "Modelo": 'Espaçador',
            "Formato de venda": 'kit',
            "Unidades por kit": '4',
            "Material": 'Aço',
            "Tipo de proteção": 'Proteção para rolamentos',
            "Diâmetro externo": '15 mm',
            "Diâmetro interno": '8 mm',
            "Largura": '1,05'
        },
        productInfo: 'Kit De Espaçador Em Aço Para Skate Com Porcas E Arruelas',
        description: 'Espaçador para skate\n\n4 ESPAÇADOR\n4 PORCAS RODA\n8 ARRUELAS DOS ROLAMENTOS\n\nMedida: 8,2 x 10 mm\nMarca: Hardware\nMaterial: aço\npode ser utilizado em longboard , patins',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'kit espaçador',
    },


    {
        id: 22,
        name: 'Rolamento Black Sheep Red 608 Precisão Skate Ou Longboard Linha Silver Melhor Qualidade Do Mercado',
        priceFisica: 49.5,
        priceJuridica: 49.5,
        imageUrl: require('../../Assets/ProductsImg/rolamento-black-sheep_1.webp'),
        secondaryImageUrl: require('../../Assets/ProductsImg/rolamento-black-sheep_2.webp'),
        gallery: [
            require('../../Assets/ProductsImg/rolamento-black-sheep_3.webp'), require('../../Assets/ProductsImg/rolamento-black-sheep_4.webp'), require('../../Assets/ProductsImg/rolamento-black-sheep_6.webp')
        ],
        oldPrice: 49.5,
        price: 49.5,
        caracteristicas: {
            "Marca": 'Black Sheep',
            "Modelo": '608',
            "Cor": 'Vermelho',
            "Formato de venda": 'Unidade',
            "Material": 'Aço carbono',
            "Diâmetro externo": '22 mm',
            "Diâmetro interno": '8 mm'
        },
        productInfo: 'Rolamento Black Sheep Red 608 Precisão Skate Ou Longboard Linha Silver Melhor Qualidade Do Mercado',
        description: 'Rolamento Black Sheep Redédalinha Silver de um rolamento de precisão, que são os rolamentos de melhor qualidade do mercado. Fora sua estética, é um rolamento de Alta Precisão muito superior aos rolamentos ABEC encontrados no mercado.\nRolamento que possui coroa de Nylon, proporcionando maior facilidade de limpeza e maior velocidade. Fabricado com 7 esferas de aço, aumentando sua durabilidade. Os Rolamento Black Sheep Profissional Red, proporciona um excelente custo-benefício.\nAlém disso, é um produto importado, garantindo os padrões de qualidade e eficiência. Esse rolamento pode ser utilizado em Skate,Longboarde Patins.\nDados Técnicos:\n-Rolamentos de precisão.\n-Fabricado para Skates, Longboards e Patins;\n-Lubrificado com óleo especial de baixa viscosidade;\n-Alta resistência e velocidade;\n-QualidadeSuperioraos Rolamentos ABEC\n-Blindagem para alta performance;\n-Coroas retentoras das esferas em nylon com bloqueadores de poeira e areia;\n- Escudo removível para limpeza;\n- Produto Importado;\n- Marca Nacional;\n- Esferas de aço inoxidável, tratadas termicamente para manter sua força, dureza e forma simétrica, proporcionando menos atrito e mais velocidade;\n- Possui superfície polida, para garantir maior durabilidade;\n- Embalagem com 8 Rolamentos.\nMedidas dos Rolamentos:\n- Diâmetro externo: 22mm;\n- Diâmetro interno: 08mm;\n- Largura: 07mm;\n- Peso: 11g (cada rolamento);\n- Material: Aço inoxidável;\n- Cor: Prata.\nOBS.: ANÚNCIO REFERENTE AO JOGO COM 8 ROLAMENTOS.',
        peso_kg: 0,
        altura_cm: 0,
        largura_cm: 0,
        comprimento_cm: 0,
        category: 'rolamentos',
    },





];

export default DataProducts;