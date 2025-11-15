import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, id, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            id={id}
            className="block w-full px-3 py-2 bg-white text-brand-text border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-dark focus:border-brand-dark sm:text-sm"
            {...props}
        />
    </div>
);


const ClientProfile: React.FC = () => {
    const { user, updateUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleInfoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);
        if (updateUser({ name, email })) {
            setMessage({ type: 'success', text: 'Informações atualizadas com sucesso!' });
        } else {
            setMessage({ type: 'error', text: 'Ocorreu um erro ao atualizar suas informações.' });
        }
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);
        if (newPassword !== confirmPassword) {
            setMessage({ type: 'error', text: 'As novas senhas não coincidem.' });
            return;
        }
        if (newPassword.length < 6) {
             setMessage({ type: 'error', text: 'A nova senha deve ter pelo menos 6 caracteres.' });
            return;
        }
        if (updateUser({ newPassword })) {
            setMessage({ type: 'success', text: 'Senha alterada com sucesso!' });
            setNewPassword('');
            setConfirmPassword('');
        } else {
            setMessage({ type: 'error', text: 'Ocorreu um erro ao alterar sua senha.' });
        }
    };
    
    const MessageDisplay = () => {
        if (!message) return null;
        const baseClasses = 'p-4 rounded-md text-sm mb-6';
        const typeClasses = message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
        return <div className={`${baseClasses} ${typeClasses}`}>{message.text}</div>;
    }


    return (
        <div className="animate-fadeIn space-y-10">
            <div>
                <h1 className="text-3xl font-bold text-brand-dark mb-2">Meus Dados</h1>
                <p className="text-gray-600">Gerencie suas informações pessoais.</p>
            </div>

            <MessageDisplay />
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-brand-dark mb-6">Informações Pessoais</h2>
                <form onSubmit={handleInfoSubmit} className="space-y-4">
                    <Input label="Nome Completo" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input label="Endereço de E-mail" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <div className="pt-2 text-right">
                        <button type="submit" className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors">
                            Salvar Alterações
                        </button>
                    </div>
                </form>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
                 <h2 className="text-xl font-bold text-brand-dark mb-6">Alterar Senha</h2>
                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <Input label="Nova Senha" id="new-password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                    <Input label="Confirmar Nova Senha" id="confirm-password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <div className="pt-2 text-right">
                        <button type="submit" className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors">
                            Alterar Senha
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClientProfile;