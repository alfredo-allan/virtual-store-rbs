// src/Components/ProductList/ProductList.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';
import exampleProduct, { Product } from '../DataProducts/DataProducts';
import { useAuth } from '../../Contexts/AuthContext';

export interface ProductListProps {
    searchTerm?: string;
    className?: string;
    icoHeart: string;
}

const ProductList: React.FC<ProductListProps> = ({ searchTerm = '', icoHeart, className }) => {
    const navigate = useNavigate();
    const { loggedInUser } = useAuth();

    const userType = (loggedInUser as { tipoPessoa?: 'fisica' | 'juridica' })?.tipoPessoa || 'fisica';

    const filteredProduct = exampleProduct.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getDisplayedPrice = (product: Product) => {
        if (userType === 'juridica' && product.priceJuridica !== undefined) {
            return product.priceJuridica;
        }
        if (userType === 'fisica' && product.priceFisica !== undefined) {
            return product.priceFisica;
        }
        return product.price;
    };

    const handleProductClick = (product: Product) => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className={`${styles['category-details']} ${className}`}>
            <div className={styles['product-section']}>
                {filteredProduct.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        icoHeart={icoHeart}
                        onClick={handleProductClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
