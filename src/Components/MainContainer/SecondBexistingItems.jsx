// import React from "react";
// import Div from "../Div";
// import Paragraf from "../Paragraf";
// import RemoveButton from "../RemoveButton";

// const SecondBexistingItems = ({ items }) => {
//   const onClickRemoveButton = () => {
//     console.log("Second Breakfast");
//   };
//   const renderSecondBItems = () => {
//     return items.map((item) => {
//       return (
//         <Div className="secondbreakfast__productsMap" key={item.name}>
//           <Paragraf
//             className="secondbreakfast__name"
//             text={item.name}
//           ></Paragraf>
//           <Paragraf
//             className="secondbreakfast__name b_cal"
//             text={item.cal}
//           ></Paragraf>
//           <Paragraf
//             className="secondbreakfast__name b_fat"
//             text={item.fat}
//           ></Paragraf>
//           <Paragraf
//             className="secondbreakfast__name b_carbs"
//             text={item.carb}
//           ></Paragraf>
//           <Paragraf
//             className="secondbreakfast__name b_protein"
//             text={item.protein}
//           ></Paragraf>
//           <Paragraf
//             className="secondbreakfast__name b_sugar"
//             text={item.sugar}
//           ></Paragraf>
//           <RemoveButton onClick={onClickRemoveButton} />
//         </Div>
//       );
//     });
//   };
//   return (
//     <Div className="secondbreakfast__secondItem">{renderSecondBItems()}</Div>
//   );
// };
// export default SecondBexistingItems;
