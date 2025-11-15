import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
             <a href="#" className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-extrabold text-white">Memory Box</span>
            </a>
            <p className="text-gray-400 max-w-sm">O clube de assinatura que transforma seus momentos digitais em lembranças para toda a vida.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#plans" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm0 1.62c-2.403 0-2.73.01-3.69.056-.944.045-1.505.207-1.858.344-.467.182-.86.399-1.249.788-.389.389-.606.782-.788 1.249-.137.353-.3.914-.344 1.858-.046.96-.056 1.287-.056 3.69s.01 2.73.056 3.69c.045.944.207 1.505.344 1.858.182.466.399.86.788 1.249.389.389.782.606 1.249.788.353.137.914.3 1.858.344.96.046 1.287.056 3.69.056 2.403 0 2.73-.01 3.69-.056.944-.045 1.505-.207 1.858.344.467-.182.86-.399 1.249-.788.389-.389.606.782-.788-1.249.137-.353.3-.914.344-1.858.046-.96.056-1.287-.056-3.69s-.01-2.73-.056-3.69c-.045-.944-.207-1.505-.344-1.858a3.097 3.097 0 00-.788-1.249 3.097 3.097 0 00-1.249-.788c-.353-.137-.914-.3-1.858-.344-.96-.046-1.287-.056-3.69-.056zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.62a3.515 3.515 0 100 7.03 3.515 3.515 0 000-7.03z" clipRule="evenodd" /></svg></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Memory Box. Todos os direitos reservados. Feito com ♥ para suas memórias.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;