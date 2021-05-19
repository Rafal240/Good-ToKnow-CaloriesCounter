import React from "react";

const RemoveButton = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <i className="bi bi-x-circle bfs__bts  bproducts__button"></i>
    </div>
  );
};
export default RemoveButton;
