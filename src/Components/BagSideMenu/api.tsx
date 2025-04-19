// api.ts
import { BagItem as ShoppingBagItem } from '../../Contexts/ShoppingBagContext'; // Importe a interface correta do seu contexto

const API_URL_SANDBOX = 'https://sandbox.melhorenvio.com.br/api/v2';
const ACCESS_TOKEN = 'kXVK2pVbJ9p753STIysaopZe9xvqzz8Y8yUmMhGp'; // Insira sua chave de acesso do Sandbox aqui
const EMAIL = 'kali.sonic.developer@gmail.com'; // Insira seu email cadastrado
const CEP_ORIGEM = 'SEU_CEP_DE_ORIGEM'; // Insira o CEP de origem

export const calculateShipping = async (cep: string, bagItems: ShoppingBagItem[]) => {
    try {
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

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Erro na requisição de frete:", errorData);
            throw new Error(`Erro na cotação de frete: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error: any) {
        console.error("Erro ao chamar a API de frete:", error);
        throw error;
    }
};

// Definição da interface BagItem (certifique-se de que corresponde ao seu contexto)
export interface BagItem { // Exportando a interface para uso em outros arquivos, se necessário
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