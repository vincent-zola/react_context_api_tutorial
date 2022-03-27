import React, { createContext, useState } from "react";

// create Context and export it
export const CartContext = createContext();

const Context = ({ children }) => {
  // will store every product that we selected with "Add to Cart" button
  const [cart, setCart] = useState([]);
  // Basically returns our State to all of the children, all children will receive it because we wrapped our app in index.js with this component
  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};

export default Context;
