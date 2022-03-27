import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import CartPage from "./components/CartPage";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
