import React from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";

import Div from "./Div";
import DinnerExistingItems from "./MainContainer/DinnerExistingItems";

const Dinner = () => {
  const items = [
    {
      name: "Chicken",
      cal: 90,
      fat: "1g",
      carb: "12g",
      protein: "5",
      sugar: "1g",
    },
    {
      name: "Broccoli",
      cal: 10,
      fat: "0g",
      carb: "3.05g",
      protein: "2.2",
      sugar: "1.5g",
    },
  ];
  return (
    <Section className="main__container">
      <Section className="main__wrapper">
        <Div className="main__elements">
          <Div className="dinner__wprapper">
            <Paragraf className="dinner__title">Dinner</Paragraf>
            <Div className="dinner__div">
              <Div className="dinner__firstItem">
                <Select className="select_inpt">
                  <option value="">Choose Food Type</option>
                  <option value="eggs">Eggs</option>
                  <option value="musli">Musli</option>
                </Select>
                <Input></Input>
                <Button></Button>
              </Div>
              <DinnerExistingItems items={items} />
            </Div>
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default Dinner;
