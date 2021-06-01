import React from "react";

const InputText = ({ value, onChange }) => {
  console.log(value);
  return <input type="text" value={value} onChange={onChange} />;
};
export default InputText;
