import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage/HomePage';
// import CookiesPolicy from '../Pages/CookiesPolicy/CookiesPolicy';
// import ProductInspectPage from '../Pages/ProductInspectPage/ProductInpectPage';
// import BagSideMenuPage from '../Pages/BagSideMenuPage/BagSideMenuPage'; 
// import CartCheckPage from '../Pages/CartCheckPage/CartCheckPage';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/cookies-policy" element={<CookiesPolicy />} /> */}
                {/* <Route path="/product/:id" element={<ProductInspectPage />} /> */}
                {/* Adicione a rota para a página da sacola */}
                {/* <Route path="/CartCheck" element={<CartCheckPage />} /> */}
                {/* <Route path="/bag" element={<BagSideMenuPage />} /> */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;