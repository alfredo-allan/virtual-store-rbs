import React, { useState, useEffect, useRef } from 'react';
import styles from './ProductInspectPage.module.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import DataProducts, { Product } from '../../Components/DataProducts/DataProducts';
import ProductDetails from '../../Components/ProductDetails/ProductDetails';

const ProductInspectPage = () => {
    const { id } = useParams<{ id?: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const productGalleryRef = useRef<HTMLDivElement>(null); // Cria uma ref para a galeria no ProductDetails

    useEffect(() => {
        const foundProduct = DataProducts.find((p) => p.id === parseInt(id || '0'));
        setProduct(foundProduct);

        // Define o foco na galeria quando o produto é carregado e a ref está disponível
        if (foundProduct && productGalleryRef.current) {
            productGalleryRef.current.focus();
        }
    }, [id, productGalleryRef]); // Incluímos productGalleryRef como dependência

    const handleGoBack = () => {
        navigate('/');
    };

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    return (
        <div className={styles['product-inspect-page']}>
            <div className={styles['content-product-inspect-page']}>
                <Header />

                <div className={styles['back-wrapper']}>
                    <button className={styles['back-button']} onClick={handleGoBack}>← Voltar</button>
                </div>

                {/* Passa a ref para o componente ProductDetails */}
                <ProductDetails ref={productGalleryRef} product={product} />

                <Footer />
            </div>
        </div>
    );
};

export default ProductInspectPage;