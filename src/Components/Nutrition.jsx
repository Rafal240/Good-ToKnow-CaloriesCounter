import React from "react";
import List from "./List";
import Section from "./Section";
import ListItem from "./ListItem";
import Div from "./Div";

const Nutrition = () => {
  return (
    <Section className="nutrition__bigwrapper">
      <Section className="nutrition__container">
        <Div className="nutrition-wrapper">
          <List className="nutrition__list">
            <ListItem className="nutrition__item">Name</ListItem>
            <ListItem className="nutrition__item">Calories</ListItem>
            <ListItem className="nutrition__item">Fat</ListItem>
            <ListItem className="nutrition__item">Carbs</ListItem>
            <ListItem className="nutrition__item">Protein</ListItem>
            <ListItem className="nutrition__item">Sugar</ListItem>
          </List>
        </Div>
      </Section>
    </Section>
  );
};
export default Nutrition;
