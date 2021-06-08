import React from "react";
import Section from "./Components/Section";
import Header from "./Components/Header";
import Nutrition from "./Components/Nutrition";

import MealTime from "./Components/MealTime";

import SummarySection from "./Components/SummarySection";

const Main = () => {
  return (
    <Section className="body__section">
      <Section className="calories__calc">
        <Header />
      </Section>
      <Section className="nutrition__bigwrapper">
        <Section className="nutrition__container">
          <Nutrition />
        </Section>
      </Section>
      <Section className="main__container">
        <Section className="main__wrapper">
          <MealTime type="breakfast" />
          <MealTime type="lunch" />
          <MealTime type="dinner" />

          <Section className="summary">
            <SummarySection />
          </Section>
        </Section>
      </Section>
    </Section>
  );
};
export default Main;
