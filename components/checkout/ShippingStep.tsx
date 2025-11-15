import React, { useState } from 'react';
import { Address } from '../../types';

interface ShippingStepProps {
    initialData: Address;
    onNext: (data: Address) => void;
}

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input
        className="block w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm placeholder-gray-500"
        {...props}
    />
);

const WarningBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-amber-50 border border-amber-400 p-4 rounded-md flex items-start space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
        <p className="text-sm text-amber-800">{children}</p>
    </div>
);


const ShippingStep: React.FC<ShippingStepProps> = ({ initialData, onNext }) => {
    const [formData, setFormData] = useState<Address>(initialData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext(formData);
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Endereço de entrega</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                        <InputField type="text" name="cep" id="cep" value={formData.cep} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">Rua</label>
                        <InputField type="text" name="street" id="street" value={formData.street} onChange={handleChange} required />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Nº</label>
                        <InputField type="text" name="number" id="number" value={formData.number} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="complement" className="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
                        <InputField type="text" name="complement" id="complement" value={formData.complement} onChange={handleChange} />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-1">
                        <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
                        <InputField type="text" name="neighborhood" id="neighborhood" value={formData.neighborhood} onChange={handleChange} required />
                    </div>
                     <div className="sm:col-span-1">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                        <InputField type="text" name="city" id="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div className="sm:col-span-1">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                         <select id="state" name="state" value={formData.state} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-3 text-base bg-white text-gray-900 border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md shadow-sm">
                            <option>BA</option>
                            <option>SP</option>
                            <option>RJ</option>
                            <option>MG</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-3 pt-4">
                    <WarningBox>Mudança de endereço <strong>pode implicar cobrança adicional.</strong></WarningBox>
                    <WarningBox>Informe um <strong>endereço residencial.</strong> A transportadora não faz entregas à caixa postal.</WarningBox>
                    <WarningBox>
                        Preencha o complemento quando aplicável (exemplo: ap 22, sobrado 05, sala 1001, etc.). Para garantir a segurança na entrega,
                        <strong> ALGUÉM PRECISA RECEBER SEU PACK NO ENDEREÇO DE ENTREGA, NÃO ESQUEÇA DE DEIXAR AVISADO.</strong>
                    </WarningBox>
                </div>

                <div className="pt-6">
                    <button type="submit" className="w-full bg-teal-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-600 transition-colors shadow-md">
                        Continuar para pagamento
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ShippingStep;