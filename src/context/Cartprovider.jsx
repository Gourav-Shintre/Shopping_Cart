import React, { createContext, useContext, useReducer } from "react";

const cartReducer = (cart, action) => {
  if (action.type === "add-to-cart") {
    return [...cart, action.payload];
  }
  if (action.type === "remove") {
    console.log(action.payload, "action.payload.id");

    return cart.filter((item) => item.id !== action.payload);
  }
  if (action.type === "add-qty") {
    console.log(cart, "CARTTT");
    console.log(action.payload, "PAPAP");

    return cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }
  if (action.type === "remove-qty") {
    return cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
  }
};

export const CartContext = createContext();
const Cartprovider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  console.log(cart, "new");

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export function Usecart() {
  return useContext(CartContext);
}

export default Cartprovider;
