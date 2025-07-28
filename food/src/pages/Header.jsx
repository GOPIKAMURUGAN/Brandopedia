import React from 'react';

const Header = ({ setPage, cartCount }) => (
  <div className="header">
    <span onClick={() => setPage('home')}>🏠 Home</span>
    <span onClick={() => setPage('cart')}>🛒 Cart ({cartCount})</span>
  </div>
);

export default Header;
