import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';
import icoInstagram from '../../Assets/Img/instagram.png';
import icoFacebook from '../../Assets/Img/facebook-app-symbol.png';
import icoYoutube from '../../Assets/Img/youtube.png';
import amexIco from '../../Assets/Img/amex-ico.svg';
import visaIco from '../../Assets/Img/visa-ico.svg';
import masterIco from '../../Assets/Img/master-card-ico.svg';
import eloIco from '../../Assets/Img/elo-ico.svg';
import dinersIco from '../../Assets/Img/diners-ico.svg';
import seloIco from '../../Assets/Img/recomenta-ico.webp';
import rbsIco from '../../Assets/Img/rbs_logo.png';
import pixIco from '../../Assets/Img/icons8-foto.svg';
import rocketIco from '../../Assets/Img/rocket.png';

function Footer() {
    const [isInstitutionalOpen, setIsInstitutionalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    // Remova o useNavigate aqui, não é necessário para links externos
    // const navigate = useNavigate();
    const instagramUrl = 'https://www.instagram.com/rbs.representacao/?igsh=d3NrNGs2ZjJsdWp2';


    const toggleInstitutional = () => {
        if (isMobile) {
            setIsInstitutionalOpen(!isInstitutionalOpen);
        }
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // Função para navegar para um link externo
    const navigateToExternalLink = (url: string) => { // Adicionamos ": string" para definir o tipo do parâmetro url
        window.open(url, '_blank'); // Abre em uma nova aba
        // Se você quiser redirecionar na mesma aba, use:
        // window.location.href = url;
    };

    // URL do Instagram

    return (
        <footer className={styles.footer}>
            <div className={styles['footer-content']}>
                <div className={styles['social-section']}>
                    <div className={styles['content-logo-footer']}>
                        <img className={styles['logo-footer']} src={rbsIco} alt="logo rbs" />
                    </div>
                    <div className={styles['content-social-icons']}>
                        <img
                            className={styles['social-icon']}
                            onClick={() => navigateToExternalLink(instagramUrl)}
                            src={icoInstagram}
                            alt="Instagram"
                        />
                        <img className={styles['social-icon']} src={icoFacebook} alt="Facebook" />
                        <img className={styles['social-icon']} src={rocketIco} alt="leap" />
                        <img className={styles['social-icon-youtube']} src={icoYoutube} alt="Twitter" />

                    </div>
                </div>
                <div className={styles['newsletter-section']}>
                    <span className={styles['newsletter-title']}>Fique por dentro das novidades</span>
                    <div className={styles['newsletter-form']}>
                        <input type="text" placeholder="Digite seu nome" className={styles['newsletter-input']} />
                        <input type="email" placeholder="Digite seu e-mail" className={styles['newsletter-input']} />
                        <button className={styles['newsletter-button']}>Cadastrar</button>
                    </div>
                </div>

                <div className={styles['institutional-section']}>
                    <div className={styles['institutional-title-container']} onClick={toggleInstitutional}>
                        <span className={styles['institutional-title']}>Institucional</span>
                        {isMobile && (
                            <span className={styles['institutional-arrow']}>
                                {isInstitutionalOpen ? '▲' : '▼'}
                            </span>
                        )}
                    </div>
                    {isMobile ? (
                        isInstitutionalOpen && (
                            <div className={styles['institutional-links']}>
                                <b>Sobre a gente</b>
                                <b>Trocas e devoluções</b>
                                <b>Política de Privacidade</b>
                                <b>Política Promocional</b>
                                <b>Política de Pagamento</b>
                                <b>Política de Entrega</b>
                                <b>Política de Cookies</b>
                                <b>Dúvidas Frequentes</b>
                                <b>Fale Conosco</b>
                                <b>Catálogo Completo</b>
                                <b>Termos de Uso</b>
                            </div>
                        )
                    ) : (
                        <div className={styles['institutional-links']}>
                            <b>Sobre a gente</b>
                            <b>Trocas e devoluções</b>
                            <b>Política de Privacidade</b>
                            <b>Política Promocional</b>
                            <b>Política de Pagamento</b>
                            <b>Política de Entrega</b>
                            <b>Política de Cookies</b>
                            {/* <b>Dúvidas Frequentes</b> */}
                            <b>Fale Conosco</b>
                            <b>Catálogo Completo</b>
                        </div>
                    )}
                </div>
                <div className={styles['payment-section']}>
                    <span className={styles['payment-title']}>Compre Seguro</span>
                    <div className={styles['payment-icons']}>
                        <img className={styles['payment-ico']} src={amexIco} alt="Amex" />
                        <img className={styles['payment-ico']} src={visaIco} alt="Visa" />
                        <img className={styles['payment-ico']} src={masterIco} alt="Mastercard" />
                        <img className={styles['payment-ico']} src={eloIco} alt="Elo" />
                        <img className={styles['payment-ico']} src={dinersIco} alt="Diners" />
                        <img className={styles['payment-ico']} src={pixIco} alt="pix" />

                    </div>
                    <div className={styles['payment-info']}>
                        <img src={seloIco} alt="Selo de Segurança" className={styles['security-seal']} />
                        {/* <img src="/caminho/para/linx-pay-icon.png" alt="Linx Pay" />
                        <img src="/caminho/para/vtex-icon.png" alt="VTEX" />
                        <img src="/caminho/para/avanti-icon.png" alt="AVANTI" /> */}
                    </div>
                    <hr className={styles['bar-content']} />
                </div>
                <div className={styles['company-info']}>
                    <p className={styles['company-text']} >Somos a RBS representação skate dês de 2018 trazendo as melhores opções e soluções em produtos</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;