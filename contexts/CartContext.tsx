import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { CartItem, Product, Order, User, Address } from '../types';

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    checkout: (user: User, address: Address, finalTotal: number) => void;
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        const storedCart = localStorage.getItem('memoryBoxCart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('memoryBoxCart', JSON.stringify(cartItems));
    }, [cartItems]);


    const addToCart = (product: Product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === productId ? { ...item, quantity } : item
                )
            );
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const checkout = (user: User, address: Address, finalTotal: number) => {
        if (cartItems.length === 0) return;

        const newOrder: Order = {
            id: `order-${Date.now()}`,
            userId: user.id,
            userName: user.name,
            items: cartItems,
            total: finalTotal,
            date: new Date().toISOString(),
            address: address,
        };

        try {
            const existingOrders: Order[] = JSON.parse(localStorage.getItem('memoryBoxOrders') || '[]');
            existingOrders.unshift(newOrder);
            localStorage.setItem('memoryBoxOrders', JSON.stringify(existingOrders));
        } catch (error) {
            console.error("Failed to save order:", error);
            localStorage.setItem('memoryBoxOrders', JSON.stringify([newOrder]));
        }

        clearCart();
    };

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, isCartOpen, openCart, closeCart, checkout }}>
            {children}
        </CartContext.Provider>
    );
};