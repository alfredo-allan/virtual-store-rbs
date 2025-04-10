import React, { useState, useEffect } from 'react';
import styles from './CarouselContent.module.css';

interface CarouselProps {
    imagesDesktop: string[];
    imagesMobile: string[];
    autoplayInterval?: number; // Adicionamos uma prop opcional para controlar o intervalo
}

const CarouselContent: React.FC<CarouselProps> = ({ imagesDesktop, imagesMobile, autoplayInterval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const images = isMobile ? imagesMobile : imagesDesktop;

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (autoplayInterval > 0) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, autoplayInterval);

            // Limpa o intervalo quando o componente é desmontado
            return () => clearInterval(timer);
        }
        // Se autoplayInterval for 0 ou negativo, o autoplay não será iniciado
    }, [autoplayInterval, images.length]); // Dependências importantes para o efeito

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className={styles['custom-carousel']}>
            <div className={styles['custom-carousel-inner']} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className={styles['custom-carousel-item']}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className={styles['custom-carousel-control']} onClick={handlePrev}>
                &lt;
            </button>
            <button className={styles['custom-carousel-control']} onClick={handleNext}>
                &gt;
            </button>
            <div className={styles['custom-carousel-indicators']}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={styles['custom-indicator']}
                        style={{ backgroundColor: index === currentIndex ? '#050505' : 'rgba(255, 255, 255, 0.5)' }}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarouselContent;