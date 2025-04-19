import React, { useState, useEffect } from 'react';
import styles from './ProductInspect.module.css';
import GoBack from "../../Assets/Img/arrow.png";
import ProductInspectGallery from '../../Components/ProductInspectGallery/ProductInpectGallery';
import { useAuth } from '../../Contexts/AuthContext';

export interface ProductInspectProps {
    product: {
        id: number;
        name: string;
        imageUrl: string;
        secondaryImageUrl?: string;
        gallery: string[];
        price: number;
        priceFisica?: number;
        priceJuridica?: number;
    };
    onBack: () => void;
}

const ProductInspect: React.FC<ProductInspectProps> = ({ product, onBack }) => {
    const [selectedImage, setSelectedImage] = useState(product.imageUrl);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const { loggedInUser } = useAuth();

    const userType = (loggedInUser as { tipoPessoa?: 'fisica' | 'juridica' })?.tipoPessoa || 'fisica';

    const displayedPrice = () => {
        if (userType === 'juridica' && product.priceJuridica !== undefined) {
            return product.priceJuridica;
        }
        if (userType === 'fisica' && product.priceFisica !== undefined) {
            return product.priceFisica;
        }
        return product.price;
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={styles['product-inspect']}>
            <div className={styles['to-go-back']}>
                <img
                    src={GoBack}
                    className={styles['back-button']}
                    onClick={onBack}
                    alt="Ícone de voltar"
                />
                <b className={styles['back-text']}>Voltar</b>
            </div>

            <div className={styles['product-details']}>
                <div className={styles['inspection-title']}>
                    <h1 className={styles['inspection-name']}>{product.name}</h1>
                </div>

                <div className={styles['product-price']}>
                    <span>{displayedPrice()?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>

                <ProductInspectGallery
                    gallery={product.gallery}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    isMobile={isMobile}
                />
            </div>
        </div>
    );
};

export default ProductInspect;
