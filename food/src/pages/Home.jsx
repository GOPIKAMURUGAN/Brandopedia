import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/cartStore";
import axios from "axios";

const Home = () => {
  const { dispatch } = useCart();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/foods.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching food items:", err);
        setLoading(false);
      });
  }, []);

  const addItemToCart = async (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
    try {
      await axios.post("http://localhost:5000/cart", { ...item, qty: 1 });
    } catch (error) {
      console.error("Failed to add item to server cart:", error.message);
    }
  };

  return (
    <div className="page">
      <div className="top-bar">
        <h2>Food Items</h2>
        <button onClick={() => navigate("/cart")}>🛒 Cart</button>
      </div>

      {loading ? (
        <p>Loading food items...</p>
      ) : items.length === 0 ? (
        <p>No food items found.</p>
      ) : (
        items.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: "150px", height: "150px" }} />
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </div>
            <button onClick={() => addItemToCart(item)}>Add</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
