// src/Components/BagSideMenu/BagSideMenu.tsx
import React, { useState, useEffect } from 'react';
import styles from './BagSideMenu.module.css';
import trash from '../../Assets/Img/bin.png';
import closeIcon from '../../Assets/Img/close-button.png';
import { useShoppingBag } from '../../Contexts/ShoppingBagContext';
import { useNavigate } from 'react-router-dom';
import ModalResponse from '../../Components/ModalResponse/ModalResponse';
import { calculateShipping } from './api';

interface MelhorEnvioService {
  id: number;
  name: string;
  price: string;
  delivery_time: number;
  delivery_time_unit?: string;
  company?: {
    name?: string;
    picture?: string;
  };
}

interface BagSideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onClearBag?: () => void;
}

const BagSideMenu: React.FC<BagSideMenuProps> = ({ isOpen, onClose, onClearBag }) => {
  const { bagItems, removeItem, updateItemQuantity, clearBag } = useShoppingBag();
  const navigate = useNavigate();

  const [cep, setCep] = useState('');
  const [formattedCep, setFormattedCep] = useState('');
  const [showShippingOptions, setShowShippingOptions] = useState(false);
  const [selectedShippingPrice, setSelectedShippingPrice] = useState<number | null>(null);
  const [isCepInvalid, setIsCepInvalid] = useState(false);
  const [shippingOptionsFromApi, setShippingOptionsFromApi] = useState<MelhorEnvioService[]>([]);
  const [isCalculatingShipping, setIsCalculatingShipping] = useState(false);
  const [shippingError, setShippingError] = useState<string | null>(null);

  const freeShippingThreshold = 135;
  const subtotal = bagItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const isFreeShipping = subtotal >= freeShippingThreshold;

  const cheapestShipping = shippingOptionsFromApi.reduce((min, option) => {
    const price = parseFloat(option.price);
    return isNaN(price) ? min : (min === null || price < min ? price : min);
  }, null as number | null);

  const actualShippingCost = isFreeShipping ? 0 : (selectedShippingPrice ?? cheapestShipping);
  const finalTotal = subtotal + (selectedShippingPrice ?? 0);

  useEffect(() => {
    if (cep.length === 8) setFormattedCep(`${cep.substring(0, 5)}-${cep.substring(5)}`);
    else setFormattedCep(cep);
  }, [cep]);

  useEffect(() => {
    if (formattedCep.length === 9 && bagItems.length > 0) {
      handleCalculateShipping();
    }
  }, [bagItems, formattedCep]);

  const handleQuantityChange = (id: string | number, newQuantity: number) => {
    updateItemQuantity(id, Math.max(1, newQuantity));
  };

  const handleRemove = (id: string | number) => {
    removeItem(id);
  };

  const handleCheckoutClick = () => {
    const checkoutData = {
      items: bagItems,
      subtotal,
      shipping: actualShippingCost,
      total: finalTotal,
      cep: formattedCep,
    };
    localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    navigate('/CartCheck');
  };

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length <= 8) setCep(value);
  };

  const handleCalculateShipping = async () => {
    if (formattedCep.length !== 9) {
      setIsCepInvalid(true);
      return;
    }

    setIsCalculatingShipping(true);
    setShippingOptionsFromApi([]);
    setShippingError(null);

    try {
      const shippingProducts = bagItems.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        weight: (item.weight ?? 0.8) * item.quantity,
        length: item.length ?? 31,
        height: item.height ?? 5,
        width: item.width ?? 21,
      }));

      const shippingData = await calculateShipping(formattedCep, shippingProducts);
      setShippingOptionsFromApi(shippingData);
      setShowShippingOptions(true);
      setIsCepInvalid(false);
    } catch (error) {
      console.error('Erro ao calcular o frete:', error);
      setShippingError('Erro ao calcular o frete.');
      setShowShippingOptions(false);
    } finally {
      setIsCalculatingShipping(false);
    }
  };

  const handleShippingOptionSelect = (price: number | null) => {
    setSelectedShippingPrice(price);
  };

  const handleCloseModal = () => {
    setIsCepInvalid(false);
  };

  const handleClearBagClick = () => {
    clearBag();
    if (onClearBag) onClearBag();
  };

  return (
    <div className={`${styles['bag-side-menu']} ${isOpen ? styles['open'] : ''}`}>
      <div className={styles['menu-header']}>
        <h2 className={styles['menu-header-title']}>Minha sacola</h2>
        <button onClick={onClose} className={styles['close-button']}>
          <img src={closeIcon} alt="botão de fechar" />
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
              {bagItems.map(item => (
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
                      <img src={trash} alt="icone lixeira" />
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

              {shippingError && <p className={styles['shipping-error']}>{shippingError}</p>}

              {showShippingOptions && shippingOptionsFromApi.length > 0 && (
                <div className={styles['shipping-options']}>
                  <h5>Opções de entrega:</h5>
                  {shippingOptionsFromApi.map(option => (
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
                        {option.company?.picture && (
                          <img
                            src={option.company.picture}
                            alt={option.company.name}
                            className={styles['shipping-logo']}
                          />
                        )}
                        <span>
                          {option.name} - R$ {parseFloat(option.price).toFixed(2)} (Entrega em {option.delivery_time} {option.delivery_time_unit || 'dias'})
                        </span>
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
                    <label htmlFor="no-shipping">Não incluir frete agora</label>
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
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>

              {selectedShippingPrice !== null && (
                <div className={styles['summary-row']}>
                  <span>Frete</span>
                  <span>R$ {selectedShippingPrice.toFixed(2)}</span>
                </div>
              )}

              <div className={`${styles['summary-row']} ${styles['total']}`}>
                <span>Total</span>
                <span>R$ {finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className={styles['menu-actions']}>
              <button onClick={handleCheckoutClick} className={styles['checkout-button']}>
                Finalizar Compra
              </button>
              <button onClick={handleClearBagClick} className={styles['clear-bag-button']}>
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
