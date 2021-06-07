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
  const [grams, setGrams] = useState("");
  const [select, setSelect] = useState("");
  const onChangeGrams = (event) => setGrams(event.target.value);
  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };
  const [items, setItems] = useState([]);
  const AddItemButton = () => {
    fetch("http://localhost:3000/dinner", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: select,
      }),
    }).then(() => {
      setSelect("");
      getData();
    });
  };
  const onAddProductHandler = () => {
    fetch("http://localhost:3000/all_products", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const getData = () => {
    fetch("http://localhost:3000/all_products")
      .then((response) => response.json())
      .then((all_products) => {
        setData(all_products);
        return fetch("http://localhost:3000/dinner")
          .then((response) => response.json())
          .then((breakfastItem) => {
            const items = breakfastItem.map((eachBreakfastItem) => {
              const productDetails = all_products.find(
                (product) => product.name === eachBreakfastItem.name
              );
              return productDetails;
            });
            setItems(items);
          })
          .catch((error) => {
            console.log(error);
          });
      })

      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  // const items = [
  //   {
  //     name: "Chicken",
  //     cal: 90,
  //     fat: "1g",
  //     carb: "12g",
  //     protein: "5",
  //     sugar: "1g",
  //   },
  //   {
  //     name: "Broccoli",
  //     cal: 10,
  //     fat: "0g",
  //     carb: "3.05g",
  //     protein: "2.2",
  //     sugar: "1.5g",
  //   },
  // ];
  // useEffect(() => {
  //   const getData = () => {
  //     fetch("http://localhost:3000/all_products")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   getData();
  // }, []);
  return (
    <Section className="main__container">
      <Section className="main__wrapper">
        <Div className="main__elements">
          <Div className="dinner__wprapper">
            <Paragraf className="dinner__title" text="Dinner"></Paragraf>
            <Div className="dinner__div">
              <Div className="dinner__firstItem">
                <select onChange={handleSelectChange} value={select}>
                  <option>Choose items</option>
                  {data.map((item) => {
                    return (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <Input value={grams} onChange={onChangeGrams}></Input>
                <Button onClick={AddItemButton}></Button>
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
