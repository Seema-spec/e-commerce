import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import './product.css'

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const location = useLocation();
  const {cartItems, total } = location.state;

console.log(total);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    });

    if (error) {
      setError(error.message);
    } else {
      // Send paymentMethod.id to your server for processing
    }
  };

  return (
    <>
     <h1 style={{marginLeft:"500px"}}>Payment</h1>
    <p style={{marginLeft:"500px"}}>Total: ${total}</p>
    <form onSubmit={handleSubmit} className='card2'>
      <div >
        <label>
          Card Number
          <CardNumberElement />
        </label>
      </div>
      <div>
        <label>
          Expiration Date
          <CardExpiryElement />
        </label>
      </div>
      <div>
        <label>
          CVC
          <CardCvcElement />
        </label>
      </div>
      <button type="submit" className='bottom_button2' disabled={!stripe}>
        Pay
      </button>
      {error && <div>{error}</div>}
    </form>
    </>
   
  );
};

export default PaymentForm;
