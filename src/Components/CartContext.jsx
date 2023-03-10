import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState({ quantity: 0, items: [] });

  const addCartItem = (item, quantity = 1) => {
    const existingItemIndex = cart.items.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...cart.items];
      updatedItems[existingItemIndex].quantity += quantity;
      const updatedCart = {
        quantity: cart.quantity + quantity,
        items: updatedItems,
      };
      setCart(updatedCart);
    } else {
      const updatedCart = {
        quantity: cart.quantity + quantity, // increase quantity
        items: [...cart.items, { ...item, quantity: quantity }],
      };
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={[cart, addCartItem]}>
      {props.children}
    </CartContext.Provider>
  );
};