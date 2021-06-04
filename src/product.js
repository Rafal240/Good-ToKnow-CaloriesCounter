import React from "react";
import { Link } from "react-router-dom";
import ProductWeb from "./Components/ProductWeb";
import Section from "./Components/Section";

const Product = () => {
  return (
    <Section className="add__contrainer">
      <ProductWeb />
    </Section>
  );
};
export default Product;
