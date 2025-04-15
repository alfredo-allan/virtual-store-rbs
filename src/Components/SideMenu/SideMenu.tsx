import React, { useState } from 'react';
import styles from './SideMenu.module.css';
import { Link } from 'react-router-dom'; // Se você for usar links de navegação
import rbsIco from '../../Assets/Img/logo-rbs-remove-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchClick = () => {
        setIsSearchActive(true);
    };

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        // Aqui você implementaria a lógica de busca conforme o usuário digita
    };

    const handleCloseSearch = () => {
        setIsSearchActive(false);
        setSearchTerm('');
    };

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
                        <Link to="/listar-produtos" onClick={onClose}>Shape</Link>
                        {/* Ou use um simples elemento se a navegação for feita de outra forma */}
                    </li>
                    <li>
                        {/* <Link to="/suporte" onClick={onClose}>Suporte</Link> */}
                    </li>
                    <li onClick={handleSearchClick} className={styles['search-item']}>
                        Buscar
                    </li>
                </ul>
            </div>

            {isSearchActive && (
                <div className={styles['search-overlay']}>
                    <div className={styles['search-container']}>
                        <div className={styles['content-rbs-search']} >
                            <img className={styles['rbs-logo-search']} src={rbsIco} alt="" />
                        </div>
                        <input
                            type="text"
                            placeholder="Buscar por descrição..."
                            className={styles['search-input']}
                            value={searchTerm}
                            onChange={handleSearchInputChange}
                        />
                        <FontAwesomeIcon icon={faSearch} className={styles['search-icon']} />
                        <button className={styles['close-search-button']} onClick={handleCloseSearch}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideMenu;