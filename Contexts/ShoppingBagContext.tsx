import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContextType, useAuth } from './AuthContext'; // Importe a interface e o hook

// Define a estrutura de um item na sacola
export interface BagItem {
    id: string | number;
    name: string; // Adicione outras propriedades conforme necessário
    quantity: number;
    [key: string]: any; // Permite outras propriedades dinamicamente
}

interface ShoppingBagContextProps {
    bagItems: BagItem[];
    addItem: (item: Omit<BagItem, 'quantity'> & { quantity?: number }) => void;
    removeItem: (itemId: string | number) => void;
    updateItemQuantity: (itemId: string | number, quantity: number) => void;
    clearBag: () => void;
}

export const ShoppingBagContext = createContext<ShoppingBagContextProps | undefined>(undefined);

interface ShoppingBagProviderProps {
    children: React.ReactNode;
}

export const ShoppingBagProvider: React.FC<ShoppingBagProviderProps> = ({ children }) => {
    const [bagItems, setBagItems] = useState<BagItem[]>([]);
    const { loggedInUser } = useAuth(); // Use o hook personalizado para acessar o usuário

    useEffect(() => {
        // Carregar a sacola do localStorage ao montar o componente
        const storedBag = localStorage.getItem(`shoppingBag_${loggedInUser?.id}`);
        if (storedBag && loggedInUser) {
            setBagItems(JSON.parse(storedBag));
        } else if (!loggedInUser) {
            // Limpar a sacola se o usuário deslogar
            setBagItems([]);
        }
    }, [loggedInUser]);

    useEffect(() => {
        // Salvar a sacola no localStorage sempre que ela mudar e houver um usuário logado
        if (loggedInUser) {
            localStorage.setItem(`shoppingBag_${loggedInUser.id}`, JSON.stringify(bagItems));
        } else {
            // Limpar o localStorage se não houver usuário logado
            localStorage.removeItem(`shoppingBag_null`); // Use uma chave consistente para quando não há usuário
        }
    }, [bagItems, loggedInUser]);

    const addItem = (item: Omit<BagItem, 'quantity'> & { quantity?: number }) => {
        setBagItems((prevItems) => {
            const itemIndex = prevItems.findIndex(i => i.id === item.id);
            if (itemIndex > -1) {
                const updatedItems = [...prevItems];
                updatedItems[itemIndex] = { ...updatedItems[itemIndex], quantity: (updatedItems[itemIndex].quantity || 1) + (item.quantity || 1) };
                return updatedItems;
            }
            return [...prevItems, { ...item, quantity: item.quantity || 1 } as BagItem];
        });
    };

    const removeItem = (itemId: string | number) => {
        setBagItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };

    const updateItemQuantity = (itemId: string | number, quantity: number) => {
        setBagItems((prevItems) =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, quantity: quantity } : item
            )
        );
    };

    const clearBag = () => {
        setBagItems([]);
    };

    return (
        <ShoppingBagContext.Provider value={{
            bagItems,
            addItem,
            removeItem,
            updateItemQuantity,
            clearBag,
        }}>
            {children}
        </ShoppingBagContext.Provider>
    );
};

// Hook personalizado para usar o contexto
export const useShoppingBag = () => {
    const context = useContext(ShoppingBagContext);
    if (!context) {
        throw new Error('useShoppingBag must be used within a ShoppingBagProvider');
    }
    return context;
};