// frontend/src/Components/LoginOrRegister/LoginOrRegister.tsx

import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginOrRegister.module.css';
import { useAuth } from '../../Contexts/AuthContext';
import { registerClient, loginClient } from './api';
import ModalResponse from '../ModalResponse/ModalResponse';

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
        rua: string;
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
    const [rua, setRua] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const formatPhone = useCallback((value: string) => {
        const cleaned = value.replace(/\D/g, '').slice(0, 11);
        const match = cleaned.match(/^(\d{2})(\d{0,5})(\d{0,4})$/);
        return match ? `(${match[1]}) ${match[2]}${match[3] ? '-' + match[3] : ''}` : value;
    }, []);

    const formatCpf = useCallback((value: string) => {
        const cleaned = value.replace(/\D/g, '').slice(0, 11);
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
        return match ? `${match[1]}.${match[2]}.${match[3]}-${match[4]}` : value;
    }, []);

    const formatCnpj = useCallback((value: string) => {
        const cleaned = value.replace(/\D/g, '').slice(0, 14);
        const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);
        return match ? `${match[1]}.${match[2]}.${match[3]}/${match[4]}-${match[5]}` : value;
    }, []);

    const handleCepChange = useCallback(async (value: string) => {
        const cleanedCep = value.replace(/\D/g, '').slice(0, 8);
        setCep(cleanedCep);
        if (cleanedCep.length === 8) {
            setLoading(true);
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`);
                const data = await response.json();
                if (!data.erro) {
                    setRua(data.logradouro || '');
                    setBairro(data.bairro || '');
                    setCidade(data.localidade || '');
                    setError('');
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

        const userData = { email, senha };

        try {
            if (isLogin) {
                const loginResponse = await loginClient(userData);
                console.log('Resposta de login:', loginResponse);
                if (loginResponse?.id) {
                    login(loginResponse);
                    if (onLoginSuccess) {
                        onLoginSuccess();
                    } else {
                        navigate('/');
                    }
                } else {
                    setModalTitle('Erro de Login');
                    setModalMessage((loginResponse as any)?.error || 'Erro ao fazer login.');
                    setShowModal(true);
                }
            } else {
                const registrationData: RegistrationData = {
                    nome,
                    telefone,
                    email,
                    senha,
                    endereco: { cep, rua, numero: numeroCasa, bairro, cidade },
                    ...(isPessoaJuridica ? { razao_social: razaoSocial, cnpj } : { cpf }),
                };
                const registerResponse = await registerClient(registrationData);
                console.log('Resposta de cadastro:', registerResponse);
                if (registerResponse?.message === 'Cliente registrado com sucesso') {
                    setModalTitle('Sucesso!');
                    setModalMessage('Cadastro realizado com sucesso!');
                    setShowModal(true);
                } else {
                    setModalTitle('Erro de Cadastro');
                    setModalMessage(registerResponse?.error || registerResponse?.message || 'Erro ao cadastrar.');
                    setShowModal(true);
                }
            }
        } catch (err: any) {
            setModalTitle('Erro na Requisição');
            setModalMessage(err?.response?.data?.error || err?.response?.data?.message || err?.message || 'Erro ao processar a requisição.');
            setShowModal(true);
            console.error('Erro na requisição:', err);
        } finally {
            setLoading(false);
        }
    }, [isLogin, email, senha, nome, telefone, login, navigate, onLoginSuccess, onRegisterSuccess, isPessoaJuridica, razaoSocial, cpf, cnpj, cep, rua, numeroCasa, bairro, cidade, registerClient, loginClient]);

    const handleCloseModal = () => {
        setShowModal(false);
        if (!isLogin && modalTitle === 'Sucesso!') {
            setIsLogin(true);
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
                            maxLength={14}
                        />
                        <input
                            type="tel"
                            placeholder="Telefone (XX XXXXX-XXXX)"
                            value={formatPhone(telefone)}
                            onChange={(e) => setTelefone(e.target.value)}
                            className={styles['form-input']}
                            maxLength={15}
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
                            maxLength={18}
                        />
                        <input
                            type="tel"
                            placeholder="Telefone (XX XXXXX-XXXX)"
                            value={formatPhone(telefone)}
                            onChange={(e) => setTelefone(e.target.value)}
                            className={styles['form-input']}
                            maxLength={15}
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
                            maxLength={9}
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