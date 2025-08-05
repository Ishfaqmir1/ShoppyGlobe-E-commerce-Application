import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product && product.id && product.thumbnail) {
      dispatch(addToCart(product));
     toast.success(`${product.title} added to cart!`);
    } else {
      console.warn('Invalid product:', product);
    }
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <h3 className="product-title">{product.title}</h3>
      </Link>
      <p className="product-price">Price = ₹{product.price}</p>
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
