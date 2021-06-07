import React from "react";
import Section from "./Components/Section";
import ProductListWeb from "./Components/ProductListWeb";

const ProductList = () => {
  return (
    <Section className="productList__container">
      <ProductListWeb />
    </Section>
  );
};
export default ProductList;
