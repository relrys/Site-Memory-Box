import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import type { Product } from '../types';

interface Package {
  id: string;
  photoCount: number;
  originalPrice: number;
  price: number;
  name: string;
  image: string;
}

const packages: Package[] = [
  {
    id: 'foto-ima-9',
    photoCount: 9,
    originalPrice: 49.90,
    price: 44.90,
    name: 'Pacote 9 Foto Ímãs',
    image: 'https://www.phosfato.com.br/_ipx/w_1520&q_80/img/produtos/23.jpg'
  },
  {
    id: 'foto-ima-18',
    photoCount: 18,
    originalPrice: 74.90,
    price: 67.90,
    name: 'Pacote 18 Foto Ímãs',
    image: 'https://www.phosfato.com.br/_ipx/w_1520&q_80/img/produtos/23.jpg'
  },
  {
    id: 'foto-ima-27',
    photoCount: 27,
    originalPrice: 99.90,
    price: 92.90,
    name: 'Pacote 27 Foto Ímãs',
    image: 'https://www.phosfato.com.br/_ipx/w_1520&q_80/img/produtos/23.jpg'
  },
];


const PhotoPackageSelector: React.FC = () => {
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
    const navigate = useNavigate();
    const { addToCart, openCart } = useContext(CartContext);

    const handleSelectPackage = (pkg: Package) => {
        setSelectedPackage(pkg);
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

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <header className="py-4">
                 <div className="container mx-auto px-6 flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-brand-dark">Memory Box</span>
                    <div>
                        <span className="text-gray-400">Recorrência &gt; </span>
                        <span className="text-brand-dark font-semibold">Quantidade</span>
                    </div>
                </div>
            </header>
            <main className="flex-grow container mx-auto px-6 py-8">
                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-brand-dark">Quantas fotos você quer receber?</h1>
                            <p className="text-brand-text">Escolha a quantidade de fotos que você quer receber em sua casa</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {packages.map(pkg => (
                            <div
                                key={pkg.id}
                                onClick={() => handleSelectPackage(pkg)}
                                className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-200 ${selectedPackage?.id === pkg.id ? 'border-brand-dark bg-gray-50 shadow-md' : 'border-gray-200 hover:border-gray-400'}`}
                            >
                                <h2 className="text-xl font-bold text-brand-dark">{pkg.photoCount} fotos</h2>
                                <p className="text-brand-text">
                                    <span className="line-through text-gray-400">De R$ {pkg.originalPrice.toFixed(2).replace('.', ',')}</span> por R$ {pkg.price.toFixed(2).replace('.', ',')}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                        <button onClick={() => navigate(-1)} className="text-teal-600 font-bold">Voltar</button>
                        <button 
                            onClick={handleAddToCart}
                            disabled={!selectedPackage}
                            className="bg-gray-300 text-gray-500 font-bold py-3 px-10 rounded-lg transition-colors disabled:cursor-not-allowed enabled:bg-brand-dark enabled:text-white"
                        >
                            Comprar
                        </button>
                    </div>
                </div>
            </main>
            <footer className="sticky bottom-0 bg-gray-100 border-t border-gray-200 py-4">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div>
                        <p className="text-2xl font-bold text-brand-dark">R$ {selectedPackage ? selectedPackage.price.toFixed(2).replace('.', ',') : '0,00'}</p>
                        <p className="text-sm text-gray-500">+ taxa de entrega</p>
                    </div>
                     <button
                        onClick={handleAddToCart}
                        disabled={!selectedPackage}
                        className="bg-gray-300 text-gray-500 font-bold py-3 px-10 rounded-lg transition-colors disabled:cursor-not-allowed enabled:bg-brand-dark enabled:text-white"
                     >
                        Comprar
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default PhotoPackageSelector;