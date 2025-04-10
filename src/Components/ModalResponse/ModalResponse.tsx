import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './ModalResponse.module.css'

interface ModalResponseProps {
    show: boolean;
    onClose: () => void;
    title: string;
    message: string;
}

const ModalResponse: React.FC<ModalResponseProps> = ({ show, onClose, title, message }) => {
    return (
        <Modal className={styles['btn-close']} show={show} onHide={onClose}>
            <Modal.Header className={styles['content-modal-response']} closeButton>
                <Modal.Title className={styles['content-modal-response-title']}>{title} <p className={styles['content-modaL-text-logo']}><b className={styles['content-modaL-text-logo-b']}>BRASIL</b> <b className={styles['content-modaL-text-logo-c']}>CACAU</b></p> </Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles['content-modal-response-body']}>{message}</Modal.Body>
            <Modal.Footer className={styles['content-modal-response-footer']}>
                <Button className={styles['content-modal-response-btn-close']} variant="secondary" onClick={onClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalResponse;