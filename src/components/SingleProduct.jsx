import React, {useContext} from "react";
import { CartContext } from "../Context";

const SingleProduct = ({ product}) => {

 // use useContext to import the State from Context component and extract the values
 const { cart, setCart } = useContext(CartContext);


  return (
    <div className="products">
      <img src={product.image} alt={product.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{product.name}</span>
        <span>$ {product.price}</span>
      </div>
      {/* if card includes product display one button or another */}
      {cart.includes(product) ? (
        <button
          className="add"
          onClick={() => {
            // obj.id should not be equal to product.id
            setCart(cart.filter((obj) => obj.id !== product.id));
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, product]);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
