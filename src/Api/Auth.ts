// frontend/src/api/auth.ts
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

interface User {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
}

interface AuthResponse {
  message: string;
  user?: User;
}

export const registerUser = async (userData: {
  nome: string;
  telefone?: string;
  email: string;
  senha: string;
}): Promise<AuthResponse> => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/register`,
      userData
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Erro ao cadastrar.";
  }
};

export const loginUser = async (credentials: {
  email: string;
  senha: string;
}): Promise<AuthResponse> => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/login`,
      credentials
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Erro ao fazer login.";
  }
};
