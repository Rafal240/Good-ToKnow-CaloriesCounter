import React from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Div from "./Div";

const Summary = () => {
  return (
    <Section className="main__container">
      <Section className="main__wrapper">
        <Section className="summary">
          <Div className="summar_item">
            <Paragraf className="summary__text" text="Total"></Paragraf>
          </Div>
        </Section>
      </Section>
    </Section>
  );
};
export default Summary;
