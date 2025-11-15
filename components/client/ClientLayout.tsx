import React, { useContext } from 'react';
import { Outlet, NavLink, Navigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const icons = {
  dashboard: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
  orders: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
  profile: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  logout: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
};

const ClientLayout: React.FC = () => {
    const { user, logout } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/" />;
    }
    
    const navLinkClasses = "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors";
    const activeClass = "bg-brand-dark text-white font-semibold";
    const inactiveClass = "text-gray-600 hover:bg-gray-200 hover:text-brand-dark";


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            <aside className="w-full md:w-64 bg-white border-b md:border-r md:border-b-0 border-gray-200 flex-shrink-0">
              <div className="p-4 flex flex-col h-full">
                <Link to="/" className="px-4 mb-8 hidden md:block">
                  <span className="text-3xl font-extrabold text-brand-dark">Memory Box</span>
                </Link>
                <nav className="flex-grow flex flex-row md:flex-col justify-center md:justify-start">
                    <ul className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2">
                        <li><NavLink to="/cliente/dashboard" end className={({isActive}) => `${navLinkClasses} ${isActive ? activeClass : inactiveClass}`}>{icons.dashboard}<span>Dashboard</span></NavLink></li>
                        <li><NavLink to="/cliente/pedidos" className={({isActive}) => `${navLinkClasses} ${isActive ? activeClass : inactiveClass}`}>{icons.orders}<span>Meus Pedidos</span></NavLink></li>
                        <li><NavLink to="/cliente/meus-dados" className={({isActive}) => `${navLinkClasses} ${isActive ? activeClass : inactiveClass}`}>{icons.profile}<span>Meus Dados</span></NavLink></li>
                    </ul>
                </nav>
                <div className="hidden md:block">
                   <button onClick={logout} className={`${navLinkClasses} ${inactiveClass} w-full`}>{icons.logout}<span>Sair</span></button>
                </div>
              </div>
            </aside>
            <main className="flex-grow p-4 sm:p-6 md:p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default ClientLayout;
