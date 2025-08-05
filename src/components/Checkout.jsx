import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-page">
      <h2>Checkout Page 🛒</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to proceed.</p>
      ) : (
        <>
          <h3>Order Summary:</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} × {item.quantity} = ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>

          <h3>Total: ₹{total}</h3>

          <button className="checkout-btn">Confirm Order</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
