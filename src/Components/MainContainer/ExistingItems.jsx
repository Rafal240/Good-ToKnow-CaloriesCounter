import React from "react";
import Div from "../Div";
import Paragraf from "../Paragraf";
import RemoveButton from "../RemoveButton";

const ExistingItems = ({ items }) => {
  const onClickRemoveButton = () => {
    console.log("Wywalić produkt");
  };
  const renderItems = () => {
    return items.map((item) => {
      return (
        <Div className="breakfast__productsMap" key={item.name}>
          <Paragraf className="breakfast__name" text={item.name}></Paragraf>
          <Paragraf
            className="breakfast__name b_cal"
            text={item.cal}
          ></Paragraf>
          <Paragraf
            className="breakfast__name b_fat"
            text={item.fat}
          ></Paragraf>
          <Paragraf
            className="breakfast__name b_carbs"
            text={item.carb}
          ></Paragraf>
          <Paragraf
            className="breakfast__name b_protein"
            text={item.protein}
          ></Paragraf>
          <Paragraf
            className="breakfast__name b_sugar"
            text={item.sugar}
          ></Paragraf>
          <RemoveButton onClick={onClickRemoveButton} />
        </Div>
      );
    });
  };

  return <Div className="breakfast__secondItem">{renderItems()}</Div>;
};
export default ExistingItems;
