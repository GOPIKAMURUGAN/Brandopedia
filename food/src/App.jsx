import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { CartProvider } from './context/cartContext';
import Header from './pages/Header';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Home from './pages/Home';


import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
