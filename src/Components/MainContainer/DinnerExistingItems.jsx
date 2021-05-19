import React from "react";
import Div from "../Div";
import Paragraf from "../Paragraf";
import RemoveButton from "../RemoveButton";

const DinnerExistingItems = ({ items }) => {
  const onClickRemoveButton = () => {
    console.log("DinnerButton");
  };
  const renderDinnerItems = () => {
    return items.map((item) => {
      return (
        <Div className="dinner__productsMap" key={item.name}>
          <Paragraf className="dinner__name">{item.name}</Paragraf>
          <Paragraf className="dinner__name d_cal">{item.cal}</Paragraf>
          <Paragraf className="dinner__name d_fat">{item.fat}</Paragraf>
          <Paragraf className="dinner__name d_carbs">{item.carb}</Paragraf>
          <Paragraf className="dinner__name d_protein">{item.protein}</Paragraf>
          <Paragraf className="dinner__name d_sugar">{item.sugar}</Paragraf>
          <RemoveButton onClick={onClickRemoveButton} />
        </Div>
      );
    });
  };
  return <Div className="dinner__secondItem">{renderDinnerItems()}</Div>;
};

export default DinnerExistingItems;
