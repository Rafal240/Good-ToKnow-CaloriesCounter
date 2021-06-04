import React, { useEffect, useState } from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import Div from "./Div";
import ExistingItems from "./MainContainer/ExistingItems";
import ProductWeb from "./ProductWeb";

const Breakfast = () => {
  const [data, setData] = useState([]);
  const [grams, setGrams] = useState("");
  const [select, setSelect] = useState("");
  const onChangeGrams = (event) => setGrams(event.target.value);
  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };
  const [items, setItems] = useState([]);
  const AddItemButton = () => {
    fetch("http://localhost:3000/breakfast", {
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
  //     name: "Tofu",
  //     cal: 46,
  //     fat: "2.27g",
  //     carb: "2.44",
  //     protein: "4.03",
  //     sugar: "2g",
  //   },
  //   {
  //     name: "Fish",
  //     cal: 26,
  //     fat: "1.27g",
  //     carb: "1.44",
  //     protein: "2.03",
  //     sugar: "1.5g",
  //   },
  // ];
  //tutaj fetch use effect Mapa w fetchu //select values stan w komponencie
  const getData = () => {
    fetch("http://localhost:3000/all_products")
      .then((response) => response.json())
      .then((all_products) => {
        setData(all_products);
        return fetch("http://localhost:3000/breakfast")
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

  // const handleOnChange = (event) => {
  //   const { name, id } = event.target;
  //   setInputValues({ [name]: id });
  // };
  // // const selectValues = [
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
              <ExistingItems items={items} />
            </Div>
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default Breakfast;
