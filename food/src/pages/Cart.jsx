import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([
  { id: 1, name: 'Pizza', price: 200, qty: 0, image: 'https://cdn.pixabay.com/photo/2022/08/02/07/30/pizza-7359753_1280.jpg' },
  { id: 2, name: 'Burger', price: 150, qty: 0, image: 'https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=2048x2048&w=is&k=20&c=WiewZ2pC0tP1-NfjpxTkWYXVCBotqrIzWXc2HkAewkk=' },
  { id: 3, name: 'Pasta', price: 180, qty: 0, image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?_gl=1*17lce2x*_ga*MTQxNzAyMzk4MS4xNzQ5NjE5NzY1*_ga_8JE65Q40S6*czE3NTM2OTc3MTYkbzEyJGcwJHQxNzUzNjk3NzE2JGo2MCRsMCRoMA..' },
  { id: 4, name: 'Salad', price: 100, qty: 0, image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?_gl=1*1du9p5d*_ga*MTQxNzAyMzk4MS4xNzQ5NjE5NzY1*_ga_8JE65Q40S6*czE3NTM2OTc3MTYkbzEyJGcxJHQxNzUzNjk3NzQ2JGozMCRsMCRoMA..' },
]);


  const increaseQty = id => {
    setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  };

 
  const decreaseQty = id => {
    setCart(cart.map(item => {
      if (item.id === id && item.qty > 1) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    }));
  };

  
  const removeItem = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="page">
      <div className="top-bar">
        <h2>Cart</h2>
        <button onClick={() => navigate('/home')}>← Back</button>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div className="food-card" key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '1rem' }}
              />
              <div style={{ flexGrow: 1 }}>
                <h4>{item.name}</h4>
                <p>
                  Qty:
                  <button onClick={() => decreaseQty(item.id)} disabled={item.qty === 1} style={{ margin: '0 5px' }}>
                    -
                  </button>
                  {item.qty}
                  <button onClick={() => increaseQty(item.id)} style={{ margin: '0 5px' }}>
                    +
                  </button>
                </p>
              </div>
              <button onClick={() => removeItem(item.id)} style={{ fontSize: '1.5rem', marginLeft: '1rem' }}>❌</button>
            </div>
          ))}
          <div className="total" style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '1rem' }}>
            Total: ₹{total}
          </div>
          <button
            className="place-order"
            onClick={() => alert("Order Placed!")}
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '1rem' }}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
