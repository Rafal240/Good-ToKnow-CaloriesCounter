import React, { useState } from "react";
import Section from "./Section";
import Paragraf from "./Paragraf";
import InputText from "./InputText";
import Div from "./Div";
import ButtonProduct from "./ButtonProduct";

const ProductWeb = () => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const onNameChangeHandler = (event) => setName(event.target.value);
  const onCaloriesChangeHandler = (event) => setCalories(event.target.value);

  const onAddProductHandler = () => {
    fetch("http://localhost:3000/all_products", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: name, name: name, cal: calories }),
    });
  };

  return (
    <Section className="add__contrainer ">
      <Div className="add__wrapper">
        <Div className="add__title">
          <h2 className="title__text">Add your food</h2>
        </Div>

        <Div className="add__form">
          <Div className="food__name">
            <Paragraf className="form__text" text="Enter product name:" />
            <InputText value={name} onChange={onNameChangeHandler} />
          </Div>
          <Div className="food__calories">
            <Paragraf className="form__text" text="Product Calories"></Paragraf>
            <InputText value={calories} onChange={onCaloriesChangeHandler} />
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
          <ButtonProduct onClick={onAddProductHandler} />
        </Div>
      </Div>
    </Section>
  );
};
export default ProductWeb;
