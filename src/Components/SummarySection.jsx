import React from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";

const Summary = () => {
  return (
    <Section className="main__container">
      <Section className="main__wrapper">
        <Section className="summary">
          <div className="summar_item">
            <Paragraf className="summary__text">Total:</Paragraf>
          </div>
        </Section>
      </Section>
    </Section>
  );
};
export default Summary;
