import React, { useEffect, useState } from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import Div from "./Div";
import ExistingItems from "./MainContainer/ExistingItems";

const Breakfast = () => {
  const [data, setData] = useState([{}]);
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
      name: "Fish",
      cal: 26,
      fat: "1.27g",
      carb: "1.44",
      protein: "2.03",
      sugar: "1.5g",
    },
  ];
  //tutaj fetch use effect Mapa w fetchu //select values stan w komponencie

  useEffect(() => {
    const getData = () => {
      fetch("http://localhost:3000/breakfast")
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
  // const selectValues = [
  //   { value: "", text: "Choose Food Type" },
  //   { value: "eggs", text: "Eggs" },
  //   { value: "musli", text: "Musli" },
  // ];
  return (
    <Section className="main__container">
      <Section className="main__wrapper">
        <Div className="main__elements">
          <Div className="breakfast__wrapper">
            <Paragraf className="breakfast__title" text="Breakfast" />
            <Div className="breakfast__div">
              <Div className="breakfast__firstItem">
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
              <ExistingItems items={items} />
            </Div>
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default Breakfast;
