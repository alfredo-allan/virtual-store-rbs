// src/Components/BagSideMenu/api.ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000', // ajuste se for deployado
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // se usar sessão/autenticação
});

export interface ProductForShipping {
    id: string | number;
    name?: string;
    quantity: number;
    weight: number;
    length: number;
    height: number;
    width: number;
}

export interface ShippingCompany {
    id: number;
    name: string;
    picture: string;
}

export interface ShippingOption {
    id: number;
    name: string;
    price: string;
    delivery_time: number;
    company: ShippingCompany;
    error?: string; // caso a transportadora não atenda o trecho
}

export async function calculateShipping(
    cep: string,
    products: ProductForShipping[]
): Promise<ShippingOption[]> {
    try {
        console.log('[api.ts] Enviando para cálculo de frete:', { cep, produtos: products });

        const response = await api.post('/shipping', {
            cep,
            produtos: products,
        });

        console.log('[api.ts] Resposta recebida:', response.data);

        const data = response.data;

        // Verifica se retornou lista válida
        if (Array.isArray(data)) {
            return data
                .filter((item) => !item.error) // só retorna opções válidas
                .map((item) => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    delivery_time: item.delivery_time,
                    company: item.company,
                }));
        }

        console.warn('[api.ts] Resposta inesperada da API:', data);
        return [];
    } catch (error: any) {
        console.error('[api.ts] Erro ao calcular frete:', error.response?.data ?? error.message);
        throw new Error('Erro ao calcular o frete. Veja o console.');
    }
}
