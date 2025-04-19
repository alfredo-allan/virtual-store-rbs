import React, { useState, useEffect } from 'react';
import styles from './BagSideMenu.module.css';
import trash from '../../Assets/Img/bin.png';
import closeIcon from '../../Assets/Img/close-button.png';
import { BagItem as ShoppingBagItem, useShoppingBag } from '../../Contexts/ShoppingBagContext'; // Renomeando para evitar conflito
import { useNavigate } from 'react-router-dom';
import ModalResponse from '../../Components/ModalResponse/ModalResponse';
import { calculateShipping } from './api'; // Importe a função da API

export interface BagSideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onClearBag: () => void;
}

interface MelhorEnvioService {
  id: number;
  name: string;
  price: string; // A API retorna o preço como string
  delivery_time: number;
  delivery_time_unit: string;
}

const BagSideMenu: React.FC<BagSideMenuProps> = ({ isOpen, onClose, onClearBag }) => {
  const { bagItems, removeItem, updateItemQuantity } = useShoppingBag(); // Usamos as funções do contexto
  const navigate = useNavigate();

  const [cep, setCep] = useState('');
  const [formattedCep, setFormattedCep] = useState('');
  const [showShippingOptions, setShowShippingOptions] = useState(false);
  const [selectedShippingPrice, setSelectedShippingPrice] = useState<number | null>(null);
  const [isCepInvalid, setIsCepInvalid] = useState(false);
  const [shippingOptionsFromApi, setShippingOptionsFromApi] = useState<MelhorEnvioService[]>([]);
  const [isCalculatingShipping, setIsCalculatingShipping] = useState(false); // Novo estado de carregamento
  const [shippingError, setShippingError] = useState<string | null>(null); // Estado para erros de frete

  const freeShippingThreshold = 135;
  const bagTotal = bagItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const isFreeShipping = bagTotal >= freeShippingThreshold;

  const handleQuantityChange = (id: string | number, newQuantity: number) => {
    updateItemQuantity(id, Math.max(1, newQuantity));
  };

  const handleRemove = (id: string | number) => {
    removeItem(id);
  };

  const handleCheckoutClick = () => {
    navigate('/CartCheck');
  };

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length <= 8) {
      setCep(value);
    }
  };

  useEffect(() => {
    if (cep) {
      if (cep.length === 8) {
        setFormattedCep(`${cep.substring(0, 5)}-${cep.substring(5)}`);
      } else {
        setFormattedCep(cep);
      }
    } else {
      setFormattedCep('');
    }
  }, [cep]);

  const handleCalculateShipping = async () => {
    if (formattedCep.length === 9) {
      setIsCalculatingShipping(true);
      setShowShippingOptions(false);
      setShippingOptionsFromApi([]);
      setShippingError(null);

      try {
        const shippingData = await calculateShipping(formattedCep, bagItems); // Passamos 'bagItems' diretamente
        setShippingOptionsFromApi(shippingData);
        setShowShippingOptions(true);
        setIsCepInvalid(false);
      } catch (error: any) {
        console.error("Erro ao calcular o frete:", error);
        setShippingError("Não foi possível calcular o frete. Por favor, tente novamente.");
        setShowShippingOptions(false);
      } finally {
        setIsCalculatingShipping(false);
      }
    } else {
      setShowShippingOptions(false);
      setSelectedShippingPrice(null);
      setIsCepInvalid(true);
    }
  };

  const handleShippingOptionSelect = (price: number | null) => {
    setSelectedShippingPrice(price);
  };

  const handleCloseModal = () => {
    setIsCepInvalid(false);
  };

  const subtotal = bagItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const actualShippingCost = isFreeShipping ? 0 : selectedShippingPrice;
  const finalTotal = subtotal + (actualShippingCost ?? 0);

  return (
    <div className={`${styles['bag-side-menu']} ${isOpen ? styles['open'] : ''}`}>
      <div className={styles['menu-header']}>
        <h2 className={styles['menu-header-title']}>Minha sacola</h2>
        <button onClick={onClose} className={styles['close-button']}>
          <img src={closeIcon} alt='botão de fechar' />
        </button>
      </div>

      {bagItems.length === 0 ? (
        <div className={styles['empty-bag']}>
          <p className={styles['empty-bag-title']}>Sua sacola está vazia</p>
          <div className={styles['menu-actions-empty']}>
            <button onClick={onClose} className={styles['continue-shopping-button']}>
              Continuar comprando
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className={styles['menu-content']}>
            <ul className={styles['bag-items-list']}>
              {bagItems.map((item) => (
                <li key={item.id}>
                  <div className={styles['bag-item']}>
                    {item.imageUrl && (
                      <img src={item.imageUrl} alt={item.name} className={styles['item-image']} />
                    )}
                    <div className={styles['item-details']}>
                      <h3 className={styles['item-name']}>{item.name}</h3>
                      {item.color && <span className={styles['item-variation']}>Cor: {item.color}</span>}
                      {item.size && <span className={styles['item-variation']}>Tamanho: {item.size}</span>}
                      <span className={styles['item-price']}>R$ {(item.price || 0).toFixed(2)}</span>
                      <div className={styles['quantity-control']}>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className={styles['quantity-button']}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className={styles['quantity']}>{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className={styles['quantity-button']}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button onClick={() => handleRemove(item.id)} className={styles['remove-button']}>
                      <img src={trash} alt='icone lixeira' />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['menu-summary']}>
            <div className={styles['shipping-section']}>
              <h4 className={styles['shipping-section-title']}>Calcular frete</h4>
              <div className={styles['cep-input-group']}>
                <input
                  type="text"
                  placeholder="Digite seu CEP"
                  value={formattedCep}
                  onChange={handleCepChange}
                  maxLength={9}
                  className={styles['cep-input']}
                />
                <button
                  onClick={handleCalculateShipping}
                  className={styles['calculate-shipping-button']}
                  disabled={isCalculatingShipping}
                >
                  {isCalculatingShipping ? 'Calculando...' : 'Calcular'}
                </button>
              </div>

              {shippingError && (
                <p className={styles['shipping-error']}>{shippingError}</p>
              )}

              {showShippingOptions && shippingOptionsFromApi.length > 0 && (
                <div className={styles['shipping-options']}>
                  <h5>Opções de entrega:</h5>
                  {shippingOptionsFromApi.map((option) => (
                    <div key={option.id} className={styles['shipping-option']}>
                      <input
                        type="radio"
                        id={`shipping-${option.id}`}
                        name="shippingOption"
                        value={parseFloat(option.price)}
                        checked={selectedShippingPrice === parseFloat(option.price)}
                        onChange={() => handleShippingOptionSelect(parseFloat(option.price))}
                      />
                      <label htmlFor={`shipping-${option.id}`}>
                        {option.name} - R$ {parseFloat(option.price).toFixed(2)} (Entrega em {option.delivery_time} {option.delivery_time_unit})
                      </label>
                    </div>
                  ))}
                  <div className={styles['shipping-option']}>
                    <input
                      type="radio"
                      id="no-shipping"
                      name="shippingOption"
                      value={-1}
                      checked={selectedShippingPrice === null}
                      onChange={() => handleShippingOptionSelect(null)}
                    />
                    <label htmlFor="no-shipping">
                      Não incluir frete agora
                    </label>
                  </div>
                </div>
              )}
              {showShippingOptions && shippingOptionsFromApi.length === 0 && !shippingError && (
                <p>Nenhuma opção de frete disponível para este CEP.</p>
              )}
            </div>

            <div className={styles['summary-details']}>
              <div className={styles['summary-row']}>
                <span>Subtotal</span>
                <span>R$ {bagTotal.toFixed(2)}</span> {/* Usando o valor recalculado */}
              </div>
              <div className={`${styles['summary-row']} ${styles['total']}`}>
                <span>Total</span>
                <span>R$ {(bagTotal + (actualShippingCost ?? 0)).toFixed(2)}</span> {/* Usando o valor recalculado */}
              </div>
            </div>

            <div className={styles['menu-actions']}>
              <button onClick={handleCheckoutClick} className={styles['checkout-button']}>
                Finalizar Compra
              </button>
              <button onClick={onClearBag} className={styles['clear-bag-button']}>
                Limpar Sacola
              </button>
            </div>
          </div>
        </>
      )}

      {isCepInvalid && (
        <ModalResponse
          isOpen={isCepInvalid}
          onClose={handleCloseModal}
          title="CEP Inválido"
          message="Por favor, digite um CEP com 8 dígitos."
        />
      )}
    </div>
  );
};

export default BagSideMenu;