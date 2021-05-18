import React from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import Div from "./Div";
import ExistingItems from "./MainContainer/ExistingItems";

const Breakfast = () => {
  const items = [
    {
      name: "Tofu",
      cal: 46,
      fat: "2.27g",
      carb: "2.44",
      protein: "4.03",
      sugar: "2g",
    },
    {
      name: "Ryba",
      cal: 26,
      fat: "1.27g",
      carb: "1.44",
      protein: "2.03",
      sugar: "1.5g",
    },
    {
      name: "Jajka",
      cal: 16,
      fat: "1.17g",
      carb: "1.14",
      protein: "1.03",
      sugar: "1.0g",
    },
  ];
  return (
    <Section className="main__container">
      <Section className="main__wrapper">
        <Div className="main__elements">
          <Div className="breakfast__wrapper">
            <Paragraf className="breakfast__title">Breakfast</Paragraf>
            <Div className="breakfast__div">
              <Div className="breakfast__firstItem">
                <Select className="select_inpt">
                  <option value="">Choose Food Type</option>
                  <option value="eggs">Eggs</option>
                  <option value="musli">Musli</option>
                </Select>
                <Input></Input>
                <Button></Button>
              </Div>
              <ExistingItems items={items} />
            </Div>
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default Breakfast;
