import React, { createContext, useReducer, useContext } from 'react';

const ShoppingCartContext = createContext();

const initialState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[itemIndex].quantity += 1;
        return { ...state, items: updatedItems };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    case 'REMOVE_FROM_CART':
      return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item),
      };
    default:
      return state;
  }
};

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
  };

  return (
    <ShoppingCartContext.Provider value={{ state, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
