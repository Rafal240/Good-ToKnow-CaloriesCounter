import React from "react";

const RemoveButton = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <i className="bi bi-x-circle bfs__bts breakfast__btn kuna__button"></i>
    </div>
  );
};
export default RemoveButton;
