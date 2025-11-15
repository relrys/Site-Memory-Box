import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';

const CartModal: React.FC = () => {
    const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
    const { isAuthenticated, openAuthModal, user } = useContext(AuthContext);
    const [isRendered, setIsRendered] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isCartOpen) {
            setIsRendered(true);
        }
    }, [isCartOpen]);

    const onAnimationEnd = () => {
        if (!isCartOpen) {
            setIsRendered(false);
        }
    };

    if (!isRendered) return null;

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    const handleCheckout = () => {
        if (!isAuthenticated || !user) {
            closeCart();
            openAuthModal();
        } else {
            closeCart();
            navigate('/checkout');
        }
    };

    return (
        <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end ${isCartOpen ? 'animate-fadeIn' : 'animate-fadeOut'}`} 
            onClick={closeCart}
            onAnimationEnd={onAnimationEnd}
        >
            <div 
                className={`bg-white shadow-xl w-full max-w-md h-full flex flex-col ${isCartOpen ? 'animate-slideInRight' : 'animate-slideOutRight'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-bold text-brand-dark">Seu Carrinho</h2>
                    <button onClick={closeCart} className="text-gray-400 hover:text-gray-600">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <h3 className="text-xl font-semibold text-brand-dark">Seu carrinho está vazio</h3>
                        <p className="text-brand-text mt-2">Adicione produtos para vê-los aqui.</p>
                    </div>
                ) : (
                    <div className="flex-grow overflow-y-auto p-6 space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center space-x-4">
                                <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-md" />
                                <div className="flex-grow">
                                    <h4 className="font-bold text-brand-dark">{item.name}</h4>
                                    <p className="text-sm text-brand-text">R$ {item.price.toFixed(2)}</p>
                                    <div className="flex items-center mt-2">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="border rounded-md px-2 py-1">-</button>
                                        <span className="px-3">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="border rounded-md px-2 py-1">+</button>
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                
                {cartItems.length > 0 && (
                    <div className="p-6 border-t">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold text-brand-dark">Total</span>
                            <span className="text-xl font-bold text-brand-dark">R$ {total}</span>
                        </div>
                        <button onClick={handleCheckout} className="w-full bg-brand-dark text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors">
                            {isAuthenticated ? 'Finalizar Compra' : 'Fazer Login para Finalizar'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartModal;