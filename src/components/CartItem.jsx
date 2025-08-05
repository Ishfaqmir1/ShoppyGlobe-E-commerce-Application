import React from 'react';
import { useDispatch } from 'react-redux'; 
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQty = parseInt(e.target.value);
    if (newQty >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity: newQty }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    alert(`${item.title} removed from cart ❌`);
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>₹{item.price} x {item.quantity}</p>
      </div>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={handleRemove}>
        Remove Item
      </button>
    </div>
  );
};

export default CartItem;
