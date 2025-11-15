import React from 'react';

const albums = [
    { name: 'Álbuns NÓRDICOS', image: 'https://picsum.photos/seed/nordic/400/400'},
    { name: 'Álbuns SELFIE', image: 'https://picsum.photos/seed/selfie/400/400'},
    { name: 'Álbuns SOLARIS', image: 'https://picsum.photos/seed/solaris/400/400'},
]

const Albums: React.FC = () => {
    return (
        <section id="albums" className="py-20 bg-brand-secondary">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight mb-6">
                            Conheça nossos álbuns
                        </h2>
                        <ul className="space-y-3 text-brand-text text-lg mb-6">
                           <li>Descontos exclusivos no App e <span className="font-bold">frete grátis para assinantes.</span></li>
                           <li>*Parcelamento em até <span className="font-bold">6x sem juros.</span></li>
                        </ul>
                        <p className="text-brand-text mb-8">
                            Álbuns com capacidade de 12 até 500 fotos. Escolha o modelo, a capa e o tamanho que mais combina com você.
                        </p>
                        <a href="#" className="bg-brand-dark text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-800 transition-colors shadow-lg">
                            Conheça nossos Álbuns
                        </a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {albums.map((album, index) => (
                             <div key={index} className="text-center">
                                <p className="font-bold text-brand-dark mb-2">{album.name}</p>
                                <img src={album.image} alt={album.name} className="rounded-lg shadow-md w-full h-auto aspect-square object-cover" />
                             </div>
                        )).slice(0,1)}
                         <div className="col-span-2 grid grid-cols-2 gap-4">
                            {albums.map((album, index) => (
                                <div key={index} className="text-center">
                                    <p className="font-bold text-brand-dark mb-2">{album.name}</p>
                                    <img src={album.image} alt={album.name} className="rounded-lg shadow-md w-full h-auto aspect-square object-cover" />
                                </div>
                            )).slice(1,3)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Albums;