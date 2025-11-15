
import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="text-brand-primary mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-brand-dark mb-2">{title}</h3>
        <p className="text-brand-text text-sm">{description}</p>
    </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
                <img src="https://picsum.photos/seed/quality/600/450" alt="Foto de alta qualidade" className="rounded-lg shadow-xl"/>
            </div>
            <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">Mais que fotos, uma experiência.</h2>
                <p className="text-lg text-brand-text mb-8">
                    Cada detalhe é pensado para que suas memórias sejam tratadas com o carinho que merecem, desde a impressão até a sua porta.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <FeatureCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293c.39.39.39 1.023 0 1.414L11.414 15l-3.121 3.121c-.39.39-1.023.39-1.414 0L4.586 15.828c-.39-.39-.39-1.023 0-1.414L6.879 12M12 5l2.293 2.293c.39.39.39 1.023 0 1.414L12 11.414l-2.293-2.293c-.39-.39-.39-1.023 0-1.414L12 5zm0 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" /></svg>}
                        title="Qualidade de Laboratório"
                        description="Usamos os melhores papéis e processos de revelação para cores vivas e duradouras."
                    />
                     <FeatureCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        title="Conveniência Total"
                        description="Esqueça as idas à loja. Selecione e receba suas fotos no conforto do seu lar."
                    />
                     <FeatureCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>}
                        title="Flexibilidade para Você"
                        description="Pule um mês ou cancele quando quiser, sem burocracia e sem multas."
                    />
                     <FeatureCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
                        title="Uma História por Mês"
                        description="Nossas caixinhas temáticas transformam suas fotos em capítulos da sua vida."
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
