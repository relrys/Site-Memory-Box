import React, { useState, useEffect } from 'react';
import type { Order } from '../../types';

const AdminOrders: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        try {
            const ordersData: Order[] = JSON.parse(localStorage.getItem('memoryBoxOrders') || '[]');
            setOrders(ordersData);
        } catch (error) {
            console.error("Failed to load orders from localStorage", error);
        }
    }, []);

    return (
        <div className="animate-fadeIn">
            <h1 className="text-3xl font-bold text-brand-dark mb-8">Pedidos</h1>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-gray-500 uppercase">ID do Pedido</th>
                                <th className="p-4 text-sm font-semibold text-gray-500 uppercase">Cliente</th>
                                <th className="p-4 text-sm font-semibold text-gray-500 uppercase">Data</th>
                                <th className="p-4 text-sm font-semibold text-gray-500 uppercase">Nº de Itens</th>
                                <th className="p-4 text-sm font-semibold text-gray-500 uppercase">Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td className="p-4 font-mono text-xs text-gray-600">{order.id}</td>
                                    <td className="p-4 font-medium text-brand-text">{order.userName}</td>
                                    <td className="p-4 text-brand-text">{new Date(order.date).toLocaleString('pt-BR')}</td>
                                    <td className="p-4 text-brand-text text-center">{order.items.reduce((sum, item) => sum + item.quantity, 0)}</td>
                                    <td className="p-4 font-semibold text-brand-dark">R$ {order.total.toFixed(2).replace('.', ',')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {orders.length === 0 && <p className="text-center text-gray-500 py-8">Nenhum pedido encontrado.</p>}
                </div>
            </div>
        </div>
    );
};

export default AdminOrders;
