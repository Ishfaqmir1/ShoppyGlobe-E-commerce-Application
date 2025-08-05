const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // ✅ Guard clause to prevent crash
  if (!item || !item.thumbnail) {
    console.warn("Invalid item in CartItem:", item);
    return null;
  }

  const handleQuantityChange = (e) => {
    const newQty = parseInt(e.target.value);
    if (newQty >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity: newQty }));
    }
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div style={{ flex: 1 }}>
        <h4>{item.title}</h4>
        <p>₹{item.price} x {item.quantity}</p>
      </div>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </div>
  );
};
export default CartItem;