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
          <Paragraf className="dinner__name" text={item.name}></Paragraf>
          <Paragraf className="dinner__name d_cal" text={item.cal}></Paragraf>
          <Paragraf className="dinner__name d_fat" text={item.fat}></Paragraf>
          <Paragraf
            className="dinner__name d_carbs"
            text={item.carb}
          ></Paragraf>
          <Paragraf
            className="dinner__name d_protein"
            text={item.protein}
          ></Paragraf>
          <Paragraf
            className="dinner__name d_sugar"
            text={item.sugar}
          ></Paragraf>
          <RemoveButton onClick={onClickRemoveButton} />
        </Div>
      );
    });
  };
  return <Div className="dinner__secondItem">{renderDinnerItems()}</Div>;
};

export default DinnerExistingItems;
