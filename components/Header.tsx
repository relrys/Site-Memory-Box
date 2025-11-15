import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CameraIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
);

const Header: React.FC = () => {
  return (
    <header className='sticky top-0 z-50 bg-white border-b border-gray-200'>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-brand-dark">Memory Box</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#how-it-works" className="text-brand-text hover:text-brand-dark font-medium transition-colors">Como Funciona</Link>
            <Link to="/#plans" className="text-brand-text hover:text-brand-dark font-medium transition-colors">Planos</Link>
            <Link to="/#faq" className="text-brand-text hover:text-brand-dark font-medium transition-colors">FAQ</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/#" className="text-brand-dark font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Login / Cadastrar
            </Link>
            <Link to="/#plans" className="bg-brand-dark text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm">
              Assinar Agora
            </Link>
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