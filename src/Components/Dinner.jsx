import React, { useEffect, useState } from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";

import Div from "./Div";
import DinnerExistingItems from "./MainContainer/DinnerExistingItems";

const Dinner = () => {
  const [data, setData] = useState([]);
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
  useEffect(() => {
    const getData = () => {
      fetch("http://localhost:3000/all_products")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);
  return (
    <Section className="main__container">
      <Section className="main__wrapper">
        <Div className="main__elements">
          <Div className="dinner__wprapper">
            <Paragraf className="dinner__title" text="Dinner"></Paragraf>
            <Div className="dinner__div">
              <Div className="dinner__firstItem">
                <select>
                  <option>Choose items</option>
                  {data.map((item) => {
                    return (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
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
