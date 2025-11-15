import React from 'react';
import type { Plan } from '../types';

const plans: Plan[] = [
  {
    name: 'Plano Essencial',
    price: '24,90',
    photoCount: 12,
    photoSize: '10x15cm',
    features: [
      '12 fotos por mês',
      'Papel fotográfico premium',
      'Acabamento brilhante',
      'Acesso ao app exclusivo'
    ]
  },
  {
    name: 'Plano Clássico',
    price: '39,90',
    photoCount: 24,
    photoSize: '10x15cm',
    features: [
      '24 fotos por mês',
      'Papel fotográfico premium',
      'Escolha de acabamento',
      'Caixinha protetora temática',
      'Frete grátis'
    ],
    popular: true
  },
  {
    name: 'Plano Colecionador',
    price: '59,90',
    photoCount: 40,
    photoSize: 'Variados',
    features: [
      '40 fotos por mês',
      'Tamanhos variados',
      'Papel fotográfico premium',
      'Caixinha de luxo',
      'Mimos e adesivos extras'
    ]
  }
];

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const isPopular = plan.popular;

  return (
    <div className={`relative border-2 p-8 rounded-2xl transition-transform transform ${isPopular ? 'border-brand-dark bg-white' : 'bg-brand-secondary border-transparent'}`}>
      {isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-sm font-semibold px-4 py-1 rounded-full">
          MAIS POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold text-brand-dark text-center mb-2">{plan.name}</h3>
      <div className="text-center mb-6">
        <span className="text-4xl font-extrabold text-brand-dark">R${plan.price}</span>
        <span className="text-brand-text">/mês</span>
      </div>
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-dark mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full font-bold py-3 px-6 rounded-lg transition-colors ${isPopular ? 'bg-brand-dark text-white hover:bg-gray-800' : 'bg-white text-brand-dark hover:bg-gray-100'}`}>
        Assinar {plan.name}
      </button>
    </div>
  );
};


const Plans: React.FC = () => {
  return (
    <section id="plans" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Planos para todos os contadores de histórias</h2>
          <p className="text-lg text-brand-text mt-4 max-w-2xl mx-auto">Escolha o pacote perfeito para eternizar suas memórias com a frequência que desejar.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;