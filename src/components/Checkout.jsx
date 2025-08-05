import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearCart } from '../redux/cartSlice'; 
const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    dispatch(clearCart()); 
    toast.success('✅ Order confirmed successfully!');
    navigate('/'); 
  };

  return (
    <div className="checkout-page">
      <h2>Checkout Page 🛒</h2>
      <p>Confirm your order and we'll process it!</p>

      <button className="checkout-btn" onClick={handleConfirmOrder}>
        Confirm Order
      </button>
    </div>
  );
};

export default Checkout;
