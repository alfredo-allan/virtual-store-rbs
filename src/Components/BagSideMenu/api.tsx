// api.ts
import { BagItem as ShoppingBagItem } from '../../Contexts/ShoppingBagContext';

const API_URL_SANDBOX = 'https://sandbox.melhorenvio.com.br/api/v2';
const ACCESS_TOKEN = 'SEU_ACCESS_TOKEN'; // Substitua pela sua chave real
const EMAIL = 'SEU_EMAIL'; // Substitua pelo seu email real
const CEP_ORIGEM = 'SEU_CEP_DE_ORIGEM'; // Substitua pelo seu CEP de origem real

export const calculateShipping = async (cep: string, bagItems: ShoppingBagItem[]) => {
    try {
        console.log("Iniciando requisição de frete...");
        console.log("URL:", `${API_URL_SANDBOX}/meus/cotacoes`);
        console.log("CEP Destino:", cep);
        console.log("Itens na sacola:", bagItems);
        console.log("Token:", ACCESS_TOKEN ? 'Token presente' : 'Token ausente!');
        console.log("Email:", EMAIL);
        console.log("CEP Origem:", CEP_ORIGEM);

        const response = await fetch(`${API_URL_SANDBOX}/meus/cotacoes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'X-Email': EMAIL,
            },
            body: JSON.stringify({
                postal_code: CEP_ORIGEM,
                destination: {
                    postal_code: cep,
                },
                products: bagItems.map(item => ({
                    name: item.name,
                    quantity: item.quantity,
                    weight: item.peso_kg || 0.1,
                    width: item.largura_cm || 10,
                    height: item.altura_cm || 5,
                    length: item.comprimento_cm || 15,
                })),
                services: [],
            }),
        });

        console.log("Resposta da API:", response);

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Erro na requisição de frete (não OK):", response.status, errorText);
            throw new Error(`Erro na cotação de frete: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log("Dados da API:", data);
        return data;
    } catch (error: any) {
        console.error("Erro ao chamar a API de frete:", error);
        throw error;
    }
};

export interface BagItem {
    id: number | string;
    name: string;
    price?: number;
    imageUrl?: string;
    quantity: number;
    color?: string;
    size?: string;
    peso_kg?: number;
    altura_cm?: number;
    largura_cm?: number;
    comprimento_cm?: number;
}