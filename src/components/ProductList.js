import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import './product.css';
import Checkout from './Checkout';


const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const baseUrl = 'https://fakestoreapi.com/products';

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setProducts(response.data); 
    });
  }, []);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/checkout', { state: { cartItems } }); 
  };

  return (
    <div className='container'>
       <button className='button' onClick={handleCartClick}>
       Cart : {cartItems.length}
       </button>
       
      {products.map(product=>(<div className='card'>
      <div className='inner_card'>
      <Card key={product.id} className='card'>
          <CardMedia
            component="img"
            className="cardMedia"
            alt={product.title} 
            image={product.image} 
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() =>handleAddToCart(product)}>
              Add to Cart
            </Button>
            <Link to={`/product/${product.id}`}>View Details</Link>     
          </CardActions>
          </Card>
         </div>
            </div>))}
        </div>
  );
};

export default ProductList;
