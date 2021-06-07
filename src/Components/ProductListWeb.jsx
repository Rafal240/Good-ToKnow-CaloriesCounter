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
              </Div>
              <Div className="sv__name">
                <Paragraf className="savedList__cal" text="Calories"></Paragraf>
              </Div>
              <Div className="sv__name">
                <Paragraf className="savedList__fat" text="Fat"></Paragraf>
              </Div>
              <Div className="sv__name">
                <Paragraf className="savedList__carb" text="Carb"></Paragraf>
              </Div>
              <Div className="sv__name">
                <Paragraf
                  className="savedList__protein"
                  text="Protein"
                ></Paragraf>
              </Div>
              <Div className="sv__name">
                <Paragraf className="savedList__sugar" text="Sugar"></Paragraf>
              </Div>
            </Div>
          </Div>
        </Div>
      </Section>
    </form>
  );
};
export default ProductListWeb;
