import React from "react";
import Div from "./Div";
import Paragraf from "./Paragraf";
import Section from "./Section";

const ProductListWeb = () => {
  return (
    <form>
      <Section className="savedList__container">
        <Section className="savedList__mainHeader">
          <Div className="savedList__header">
            <h2 className="savedList__title">Product List</h2>
          </Div>
        </Section>
        <Div className="savedList__wrapper">
          <Div className="savedList__form">
            <Div className="savedList__items">
              <Div className="sv__name">
                <Paragraf className="savedList__name" text="Name"></Paragraf>
                <Paragraf
                  className="savedList__name"
                  text="Ryż z jajkiem"
                ></Paragraf>
                <Paragraf className="savedList__name" text="Tofu"></Paragraf>
              </Div>
              <Div className="sv__name">
                <Paragraf className="savedList__cal" text="Calories"></Paragraf>
                <Paragraf className="savedList__cal" text="14g"></Paragraf>
                <Paragraf className="savedList__cal" text="20g"></Paragraf>
              </Div>
              <Div className="sv__name">
                <Paragraf className="savedList__fat" text="Fat"></Paragraf>
                <Paragraf className="savedList__fat" text="5g"></Paragraf>
                <Paragraf className="savedList__fat" text="2g"></Paragraf>
              </Div>
              <Div className="sv__name">
                <Paragraf className="savedList__carb" text="Carb"></Paragraf>
                <Paragraf className="savedList__carb" text="1.2g"></Paragraf>
                <Paragraf className="savedList__carb" text="5g"></Paragraf>
              </Div>
              <Div className="sv__name">
                <Paragraf
                  className="savedList__protein"
                  text="Protein"
                ></Paragraf>
                <Paragraf className="savedList__protein" text="4.5g"></Paragraf>
                <Paragraf className="savedList__protein" text="5g"></Paragraf>
              </Div>
              <Div className="sv__name">
                <Paragraf className="savedList__sugar" text="Sugar"></Paragraf>
                <Paragraf className="savedList__sugar" text="1g"></Paragraf>
                <Paragraf className="savedList__sugar" text="13g"></Paragraf>
              </Div>
            </Div>
          </Div>
        </Div>
      </Section>
    </form>
  );
};
export default ProductListWeb;
