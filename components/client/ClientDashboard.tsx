import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import type { Order } from '../../types';
import { AuthContext } from '../../contexts/AuthContext';

const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4">
        <div className="bg-gray-100 text-brand-dark p-3 rounded-full">{icon}</div>
        <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-xl font-bold text-brand-dark">{value}</p>
        </div>
    </div>
);

const ClientDashboard: React.FC = () => {
    const { user } = useContext(AuthContext);
    const [recentOrders, setRecentOrders] = useState<Order[]>([]);

    useEffect(() => {
        if (user) {
            try {
                const allOrders: Order[] = JSON.parse(localStorage.getItem('memoryBoxOrders') || '[]');
                const userOrders = allOrders.filter(order => order.userId === user.id);
                setRecentOrders(userOrders.slice(0, 3));
            } catch (error) {
                console.error("Failed to load user orders from localStorage", error);
            }
        }
    }, [user]);

    if (!user) return null;

    return (
        <div className="animate-fadeIn">
            <h1 className="text-3xl font-bold text-brand-dark mb-2">Bem-vindo, {user.name.split(' ')[0]}!</h1>
            <p className="text-gray-600 mb-8">Aqui você pode gerenciar suas informações e acompanhar seus pedidos.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                 <StatCard 
                    title="Minha Assinatura" 
                    value={user.subscription || 'Nenhuma'} 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293c.39.39.39 1.023 0 1.414L11.414 15l-3.121 3.121c-.39.39-1.023.39-1.414 0L4.586 15.828c-.39-.39-.39-1.023 0-1.414L6.879 12M12 5l2.293 2.293c.39.39.39 1.023 0 1.414L12 11.414l-2.293-2.293c-.39-.39-.39-1.023 0-1.414L12 5zm0 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" /></svg>} 
                />
                 <StatCard 
                    title="Total de Pedidos" 
                    value={JSON.parse(localStorage.getItem('memoryBoxOrders') || '[]').filter((o: Order) => o.userId === user.id).length}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>} 
                />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-brand-dark">Pedidos Recentes</h2>
                    <Link to="/cliente/pedidos" className="text-sm font-semibold text-brand-dark hover:underline">Ver Todos</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b-2 border-gray-200">
                            <tr>
                                <th className="p-3 text-sm font-semibold text-gray-500">ID do Pedido</th>
                                <th className="p-3 text-sm font-semibold text-gray-500">Data</th>
                                <th className="p-3 text-sm font-semibold text-gray-500">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map(order => (
                                <tr key={order.id} className="border-b border-gray-100">
                                    <td className="p-3 font-mono text-xs text-gray-600 truncate" style={{maxWidth: '100px'}}>{order.id}</td>
                                    <td className="p-3 text-brand-text">{new Date(order.date).toLocaleDateString('pt-BR')}</td>
                                    <td className="p-3 font-semibold text-brand-dark">R$ {order.total.toFixed(2).replace('.', ',')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                     {recentOrders.length === 0 && <p className="text-center text-gray-500 py-8">Você ainda não fez nenhum pedido.</p>}
                </div>
            </div>
        </div>
    );
};

export default ClientDashboard;
