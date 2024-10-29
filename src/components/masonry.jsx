import React from 'react';
import '../styles/masonry.css';

const images = [
    { src: '/portadas/portada02.jpg', alt: 'portada 2' },
    { src: '/portadas/portada08.jpg', alt: 'portada 8' },
    { src: '/portadas/portada06.jpg', alt: 'portada 6' },
    { src: '/portadas/portada01.jpg', alt: 'portada 1' },
    { src: '/portadas/portada07.jpg', alt: 'portada 7' },
    { src: '/portadas/portada04.jpg', alt: 'portada 4' },
    { src: '/portadas/portada22.jpg', alt: 'portada 22' },
    { src: '/portadas/portada23.jpg', alt: 'portada 23' },
    { src: '/portadas/portada24.jpg', alt: 'portada 24' },
    { src: '/portadas/portada26.jpg', alt: 'portada 26' },
    { src: '/portadas/portada03.jpg', alt: 'portada 3' },
    { src: '/portadas/portada09.jpg', alt: 'portada 9' },
    { src: '/portadas/portada10.jpg', alt: 'portada 10' },
    { src: '/portadas/portada11.jpg', alt: 'portada 11' },
    { src: '/portadas/portada12.jpg', alt: 'portada 12' },
    { src: '/portadas/portada13.jpg', alt: 'portada 13' },
    { src: '/portadas/portada14.jpg', alt: 'portada 14' },
    { src: '/portadas/portada15.jpg', alt: 'portada 15' },
    { src: '/portadas/portada16.jpg', alt: 'portada 16' },
    { src: '/portadas/portada17.jpg', alt: 'portada 17' },
    { src: '/portadas/portada18.jpg', alt: 'portada 18' },
    { src: '/portadas/portada05.jpg', alt: 'portada 5' },
    { src: '/portadas/portada19.jpg', alt: 'portada 19' },
    { src: '/portadas/portada20.jpg', alt: 'portada 20' },
    { src: '/portadas/portada21.jpg', alt: 'portada 21' },
    { src: '/portadas/portada25.jpg', alt: 'portada 24' }
];

function MasonryGallery() {

    return (
        <div className='masonry-gallery'>
            {images.map((img, index ) => (
                <img
                key={index}
                src={img.src}
                alt={img.alt}
                className='masonry-item'
                />
            ))}
        </div>
    );
};

export default MasonryGallery