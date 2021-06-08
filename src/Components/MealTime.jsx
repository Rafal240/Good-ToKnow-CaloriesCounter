import React, { useEffect, useState } from "react";
import Paragraf from "./Paragraf";
import Section from "./Section";
import Input from "./Input";
import Button from "./Button";
import Div from "./Div";
import ExistingItems from "./MainContainer/ExistingItems";

const MealTime = ({ type }) => {
  const [data, setData] = useState([]);
  const [grams, setGrams] = useState("");
  const [select, setSelect] = useState("");
  const onChangeGrams = (event) => setGrams(event.target.value);
  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };
  const [items, setItems] = useState([]);
  const AddItemButton = () => {
    fetch(`http://localhost:3000/${type}`, {
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

  //tutaj fetch use effect Mapa w fetchu //select values stan w komponencie
  const getData = () => {
    fetch("http://localhost:3000/all_products")
      .then((response) => response.json())
      .then((all_products) => {
        setData(all_products);
        return fetch(`http://localhost:3000/${type}`)
          .then((response) => response.json())
          .then((mealItem) => {
            const items = mealItem.map((eachMealItem) => {
              const productDetails = all_products.find(
                (product) => product.name === eachMealItem.name
              );
              return { ...productDetails, id: eachMealItem.id };
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

  const onClickRemoveButton = (itemId) => {
    console.log("Wywalić produkt", itemId);
    fetch(`http://localhost:3000/${type}/${itemId}`, {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getData();
    });
  };

  return (
    <Section className="main__container">
      <Section className="main__wrapper">
        <Div className="main__elements">
          <Div className="breakfast__wrapper">
            <Paragraf className="breakfast__title" text={type} />
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
              <ExistingItems
                items={items}
                onClickRemoveButton={onClickRemoveButton}
              />
            </Div>
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default MealTime;
