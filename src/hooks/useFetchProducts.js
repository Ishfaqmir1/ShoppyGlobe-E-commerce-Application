import { useState, useEffect } from 'react';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);       // Stores product list
  const [loading, setLoading] = useState(true);       // Tracks loading state
  const [error, setError] = useState(null);           // Tracks error message

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) throw new Error('Failed to fetch products.');
        const data = await response.json();
        setProducts(data.products); 
      } catch (err) {
        setError(err.message); // Store the error message
      } finally {
        setLoading(false); // Always stop loading after fetch attempt
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
