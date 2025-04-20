// src/Pages/SearchResultsPage/SearchResultsPage.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Product } from '../../Components/DataProducts/DataProducts';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import styles from './SearchResultsPage.module.css';
import { useAuth } from '../../Contexts/AuthContext';
import sadIcon from '../../Assets/Img/sad.png'; // Importe a imagem

const SearchResultsPage: React.FC = () => {
    const location = useLocation();
    const { state } = location;
    const results: Product[] = state?.results || [];
    const navigate = useNavigate();
    const { loggedInUser } = useAuth();

    const userType = (loggedInUser as { tipoPessoa?: 'fisica' | 'juridica' })?.tipoPessoa || 'fisica';

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
        <div className={styles['search-results-page']}>
            <Header />
            <h1>Resultados da Busca</h1>
            {results.length > 0 ? (
                <div className={styles['product-list']}>
                    {results.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            icoHeart="❤️"
                            onClick={handleProductClick}
                        />
                    ))}
                    <div className={styles['content-footer']}>
                        <Footer />
                    </div>
                </div>
            ) : (
                <div className={styles['no-results']}>
                    <img src={sadIcon} alt="Nenhum resultado encontrado" className={styles['sad-icon']} />
                    <p className={styles['no-results-text']}>Nenhum produto corresponde à sua busca.</p>
                </div>
            )}
        </div>
    );
};

export default SearchResultsPage;