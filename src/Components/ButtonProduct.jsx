import React from "react";

const ButtonProduct = ({ onClick }) => {
  return (
    <button type="submit" className="btn-product" onClick={onClick}>
      Save
    </button>
  );
};
export default ButtonProduct;
