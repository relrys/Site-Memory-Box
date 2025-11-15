import React from 'react';

const formats = [
  {
    type: 'FOTOS POLAROID',
    price: 'A partir de R$ 22,90',
    tagline: 'PARA COLECIONAR COM ESTILO',
    description: 'Pacotes de fotos em formato polaroid. Revelação em papel fotográfico Fujifilm.',
    dimensions: 'Dimensões: 10x13cm, 8x13cm e 10x10cm',
    image: 'https://www.phosfato.com.br/_ipx/w_1520&q_80/img/produtos/21.jpg',
  },
  {
    type: 'FOTOS 10x15',
    price: 'A partir de R$ 22,90',
    tagline: 'PARA QUEM AMA O TRADICIONAL',
    description: 'Planos e pacotes de fotos em formato 10x15. Revelação em papel fotográfico Fujifilm.',
    dimensions: 'Dimensão: 10x15cm',
    image: 'https://images.pexels.com/photos/4836423/pexels-photo-4836423.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    type: 'FOTOS 15x20',
    price: 'A partir de R$ 34,90',
    tagline: 'PARA GRANDES MEMÓRIAS',
    description: 'Pacotes de fotos em formato 15x20. Revelação em papel fotográfico Fujifilm.',
    dimensions: 'Dimensão: 15x20cm',
    image: 'https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    type: 'FOTO ÍMÃS',
    price: 'A partir de R$ 44,90',
    tagline: 'PERFEITAS PARA SUA DECORAÇÃO',
    description: 'Pacotes de foto ímãs em formato polaroid. Revelação em papel fotográfico Fujifilm.',
    dimensions: 'Dimensões: 10x13cm, 8x13cm e 10x10cm',
    image: 'https://www.phosfato.com.br/_ipx/w_1520&q_80/img/produtos/23.jpg',
  },
  {
    type: 'ÁLBUNS',
    price: 'A partir de R$ 67,90',
    tagline: 'PARA GUARDAR SUAS FOTOS COM CARINHO',
    description: 'Diversas opções de modelos, capas e tamanhos. Qualidade e design exclusivos.',
    dimensions: '',
    image: 'https://images.pexels.com/photos/4245932/pexels-photo-4245932.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    type: 'CRIE UM PACOTE',
    price: 'Saiba mais no App',
    tagline: 'CRIE UM PACOTE DO SEU JEITO',
    description: 'Escolha a quantidade fotos e o formato e revele quando quiser. Revelação em papel fotográfico Fujifilm.',
    dimensions: '',
    image: 'https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const FormatCard: React.FC<typeof formats[0]> = ({ type, price, tagline, description, dimensions, image }) => (
  <div className="bg-brand-secondary rounded-3xl p-6 flex flex-col h-full">
    <div className="bg-brand-dark rounded-2xl overflow-hidden text-white mb-6">
      <h3 className="text-center font-bold text-xl py-4 tracking-wider">{type}</h3>
      <div className="aspect-[4/5]">
          <img src={image} alt={type} className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="flex flex-col flex-grow">
      <div className="flex items-center gap-4 mb-2">
        <h3 className="font-bold text-xl text-brand-dark whitespace-nowrap">{type}</h3>
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <p className="text-gray-500 font-medium mb-4">{price}</p>
      
      <h4 className="font-extrabold text-2xl text-brand-dark mb-2 leading-tight">{tagline}</h4>
      <p className="text-brand-text text-sm mb-2 ">{description}</p>
      {dimensions && <p className="text-brand-text font-bold text-sm ">{dimensions}</p>}
      
      <div className="flex-grow"></div>

      <button className="mt-6 w-full border-2 border-brand-dark text-brand-dark font-bold py-3 px-6 rounded-full hover:bg-brand-dark hover:text-white transition-colors">
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