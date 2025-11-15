import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';


const CartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);


const Header: React.FC = () => {
  const { isAuthenticated, user, logout, openAuthModal } = useContext(AuthContext);
  const { cartItems, openCart } = useContext(CartContext);
  
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className='sticky top-0 z-50 bg-white border-b border-gray-200'>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-brand-dark">Memory Box</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#formats" className="text-brand-text hover:text-brand-dark font-medium transition-colors">Fotos</Link>
            <Link to="/#formats" className="text-brand-text hover:text-brand-dark font-medium transition-colors">Foto Ímãs</Link>
            <Link to="/#albums" className="text-brand-text hover:text-brand-dark font-medium transition-colors">Álbuns</Link>
            <Link to="/#faq" className="text-brand-text hover:text-brand-dark font-medium transition-colors">FAQ</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
             {isAuthenticated && user ? (
               <div className="flex items-center space-x-4">
                 <span className="font-semibold text-brand-text">Olá, {user.name.split(' ')[0]}</span>
                 {user.email === 'admin@memorybox.com' ? (
                    <Link to="/admin/dashboard" className="text-white bg-red-600 font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                        Painel Admin
                    </Link>
                 ) : (
                    <Link to="/cliente/dashboard" className="text-brand-dark font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        Minha Conta
                    </Link>
                 )}
                 <button onClick={logout} className="text-brand-dark font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    Sair
                 </button>
               </div>
            ) : (
                <button onClick={openAuthModal} className="text-brand-dark font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Login / Cadastrar
                </button>
            )}
            <Link to="/#plans" className="bg-brand-dark text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm">
              Assinar Agora
            </Link>
             <button onClick={openCart} className="relative text-brand-dark p-2 rounded-full hover:bg-gray-100 transition-colors">
                <CartIcon className="w-6 h-6" />
                {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItemCount}
                    </span>
                )}
            </button>
          </div>
          <button className="md:hidden text-brand-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;