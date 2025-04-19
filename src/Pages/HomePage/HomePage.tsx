// src/Pages/HomePage/HomePage.tsx
import React from 'react';
import Header from '../../Components/Header/Header';
import ContentImages from '../../Components/ContentImages/ContentImages';
import Footer from '../../Components/Footer/Footer';
import styles from './HomePage.module.css';
import ProductList from '../../Components/ProductList/ProductList';

function Home() {
    return (
        <div className={styles['content-home-page']}>
            <Header />
            <ContentImages />
            <ProductList searchTerm="" icoHeart="❤️" />
            <Footer />
        </div>
    );
}

export default Home;
