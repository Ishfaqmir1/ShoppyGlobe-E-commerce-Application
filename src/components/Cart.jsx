import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { toast } from 'react-toastify';
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const validItems = cartItems.filter((item) => item && item.thumbnail);

  const total = validItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (validItems.length > 0) {
      navigate('/checkout');
    } else {
      toast.warning('Your cart is empty!');
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart</h2>

      {validItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {validItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <h3 className="cart-total">Total Price: ₹{total}</h3>

        
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
