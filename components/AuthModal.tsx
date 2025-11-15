import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const EyeIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const EyeOffIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243L6.228 6.228" />
    </svg>
);

const ArrowRightIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const CheckIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const AuthModal: React.FC = () => {
    const { isAuthModalOpen, closeAuthModal, login, register } = useContext(AuthContext);
    const [isLoginView, setIsLoginView] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const [error, setError] = useState('');

    if (!isAuthModalOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        let success = false;
        if (isLoginView) {
            success = login(email, password);
            if (!success) setError('E-mail ou senha inválidos.');
        } else {
            success = register(name, email, password);
            if (!success) setError('Não foi possível registrar. O e-mail pode já estar em uso.');
        }
    }

    const resetForm = () => {
        setError('');
        setName('');
        setEmail('');
        setPassword('');
        setShowPassword(false);
        setRememberMe(true);
    };

    const handleSwitchToRegister = () => {
        setIsLoginView(false);
        resetForm();
    };

    const handleSwitchToLogin = () => {
        setIsLoginView(true);
        resetForm();
    };

    const renderInputField = (id: string, label: string, type: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, isPassword = false) => (
        <div className="relative">
            <input
                type={isPassword ? (showPassword ? 'text' : 'password') : type}
                id={id}
                value={value}
                onChange={onChange}
                required
                className="block px-3.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer"
                placeholder=" "
            />
            <label
                htmlFor={id}
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
                {label}
            </label>
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                    {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
            )}
        </div>
    );

    const LoginView = () => (
        <>
            <h2 className="text-3xl font-bold text-brand-dark mb-8 text-left">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {renderInputField("email-login", "E-mail", "email", email, e => setEmail(e.target.value))}
                {renderInputField("password-login", "Senha", "password", password, e => setPassword(e.target.value), true)}

                <div className="flex items-center justify-between text-sm">
                    <a href="#" className="font-semibold text-brand-dark hover:underline">Esqueci minha senha</a>
                    <label className="flex items-center cursor-pointer select-none">
                        <div className="relative flex items-center justify-center">
                            <input type="checkbox" className="sr-only" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                            <div className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition-colors ${rememberMe ? 'bg-teal-500 border-teal-500' : 'border-gray-300'}`}>
                                {rememberMe && <CheckIcon className="w-3 h-3 text-white" />}
                            </div>
                        </div>
                        <span className="ml-2 text-gray-600">Permanecer logado</span>
                    </label>
                </div>

                {error && <p className="text-red-500 text-sm text-center -mt-2">{error}</p>}

                <button type="submit" className="w-full flex items-center justify-center bg-brand-dark text-white font-bold py-3 px-4 rounded-full hover:bg-gray-800 transition-colors shadow-md">
                    <span>Entrar</span>
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>

                <div className="flex items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-gray-400 text-sm font-medium">OU</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>

                <button type="button" onClick={handleSwitchToRegister} className="w-full flex items-center justify-center bg-white text-brand-dark border-2 border-brand-dark font-bold py-3 px-4 rounded-full hover:bg-gray-50 transition-colors">
                    <span>Ainda não tenho conta</span>
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
            </form>
        </>
    );

    const RegisterView = () => (
        <>
            <h2 className="text-3xl font-bold text-brand-dark mb-8 text-left">Criar Conta</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {renderInputField("name-register", "Nome completo", "text", name, e => setName(e.target.value))}
                {renderInputField("email-register", "E-mail", "email", email, e => setEmail(e.target.value))}
                {renderInputField("password-register", "Senha", "password", password, e => setPassword(e.target.value), true)}

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <button type="submit" className="w-full flex items-center justify-center bg-brand-dark text-white font-bold py-3 px-4 rounded-full hover:bg-gray-800 transition-colors shadow-md">
                    <span>Criar conta</span>
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>

                <div className="flex items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-gray-400 text-sm font-medium">OU</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>

                <button type="button" onClick={handleSwitchToLogin} className="w-full flex items-center justify-center bg-white text-brand-dark border-2 border-brand-dark font-bold py-3 px-4 rounded-full hover:bg-gray-50 transition-colors">
                    <span>Já tenho conta</span>
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
            </form>
        </>
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center animate-fadeIn p-4" onClick={closeAuthModal} role="dialog" aria-modal="true">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
                {isLoginView ? <LoginView /> : <RegisterView />}
            </div>
        </div>
    );
}

export default AuthModal;