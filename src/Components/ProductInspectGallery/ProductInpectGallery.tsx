import React from 'react';
import styles from './ProductInspectGallery.module.css';
import ProductInspectCarousel from '../ProductInspectCarousel/ProductInspectCarousel';

interface ProductInspectGalleryProps {
    gallery: string[];
    selectedImage: string;
    setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
    isMobile: boolean;
}

const ProductInspectGallery: React.FC<ProductInspectGalleryProps> = ({ gallery, selectedImage, setSelectedImage, isMobile }) => {
    const isVideo = (url: string) => /\.(mp4|webm|ogg)$/i.test(url.toLowerCase());

    return (
        <>
            {isMobile ? (
                <ProductInspectCarousel
                    gallery={gallery}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    isMobile={isMobile}
                />
            ) : (
                <>
                    {/* Renderiza a imagem principal ou o vídeo */}
                    <div className={styles['main-media-container']}>
                        {isVideo(selectedImage) ? (
                            <video controls className={styles['product-video-large']}>
                                <source src={selectedImage} type={`video/${selectedImage.split('.').pop()}`} />
                                Seu navegador não suporta vídeos HTML5.
                            </video>
                        ) : (
                            <img src={selectedImage} alt="Imagem do produto" className={styles['product-image-large']} />
                        )}
                    </div>

                    {/* Ícone de promoção */}
                    <div className={styles['content-product-ico']} >
                        {/* <img className={styles['product-ico-promotion']} src={clubIco} alt="Promoção" /> */}
                    </div>

                    {/* Miniaturas das imagens e vídeos */}
                    <div className={styles['gallery']}>
                        {gallery.map((item, index) => (
                            <React.Fragment key={index}> {/* Envolver com Fragment */}
                                {isVideo(item) ? (
                                    <video
                                        src={item}
                                        className={`${styles['thumbnail']} ${selectedImage === item ? styles['selected'] : ''}`}
                                        onClick={() => setSelectedImage(item)}
                                    />
                                ) : (
                                    <img
                                        src={item}
                                        alt={`Imagem ${index + 1}`}
                                        className={`${styles['thumbnail']} ${selectedImage === item ? styles['selected'] : ''}`}
                                        onClick={() => setSelectedImage(item)}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default ProductInspectGallery;