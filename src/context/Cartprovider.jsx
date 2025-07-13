import React, { createContext, useContext, useReducer } from "react";

const cartReducer = (cart, action) => {
  if (action.type === "add-to-cart") {
    return [...cart, action.payload];
  }
  if (action.type === "remove") {
    console.log(action.payload, "action.payload.id");

    return cart.filter((item) => item.id !== action.payload);
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
