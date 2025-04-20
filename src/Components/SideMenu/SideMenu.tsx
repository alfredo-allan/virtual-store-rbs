import React, { useState } from 'react';
import styles from './SideMenu.module.css';
import { Link, useNavigate } from 'react-router-dom';
import rbsIco from '../../Assets/Img/logo-rbs-remove-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../Components/DataProducts/DataProducts';
import DataProducts from '../../Components/DataProducts/DataProducts';
import ModalResponse from '../../Components/ModalResponse/ModalResponse'; // Importe o ModalResponse

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleSearchClick = () => {
        setIsSearchActive(true);
    };

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handlePerformSearch = () => {
        if (searchTerm.trim()) {
            const results = DataProducts.filter(product =>
                product.productInfo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category?.toLowerCase().includes(searchTerm.toLowerCase())
            );

            navigate('/search-results', { state: { results } });

            setIsSearchActive(false);
            setSearchTerm('');
            onClose();
        } else {
            setModalMessage('Por favor, digite algo para buscar.');
            setModalVisible(true);
        }
    };

    const handleCloseSearch = () => {
        setIsSearchActive(false);
        setSearchTerm('');
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <div className={`${styles['side-menu-overlay']} ${isOpen ? styles['open'] : ''}`}>
            <div className={styles['side-menu']}>
                <button className={styles['close-button']} onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className={styles['content-rbs-logo']}>
                    <img className={styles['rbs-logo-bg']} src={rbsIco} alt="" />
                </div>
                <h2 className={styles['menu-title']}>Menu</h2>
                <ul className={styles['menu-list']}>
                    <li>
                        <Link to="/listar-produtos/shape" onClick={onClose}>Shape</Link>
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
                            placeholder="Buscar por descrição ou categoria..."
                            className={styles['search-input']}
                            value={searchTerm}
                            onChange={handleSearchInputChange}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    handlePerformSearch();
                                }
                            }}
                        />
                        <FontAwesomeIcon icon={faSearch} className={styles['search-icon']} onClick={handlePerformSearch} />
                        <button className={styles['close-search-button']} onClick={handleCloseSearch}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            )}

            <ModalResponse
                isOpen={modalVisible}
                title="Aviso"
                message={modalMessage}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default SideMenu;