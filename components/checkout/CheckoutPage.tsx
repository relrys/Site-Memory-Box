import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';
import { Address } from '../../types';
import ShippingStep from './ShippingStep';
import PaymentStep from './PaymentStep';

const CheckoutPage: React.FC = () => {
    const { user } = useContext(AuthContext);
    const { cartItems, checkout } = useContext(CartContext);
    const navigate = useNavigate();

    const [step, setStep] = useState<'shipping' | 'payment'>('shipping');
    const [shippingInfo, setShippingInfo] = useState<Address>({
        cep: '41810-620',
        street: 'Rua Magno Valente',
        number: '218',
        complement: '',
        neighborhood: 'Pituba',
        city: 'Salvador',
        state: 'BA',
    });

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingCost = 14.75;
    const total = subtotal + shippingCost;

    if (!user || cartItems.length === 0) {
        // Redirect if not logged in or cart is empty
        React.useEffect(() => {
            navigate('/');
        }, [navigate]);
        return null;
    }

    const handleNextStep = (data: Address) => {
        setShippingInfo(data);
        setStep('payment');
    };

    const handleBackStep = () => {
        setStep('shipping');
    };

    const handleFinalizePurchase = () => {
        checkout(user, shippingInfo, total);
        alert('Compra finalizada com sucesso!');
        navigate('/cliente/pedidos');
    };

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
                {step === 'shipping' ? (
                    <ShippingStep
                        initialData={shippingInfo}
                        onNext={handleNextStep}
                    />
                ) : (
                    <PaymentStep
                        shippingInfo={shippingInfo}
                        onBack={handleBackStep}
                        onSubmit={handleFinalizePurchase}
                        cartItems={cartItems}
                        subtotal={subtotal}
                        shippingCost={shippingCost}
                        total={total}
                    />
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
