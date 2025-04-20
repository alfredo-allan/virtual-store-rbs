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
];

export default DataProducts;