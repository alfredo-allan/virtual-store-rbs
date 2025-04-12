import React, { useState, useEffect, useRef } from 'react';
import './Header.module.css';
import styles from './Header.module.css';
import userIco from '../../Assets/Img/profile-user.png';
import suportIco from '../../Assets/Img/suport.png';
import bagIco from '../../Assets/Img/add-to-cart.png';
import { useNavigation } from './script';
import { useAuth } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useShoppingBag } from '../../Contexts/ShoppingBagContext'; // Importe o hook do contexto
import logoContent from '../../Assets/Img/rbs_logo.png';
import SideMenu from '../../Components/SideMenu/SideMenu'; // Certifique-se do caminho correto
import menuIco from '../../Assets/Img/menu.png'; // Importe o ícone de menu

interface HeaderProps {
    // onBagIconClick?: () => void; // Remova ou deixe como está, a lógica agora está interna
}

function Header({ /* onBagIconClick */ }: HeaderProps) {
    const { navigateToHome } = useNavigation();
    const { loggedInUser, logout } = useAuth();
    const navigate = useNavigate();
    const { bagItems } = useShoppingBag(); // Acesse os itens da sacola
    const itemCount = bagItems.reduce((sum, item) => sum + item.quantity, 0);
    const logoImageRef = useRef<HTMLDivElement>(null); // Mudamos para HTMLDivElement pois o onClick está na div
    const logoRef = useRef<HTMLImageElement>(null);
    const [isScrolling, setIsScrolling] = useState(false); // Declaração única de isScrolling e setIsScrolling
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleBagClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate('/bag'); // Navega para a página da sacola
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);
            const timer = setTimeout(() => {
                setIsScrolling(false);
            }, 200);

            return () => clearTimeout(timer);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (logoImageRef.current) {
            if (isScrolling) {
                logoImageRef.current.classList.add(styles.pulse);
            } else {
                logoImageRef.current.classList.remove(styles.pulse);
            }
        }
    }, [isScrolling]);

    const handleOpenMenu = () => {
        setIsSideMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setIsSideMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);
            const timer = setTimeout(() => setIsScrolling(false), 200);
            return () => clearTimeout(timer);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (logoRef.current) {
            logoRef.current.classList.toggle(styles.pulse, isScrolling);
        }
    }, [isScrolling]);
    return (
        <header className={styles['custon-header']}>
            <img
                src={menuIco}
                alt="Menu"
                className={styles['mobile-menu-icon']}
                onClick={handleOpenMenu}
            />
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <img className={styles['logo-rbs']} src={logoContent} alt="Logo RBS" />
                            <div className={styles['content-iteration-user']}>
                                <li onClick={handleOpenMenu} className={styles['desktop-menu-item']}>
                                    <div className={styles['nav-link']}>
                                        <span className={styles['iteration-header-text']}>
                                            Menu
                                        </span>
                                    </div>
                                </li>
                                {loggedInUser ? (
                                    <li className={styles['user-login-or-register']}>
                                        <div className={styles['nav-link']}>
                                            <img className={styles['user-ico']} src={userIco} alt="Usuário logado" />
                                            <span className={styles['iteration-header-text']}>Bem-vindo(a), {loggedInUser.nome}</span>
                                        </div>
                                    </li>
                                ) : (
                                    <li className={styles['user-login-or-register']}>
                                        <span
                                            className={styles['nav-link']}
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            <img className={styles['iteration-header']} src={userIco} alt="login ou registro" />
                                            <span className={styles['iteration-header-text']}>Entre ou cadastre-se</span>
                                        </span>
                                    </li>
                                )}
                                <li className={styles['nav-item']}>
                                    <div className={styles['nav-link']}>
                                        <img className={styles['iteration-header']} src={suportIco} alt="Suporte" />
                                        <span className={styles['iteration-header-text']}>Suporte</span>
                                    </div>
                                </li>
                                <li className={styles['iteration-bag-item']}>
                                    <span
                                        className={styles['nav-link']}
                                        onClick={handleBagClick}
                                    >
                                        <img className={styles['iteration-header']} src={bagIco} alt="Sacola de compras" />
                                        <span className={styles['iteration-header-text']}>Carrinho</span>
                                        {itemCount > 0 && (
                                            <div className={styles['content-item-count']}>
                                                <span className={styles['item-count']}>{itemCount}</span>
                                            </div>
                                        )}
                                    </span>
                                </li>
                                {loggedInUser && (
                                    <li className={styles['nav-link']}>
                                        <button className={styles['btn-logout']} onClick={handleLogout} >
                                            Sair
                                        </button>
                                    </li>
                                )}
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
            <SideMenu isOpen={isSideMenuOpen} onClose={handleCloseMenu} /> {/* Renderização do SideMenu */}
        </header>
    );
}

export default Header;