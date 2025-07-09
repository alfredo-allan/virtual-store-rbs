import React, { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from './AuthContext'; // Só importei o hook, não a interface

export interface BagItem {
    id: string | number;
    name: string;
    quantity: number;
    [key: string]: any;
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
    const { loggedInUser } = useAuth();

    useEffect(() => {
        if (loggedInUser) {
            const storedBag = localStorage.getItem(`shoppingBag_${loggedInUser.id}`);
            if (storedBag) {
                setBagItems(JSON.parse(storedBag));
            }
        } else {
            setBagItems([]);
        }
    }, [loggedInUser]);

    useEffect(() => {
        if (loggedInUser) {
            localStorage.setItem(`shoppingBag_${loggedInUser.id}`, JSON.stringify(bagItems));
        } else {
            localStorage.removeItem(`shoppingBag_null`);
        }
    }, [bagItems, loggedInUser]);

    const addItem = (item: Omit<BagItem, 'quantity'> & { quantity?: number }) => {
        setBagItems(prevItems => {
            const itemIndex = prevItems.findIndex(i => i.id === item.id);
            if (itemIndex > -1) {
                const updatedItems = [...prevItems];
                const existingItem = updatedItems[itemIndex];
                updatedItems[itemIndex] = {
                    ...existingItem,
                    quantity: (existingItem.quantity || 1) + (item.quantity || 1),
                };
                return updatedItems;
            }
            return [...prevItems, { ...item, quantity: item.quantity ?? 1 } as BagItem];
        });
    };


    const removeItem = (itemId: string | number) => {
        setBagItems(prev => prev.filter(item => item.id !== itemId));
    };

    const updateItemQuantity = (itemId: string | number, quantity: number) => {
        setBagItems(prev =>
            prev.map(item =>
                item.id === itemId ? { ...item, quantity } : item
            )
        );
    };

    const clearBag = () => {
        setBagItems([]);
    };

    return (
        <ShoppingBagContext.Provider
            value={{ bagItems, addItem, removeItem, updateItemQuantity, clearBag }}
        >
            {children}
        </ShoppingBagContext.Provider>
    );
};

export const useShoppingBag = () => {
    const context = useContext(ShoppingBagContext);
    if (!context) {
        throw new Error('useShoppingBag must be used within a ShoppingBagProvider');
    }
    return context;
};
