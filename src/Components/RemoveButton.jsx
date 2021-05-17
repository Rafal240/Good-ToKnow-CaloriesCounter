import React from "react";

const RemoveButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <i className="bi bi-x-circle bfs__bts breakfast__btn"></i>
    </button>
  );
};
export default RemoveButton;
