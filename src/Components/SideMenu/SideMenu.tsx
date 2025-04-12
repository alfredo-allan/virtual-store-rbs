import React from 'react';
import styles from './SideMenu.module.css';
import { Link } from 'react-router-dom'; // Se você for usar links de navegação
import rbsIco from '../../Assets/Img/logo-rbs-remove-bg.png';

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`${styles['side-menu-overlay']} ${isOpen ? styles['open'] : ''}`}>
            <div className={styles['side-menu']}>
                <button className={styles['close-button']} onClick={onClose}>
                    <span aria-hidden="true">&times;</span> {/* Ícone de "X" para fechar */}
                </button>
                <div className={styles['content-rbs-logo']}>
                    <img className={styles['rbs-logo-bg']} src={rbsIco} alt="" />
                </div>
                <h2 className={styles['menu-title']}>Menu</h2>
                <ul className={styles['menu-list']}>
                    <li>
                        {/* Use Link se você já tiver as rotas configuradas */}
                        <Link to="/listar-produtos" onClick={onClose}>Listar Produtos</Link>
                        {/* Ou use um simples elemento se a navegação for feita de outra forma */}
                    </li>
                    <li>
                        {/* <Link to="/suporte" onClick={onClose}>Suporte</Link> */}

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;