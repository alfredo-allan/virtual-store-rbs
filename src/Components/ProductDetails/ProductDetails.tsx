import React, { useEffect, useState } from 'react';
import styles from './ProductDetails.module.css';
import { Product } from '../DataProducts/DataProducts';
import { useAuth } from '../../Contexts/AuthContext';
import { useShoppingBag, BagItem } from '../../Contexts/ShoppingBagContext';

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(product.imageUrl);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const { loggedInUser } = useAuth();
    const { addItem } = useShoppingBag();

    const userType = (loggedInUser as { tipoPessoa?: 'fisica' | 'juridica' })?.tipoPessoa || 'fisica';

    const displayedPrice = () => {
        if (userType === 'juridica' && product.priceJuridica !== undefined) return product.priceJuridica;
        if (userType === 'fisica' && product.priceFisica !== undefined) return product.priceFisica;
        return product.price;
    };

    const handleAddToCartClick = () => {
        const priceToAdd = displayedPrice();
        if (product.id && product.name && priceToAdd !== undefined) {
            const newItem: Omit<BagItem, 'quantity'> = {
                id: product.id,
                name: product.name,
                price: priceToAdd,
                imageUrl: product.imageUrl || '',
            };
            addItem(newItem);
            console.log(`${product.name} adicionado à sacola com preço: ${priceToAdd}`);
        } else {
            console.warn('Informações do produto ou preço indisponíveis para adicionar à sacola.');
        }
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const allImages = [product.imageUrl, product.secondaryImageUrl, ...(product.gallery || [])].filter(Boolean) as string[];

    return (
        <div className={styles['product-details']}>

            <div className={styles['product-gallery']}>
                {isMobile ? (
                    <div className={styles['carousel']}>
                        {allImages.map((img, index) => (
                            <img key={index} src={img} alt={`Imagem ${index + 1}`} className={styles['carousel-img']} />
                        ))}
                    </div>
                ) : (
                    <>
                        <div className={styles['main-image']}>
                            <img src={selectedImage} alt={product.name} className={styles['main-image-img']} />
                        </div>
                        <div className={styles['thumbnail-container']}>
                            {allImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumb ${index + 1}`}
                                    onClick={() => setSelectedImage(img)}
                                    className={`${styles['thumbnail-img']} ${selectedImage === img ? styles['selected'] : ''}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className={styles['product-header']}>
                <h1 className={styles['product-name']}>{product.name}</h1>
                <div className={styles['product-price']}>
                    <span className={styles['price']}>
                        {displayedPrice()?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || 'Preço indisponível'}
                    </span>
                    {product.oldPrice && (
                        <span className={styles['old-price']}>
                            {product.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                    )}
                    <button className={styles['buy-button']} onClick={handleAddToCartClick}>Adicionar à Sacola</button>
                </div>
                <p className={styles['product-description']}>{product.description}</p>
            </div>

            <div className={styles['product-info']}>
                <h3 className={styles['product-info-title']}>Informações do Produto</h3>
                <p className={styles['product-info-description']}>{product.productInfo}</p>
            </div>

            <div className={styles['product-characteristics']}>
                <h3>Características</h3>
                <ul className={styles['product-characteristics-content']}>
                    {product.caracteristicas && Object.entries(product.caracteristicas).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}: </strong>
                            {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductDetails;
