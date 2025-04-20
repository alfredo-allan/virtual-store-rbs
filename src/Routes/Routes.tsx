import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage/HomePage';
import LoginOrRegisterPage from '../Pages/LoginOrRegisterPage/LoginOrRegisterPage';
import ProductInspectPage from '../Pages/ProductInspectPage/ProductInpectPage';
import BagSideMenuPage from '../Pages/BagSideMenuPage/BagSideMenuPage';
import SearchResultsPage from '../Pages/SearchResultsPage/SearchResultsPage'; // Importe o componente SearchResultsPage

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login-or-register" element={<LoginOrRegisterPage />} />
                <Route path="/bag" element={<BagSideMenuPage />} />
                <Route path="/product/:id" element={<ProductInspectPage />} />
                <Route path="/search-results" element={<SearchResultsPage />} /> {/* Adicione esta rota */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;