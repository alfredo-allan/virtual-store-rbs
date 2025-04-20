import React, { useState } from 'react';
import styles from './ProductCard.module.css';
import thumbsUpIcon from '../../Assets/Img/heart-like.png';
import clubIco from '../../Assets/Img/heart.png';
import { useShoppingBag, BagItem } from '../../Contexts/ShoppingBagContext';
import { useAuth } from '../../Contexts/AuthContext';
import { Product } from '../DataProducts/DataProducts';
import { isMobile } from '../../utils/isMobile';

export interface ProductCardProps {
    product: Product;
    icoHeart: string;
    videoUrl?: string;
    onClick?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, icoHeart, onClick }) => {
    const [liked, setLiked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { addItem } = useShoppingBag(); // Obtemos a função addItem do contexto
    const { loggedInUser } = useAuth();

    const userType = loggedInUser && 'tipoPessoa' in loggedInUser
        ? loggedInUser.tipoPessoa
        : 'fisica';

    const displayedPrice = () => {
        if (userType === 'juridica' && product.priceJuridica !== undefined) {
            return product.priceJuridica;
        }
        if (userType === 'fisica' && product.priceFisica !== undefined) {
            return product.priceFisica;
        }
        return product.price;
    };

    const handleAddToCartClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // Evita que o clique no botão acione o handleCardClick
        const priceToAdd = displayedPrice();
        if (product.id && product.name && priceToAdd !== undefined) {
            const newItem: Omit<BagItem, 'quantity'> = {
                id: product.id,
                name: product.name,
                price: priceToAdd,
                imageUrl: product.imageUrl || '',
            };
            addItem(newItem); // Chama a função addItem do contexto
            console.log(`${product.name} adicionado à sacola com preço: ${priceToAdd}`);
            // Opcional: Adicionar um feedback visual ao usuário (ex: um pequeno popup)
        } else {
            console.warn('Informações do produto ou preço indisponíveis para adicionar à sacola.');
        }
    };

    const handleCardClick = () => {
        if (isMobile()) {
            console.log("Abrir carrossel mobile com:", product.gallery);
        } else {
            console.log("Abrir galeria desktop com:", product.gallery);
        }
        onClick?.(product);
    };

    return (
        <div
            className={styles['product-card']}
            onClick={handleCardClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {product.discount && (
                <span className={styles['discount-badge']}>{product.discount}</span>
            )}

            <img
                src={
                    isHovered && product.secondaryImageUrl
                        ? product.secondaryImageUrl
                        : product.imageUrl
                }
                alt={product.name}
                className={styles['product-image']}
            />

            <div
                className={styles['circle-of-the-heart']}
                onClick={(e) => {
                    e.stopPropagation();
                    setLiked(!liked);
                }}
            >
                <img
                    src={clubIco}
                    alt="Favoritar"
                    className={`${styles['icoHeart']} ${styles['default-icon']} ${liked ? styles['hidden'] : ''}`}
                />
                <img
                    src={thumbsUpIcon}
                    alt="Like"
                    className={`${styles['icoHeart']} ${styles['hover-icon']} ${liked ? '' : styles['hidden']}`}
                />
            </div>

            <h3 className={styles['product-name']}>{product.name}</h3>

            <div className={styles['product-prices']}>
                {product.oldPrice !== undefined && (
                    <span className={styles['old-price']}>
                        {product.oldPrice.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })}
                    </span>
                )}
                <span className={styles['discount-price']}>
                    {displayedPrice()?.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }) || 'Preço indisponível'}
                </span>
            </div>

            <div
                className={styles['content-buy-button']}
                onClick={handleAddToCartClick} // Adicionamos o evento de clique aqui
            >
                <button className={styles['buy-button']}>+</button>
            </div>
        </div>
    );
};

export default ProductCard;