import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useShoppingCart } from './ShoppingCartContext';
import './shop.css';

const Cart = ({ isOpen, onHide, onCheckoutWhatsApp, isCheckingOut }) => {
  const { state, increaseQuantity, decreaseQuantity, removeFromCart } = useShoppingCart();

  const totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!state.items.length || isCheckingOut) {
      return;
    }

    onCheckoutWhatsApp({ items: state.items, totalPrice });
  };

  return (
    <Modal show={isOpen} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Panier client</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {state.items.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <div className="cart-list">
            {state.items.map((item) => (
              <div key={item.id} className="d-flex align-items-center mb-3 cart-item-row">
                <img src={item.imgUrl} alt={item.name} width={56} height={56} className="mr-3 cart-item-thumb" />
                <div className="flex-grow-1">
                  <h5>{item.name}</h5>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="d-flex align-items-center gap-1">
                    <Button variant="" size="sm" onClick={() => decreaseQuantity(item.id)} className="qty-btn">-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="" size="sm" onClick={() => increaseQuantity(item.id)} className="qty-btn">+</Button>
                  </div>
                </div>
                <Button 
  variant="" 
  onClick={() => removeFromCart(item.id)} 
  className='remove-btn'
>
  Remove
</Button>

              </div>
            ))}
            <h5 className="cart-total">Total: ${totalPrice.toFixed(2)}</h5>

            <div className="checkout-mode-wrap mt-3">
              <p className="checkout-mode-title">Mode de shop actif</p>
              <div className="checkout-mode-buttons checkout-mode-single">
                <button type="button" className="checkout-mode-btn is-active" disabled>
                  Shop par WhatsApp uniquement
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer> 
        <Button variant="" onClick={onHide} className='cart-close-btn'>Fermer</Button>
        <Button
          variant=""
          disabled={!state.items.length || isCheckingOut}
          onClick={handleCheckout}
          className='cart-checkout-btn'
        >
          {isCheckingOut ? 'Traitement en cours...' : 'Continuer sur WhatsApp'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
