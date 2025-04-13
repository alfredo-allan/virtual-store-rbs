import React from 'react';
import LoginOrRegister from '../../Components/LoginOrRegister/LoginOrRegister'
import { useNavigate } from 'react-router-dom';
import styles from './LoginOrRegister.module.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const LoginOrRegisterPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        navigate('/'); // Redirecionar para a página inicial após o login
    };

    const handleRegisterSuccess = () => {
        alert('Cadastro realizado com sucesso! Faça login para continuar.');
        // Você pode optar por redirecionar aqui também
    };

    return (
        <div className={styles['login-register-page']}>
            <Header />
            <LoginOrRegister onLoginSuccess={handleLoginSuccess} onRegisterSuccess={handleRegisterSuccess} />
            <Footer />
        </div>
    );
};

export default LoginOrRegisterPage;