import React from "react";
import Section from "./Components/Section";
import Header from "./Components/Header";
import Nutrition from "./Components/Nutrition";
import Breakfast from "./Components/Breakfast";
import SecondBreakfast from "./Components/SecondBreakfast";
import Lunch from "./Components/Lunch";
import Dinner from "./Components/Dinner";
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
          <Breakfast />
          {/* <SecondBreakfast /> */}
          <Lunch />
          <Dinner />
          <Section className="summary">
            <SummarySection />
          </Section>
        </Section>
      </Section>
    </Section>
  );
};
export default Main;
