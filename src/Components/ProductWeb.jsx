import React from "react";
import Section from "./Section";
import Paragraf from "./Paragraf";
import InputText from "./InputText";
import Div from "./Div";
import ButtonProduct from "./ButtonProduct";

const ProductWeb = () => {
  return (
    <Section className="add__contrainer ">
      <Div className="add__wrapper">
        <Div className="add__title">
          <h2 className="title__text">Add your food</h2>
        </Div>

        <Div className="add__form">
          <Div className="food__name">
            <Paragraf
              className="form__text"
              text="Enter product name:"
            ></Paragraf>
            <InputText />
          </Div>
          <Div className="food__calories">
            <Paragraf className="form__text" text="Product Calories"></Paragraf>
            <InputText />
          </Div>
          <Div className="food__fat">
            <Paragraf className="form__text" text="Fat"></Paragraf>
            <InputText />
          </Div>
          <Div className="food__proteins">
            <Paragraf className="form__text" text="Proteins"></Paragraf>
            <InputText />
          </Div>
          <Div className="food__sugar">
            <Paragraf className="form__text" text="Sugar"></Paragraf>
            <InputText />
          </Div>
          <ButtonProduct />
        </Div>
      </Div>
    </Section>
  );
};
export default ProductWeb;
