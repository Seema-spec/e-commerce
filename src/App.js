import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetails';
import Checkout from './components/Checkout';
import Payment from './components/Payment';


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList  handleAddToCart={setCartItems} />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route
          path="/checkout"
          element={<Checkout cartItem={cartItems} />}
        />
         <Route
          path="/payment"
          element={<Payment  />}
        />
      </Routes>
    </Router>
  );
};

export default App
