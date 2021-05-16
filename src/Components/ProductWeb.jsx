import React from "react";
import Section from "./Section";
import Paragraf from "./Paragraf";
import InputText from "./InputText";
import Input from "./Input";
import Button from "./Button";

const ProductWeb = () => {
  return (
    <Section className="add__contrainer">
      <div className="add__wrapper">
        <div className="add__title">
          <h2 className="title__text">Add your food</h2>
        </div>

        <div className="add__form">
          <div className="food__name">
            <Paragraf className="">Enter product name:</Paragraf>
            <InputText />
          </div>
          <div className="food__calories">
            <Paragraf className="">Product Calories</Paragraf>
            <InputText />
          </div>
          <div className="food__fat">
            <Paragraf className="">Fat</Paragraf>
            <InputText />
          </div>
          <div className="food__name">
            <Paragraf className="">Proteins</Paragraf>
            <InputText />
          </div>
          <div className="food__name">
            <Paragraf className="">Sugar</Paragraf>
            <InputText />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default ProductWeb;
