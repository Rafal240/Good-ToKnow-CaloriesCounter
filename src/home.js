import React from "react";
import Section from "./Components/Section";
import Nutrition from "./Components/Nutrition";
import MealTime from "./Components/MealTime";

const Home = () => {
  return (
    <>
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
        </Section>
      </Section>
    </>
  );
};
export default Home;
