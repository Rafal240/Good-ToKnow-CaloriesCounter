import React from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import RemoveButton from "./RemoveButton";

const Lunch = () => {
  return (
    <Section className="main__container">
      <Section className="main__wrapper">
        <div className="main__elements">
          <div className="lunch__wrapper">
            <Paragraf className="lunch__title">Lunch</Paragraf>
            <div className="lunch__div">
              <div className="lunch__firstItem">
                <Select className="select_inpt">
                  <option value="">Choose Food Type</option>
                  <option value="eggs">Eggs</option>
                  <option value="musli">Musli</option>
                </Select>
                <Input></Input>
                <Button></Button>
              </div>
              <div className="lunch__secondItem">
                <Paragraf className="lunch__name">Tofu</Paragraf>
                <Paragraf className="lunch__name l_cal">46</Paragraf>
                <Paragraf className="lunch__name l_fat">2.27g</Paragraf>
                <Paragraf className="lunch__name l_carbs">2.44</Paragraf>
                <Paragraf className="lunch__name l_protein">4.03</Paragraf>
                <Paragraf className="lunch__name l_sugar">2g</Paragraf>
              </div>
            </div>
            <RemoveButton />
          </div>
        </div>
      </Section>
    </Section>
  );
};
export default Lunch;
