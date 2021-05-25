import React from "react";

const RemoveButton = ({ onClick }) => {
  return (
    // W ten sposób można sprawdzić, czy onClick jest przekazany i tylko wtedy go wywołać
    <div onClick={(evt) => onClick && onClick(evt)}>
      <i className="bi bi-x-circle bfs__bts  bproducts__button"/>
    </div>
  );
};
export default RemoveButton;
