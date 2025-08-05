import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error('Failed to fetch product details.');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success('🛒 Product added to cart!');
  };

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return null;

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">₹{product.price}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
