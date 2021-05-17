import React from "react";
import Section from "./Section";
import Paragraf from "./Paragraf";
import InputText from "./InputText";
import ButtonProduct from "./ButtonProduct";

const ProductWeb = () => {
  return (
    <Section className="add__contrainer ">
      <div className="add__wrapper">
        <div className="add__title">
          <h2 className="title__text">Add your food</h2>
        </div>

        <div className="add__form">
          <div className="food__name">
            <Paragraf className="form__text">Enter product name:</Paragraf>
            <InputText />
          </div>
          <div className="food__calories">
            <Paragraf className="form__text">Product Calories</Paragraf>
            <InputText />
          </div>
          <div className="food__fat">
            <Paragraf className="form__text">Fat</Paragraf>
            <InputText />
          </div>
          <div className="food__proteins">
            <Paragraf className="form__text">Proteins</Paragraf>
            <InputText />
          </div>
          <div className="food__sugar">
            <Paragraf className="form__text">Sugar</Paragraf>
            <InputText />
          </div>
          <ButtonProduct />
        </div>
      </div>
    </Section>
  );
};
export default ProductWeb;
