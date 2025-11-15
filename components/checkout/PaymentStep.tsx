import React from 'react';
import { Address, CartItem } from '../../types';

interface PaymentStepProps {
    shippingInfo: Address;
    cartItems: CartItem[];
    subtotal: number;
    shippingCost: number;
    total: number;
    onBack: () => void;
    onSubmit: () => void;
}

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input
        className="block w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm placeholder-gray-500"
        {...props}
    />
);

const PaymentStep: React.FC<PaymentStepProps> = ({
    shippingInfo,
    cartItems,
    subtotal,
    shippingCost,
    total,
    onBack,
    onSubmit
}) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Apenas Cartão de Crédito</h2>
                <div className="w-16 h-1 bg-teal-500 mx-auto my-3"></div>
                <p className="text-gray-600 max-w-sm mx-auto">
                    Atualmente, aceitamos as bandeiras <strong className="font-semibold">Visa, Mastercard, Elo, American Express e Dinners</strong>. Estamos avaliando outras possibilidades ;)
                </p>
                <div className="w-16 h-1 bg-teal-500 mx-auto mt-3"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <InputField type="text" name="cardNumber" placeholder="Número do cartão" required />
                <div className="grid grid-cols-2 gap-4">
                    <InputField type="text" name="expiry" placeholder="Vencimento" required />
                    <InputField type="text" name="cvv" placeholder="CVV" required />
                </div>
                <InputField type="text" name="cardName" placeholder="Nome do titular" required />
                <div className="grid grid-cols-2 gap-4 items-center">
                    <InputField type="text" name="cpf" placeholder="CPF" required />
                     <select className="block w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
                        <option>à vista 1x de R${total.toFixed(2).replace('.', ',')}</option>
                    </select>
                </div>
                
                <div className="pt-4 space-y-4">
                    <button type="button" className="text-sm font-bold text-gray-700 flex items-center space-x-2">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H5z" /><path d="M5 14a2 2 0 002 2h10a2 2 0 002-2M5 14l3 3h6l3-3" /></svg>
                        <span>APLICAR CUPOM</span>
                    </button>
                    
                    <div className="border border-gray-200 rounded-lg p-4 space-y-3 text-sm">
                        <div className="flex justify-between items-start">
                           <div className="flex items-center space-x-3">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <div>
                                <p className="font-bold text-gray-800">{cartItems[0]?.name || 'Produto'}</p>
                                <p className="text-gray-600">{cartItems.length} Itens inclusos</p>
                            </div>
                           </div>
                        </div>
                        <div className="flex justify-between items-start">
                           <div className="flex items-center space-x-3">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <div>
                                <p className="font-bold text-gray-800">Endereço de entrega</p>
                                <p className="text-gray-600">{`${shippingInfo.street}, ${shippingInfo.number}, ${shippingInfo.neighborhood}, ${shippingInfo.city}/${shippingInfo.state} - ${shippingInfo.cep}`}</p>
                            </div>
                           </div>
                           <button onClick={onBack} type="button" className="text-sm font-bold text-teal-600 hover:underline">Alterar</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">SEU PEDIDO</h3>
                    <div className="space-y-2 text-sm">
                        {cartItems.map(item => (
                             <div key={item.id} className="flex justify-between text-gray-700">
                                <span>- {item.name} (x{item.quantity})</span>
                                <span>R${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                            </div>
                        ))}
                         <div className="flex justify-between text-gray-700">
                            <span>- Envio</span>
                            <span>R${shippingCost.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <div className="flex justify-between font-bold text-base pt-2">
                            <span>TOTAL</span>
                            <span>R${total.toFixed(2).replace('.', ',')}</span>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-gray-500 text-center mt-6">
                    Ao clicar em CONCLUIR, confirmo que li e concordo com os <a href="#" className="underline">Termos de uso</a> e <a href="#" className="underline">responsabilidade</a> e <a href="#" className="underline">Política de Privacidade</a>.
                </p>

                <div className="pt-6">
                    <button type="submit" className="w-full bg-teal-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-600 transition-colors shadow-md">
                        Concluir
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentStep;