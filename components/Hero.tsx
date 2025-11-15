import React, { useState, useEffect, useCallback } from 'react';

const slides = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>,
        title: 'Receba em casa',
        description: 'Entregamos para todo o Brasil. Revele e receba na comodidade da sua casa.',
        image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293c.39.39.39 1.023 0 1.414L11.414 15l-3.121 3.121c-.39.39-1.023.39-1.414 0L4.586 15.828c-.39-.39-.39-1.023 0-1.414L6.879 12M12 5l2.293 2.293c.39.39.39 1.023 0 1.414L12 11.414l-2.293-2.293c-.39-.39-.39-1.023 0-1.414L12 5zm0 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" /></svg>,
        title: 'Qualidade Premium',
        description: 'Suas fotos reveladas em papel Fujifilm de alta qualidade para durarem gerações.',
        image: 'https://images.pexels.com/photos/8922397/pexels-photo-8922397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
     {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>,
        title: 'Caixinhas Temáticas',
        description: 'Todo mês uma caixinha com design exclusivo e colecionável para guardar suas memórias.',
        image: 'https://images.pexels.com/photos/8472758/pexels-photo-8472758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        title: 'Flexibilidade Total',
        description: 'Pule um mês ou cancele quando quiser, sem burocracia e sem multas.',
        image: 'https://images.pexels.com/photos/5905557/pexels-photo-5905557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }
];

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);


const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setTimeout(nextSlide, 5000);
        return () => clearTimeout(timer);
    }, [currentIndex, nextSlide]);

  return (
    <section className="bg-brand-secondary">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            <div 
                className="lg:col-span-3 bg-brand-dark text-white rounded-3xl bg-cover bg-center min-h-[550px] flex flex-col justify-between p-8 md:p-10" 
                style={{backgroundImage: "linear-gradient(to right, rgba(20,20,20,0.9) 0%, rgba(20,20,20,0.4) 60%, rgba(20,20,20,0) 100%), url('https://images.pexels.com/photos/8261821/pexels-photo-8261821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}
            >
                <div>
                    <span className="inline-flex items-center bg-black/30 text-white text-xs font-bold px-3 py-1 rounded-full uppercase backdrop-blur-sm">
                        <ClockIcon /> Somente em Novembro
                    </span>
                    <p className="mt-6 text-lg text-gray-200">Assine um plano anual e garanta</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight my-2 text-white">
                        DOBRO DE FOTOS REVELADAS TODOS OS MESES
                    </h1>
                    <p className="text-lg text-gray-200 mt-4">
                        + 2 PORTA-RETRATOS EXCLUSIVOS
                    </p>
                     <p className="text-lg font-bold text-amber-400 mb-2">
                        + Bônus Extra 30% OFF nos álbuns, fotos avulsas ou foto ímãs.
                    </p>
                    <p className="text-xs text-gray-400">
                        *Porta-retratos enviados no segundo pack da assinatura.
                    </p>
                </div>
                <div className="mt-8">
                   <p className="mb-4 font-medium text-gray-200">Planos a partir de R$ 22,90/mês</p>
                    <a href="#plans" className="bg-white text-brand-dark font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-lg inline-block">
                        Ver Planos
                    </a>
                </div>
            </div>

            <div className="lg:col-span-2 bg-brand-dark text-white p-6 rounded-3xl shadow-lg relative min-h-[550px] flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 flex-shrink-0">Por que escolher a Memory Box?</h3>
                <div className="flex-grow relative overflow-hidden rounded-2xl">
                    {/* Slides */}
                    {slides.map((slide, index) => (
                        <div key={index} className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}>
                            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <div className="flex items-center space-x-3 mb-2">
                                    {React.cloneElement(slide.icon, { className: 'w-7 h-7 text-white flex-shrink-0' })}
                                    <h4 className="font-bold text-lg">{slide.title}</h4>
                                </div>
                                <p className="text-sm text-gray-300 max-w-xs">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                    {/* Navigation */}
                    <div className="absolute z-20 top-1/2 -translate-y-1/2 w-full flex justify-between px-2">
                         <button onClick={prevSlide} aria-label="Previous slide" className="bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition">
                           <ChevronLeftIcon />
                        </button>
                        <button onClick={nextSlide} aria-label="Next slide" className="bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition">
                           <ChevronRightIcon />
                        </button>
                    </div>
                    {/* Pagination */}
                     <div className="absolute bottom-4 z-20 left-1/2 -translate-x-1/2 flex items-center space-x-2">
                         {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`transition-all duration-300 rounded-full ${currentIndex === index ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white'}`}
                            />
                        ))}
                    </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;