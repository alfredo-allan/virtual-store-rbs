// frontend/src/Api/api.ts

import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000"; // Substitua pela sua URL base da API

interface RegistrationData {
  nome: string;
  telefone?: string;
  email: string;
  senha: string;
  cpf?: string;
  cnpj?: string;
  razao_social?: string;
  endereco?: {
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
  };
}

export const registerClient = async (userData: RegistrationData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/clients`, userData);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao registrar cliente:", error);
    throw (
      error.response?.data ||
      error.message ||
      "Erro desconhecido ao registrar cliente."
    );
  }
};

interface LoginData {
  email: string;
  senha: string;
}

export interface LoggedInUserResponse {
  id: number;
  nome: string;
  email: string;
  tipoPessoa?: 'fisica' | 'juridica';
}

export const loginClient = async (credentials: LoginData): Promise<LoggedInUserResponse> => {
  try {
    const response = await axios.post<LoggedInUserResponse>(
      `${API_BASE_URL}/clients/login`,
      credentials
    );
    return response.data;
  } catch (error: any) {
    console.error("Erro ao fazer login:", error);
    throw (
      error.response?.data ||
      error.message ||
      "Erro desconhecido ao fazer login."
    );
  }
};

// Outras funções de API podem ser adicionadas aqui, como buscar clientes, etc.