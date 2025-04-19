import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ProductInspectCarousel.module.css'; // Importe o arquivo CSS

interface ProductInspectCarouselProps {
    gallery: string[];
    selectedImage: string;
    setSelectedImage: (image: string) => void;
    isMobile: boolean;
}

const ProductInspectCarousel: React.FC<ProductInspectCarouselProps> = ({ gallery, selectedImage, setSelectedImage }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className={styles['product-inspect-carousel']}>
            <Slider {...settings}>
                {gallery.map((img, index) => {
                    return (
                        <div key={index} className={`${styles['carousel-slide']} ${selectedImage === img ? styles['selected'] : ''}`} onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`Imagem ${index + 1}`} className={styles['carousel-image']} />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default ProductInspectCarousel;
