import React from "react";
import Section from "./Section";
import Paragraf from "./Paragraf";

const ProductWeb = () => {
  return (
    <Section className="add__contrainer">
      <div className="add__wrapper">
        <div className="add__title">
          <h2 className="title__text">Add your food</h2>
        </div>

        <div className="add__form">
          <div className="food__name">
            <p>Enter product name:</p>
            <input type="text"></input>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default ProductWeb;
