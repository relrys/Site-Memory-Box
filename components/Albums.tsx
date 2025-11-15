import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Product } from '../types';

const albums = [
    { name: 'Álbuns NÓRDICOS', image: 'https://www.phosfato.com.br/_ipx/q_80&s_640x640/img/albuns/12.jpeg'},
    { name: 'Álbuns SELFIE', image: 'https://images.pexels.com/photos/399161/pexels-photo-399161.jpeg?auto=compress&cs=tinysrgb&w=800'},
    { name: 'Álbuns SOLARIS', image: 'https://images.pexels.com/photos/1324742/pexels-photo-1324742.jpeg?auto=compress&cs=tinysrgb&w=800'},
]

const AlbumItem: React.FC<{ album: typeof albums[0] }> = ({ album }) => (
    <div>
        <h3 className="text-center font-bold text-brand-dark mb-3 tracking-wide">{album.name}</h3>
        <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
                src={album.image}
                alt={album.name}
                className="w-full h-auto aspect-[4/5] object-cover"
            />
        </div>
    </div>
);


const Albums: React.FC = () => {
    const { addToCart } = useContext(CartContext);
    
    const handleBuyAlbum = () => {
        const defaultAlbum: Product = {
            id: 'album-nordico',
            name: 'Álbum NÓRDICO',
            price: 89.90,
            image: albums[0].image,
        };
        addToCart(defaultAlbum);
        alert(`${defaultAlbum.name} foi adicionado ao carrinho!`);
    }

    return (
        <section id="albums" className="py-10 md:py-20">
            <div className="container mx-auto px-6">
                <div className="bg-brand-secondary rounded-3xl p-8 md:p-16">
                    <div className="grid lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-2">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight mb-6">
                                Conheça nossos álbuns
                            </h2>
                            <p className="text-brand-text text-lg mb-4">Descontos exclusivos no App e <span className="font-bold">frete grátis para assinantes.</span></p>
                            <p className="text-brand-text mb-4">*Parcelamento em até <span className="font-bold">6x sem juros.</span></p>
                            <p className="text-brand-text mb-8">
                                Álbuns com capacidade de 12 até 500 fotos. Escolha o modelo, a capa e o tamanho que mais combina com você.
                            </p>
                            <button onClick={handleBuyAlbum} className="bg-brand-dark text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-800 transition-colors shadow-lg inline-block">
                                Comprar Álbum NÓRDICO
                            </button>
                        </div>
                        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {albums.map((album, index) => (
                                <AlbumItem key={index} album={album} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Albums;