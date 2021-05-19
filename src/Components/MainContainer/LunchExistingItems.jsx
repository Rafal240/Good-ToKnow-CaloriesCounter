import React from "react";
import Div from "../Div";
import Paragraf from "../Paragraf";
import RemoveButton from "../RemoveButton";

const LunchExistingItems = ({ items }) => {
  const onClickRemoveButton = () => {
    console.log("Luch Button");
  };
  const renderLunchItems = () => {
    return items.map((item) => {
      return (
        <Div className="lunch__productsMap" key={item.name}>
          <Paragraf className="lunch__name" text={item.name}></Paragraf>
          <Paragraf className="lunch__name l_cal" text={item.cal}></Paragraf>
          <Paragraf className="lunch__name l_fat" text={item.fat}></Paragraf>
          <Paragraf className="lunch__name l_carbs" text={item.carb}></Paragraf>
          <Paragraf
            className="lunch__name l_protein"
            text={item.protein}
          ></Paragraf>
          <Paragraf
            className="lunch__name l_sugar"
            text={item.sugar}
          ></Paragraf>
          <RemoveButton onClick={onClickRemoveButton} />
        </Div>
      );
    });
  };
  return <Div className="lunch__secondItem">{renderLunchItems()}</Div>;
};
export default LunchExistingItems;
