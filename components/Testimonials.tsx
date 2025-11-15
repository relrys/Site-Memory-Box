import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
    {
        quote: "É a melhor parte do meu mês! Abrir a caixinha da Memory Box e rever os momentos é uma alegria indescritível. A qualidade é impecável!",
        author: "Mariana Silva",
        role: "Assinante desde 2022",
        avatar: "https://picsum.photos/seed/person1/100/100"
    },
    {
        quote: "Eu tinha milhares de fotos paradas no celular. Agora, elas decoram minha casa e minha vida. O serviço é prático e o resultado é lindo.",
        author: "João Pedro Costa",
        role: "Assinante do Plano Clássico",
        avatar: "https://picsum.photos/seed/person2/100/100"
    },
    {
        quote: "O presente perfeito para minha mãe! Todo mês ela recebe fotos novas dos netos. É uma forma carinhosa de estar perto, mesmo à distância.",
        author: "Carla Ferreira",
        role: "Presenteou a família",
        avatar: "https://picsum.photos/seed/person3/100/100"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Amado por quem ama memórias</h2>
                    <p className="text-lg text-brand-text mt-4 max-w-2xl mx-auto">Veja o que nossos assinantes estão dizendo sobre a experiência Memory Box.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                            <p className="text-brand-dark text-lg font-medium mb-6">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p className="font-bold text-brand-dark">{testimonial.author}</p>
                                    <p className="text-sm text-brand-text font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;