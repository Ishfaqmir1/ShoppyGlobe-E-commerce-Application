import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  // Filter out any undefined or invalid cart items
  const validItems = cartItems.filter((item) => item && item.thumbnail);

  const total = validItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {validItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {validItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <h3 className="cart-total">Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
