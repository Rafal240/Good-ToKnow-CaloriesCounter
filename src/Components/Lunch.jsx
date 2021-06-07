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
  const [grams, setGrams] = useState("");
  const [select, setSelect] = useState("");
  const onChangeGrams = (event) => setGrams(event.target.value);
  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };
  const [items, setItems] = useState([]);
  const AddItemButton = () => {
    fetch("http://localhost:3000/lunch", {
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
  // const items = [
  //   {
  //     name: "Soup",
  //     cal: 122,
  //     fat: "12g",
  //     carb: "3.15g",
  //     protein: "5.02",
  //     sugar: "5.5g",
  //   },
  //   {
  //     name: "Sandwich",
  //     cal: 100,
  //     fat: "15g",
  //     carb: "7.05g",
  //     protein: "4.22",
  //     sugar: "10.5g",
  //   },
  // ];
  const getData = () => {
    fetch("http://localhost:3000/all_products")
      .then((response) => response.json())
      .then((all_products) => {
        setData(all_products);
        return fetch("http://localhost:3000/lunch")
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
          <Div className="lunch__wrapper">
            <Paragraf className="lunch__title" text="Lunch"></Paragraf>
            <Div className="lunch__div">
              <Div className="lunch__firstItem">
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
              <LunchExistingItems items={items} />
            </Div>
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default Lunch;
