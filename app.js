import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";

import Main from "./src/index.js";
import Product from "./src/product.js";
import ProductList from "./src/productList.js";

const App = () => {
  return (
    <>
      <Main />
      <Product />
      <ProductList />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
