import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for getting URL parameters
import axios from 'axios';
import { CardMedia } from '@mui/material';
import './product.css'

const ProductDetail = () => {
  const { productId } = useParams(); // Get the productId from the URL parameter

  const [product, setProduct] = useState(null);
  const baseUrl = `https://fakestoreapi.com/products/${productId}`; // Use the specific product API endpoint

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setProduct(response.data);
    });
  }, [baseUrl]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className='img'>
      <CardMedia
        component="img"
        alt={product.title}
        image={product.image} // Assuming the API provides an 'image' property
      />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      {/* You can add more details as needed */}
    </div>
  );
};

export default ProductDetail;
