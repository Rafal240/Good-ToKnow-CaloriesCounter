import React from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import RemoveButton from "./RemoveButton";
import Div from "./Div";

const Lunch = () => {
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
              <Div className="lunch__secondItem">
                <Paragraf className="lunch__name">Tofu</Paragraf>
                <Paragraf className="lunch__name l_cal">46</Paragraf>
                <Paragraf className="lunch__name l_fat">2.27g</Paragraf>
                <Paragraf className="lunch__name l_carbs">2.44</Paragraf>
                <Paragraf className="lunch__name l_protein">4.03</Paragraf>
                <Paragraf className="lunch__name l_sugar">2g</Paragraf>
              </Div>
            </Div>
            <RemoveButton />
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default Lunch;
