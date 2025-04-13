import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './ModalResponse.module.css';
import logoRbs from '../../Assets/Img/logo-rbs-remove-bg.png';

interface ModalResponseProps {
    isOpen: boolean;
    title: string;
    message: string;
    onClose: () => void;
}

const ModalResponse: React.FC<ModalResponseProps> = ({ isOpen, title, message, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 2000); // 1500 milissegundos = 1.5 segundos

            return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado ou isOpen mudar para false antes do tempo
        }
    }, [isOpen, onClose]);

    return (
        <div className={`modal fade ${isOpen ? 'show' : ''}`} id="modalResponse" tabIndex={-1} aria-labelledby="modalResponseLabel" aria-hidden={!isOpen} style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className={styles['modal-content']}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalResponseLabel">{title}</h5> {/* Removi o estilo inline */}
                        <div className={styles['content-logo']}>
                            <img className={styles['logo-rbs']} src={logoRbs} alt="logo rbs" />
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {message}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Fechar</button> {/* Corrigi a classe do botão */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalResponse;