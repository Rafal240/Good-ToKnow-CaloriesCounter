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
        <Div className="Kuna" key={item.name}>
          <Paragraf className="breakfast__name">{item.name}</Paragraf>
          <Paragraf className="breakfast__name b_cal">{item.cal}</Paragraf>
          <Paragraf className="breakfast__name b_fat">{item.fat}</Paragraf>
          <Paragraf className="breakfast__name b_carbs">{item.carb}</Paragraf>
          <Paragraf className="breakfast__name b_protein">
            {item.protein}
          </Paragraf>
          <Paragraf className="breakfast__name b_sugar">{item.sugar}</Paragraf>
          <RemoveButton onClick={onClickRemoveButton} />
        </Div>
      );
    });
  };

  return <Div className="breakfast__secondItem">{renderItems()}</Div>;
};
export default ExistingItems;
