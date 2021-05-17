import React from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import RemoveButton from "./RemoveButton";
import Div from "./Div";

const Breakfast = () => {
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
              <Div className="breakfast__secondItem">
                <Paragraf className="breakfast__name">Tofu</Paragraf>
                <Paragraf className="breakfast__name b_cal">46</Paragraf>
                <Paragraf className="breakfast__name b_fat">2.27g</Paragraf>
                <Paragraf className="breakfast__name b_carbs">2.44</Paragraf>
                <Paragraf className="breakfast__name b_protein">4.03</Paragraf>
                <Paragraf className="breakfast__name b_sugar">2g</Paragraf>
              </Div>
            </Div>
            <RemoveButton />
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default Breakfast;
