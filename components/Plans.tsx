import React, { useState, useContext } from 'react';
import type { Plan } from '../types';
import { AuthContext } from '../contexts/AuthContext';


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

const featureDescriptions: { [key: string]: string } = {
  '12 fotos por mês': "Ideal para começar sua coleção, recebendo 12 das suas melhores lembranças impressas mensalmente.",
  '24 fotos por mês': "Dobre suas memórias! Perfeito para quem registra muitos momentos e quer ter mais fotos para recordar.",
  '40 fotos por mês': "Para os verdadeiros amantes de fotografia. Receba um grande volume de fotos para não perder nenhum detalhe.",
  'Papel fotográfico premium': "Utilizamos papel Fujifilm de alta gramatura que garante cores vibrantes, nitidez e durabilidade por gerações.",
  'Acabamento brilhante': "Um acabamento clássico que realça as cores e o contraste, dando mais vida e brilho às suas fotos.",
  'Acesso ao app exclusivo': "Envie suas fotos e gerencie sua assinatura com total facilidade e conveniência através do nosso aplicativo para iOS e Android.",
  'Escolha de acabamento': "Personalize suas impressões. Escolha entre o clássico acabamento brilhante ou o sofisticado fosco (matte).",
  'Caixinha protetora temática': "Suas fotos chegam em uma linda caixa com design exclusivo e colecionável a cada mês, perfeita para guardar e organizar suas memórias.",
  'Frete grátis': "Receba sua caixinha de memórias em qualquer lugar do Brasil sem pagar nada a mais por isso.",
  'Tamanhos variados': "Mais criatividade para suas histórias. O plano permite a escolha de fotos em formatos como 10x15cm, Polaroid e quadrados (10x10cm).",
  'Caixinha de luxo': "Uma caixa premium mais robusta, com design sofisticado e acabamento superior para proteger e valorizar sua coleção.",
  'Mimos e adesivos extras': "Pequenas surpresas que encantam! Receba adesivos temáticos e outros brindes exclusivos em sua caixinha todo mês."
};

const PlanCard: React.FC<{ plan: Plan; isSelected: boolean; onSelect: () => void; }> = ({ plan, isSelected, onSelect }) => {
  const isPopular = plan.popular;

  return (
    <div 
      className={`relative border-2 p-8 rounded-2xl transition-all duration-300 transform cursor-pointer ${isSelected ? 'border-brand-dark scale-105 shadow-lg bg-white' : (isPopular ? 'bg-white border-gray-200' : 'bg-brand-secondary border-transparent')}`}
      onClick={onSelect}
    >
      {isPopular && !isSelected && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-sm font-semibold px-4 py-1 rounded-full z-10">
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
          <li key={index} className="flex items-center group relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-dark mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="cursor-default">{feature}</span>
             {featureDescriptions[feature] && (
               <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-brand-dark text-white text-xs text-center rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                {featureDescriptions[feature]}
                <svg className="absolute text-brand-dark h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
              </div>
            )}
          </li>
        ))}
      </ul>
      <button 
        onClick={onSelect}
        className={`w-full font-bold py-3 px-6 rounded-lg transition-colors ${isSelected || isPopular ? 'bg-brand-dark text-white hover:bg-gray-800' : 'bg-white text-brand-dark hover:bg-gray-100'}`}
      >
        {isSelected ? 'Plano Selecionado' : 'Selecionar Plano'}
      </button>
    </div>
  );
};


const Plans: React.FC = () => {
  const { isAuthenticated, openAuthModal, user, subscribe } = useContext(AuthContext);
  const popularPlan = plans.find(p => p.popular);
  const [selectedPlanName, setSelectedPlanName] = useState<string>(popularPlan ? popularPlan.name : plans[0].name);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlanName(planName);
    if (!isAuthenticated) {
        openAuthModal();
    } else {
        subscribe(planName);
        alert(`Parabéns! Você assinou o ${planName}.`);
    }
  }
  
  const isSubscribedToSelected = user?.subscription === selectedPlanName;

  return (
    <section id="plans" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Planos para todos os contadores de histórias</h2>
          <p className="text-lg text-brand-text mt-4 max-w-2xl mx-auto">Escolha o pacote perfeito para eternizar suas memórias com a frequência que desejar.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <PlanCard 
              key={index} 
              plan={plan} 
              isSelected={selectedPlanName === plan.name}
              onSelect={() => handleSelectPlan(plan.name)}
            />
          ))}
        </div>
        <div className="mt-12 text-center max-w-3xl mx-auto min-h-[120px]">
            {user?.subscription && (
                 <div className="p-6 bg-teal-50 border-2 border-teal-200 text-teal-900 rounded-lg shadow-sm animate-fadeIn">
                    <h4 className="font-bold text-lg">Você é assinante do {user.subscription}!</h4>
                    <p className="mt-2 text-sm md:text-base">
                        Continue revelando suas memórias conosco. Para alterar seu plano, basta selecionar uma nova opção acima.
                    </p>
                </div>
            )}
            {!user?.subscription && selectedPlanName === 'Plano Essencial' && (
                <div className="p-6 bg-blue-50 border-2 border-blue-200 text-blue-900 rounded-lg shadow-sm animate-fadeIn">
                    <h4 className="font-bold text-lg">Excelente para começar sua jornada!</h4>
                    <p className="mt-2 text-sm md:text-base">
                        O Plano Essencial é ideal para quem está começando. Para uma experiência completa com o dobro de fotos, frete grátis e nossas famosas caixinhas temáticas, recomendamos o <button onClick={() => setSelectedPlanName('Plano Clássico')} className="font-bold underline hover:text-blue-700">Plano Clássico</button>. Eleve suas memórias!
                    </p>
                </div>
            )}
             {!user?.subscription && selectedPlanName === 'Plano Clássico' && (
                <div className="p-6 bg-green-50 border-2 border-green-200 text-green-900 rounded-lg shadow-sm animate-fadeIn">
                    <h4 className="font-bold text-lg">A escolha mais popular por um motivo!</h4>
                    <p className="mt-2 text-sm md:text-base">
                        O Plano Clássico é o nosso best-seller! Para levar sua coleção ao próximo nível com ainda mais fotos em formatos variados e mimos exclusivos, considere o <button onClick={() => setSelectedPlanName('Plano Colecionador')} className="font-bold underline hover:text-green-700">Plano Colecionador</button>.
                    </p>
                </div>
            )}
            {!user?.subscription && selectedPlanName === 'Plano Colecionador' && (
                <div className="p-6 bg-purple-50 border-2 border-purple-200 text-purple-900 rounded-lg shadow-sm animate-fadeIn">
                    <h4 className="font-bold text-lg">A experiência definitiva para colecionadores!</h4>
                    <p className="mt-2 text-sm md:text-base">
                        Você selecionou nossa experiência mais completa. Prepare-se para eternizar suas memórias com o máximo de fotos, formatos variados e mimos exclusivos. Sua coleção será inesquecível.
                    </p>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default Plans;