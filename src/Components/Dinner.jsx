import React from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import RemoveButton from "./RemoveButton";

const Dinner = () => {
  return (
    <Section className="main__container">
      <Section className="main__wrapper">
        <div className="main__elements">
          <div className="dinner__wprapper">
            <Paragraf className="dinner__title">Dinner</Paragraf>
            <div className="dinner__div">
              <div className="dinner__firstItem">
                <Select className="select_inpt">
                  <option value="">Choose Food Type</option>
                  <option value="eggs">Eggs</option>
                  <option value="musli">Musli</option>
                </Select>
                <Input></Input>
                <Button></Button>
              </div>
              <div className="dinner__secondItem">
                <Paragraf className="dinner__name">Tofu</Paragraf>
                <Paragraf className="dinner__name d_cal">46</Paragraf>
                <Paragraf className="dinner__name d_fat">2.27g</Paragraf>
                <Paragraf className="dinner__name d_carbs">2.44</Paragraf>
                <Paragraf className="dinner__name d_protein">4.03</Paragraf>
                <Paragraf className="dinner__name d_sugar">2g</Paragraf>
              </div>
            </div>
            <RemoveButton />
          </div>
        </div>
      </Section>
    </Section>
  );
};
export default Dinner;
