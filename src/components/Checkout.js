// Checkout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { CardMedia } from '@mui/material';
import {useNavigate } from 'react-router-dom';
import './product.css'
const Checkout = () => {
  const location = useLocation();
  const { cartItems } = location.state; 
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/payment', { state: { cartItems, total } }); 
  };
  return (
    <div className='img2'>
      <h2>Checkout</h2>
      {cartItems.map((item) => (
        <div key={item.id} >
          <CardMedia
            component="img"
            alt={item.title} 
            image={item.image}
            style={{ width: '20%' }}  
          />
          <h2>{item.title}</h2>
          <p>Price: ${item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
      <div className='bottom_title'>
      <p>Total: ${total}</p>
      <button className='bottom_button' onClick={handleClick}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Checkout;
