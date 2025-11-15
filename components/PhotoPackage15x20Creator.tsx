import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import type { Product } from '../types';

// Step 1 data
const recurrenceOptions = {
    subscription: {
        id: 'subscription',
        title: 'Plano de assinatura',
        description: 'Assine um plano e receba fotos 15x20 todos os meses em sua casa',
        priceText: 'A partir de R$ 34,90 /mês',
        price: 34.90,
        tag: 'GRANDES MEMÓRIAS',
    },
    oneTime: {
        id: 'one-time',
        title: 'Pacotes avulsos de fotos',
        description: 'Compre um pacote e receba todas as fotos de uma só vez',
        priceText: 'A partir de R$ 49,90',
        price: 49.90,
    }
};

// Step 2 data
interface Package {
  id: string;
  photoCount: number;
  originalPrice: number;
  price: number;
  name: string;
  image: string;
}

const oneTimePackages: Package[] = [
  {
    id: '15x20-20',
    photoCount: 20,
    originalPrice: 54.90,
    price: 49.90,
    name: 'Pacote 20 fotos 15x20',
    image: 'https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '15x20-40',
    photoCount: 40,
    originalPrice: 99.90,
    price: 89.90,
    name: 'Pacote 40 fotos 15x20',
    image: 'https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '15x20-60',
    photoCount: 60,
    originalPrice: 144.90,
    price: 129.90,
    name: 'Pacote 60 fotos 15x20',
    image: 'https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];

// Icons
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const PhotoIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);


const PhotoPackage15x20Creator: React.FC = () => {
    const [step, setStep] = useState<'recurrence' | 'quantity'>('recurrence');
    const [selectedRecurrence, setSelectedRecurrence] = useState<string | null>(recurrenceOptions.subscription.id);
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
    
    const navigate = useNavigate();
    const { addToCart, openCart } = useContext(CartContext);

    const handleNext = () => {
        if (selectedRecurrence === 'subscription') {
            navigate('/#plans');
        } else if (selectedRecurrence === 'one-time') {
            setStep('quantity');
            setSelectedPackage(oneTimePackages[0]); // Pre-select the first one
        }
    };

    const handleBack = () => {
        setStep('recurrence');
        setSelectedPackage(null);
    };

    const handleAddToCart = () => {
        if (selectedPackage) {
            const product: Product = {
                id: selectedPackage.id,
                name: selectedPackage.name,
                price: selectedPackage.price,
                image: selectedPackage.image,
            };
            addToCart(product);
            openCart();
            navigate('/');
        }
    };

    const formatPrice = (price: number) => price.toFixed(2).replace('.', ',');

    const title = step === 'recurrence' ? 'Monte seu plano 15x20' : 'Monte seu pacote 15x20';

    const RecurrenceStep = () => (
        <>
            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <CalendarIcon />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-brand-dark">Todos os meses ou uma só vez?</h1>
                    <p className="text-brand-text">Escolha como quer receber suas fotos. Uma experiência incrível todos os meses ou uma compra pontual</p>
                </div>
            </div>
            <div className="space-y-4">
                <div
                    onClick={() => setSelectedRecurrence(recurrenceOptions.subscription.id)}
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-200 relative ${selectedRecurrence === 'subscription' ? 'border-teal-500 bg-teal-50/50 shadow-md' : 'border-gray-200 hover:border-gray-400'}`}
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-bold text-brand-dark">{recurrenceOptions.subscription.title}</h2>
                            <p className="text-brand-text mb-1">{recurrenceOptions.subscription.description}</p>
                            <p className="font-semibold text-brand-dark">{recurrenceOptions.subscription.priceText}</p>
                        </div>
                        <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full">{recurrenceOptions.subscription.tag}</span>
                    </div>
                </div>
                <div
                    onClick={() => setSelectedRecurrence(recurrenceOptions.oneTime.id)}
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-200 ${selectedRecurrence === 'one-time' ? 'border-teal-500 bg-teal-50/50 shadow-md' : 'border-gray-200 hover:border-gray-400'}`}
                >
                    <h2 className="text-xl font-bold text-brand-dark">{recurrenceOptions.oneTime.title}</h2>
                    <p className="text-brand-text mb-1">{recurrenceOptions.oneTime.description}</p>
                    <p className="font-semibold text-brand-dark">{recurrenceOptions.oneTime.priceText}</p>
                </div>
            </div>
             <div className="mt-8 flex items-center justify-end">
                <button 
                    onClick={handleNext}
                    disabled={!selectedRecurrence}
                    className="bg-teal-500 text-white font-bold py-3 px-12 rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Próximo
                </button>
            </div>
        </>
    );

    const QuantityStep = () => (
        <>
            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <PhotoIcon />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-brand-dark">Quantas fotos você quer receber?</h1>
                    <p className="text-brand-text">Escolha a quantidade de fotos que você quer receber em sua casa</p>
                </div>
            </div>
            <div className="space-y-4">
                {oneTimePackages.map(pkg => (
                    <div
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-200 ${selectedPackage?.id === pkg.id ? 'border-teal-500 bg-teal-50/50 shadow-md' : 'border-gray-200 hover:border-gray-400'}`}
                    >
                        <h2 className="text-xl font-bold text-brand-dark">{pkg.photoCount} fotos</h2>
                        <p className="text-brand-text">
                            <span className="line-through text-gray-400">De R$ {formatPrice(pkg.originalPrice)}</span> por R$ {formatPrice(pkg.price)}
                        </p>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex items-center justify-between">
                <button onClick={handleBack} className="text-teal-600 font-bold">Voltar</button>
                <button 
                    onClick={handleAddToCart}
                    disabled={!selectedPackage}
                    className="bg-teal-500 text-white font-bold py-3 px-10 rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Comprar
                </button>
            </div>
        </>
    );

    const getFooterDetails = () => {
        if (step === 'recurrence') {
            const selected = selectedRecurrence === 'subscription' ? recurrenceOptions.subscription : recurrenceOptions.oneTime;
            return {
                price: formatPrice(selected?.price || 0),
                details: selectedRecurrence === 'subscription' ? '/mês' : '',
                buttonText: 'Próximo',
                action: handleNext,
                disabled: !selectedRecurrence
            }
        }
        // step === 'quantity'
        return {
            price: selectedPackage ? formatPrice(selectedPackage.price) : '0,00',
            details: selectedPackage ? `${selectedPackage.photoCount} fotos` : '',
            buttonText: 'Comprar',
            action: handleAddToCart,
            disabled: !selectedPackage
        }
    }
    
    const footerDetails = getFooterDetails();

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <header className="py-4 relative border-b">
                <div className="container mx-auto px-6 flex items-center justify-center">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2">
                         <a href="/" className="text-3xl font-bold">ō</a>
                    </div>
                    <div className="text-center">
                        <h1 className="text-xl font-bold text-brand-dark">{title}</h1>
                        <div>
                            <span className="text-gray-400">Recorrência &gt; </span>
                            <span className={`font-semibold ${step === 'quantity' ? 'text-brand-dark' : 'text-gray-400'}`}>{step === 'quantity' ? 'Quantidade' : '...'}</span>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-grow container mx-auto px-6 py-8">
                <div className="max-w-2xl mx-auto">
                    {step === 'recurrence' ? <RecurrenceStep /> : <QuantityStep />}
                </div>
            </main>
            <footer className="sticky bottom-0 bg-gray-50 border-t border-gray-200 py-4 z-10">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div>
                        <p className="text-2xl font-bold text-brand-dark">R$ {footerDetails.price} <span className="text-base font-normal text-gray-500">{footerDetails.details}</span></p>
                        <p className="text-sm text-gray-500">+ taxa de entrega</p>
                    </div>
                     <button
                        onClick={footerDetails.action}
                        disabled={footerDetails.disabled}
                        className="bg-teal-500 text-white font-bold py-3 px-12 rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                     >
                        {footerDetails.buttonText}
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default PhotoPackage15x20Creator;