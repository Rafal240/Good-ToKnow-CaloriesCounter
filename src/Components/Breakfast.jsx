import React, { useEffect, useState } from "react";

import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import Div from "./Div";
import ExistingItems from "./MainContainer/ExistingItems";

const Breakfast = () => {
  const [data, setData] = useState([]);

  // fetch(meals//)
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
  const getData = () => {
    fetch("http://localhost:3000/breakfast", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // Tutaj dzieje się ustawianie danych - teraz możesz używać `data`
        setData(myJson);
        console.log(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const selectValues = [
    { value: "", text: "Choose Food Type" },
    { value: "eggs", text: "Eggs" },
    { value: "musli", text: "Musli" },
  ];
  return (
    <Section className="main__container">
      <Section className="main__wrapper">
        <Div className="main__elements">
          <Div className="breakfast__wrapper">
            <Paragraf className="breakfast__title" text="Breakfast" />
            <Div className="breakfast__div">
              <Div className="breakfast__firstItem">
                <Select
                  className="select_inpt"
                  options={selectValues}
                  onChange={(e) => console.log("SELECTED VALUE:", e)}
                />
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
