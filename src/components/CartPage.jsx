import React, { useEffect, useState, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "../Context";
import "./styles.css";

const CartPage = () => {
  // use useContext to import the State from Context component and extract the values
  const { cart} = useContext(CartContext);

  // stores the total amount of $ value in cart
  const [total, setTotal] = useState();

  // for calculating the dollar total
  useEffect(() => {
    // The reduce() method executes a reducer function for all obj in cart
    // 0 = initialValue
    setTotal(
      cart.reduce(
        (previousValue, currentValue) =>
          previousValue + Number(currentValue.price),
        0
      )
    );
  }, [setTotal, cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: {total} $</span>
      <div className="productContainer">
        {cart.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
