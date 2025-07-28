import React, { useReducer } from 'react';
import { CartContext } from "../hooks/cartStore";



const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.find(i => i.id === action.payload.id);
      if (exists) {
        return state.map(i =>
          i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...state, { ...action.payload, qty: 1 }];
      }
    }

    case 'INCREASE_QTY': {
      return state.map(i =>
        i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
      );
    }

    case 'DECREASE_QTY': {
      return state.map(i =>
        i.id === action.payload && i.qty > 1
          ? { ...i, qty: i.qty - 1 }
          : i
      );
    }

    case 'REMOVE_ITEM': {
      return state.filter(i => i.id !== action.payload);
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
