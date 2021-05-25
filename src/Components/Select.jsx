import React from "react";

// Tutaj jest spoko, musisz jedynie dodać `onChange` na select, żeby nasłuchiwać na zmiany i przekazać to przez props :)
const Select = ({ className, options = [], onChange }) => {
  return (
    <select className={className} onChange={(evt) => onChange && onChange(evt)}>
      {options.map((option) => {
        return <option value={option.value}>{option.text}</option>;
      })}
    </select>
  );
};
export default Select;
