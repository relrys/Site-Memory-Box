import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-secondary">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-brand-dark text-white p-8 md:p-12 rounded-2xl bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/desk/1200/800')"}}>
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                <div>
                    <span className="inline-block bg-white text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase">Somente este mês</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight my-4">
                    DOBRO DE FOTOS REVELADAS TODOS OS MESES
                </h1>
                <p className="text-lg text-gray-200 mb-6">
                    + <span className="font-bold">2 PORTA-RETRATOS EXCLUSIVOS</span> + Bônus Extra <span className="font-bold">30% OFF</span> nos álbuns.
                </p>
                <p className="mb-8 font-medium">Planos a partir de R$ 22,90/mês</p>
                <a href="#plans" className="bg-white text-brand-dark font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-lg">
                    Ver Planos
                </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Por que escolher a Memory Box?</h3>
            <div className="space-y-6">
                <div>
                    <div className="flex items-center space-x-3 mb-2">
                        <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <h4 className="font-semibold text-brand-dark">Receba em casa</h4>
                    </div>
                    <p className="text-brand-text">Entregamos para todo o Brasil. Revele e receba na comodidade da sua casa.</p>
                    <img src="https://picsum.photos/seed/prints/500/300" alt="Fotos entregues em casa" className="rounded-lg mt-4 w-full h-48 object-cover"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;