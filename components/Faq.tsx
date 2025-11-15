import React, { useState } from 'react';
import type { FaqItem } from '../types';

const faqData: FaqItem[] = [
    {
        question: "Como funciona o envio das fotos?",
        answer: "Após assinar, você terá acesso à sua área de cliente em nosso site ou aplicativo. Lá, você poderá selecionar e enviar as fotos do seu computador ou celular de forma simples e intuitiva, até o dia 20 de cada mês."
    },
    {
        question: "Posso pular um mês ou cancelar a assinatura?",
        answer: "Sim! Você tem total flexibilidade. É possível pular um mês sem custo ou cancelar sua assinatura a qualquer momento, diretamente pelo seu painel de controle, sem nenhuma burocracia."
    },
    {
        question: "Qual é o prazo de entrega?",
        answer: "As fotos são impressas e enviadas na primeira semana do mês seguinte ao envio. O prazo de entrega varia de acordo com sua localidade, mas geralmente leva de 5 a 15 dias úteis."
    },
    {
        question: "E se eu não gostar da qualidade das fotos?",
        answer: "Nossa prioridade é sua satisfação. Se por algum motivo você não ficar feliz com a qualidade das suas impressões, entre em contato com nosso suporte e faremos o reenvio ou o reembolso do seu dinheiro."
    }
];

const FaqAccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-6">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-brand-dark focus:outline-none"
                onClick={onClick}
            >
                <span>{item.question}</span>
                <div className="w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'transform rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-brand-text pr-4">{item.answer}</p>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Dúvidas Frequentes</h2>
                    <p className="text-lg text-brand-text mt-4 max-w-2xl mx-auto">Tudo o que você precisa saber antes de começar sua coleção de memórias.</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <FaqAccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;