import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context";

import "./styles.css";

const Header = () => {
  // use useContext to import the State from Context component and extract the values
  const { cart } = useContext(CartContext);
  return (
    <div>
      <span className="header">React Context API Tutorial</span>
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          {/* Display how many items are in our shopping cart */}
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
