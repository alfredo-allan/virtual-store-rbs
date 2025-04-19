import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import styles from './BagSideMenuPage.module.css';
import BagSideMenu from '../../Components/BagSideMenu/BagSideMenu'; // Importe o componente
// Remova a importação da interface BagSideMenuProps se não for usada diretamente aqui
// import { BagSideMenuProps } from '../../Components/BagSideMenu/BagSideMenu';
// Remova a importação de ProductDetails se não for usar
// import ProductDetails from '../../Components/ProductDetails/ProductDetails';
import { useShoppingBag } from '../../Contexts/ShoppingBagContext'; // Importe APENAS o hook se não precisar da interface BagItem aqui

function BagSideMenuPage() {
    const navigate = useNavigate();
    // Use o hook para obter a função clearBag. Não precisamos mais de bagItems aqui.
    const { clearBag } = useShoppingBag();
    // O estado isBagOpen controla se o menu lateral deve ser considerado "aberto"
    // para a lógica interna do BagSideMenu, mas aqui ele sempre será renderizado.
    const [isBagOpen, setIsBagOpen] = useState(true); // Mantém como true para renderizar o conteúdo

    const closeBag = () => {
        // A ação de "fechar" nesta página dedicada significa navegar para outro lugar
        navigate(-1); // Navega para a página anterior, ou use '/' para ir para a home
    };

    // Se você precisar da lógica de limpar a sacola dentro desta página
    const handleClearBag = () => {
        clearBag();
        // Opcional: talvez navegar para a home após limpar
        // navigate('/');
    };

    return (
        <div className={styles['bag-side-menu-page']}>
            {/* O Header não precisa mais controlar a abertura/fechamento da sacola aqui */}
            <Header />
            <div className={styles['bag-content-wrapper']}>
                {/*
                   Renderiza o BagSideMenu.
                   - Não passamos mais 'bagItems' pois ele pega do contexto.
                   - 'isOpen' pode ser sempre true aqui, ou você pode usar o estado se houver lógica para "minimizar" visualmente.
                   - 'onClose' é a ação a ser executada quando o botão de fechar DENTRO do BagSideMenu for clicado.
                   - 'onClearBag' é a função para limpar a sacola.
                */}
                <BagSideMenu
                    isOpen={isBagOpen} // Sempre aberto nesta página
                    onClose={closeBag} // Navega para fora ao fechar
                    onClearBag={handleClearBag} // Passa a função de limpar
                // REMOVIDO: bagItems={bagItems}
                />
                {/* REMOVIDO: <ProductDetails product={product} /> */}
                {/* Se precisar de conteúdo adicional nesta página, adicione aqui */}
            </div>
            <Footer />
        </div>
    );
}

export default BagSideMenuPage;