import React, { useEffect, useState } from "react";
import Div from "./Div";
import Paragraf from "./Paragraf";
import Section from "./Section";

const ProductListWeb = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("http://localhost:3000/all_products")
      .then((response) => response.json())
      .then((all_products) => {
        setData(all_products);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <form>
      <Section className="savedList__container">
        <Section className="savedList__mainHeader">
          <Div className="savedList__header">
            <h2 className="savedList__title">Product List</h2>
          </Div>
        </Section>

        <Div className="savedList__wrapper">
          <Div className="savedList__form">
            <Div className="savedList__items">
              <div className="savedList__item">
                <Div>Product Id</Div>
                <Div>Name</Div>
                <Div>Cal</Div>
                <Div>Fat</Div>
                <Div>Protein</Div>
                <Div>Sugar</Div>
              </div>
              {data.map((eachProduct) => {
                return (
                  <div key={eachProduct.id} className="savedList__item">
                    <div>{eachProduct.id}</div>
                    <div>{eachProduct.name}</div>
                    <div>
                      <Paragraf
                        className="savedList__cal"
                        text={eachProduct.cal}
                      />
                    </div>
                    <div>
                      <Paragraf
                        className="savedList__fatl"
                        text={eachProduct.fat}
                      />
                    </div>
                    <div>
                      <Paragraf
                        className="savedList__cal"
                        text={eachProduct.protein}
                      />
                    </div>
                    <div>
                      <Paragraf
                        className="savedList__cal"
                        text={eachProduct.sugar}
                      />
                    </div>
                  </div>
                );
              })}
            </Div>
          </Div>
        </Div>
      </Section>
    </form>
  );
};
export default ProductListWeb;
