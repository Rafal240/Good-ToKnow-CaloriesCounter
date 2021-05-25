import React from "react";

import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import Div from "./Div";
import SecondBexistingItems from "./MainContainer/SecondBexistingItems";

// Można je na razie wyciąć poza komponent - nie zależą od danych w komponencie ;)
const items = [
  {
    name: "Toast",
    cal: 12,
    fat: "1g",
    carb: "1.15g",
    protein: "2.02",
    sugar: "0.5g",
  },
  {
    name: "Joghurt",
    cal: 5,
    fat: "1g",
    carb: "1.05g",
    protein: "1.22",
    sugar: "4.5g",
  },
];

const SecondBreakfast = () => {
  return (
    // Sekcja w sekcji - czy na pewno potrzebujesz aż tylu zagnieżdżeń?
    <Section className="main__container">
      <Section className="main__wrapper">
        {/* Div w div-ie - czy na pewno potrzebujesz aż tylu zagnieżdżeń? */}
        <Div className="main__elements">
          <Div className="secondbreakfast__wrapper">
            <Paragraf
              className="secondbreakfast__title"
              text="Second Breakfast"
            />
            <Div className="secondbreakfast__div">
              <Div className="secondbreakfast__onetItem">
                <Select className="select_inpt">
                  <option value="">Choose Food Type</option>
                  <option value="eggs">Eggs</option>
                  <option value="musli">Musli</option>
                </Select>
                <Input/>
                <Button/>
              </Div>
              <SecondBexistingItems items={items} />
            </Div>
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default SecondBreakfast;
