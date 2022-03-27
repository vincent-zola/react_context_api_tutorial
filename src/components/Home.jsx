import React, { useContext, useState } from "react";
import faker from "faker";
import "./styles.css";
import SingleProduct from "./SingleProduct";


// Now faker will have constant data on reload of page, except images
faker.seed(100);

const Home = () => {



  // generate array with 20 undefined obj and map over it
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  // put our generated products in useState
  const [products] = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((product) => (
        <SingleProduct
          key={product.id}
          product={product}
         
        />
      ))}
    </div>
  );
};

export default Home;
