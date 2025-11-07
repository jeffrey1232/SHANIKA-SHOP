import { createContext, useContext, useState, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(
        item => item.id === action.payload.id && 
        item.size === action.payload.size && 
        item.color === action.payload.color
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && 
            item.size === action.payload.size && 
            item.color === action.payload.color
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(
          item => !(item.id === action.payload.id && 
          item.size === action.payload.size && 
          item.color === action.payload.color)
        ),
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && 
          item.size === action.payload.size && 
          item.color === action.payload.color
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [favorites, setFavorites] = useState([]);

  const addToCart = (product, size, color, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        color,
        quantity,
      },
    });
  };

  const removeFromCart = (id, size, color) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id, size, color },
    });
  };

  const updateQuantity = (id, size, color, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, size, color, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const cartTotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = state.items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        cartCount,
        cartTotal,
        favorites,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleFavorite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

