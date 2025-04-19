import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const foundProduct = DataProducts.find((p) => p.id === parseInt(id || '0'));
        setProduct(foundProduct);
    }, [id]);

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

                <ProductDetails product={product} />

                <Footer />
            </div>
        </div>
    );
};

export default ProductInspectPage;
