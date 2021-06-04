import React from "react";

const Button = ({ onClick }) => {
  return (
    <button className="btn-breakfast btn" type="submit" onClick={onClick}>
      Add Product
    </button>
  );
};
export default Button;
