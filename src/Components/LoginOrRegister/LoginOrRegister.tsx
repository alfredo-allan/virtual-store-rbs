import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginOrRegister.module.css';
import { useAuth } from '../../Contexts/AuthContext';
import logoRbs from '../../Assets/Img/logo-rbs-remove-bg.png';
import { registerClient, loginClient } from './api'; // Importe as funções da API
import ModalResponse from '../../Components/ModalResponse/ModalResponse'; // Importe o ModalResponse

interface LoginOrRegisterProps {
    onLoginSuccess?: () => void;
    onRegisterSuccess?: () => void;
}

interface RegistrationData {
    nome: string;
    telefone?: string;
    email: string;
    senha: string;
    cpf?: string;
    cnpj?: string;
    razao_social?: string;
    endereco?: {
        cep: string;
        rua: string; // Adicionado o campo 'rua'
        numero: string;
        bairro: string;
        cidade: string;
    };
}

const LoginOrRegister: React.FC<LoginOrRegisterProps> = ({ onLoginSuccess, onRegisterSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isPessoaJuridica, setIsPessoaJuridica] = useState(false);
    const [nome, setNome] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState(''); // Estado para a rua
    const [numeroCasa, setNumeroCasa] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();
    const [showModal, setShowModal] = useState(false); // Estado para controlar a visibilidade do modal
    const [modalTitle, setModalTitle] = useState(''); // Estado para o título do modal
    const [modalMessage, setModalMessage] = useState(''); // Estado para a mensagem do modal

    const formatPhone = useCallback((value: string) => {
        const cleaned = value.replace(/\D/g, '').slice(0, 11); // Limita a 11 dígitos
        const match = cleaned.match(/^(\d{2})(\d{0,5})(\d{0,4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}${match[3] ? '-' + match[3] : ''}`;
        }
        return value;
    }, []);

    const formatCpf = useCallback((value: string) => {
        const cleaned = value.replace(/\D/g, '').slice(0, 11); // Limita a 11 dígitos
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
        if (match) {
            return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
        }
        return value;
    }, []);

    const formatCnpj = useCallback((value: string) => {
        const cleaned = value.replace(/\D/g, '').slice(0, 14); // Limita a 14 dígitos
        const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);
        if (match) {
            return `${match[1]}.${match[2]}.${match[3]}/${match[4]}-${match[5]}`;
        }
        return value;
    }, []);

    const handleCepChange = useCallback(async (value: string) => {
        const cleanedCep = value.replace(/\D/g, '').slice(0, 8); // Limita a 8 dígitos
        setCep(cleanedCep);
        if (cleanedCep.length === 8) {
            setLoading(true);
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`);
                const data = await response.json();
                if (!data.erro) {
                    setRua(data.logradouro || ''); // Preenche a rua
                    setBairro(data.bairro || '');
                    setCidade(data.localidade || '');
                } else {
                    setRua('');
                    setBairro('');
                    setCidade('');
                    setError('CEP não encontrado.');
                }
            } catch (error) {
                setError('Erro ao buscar CEP.');
            } finally {
                setLoading(false);
            }
        } else {
            setRua('');
            setBairro('');
            setCidade('');
            setError('');
        }
    }, []);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        let userData: any;

        if (isLogin) {
            userData = { email, senha };
        } else {
            userData = {
                nome,
                telefone,
                email,
                senha,
                endereco: {
                    cep,
                    rua, // Inclui a rua
                    numero: numeroCasa,
                    bairro,
                    cidade,
                },
                ...(isPessoaJuridica ? { razao_social: razaoSocial, cnpj } : { cpf }),
            } as RegistrationData;
        }

        try {
            let response;
            if (isLogin) {
                const loginResponse = await loginClient(userData); // Chama a função de login do api.ts
                console.log('Resposta de login:', loginResponse);
                if (loginResponse?.user) {
                    login(loginResponse.user);
                    if (onLoginSuccess) {
                        onLoginSuccess();
                    } else {
                        navigate('/');
                    }
                } else {
                    setModalTitle('Erro de Login');
                    setModalMessage(loginResponse?.message || 'Erro ao fazer login.');
                    setShowModal(true);
                }
            } else {
                const registerResponse = await registerClient(userData as RegistrationData); // Chama a função de cadastro do api.ts
                console.log('Resposta de cadastro:', registerResponse);
                if (registerResponse?.message === 'Cliente registrado com sucesso') {
                    setModalTitle('Sucesso!');
                    setModalMessage('Cadastro realizado com sucesso!');
                    setShowModal(true);
                    // Opcional: Redirecionar ou fazer algo após o sucesso
                } else {
                    setModalTitle('Erro de Cadastro');
                    setModalMessage(registerResponse?.message || 'Erro ao cadastrar.');
                    setShowModal(true);
                }
            }
        } catch (err: any) {
            setModalTitle('Erro na Requisição');
            setModalMessage(err?.response?.data?.message || err?.message || 'Erro ao processar a requisição.');
            setShowModal(true);
            console.error('Erro na requisição:', err);
        } finally {
            setLoading(false);
        }
    }, [isLogin, email, senha, nome, telefone, login, navigate, onLoginSuccess, onRegisterSuccess, isPessoaJuridica, razaoSocial, cpf, cnpj, cep, rua, numeroCasa, bairro, cidade, registerClient, loginClient]);

    const handleCloseModal = () => {
        setShowModal(false);
        if (!isLogin && modalTitle === 'Sucesso!') {
            setIsLogin(true); // Voltar para a tela de login após o cadastro
        }
    };

    return (
        <div className={styles['login-or-register-container']}>
            <h2 className={styles['form-title']}>{isLogin ? 'Login' : 'Cadastro'}</h2>
            <div className={styles['logo-container']}>
                {/* <img className={styles['logo-rbs']} src={logoRbs} alt="logo rbs" /> */}
            </div>
            <form onSubmit={handleSubmit} className={styles['form']}>
                {!isLogin && (
                    <div className={styles['pessoa-type-toggle']}>
                        <label className={styles['label-radio']}>
                            <input
                                className={styles['radio-input-login']}
                                type="radio"
                                name="pessoaType"
                                value="fisica"
                                checked={!isPessoaJuridica}
                                onChange={() => setIsPessoaJuridica(false)}
                            />
                            Pessoa Física
                        </label>
                        <label className={styles['label-radio']}>
                            <input
                                className={styles['radio-input-login']}
                                type="radio"
                                name="pessoaType"
                                value="juridica"
                                checked={isPessoaJuridica}
                                onChange={() => setIsPessoaJuridica(true)}
                            />
                            Pessoa Jurídica
                        </label>
                    </div>
                )}

                {!isLogin && !isPessoaJuridica && (
                    <>
                        <input
                            type="text"
                            placeholder="Nome Completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className={styles['form-input']}
                        />
                        <input
                            type="text"
                            placeholder="CPF (XXX.XXX.XXX-XX)"
                            value={formatCpf(cpf)}
                            onChange={(e) => setCpf(e.target.value)}
                            className={styles['form-input']}
                            maxLength={14} // Limita o número de caracteres para o CPF formatado
                        />
                        <input
                            type="tel"
                            placeholder="Telefone (XX XXXXX-XXXX)"
                            value={formatPhone(telefone)}
                            onChange={(e) => setTelefone(e.target.value)}
                            className={styles['form-input']}
                            maxLength={15} // Limita o número de caracteres para o telefone formatado
                        />
                    </>
                )}

                {!isLogin && isPessoaJuridica && (
                    <>
                        <input
                            type="text"
                            placeholder="Razão Social"
                            value={razaoSocial}
                            onChange={(e) => setRazaoSocial(e.target.value)}
                            required
                            className={styles['form-input']}
                        />
                        <input
                            type="text"
                            placeholder="CNPJ (XX.XXX.XXX/XXXX-XX)"
                            value={formatCnpj(cnpj)}
                            onChange={(e) => setCnpj(e.target.value)}
                            className={styles['form-input']}
                            maxLength={18} // Limita o número de caracteres para o CNPJ formatado
                        />
                        <input
                            type="tel"
                            placeholder="Telefone (XX XXXXX-XXXX)"
                            value={formatPhone(telefone)}
                            onChange={(e) => setTelefone(e.target.value)}
                            className={styles['form-input']}
                            maxLength={15} // Limita o número de caracteres para o telefone formatado
                        />
                    </>
                )}

                {!isLogin && (
                    <>
                        <input
                            type="text"
                            placeholder="CEP (XXXXX-XXX)"
                            value={cep}
                            onChange={(e) => handleCepChange(e.target.value)}
                            className={styles['form-input']}
                            maxLength={9} // Limita o número de caracteres para o CEP formatado
                        />
                        <input
                            type="text"
                            placeholder="Rua"
                            value={rua}
                            onChange={(e) => setRua(e.target.value)}
                            required
                            className={styles['form-input']}
                        />
                        <input
                            type="number"
                            placeholder="Número"
                            value={numeroCasa}
                            onChange={(e) => setNumeroCasa(e.target.value)}
                            required
                            className={styles['form-input']}
                        />
                        <input
                            type="text"
                            placeholder="Bairro"
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                            required
                            className={styles['form-input']}
                        />
                        <input
                            type="text"
                            placeholder="Cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            required
                            className={styles['form-input']}
                        />
                    </>
                )}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles['form-input']}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    className={styles['form-input']}
                />
                {error && <p className={styles['error-message']}>{error}</p>}
                <button type="submit" disabled={loading} className={styles['submit-button']}>
                    {loading ? (isLogin ? 'Entrando...' : 'Cadastrando...') : isLogin ? 'Entrar' : 'Cadastrar'}
                </button>
            </form>
            <button type="button" className={styles['toggle-button']} onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Criar conta' : 'Já tenho conta'}
            </button>

            <ModalResponse
                isOpen={showModal}
                title={modalTitle}
                message={modalMessage}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default LoginOrRegister;