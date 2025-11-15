import React from 'react';

const StepCard: React.FC<{ icon: React.ReactNode; step: string; title: string; description: string }> = ({ icon, step, title, description }) => (
    <div className="text-center p-6 bg-brand-secondary rounded-xl h-full">
        <div className="mx-auto mb-4 border-2 border-brand-dark text-brand-dark w-16 h-16 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <p className="text-brand-dark font-bold mb-2 text-sm">{step}</p>
        <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
        <p className="text-brand-text">{description}</p>
    </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Revelar suas fotos nunca foi tão fácil</h2>
        <p className="text-lg text-brand-text mb-12 max-w-2xl mx-auto">Em apenas três passos, você transforma suas lembranças digitais em tesouros palpáveis.</p>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <StepCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
            step="PASSO 1"
            title="Escolha seu plano"
            description="Selecione o plano de assinatura que mais combina com seu volume de memórias."
          />
          <StepCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>}
            step="PASSO 2"
            title="Envie suas fotos"
            description="Use nosso app ou site para enviar suas fotos favoritas do mês de forma rápida e segura."
          />
          <StepCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>}
            step="PASSO 3"
            title="Receba em casa"
            description="Aguarde a caixinha mais esperada do mês chegar na sua porta com suas memórias impressas."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;