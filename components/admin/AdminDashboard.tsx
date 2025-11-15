import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Order, User } from '../../types';

const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <div className="bg-gray-100 text-brand-dark p-3 rounded-full">{icon}</div>
        <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-2xl font-bold text-brand-dark">{value}</p>
        </div>
    </div>
);

const AdminDashboard: React.FC = () => {
    const [stats, setStats] = useState({ revenue: 0, orders: 0, customers: 0 });
    const [recentOrders, setRecentOrders] = useState<Order[]>([]);

    useEffect(() => {
        try {
            const ordersData: Order[] = JSON.parse(localStorage.getItem('memoryBoxOrders') || '[]');
            const usersData: User[] = JSON.parse(localStorage.getItem('memoryBoxUsers') || '[]');

            const totalRevenue = ordersData.reduce((acc, order) => acc + order.total, 0);

            setStats({
                revenue: totalRevenue,
                orders: ordersData.length,
                customers: usersData.length,
            });
            
            setRecentOrders(ordersData.slice(0, 5));

        } catch (error) {
            console.error("Failed to load admin data from localStorage", error);
        }
    }, []);

    return (
        <div className="animate-fadeIn">
            <h1 className="text-3xl font-bold text-brand-dark mb-8">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard title="Faturamento Total" value={`R$ ${stats.revenue.toFixed(2).replace('.', ',')}`} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>} />
                <StatCard title="Total de Pedidos" value={stats.orders} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>} />
                <StatCard title="Total de Clientes" value={stats.customers} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.965 5.965 0 0112 13a5.965 5.965 0 013 5.197" /></svg>} />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-brand-dark">Pedidos Recentes</h2>
                    <Link to="/admin/orders" className="text-sm font-semibold text-brand-dark hover:underline">Ver Todos</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b-2 border-gray-200">
                            <tr>
                                <th className="p-3 text-sm font-semibold text-gray-500">ID do Pedido</th>
                                <th className="p-3 text-sm font-semibold text-gray-500">Cliente</th>
                                <th className="p-3 text-sm font-semibold text-gray-500">Data</th>
                                <th className="p-3 text-sm font-semibold text-gray-500">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map(order => (
                                <tr key={order.id} className="border-b border-gray-100">
                                    <td className="p-3 font-mono text-xs text-gray-600">{order.id}</td>
                                    <td className="p-3 font-medium text-brand-text">{order.userName}</td>
                                    <td className="p-3 text-brand-text">{new Date(order.date).toLocaleDateString('pt-BR')}</td>
                                    <td className="p-3 font-semibold text-brand-dark">R$ {order.total.toFixed(2).replace('.', ',')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                     {recentOrders.length === 0 && <p className="text-center text-gray-500 py-8">Nenhum pedido encontrado.</p>}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
