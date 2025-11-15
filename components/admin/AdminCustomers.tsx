import React, { useState, useEffect } from 'react';
import type { User } from '../../types';

const AdminCustomers: React.FC = () => {
    const [customers, setCustomers] = useState<User[]>([]);

    useEffect(() => {
        try {
            const usersData: {id: string; name: string; email: string; subscription?: string}[] = JSON.parse(localStorage.getItem('memoryBoxUsers') || '[]');
            setCustomers(usersData);
        } catch (error) {
            console.error("Failed to load users from localStorage", error);
        }
    }, []);

    return (
        <div className="animate-fadeIn">
            <h1 className="text-3xl font-bold text-brand-dark mb-8">Clientes</h1>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-gray-500 uppercase">Nome</th>
                                <th className="p-4 text-sm font-semibold text-gray-500 uppercase">Email</th>
                                <th className="p-4 text-sm font-semibold text-gray-500 uppercase">Plano de Assinatura</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {customers.map(customer => (
                                <tr key={customer.id}>
                                    <td className="p-4 font-medium text-brand-dark">{customer.name}</td>
                                    <td className="p-4 text-brand-text">{customer.email}</td>
                                    <td className="p-4">
                                        {customer.subscription ? (
                                            <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">{customer.subscription}</span>
                                        ) : (
                                            <span className="text-gray-400 text-sm">Nenhum</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {customers.length === 0 && <p className="text-center text-gray-500 py-8">Nenhum cliente encontrado.</p>}
                </div>
            </div>
        </div>
    );
};

export default AdminCustomers;
