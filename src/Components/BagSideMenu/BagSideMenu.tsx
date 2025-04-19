import React, { useState, useEffect } from 'react';
import styles from './BagSideMenu.module.css';
import trash from '../../Assets/Img/bin.png';
import closeIcon from '../../Assets/Img/close-button.png';
import { BagItem, useShoppingBag } from '../../Contexts/ShoppingBagContext';
import { useNavigate } from 'react-router-dom';
import ModalResponse from '../../Components/ModalResponse/ModalResponse'; // Importe o ModalResponse

export interface BagSideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onClearBag: () => void;
  // bagItems: BagItem[]; // Não precisamos mais receber como prop se usamos o Context
}

interface DeliveryOption {
  id: string;
  name: string;
  price: number;
}

const BagSideMenu: React.FC<BagSideMenuProps> = ({ isOpen, onClose, onClearBag }) => {
  const { bagItems, removeItem, updateItemQuantity } = useShoppingBag(); // Usamos o contexto diretamente
  const navigate = useNavigate();

  const [cep, setCep] = useState('');
  const [formattedCep, setFormattedCep] = useState('');
  const [showShippingOptions, setShowShippingOptions] = useState(false);
  const [selectedShippingPrice, setSelectedShippingPrice] = useState<number | null>(null);
  const [isCepInvalid, setIsCepInvalid] = useState(false); // Estado para controlar a exibição do modal

  const deliveryOptions: DeliveryOption[] = [
    { id: 'rapida', name: 'Rápida', price: 15.30 },
    { id: 'normal', name: 'Normal', price: 10.00 }, // Adicione mais opções conforme necessário
  ];
  const freeShippingThreshold = 135;
  const bagTotal = bagItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const isFreeShipping = bagTotal >= freeShippingThreshold;
  const shippingCost = selectedShippingPrice !== null ? selectedShippingPrice : (isFreeShipping ? 0 : null);
  const totalWithShipping = bagTotal + (shippingCost !== null ? shippingCost : 0);

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

  const handleCalculateShipping = () => {
    if (formattedCep.length === 9) { // Verifica se o CEP formatado tem 9 caracteres (xxxxx-xxx)
      setShowShippingOptions(true);
      setIsCepInvalid(false); // Garante que o modal de erro não será exibido se o CEP for válido
      // Aqui você faria a chamada real para a API de frete
    } else {
      setShowShippingOptions(false);
      setSelectedShippingPrice(null); // Reseta o frete selecionado se o CEP for inválido
      setIsCepInvalid(true); // Define o estado para mostrar o modal de CEP inválido
    }
  };

  const handleShippingOptionSelect = (price: number | null) => {
    setSelectedShippingPrice(price);
  };

  // Função para fechar o modal de CEP inválido
  const handleCloseModal = () => {
    setIsCepInvalid(false); // Define o estado para esconder o modal
  };

  // Calcula o subtotal (sem frete)
  const subtotal = bagItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  // Calcula o custo do frete (considerando frete grátis ou opção selecionada)
  const actualShippingCost = isFreeShipping ? 0 : selectedShippingPrice;
  // Calcula o total final
  const finalTotal = subtotal + (actualShippingCost ?? 0); // Use 0 se actualShippingCost for null

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
        <> {/* Fragmento para agrupar múltiplos elementos */}
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
                      {/* Exibir cor e tamanho se existirem */}
                      {item.color && <span className={styles['item-variation']}>Cor: {item.color}</span>}
                      {item.size && <span className={styles['item-variation']}>Tamanho: {item.size}</span>}
                      <span className={styles['item-price']}>R$ {(item.price || 0).toFixed(2)}</span>
                      <div className={styles['quantity-control']}>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className={styles['quantity-button']}
                          disabled={item.quantity <= 1} // Desabilitar se a quantidade for 1
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
              <h4>Calcular frete</h4>
              <div className={styles['cep-input-group']}>
                <input
                  type="text" // Mudar para text para permitir a máscara
                  placeholder="Digite seu CEP"
                  value={formattedCep} // Usar o CEP formatado
                  onChange={handleCepChange}
                  maxLength={9} // Limitar o input formatado
                  className={styles['cep-input']}
                />
                <button onClick={handleCalculateShipping} className={styles['calculate-shipping-button']}>
                  Calcular
                </button>
              </div>

              {showShippingOptions && (
                <div className={styles['shipping-options']}>
                  <h5>Opções de entrega:</h5>
                  {deliveryOptions.map((option) => (
                    <div key={option.id} className={styles['shipping-option']}>
                      <input
                        type="radio"
                        id={option.id}
                        name="shippingOption"
                        value={option.price}
                        checked={selectedShippingPrice === option.price}
                        onChange={() => handleShippingOptionSelect(option.price)}
                      />
                      <label htmlFor={option.id}>
                        {option.name} - R$ {option.price.toFixed(2)}
                      </label>
                    </div>
                  ))}
                  {isFreeShipping && selectedShippingPrice !== null && (
                    <p className={styles['free-shipping-applied']}>
                      Frete grátis aplicado! (Opção selecionada desconsiderada)
                    </p>
                  )}
                  {/* Adiciona opção para desmarcar */}
                  <div className={styles['shipping-option']}>
                    <input
                      type="radio"
                      id="no-shipping"
                      name="shippingOption"
                      value={-1} // Um valor que não conflite ou simplesmente null
                      checked={selectedShippingPrice === null}
                      onChange={() => handleShippingOptionSelect(null)} // Define como null
                    />
                    <label htmlFor="no-shipping">
                      Não incluir frete agora
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className={styles['summary-details']}>
              <div className={styles['summary-row']}>
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className={styles['summary-row']}>
                <span>Frete</span>
                <span>
                  {actualShippingCost === null
                    ? 'A calcular'
                    : actualShippingCost === 0
                      ? 'Grátis'
                      : `R$ ${actualShippingCost.toFixed(2)}`}
                </span>
              </div>
              {bagTotal >= freeShippingThreshold && actualShippingCost !== 0 && selectedShippingPrice !== null && (
                <p className={styles['free-shipping-info']}>
                  Você ganhou frete grátis!
                </p>
              )}
              {bagTotal < freeShippingThreshold && (
                <p className={styles['free-shipping-info']}>
                  Faltam R$ {(freeShippingThreshold - bagTotal).toFixed(2)} para frete grátis.
                </p>
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
              <button onClick={onClearBag} className={styles['clear-bag-button']}>
                Limpar Sacola
              </button>
            </div>
          </div>
        </>
      )}

      {/* --- Renderização Condicional do Modal --- */}
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