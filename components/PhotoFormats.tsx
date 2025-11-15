import React from 'react';

const formats = [
  {
    type: 'FOTOS POLAROID',
    price: '22,90',
    tagline: 'PARA COLECIONAR COM ESTILO',
    description: 'Planos e pacotes de fotos em formato polaroid. Revelação em papel fotográfico Fujifilm. Dimensões: 10x13cm, 8x13cm e 10x10cm',
    image: 'https://picsum.photos/seed/polaroid/400/300',
  },
  {
    type: 'FOTOS 10x15',
    price: '22,90',
    tagline: 'PARA QUEM AMA O TRADICIONAL',
    description: 'Planos e pacotes de fotos em formato 10x15. Revelação em papel fotográfico Fujifilm.',
    image: 'https://picsum.photos/seed/10x15/400/300',
  },
  {
    type: 'FOTOS 15x20',
    price: '34,90',
    tagline: 'PARA GRANDES MEMÓRIAS',
    description: 'Planos e pacotes de fotos em formato 15x20. Revelação em papel fotográfico Fujifilm.',
    image: 'https://picsum.photos/seed/15x20/400/300',
  },
];

const FormatCard: React.FC<typeof formats[0]> = ({ type, price, tagline, description, image }) => (
  <div className="bg-brand-dark rounded-2xl overflow-hidden text-white">
    <div className="relative h-56">
      <img src={image} alt={type} className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-white text-brand-dark font-bold text-sm px-3 py-1 rounded-md">
        {type}
      </div>
    </div>
    <div className="p-6">
      <div className="border-b border-gray-700 pb-4 mb-4">
        <h3 className="font-bold text-xl">{type}</h3>
        <p className="text-gray-400">A partir de R$ {price}</p>
      </div>
      <h4 className="font-bold mb-2">{tagline}</h4>
      <p className="text-gray-300 text-sm mb-6">{description}</p>
      <button className="w-full bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
        Comprar
      </button>
    </div>
  </div>
);

const PhotoFormats: React.FC = () => {
  return (
    <section id="formats" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Escolha o formato e</h2>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">monte seu plano ou pacote de fotos</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formats.map((format, index) => (
            <FormatCard key={index} {...format} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoFormats;