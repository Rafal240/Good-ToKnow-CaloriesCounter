import React from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import RemoveButton from "./RemoveButton";
import Div from "./Div";
import LunchExistingItems from "./MainContainer/LunchExistingItems";

const Lunch = () => {
  const items = [
    {
      name: "Soup",
      cal: 122,
      fat: "12g",
      carb: "3.15g",
      protein: "5.02",
      sugar: "5.5g",
    },
    {
      name: "Sandwich",
      cal: 100,
      fat: "15g",
      carb: "7.05g",
      protein: "4.22",
      sugar: "10.5g",
    },
  ];
  return (
    <Section className="main__container">
      <Section className="main__wrapper">
        <Div className="main__elements">
          <Div className="lunch__wrapper">
            <Paragraf className="lunch__title">Lunch</Paragraf>
            <Div className="lunch__div">
              <Div className="lunch__firstItem">
                <Select className="select_inpt">
                  <option value="">Choose Food Type</option>
                  <option value="eggs">Eggs</option>
                  <option value="musli">Musli</option>
                </Select>
                <Input></Input>
                <Button></Button>
              </Div>
              <LunchExistingItems items={items} />
            </Div>
            <RemoveButton />
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default Lunch;
