import React from "react";

const Select = ({ className, options = [] }) => {
  return (
    <select className={className}>
      {options.map((option) => {
        return (
          <option value={option.value} key={option.id}>
            {option.text}
          </option>
        );
      })}
    </select>
  );
};
export default Select;
