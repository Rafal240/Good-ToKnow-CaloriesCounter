import React, { useEffect, useState } from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import Div from "./Div";
import LunchExistingItems from "./MainContainer/LunchExistingItems";

const Lunch = () => {
  const [data, setData] = useState([]);
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
          <Div className="lunch__wrapper">
            <Paragraf className="lunch__title" text="Lunch"></Paragraf>
            <Div className="lunch__div">
              <Div className="lunch__firstItem">
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
              <LunchExistingItems items={items} />
            </Div>
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default Lunch;
