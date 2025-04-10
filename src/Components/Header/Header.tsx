import React, { useState, useEffect, useRef } from 'react';
import './Header.module.css';
import styles from './Header.module.css';
import searchIcon from '../../Assets/Img/magnifier.png';
import userIco from '../../Assets/Img/profile-user.png';
import suportIco from '../../Assets/Img/suport.png';
import bagIco from '../../Assets/Img/add-to-cart.png';
import { useNavigation } from './script';
import { useAuth } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useShoppingBag } from '../../Contexts/ShoppingBagContext'; // Importe o hook do contexto
import logoContent from '../../Assets/Img/rbs_logo.png';

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
    const [isScrolling, setIsScrolling] = useState(false);

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

    return (
        <header className={styles['custon-header']}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <div
                                ref={logoImageRef}
                                className={styles['logo-content']}
                                onClick={navigateToHome}
                            >
                                <img src={logoContent} alt="Logo RBS" />
                            </div>
                            <div className={styles['content-search']}>
                                <li className="nav-item search-input-mobile" >
                                    <form className="form-inline my-2 my-lg-0 d-flex align-items-center">
                                        <button className={styles['btn-search']} type="submit">
                                            <img className={styles['search-ico']} src={searchIcon} alt="Buscar" />
                                        </button>
                                        <input
                                            className={styles['form-control']}
                                            type="search"
                                            placeholder="Busque na RBS"
                                            aria-label="Search"
                                        />
                                    </form>
                                </li>
                            </div>

                            <div className={styles['content-iteration-user']}>
                                {loggedInUser ? (
                                    <li className={styles['user-login-or-register']}>
                                        <div className={styles['nav-link']}>
                                            <img className={styles['user-ico']} src={userIco} alt="Usuário logado" />
                                            <span className={styles['iteration-header-text']}>Bem-vindo(a), {loggedInUser.nome}</span>
                                        </div>
                                    </li>
                                ) : (
                                    <li className={styles['user-login-or-register']}>
                                        <a
                                            className="nav-link"
                                            style={{ color: "white" }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            <img className={styles['user-ico']} src={userIco} alt="login ou registro" />
                                            <span className={styles['iteration-header-text']}>Entre ou cadastre-se</span>
                                        </a>
                                    </li>
                                )}
                                <li className={styles['nav-item']}>
                                    <a className={styles['nav-link']}>
                                        <img className={styles['iteration-header']} src={suportIco} alt="Suporte" />
                                    </a>
                                </li>
                                <li className={styles['iteration-bag-item']}>
                                    <a
                                        className={styles['nav-link']}
                                        onClick={handleBagClick}
                                    >
                                        <img className={styles['iteration-header']} src={bagIco} alt="Sacola de compras" />
                                        {itemCount > 0 && (
                                            <div className={styles['content-item-count']}>
                                                <span className={styles['item-count']}>{itemCount}</span>
                                            </div>
                                        )}
                                    </a>
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
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className={styles['nav-item']}>
                                <a className={styles['nav-link']}>
                                    {/* Todos os Produtos */}
                                </a>
                            </li>
                            {/* Outros links de categoria */}
                        </ul>
                    </div>
                </nav>
            </div >
        </header >
    );
}

export default Header;