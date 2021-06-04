import React from "react";

const Input = ({ value, onChange }) => {
  return (
    <input
      id="grams"
      type="number"
      placeholder="Grams"
      className="grams__input"
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
