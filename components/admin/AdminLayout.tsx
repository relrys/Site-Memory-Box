import React, { useContext } from 'react';
import { Outlet, NavLink, Navigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const ADMIN_EMAIL = 'admin@memorybox.com';

const icons = {
  dashboard: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  orders: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
  customers: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.965 5.965 0 0112 13a5.965 5.965 0 013 5.197" /></svg>,
  logout: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
};

const AdminLayout: React.FC = () => {
    const { user, logout } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/" />;
    }

    if (user.email !== ADMIN_EMAIL) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Acesso Negado</h1>
                <p className="text-lg text-gray-700 mb-8">Você não tem permissão para acessar esta página.</p>
                <Link to="/" className="bg-brand-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                    Voltar para a Página Inicial
                </Link>
            </div>
        );
    }
    
    const navLinkClasses = "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors";
    const activeClass = "bg-brand-dark text-white font-semibold";
    const inactiveClass = "text-gray-600 hover:bg-gray-200 hover:text-brand-dark";


    return (
        <div className="min-h-screen bg-gray-100 flex">
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-4">
                <Link to="/" className="px-4 mb-8">
                  <span className="text-3xl font-extrabold text-brand-dark">Memory Box</span>
                  <span className="block text-sm text-gray-500 font-semibold tracking-wider">ADMIN</span>
                </Link>
                <nav className="flex-grow">
                    <ul className="space-y-2">
                        <li><NavLink to="/admin/dashboard" className={({isActive}) => `${navLinkClasses} ${isActive ? activeClass : inactiveClass}`}>{icons.dashboard}<span>Dashboard</span></NavLink></li>
                        <li><NavLink to="/admin/orders" className={({isActive}) => `${navLinkClasses} ${isActive ? activeClass : inactiveClass}`}>{icons.orders}<span>Pedidos</span></NavLink></li>
                        <li><NavLink to="/admin/customers" className={({isActive}) => `${navLinkClasses} ${isActive ? activeClass : inactiveClass}`}>{icons.customers}<span>Clientes</span></NavLink></li>
                    </ul>
                </nav>
                <div>
                   <button onClick={logout} className={`${navLinkClasses} ${inactiveClass} w-full`}>{icons.logout}<span>Sair</span></button>
                </div>
            </aside>
            <main className="flex-grow p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
