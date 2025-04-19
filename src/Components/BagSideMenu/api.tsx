// api.ts
import { BagItem as ShoppingBagItem } from '../../Contexts/ShoppingBagContext'; // Importe a interface correta do seu contexto

const API_URL_SANDBOX = 'https://sandbox.melhorenvio.com.br/api/v2';
const ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTYiLCJqdGkiOiJlYTIwZmIwN2Q1M2M5ODIxMWI5OGQxZWMzYTYxMDc0MzQ2YjJjNjAyZGI2YjZkMGJhZmE4ZmZiYmQyOTcyZWFkZTdhYWYzMmNiZjM0M2JiMyIsImlhdCI6MTc0NTA5NjAzNC45MjM2MzgsIm5iZiI6MTc0NTA5NjAzNC45MjM2NDEsImV4cCI6MTc3NjYzMjAzNC45MDUwNzUsInN1YiI6IjllYjZlMTRlLTY1NmItNDE5Zi1iNmQxLTE3ZDViNjI4ZGNlYSIsInNjb3BlcyI6WyJjYXJ0LXJlYWQiLCJjYXJ0LXdyaXRlIiwiY29tcGFuaWVzLXJlYWQiLCJjb21wYW5pZXMtd3JpdGUiLCJjb3Vwb25zLXJlYWQiLCJjb3Vwb25zLXdyaXRlIiwibm90aWZpY2F0aW9ucy1yZWFkIiwib3JkZXJzLXJlYWQiLCJwcm9kdWN0cy1yZWFkIiwicHJvZHVjdHMtZGVzdHJveSIsInByb2R1Y3RzLXdyaXRlIiwicHVyY2hhc2VzLXJlYWQiLCJzaGlwcGluZy1jYWxjdWxhdGUiLCJzaGlwcGluZy1jYW5jZWwiLCJzaGlwcGluZy1jaGVja291dCIsInNoaXBwaW5nLWNvbXBhbmllcyIsInNoaXBwaW5nLWdlbmVyYXRlIiwic2hpcHBpbmctcHJldmlldyIsInNoaXBwaW5nLXByaW50Iiwic2hpcHBpbmctc2hhcmUiLCJzaGlwcGluZy10cmFja2luZyIsImVjb21tZXJjZS1zaGlwcGluZyIsInRyYW5zYWN0aW9ucy1yZWFkIiwidXNlcnMtcmVhZCIsInVzZXJzLXdyaXRlIiwid2ViaG9va3MtcmVhZCIsIndlYmhvb2tzLXdyaXRlIiwid2ViaG9va3MtZGVsZXRlIiwidGRlYWxlci13ZWJob29rIl19.YFK242Q-ZWu_u-RV-Ep3CypdfiTHR1ow7lbgy5PORTNZ4F0e7AD1ZSIW1t58iAf2BIej45AQpruMriOm4Iai7k9Dgp4wNyLOoG7X521O7yjYU1ZQmdNGlZvGXygNhqrf4O8agsGrVAjf9XbcJ5CwDiyyISusMzU7dyuHnPWoxAqtK96wGiTnPkMf1GpxpqG9byNzaCmy8zFnDGZdRGeHkOwomnavzVH7yYsudTI4t1LiKQN88lCG63j_8RCFIMuafxI1quxvKSKU6N5di6FECUBMT0JY6-To1pYI5aLhLs6actEto6d_nqUtrS07zJMx5UuEqsMj4748MeI_WnXeCbvCIH6pjC2HyBeuJzicsTkqztJfG_u5efQM8Vm1zvJaOxJ_lkprHraqGeCDR2xCeXAgHOyEAcw2dQk1JJqoAOu35FnuWc9ivT2U-dVkcXs44HCtJdQU5IYAy6a78bjMxZ_0epAGQvOhRbIiCtqPna0M6OhSlbZP9M12EAlgMaElcrEmPc9HCF2w_g4KDzcZ0xWToxKTlplSKPDlLiHfcNEyi6wSCYcGKUfqZQrsH1doFgdTGh6bKqGzMrjM-bCamiOs96YlkqtzF6uVreXDMh_MnHLh2FxRuI9ArW7vvB22sAKV-A-g4c0Yvbvepvdvu7XYdefNPU4emRKkptMoXzo'; // Insira sua chave de acesso do Sandbox aqui
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