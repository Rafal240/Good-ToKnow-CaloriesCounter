import React from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import RemoveButton from "./RemoveButton";
import Div from "./Div";

const SecondBreakfast = () => {
  return (
    <Section className="main__container">
      <Section className="main__wrapper">
        <Div className="main__elements">
          <Div className="secondbreakfast__wrapper">
            <Paragraf className="secondbreakfast__title">
              {" "}
              Second Breakfast
            </Paragraf>
            <Div className="secondbreakfast__div">
              <Div className="secondbreakfast__onetItem">
                <Select className="select_inpt">
                  <option value="">Choose Food Type</option>
                  <option value="eggs">Eggs</option>
                  <option value="musli">Musli</option>
                </Select>
                <Input></Input>
                <Button></Button>
              </Div>
              <Div className="secondbreakfast__secondItem">
                <Paragraf className="secondbreakfast__name">Tofu</Paragraf>
                <Paragraf className="secondbreakfast__name b_cal">46</Paragraf>
                <Paragraf className="secondbreakfast__name b_fat">
                  2.27g
                </Paragraf>
                <Paragraf className="secondbreakfast__name b_carbs">
                  2.44
                </Paragraf>
                <Paragraf className="secondbreakfast__name b_protein">
                  4.03
                </Paragraf>
                <Paragraf className="secondbreakfast__name b_sugar">
                  2g
                </Paragraf>
              </Div>
            </Div>
            <RemoveButton />
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default SecondBreakfast;
