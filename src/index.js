import React from "react";
import Section from "./Components/Section";
import Header from "./Components/Header";

import Home from "./home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Product from "./product";
import ProductList from "./productList";

const Main = () => {
  return (
    <Router>
      <Section className="body__section">
        <Section className="calories__calc">
          <Header />
        </Section>

        <Switch>
          <Route path="/add-product">
            <Product />
          </Route>
          <Route path="/product-list">
            <ProductList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Section>
    </Router>
  );
};
export default Main;
