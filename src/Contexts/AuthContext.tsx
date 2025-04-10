import React, { createContext, useState, useEffect, useContext } from 'react';

// Defina a interface para o usuário logado (corresponda ao seu backend)
interface LoggedInUser {
    id: number;
    nome: string;
    email: string;
    // Adicione outros campos conforme necessário
}

export interface AuthContextType {
    loggedInUser: LoggedInUser | null;
    login: (user: LoggedInUser) => void;
    logout: () => void;
}

// Crie o contexto de autenticação com um valor padrão (undefined)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Crie o Provider do contexto
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null);

    useEffect(() => {
        // Ao montar o Provider, tente carregar o usuário logado do localStorage
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            try {
                setLoggedInUser(JSON.parse(storedUser));
            } catch (error) {
                console.error('Erro ao analisar usuário do localStorage:', error);
                localStorage.removeItem('loggedInUser'); // Limpar se houver um erro
            }
        }
    }, []);

    // Função para fazer login do usuário e atualizar o estado e o localStorage
    const login = (user: LoggedInUser) => {
        setLoggedInUser(user);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
    };

    // Função para fazer logout do usuário e limpar o estado e o localStorage
    const logout = () => {
        setLoggedInUser(null);
        localStorage.removeItem('loggedInUser');
    };

    // Forneça o estado e as funções através do contexto
    return (
        <AuthContext.Provider value={{ loggedInUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Crie um hook personalizado para usar o contexto de autenticação facilmente
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};