// script.tsx

import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/'); // Redireciona para a página inicial
    };

    return { navigateToHome };
};