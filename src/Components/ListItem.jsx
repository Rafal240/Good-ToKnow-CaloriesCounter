import React from "react";

// Podobnie jak z innymi wrapperami na HTML-owe tagi - możesz to pominąć
const ListItem = ({ className, children }) => {
  return <li className={className}>{children}</li>;
};
export default ListItem;
