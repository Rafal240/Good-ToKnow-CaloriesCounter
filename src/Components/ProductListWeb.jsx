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
              <Div className="savedList__item">
                <Div className="sv__titles">
                  <Paragraf className="sv_id" text="Product Id"></Paragraf>
                </Div>
                <Div className="sv__titles">
                  <Paragraf className="sv_name" text="Name"></Paragraf>
                </Div>
                <Div className="sv__titles">
                  <Paragraf className="sv_cal" text="Calories"></Paragraf>
                </Div>
                <Div className="sv__titles">
                  <Paragraf className="sv_fat" text="Fat"></Paragraf>
                </Div>
                <Div className="sv__titles">
                  <Paragraf className="sv_protein" text="Protein"></Paragraf>
                </Div>
                <Div className="sv__titles">
                  <Paragraf className="sv_sugar" text="Sugar"></Paragraf>
                </Div>
              </Div>
              <Div className="productList__mapa">
                {data.map((eachProduct) => {
                  return (
                    <Div key={eachProduct.id} className="savedList__item_map">
                      <Div className="map__id_item">
                        <Paragraf
                          className="savedList_id"
                          text={eachProduct.id}
                        ></Paragraf>
                      </Div>
                      <Div className="map__name_item">
                        <Paragraf
                          className="savedList_name"
                          text={eachProduct.name}
                        ></Paragraf>
                      </Div>

                      <Div className="map___cal_item">
                        <Paragraf
                          className="savedList__cal"
                          text={eachProduct.cal}
                        />
                      </Div>
                      <Div className="map__fat_item">
                        <Paragraf
                          className="savedList__fat"
                          text={eachProduct.fat}
                        />
                      </Div>
                      <Div className="map__protein_item">
                        <Paragraf
                          className="savedList__protein"
                          text={eachProduct.protein}
                        />
                      </Div>
                      <Div className="map__sugar_item">
                        <Paragraf
                          className="savedList__sugar"
                          text={eachProduct.sugar}
                        />
                      </Div>
                    </Div>
                  );
                })}
              </Div>
            </Div>
          </Div>
        </Div>
      </Section>
    </form>
  );
};
export default ProductListWeb;
