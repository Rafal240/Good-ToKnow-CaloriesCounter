import React from "react";

// Ten komponent w zasadzie nie jest potrzebny - możesz używać div-a bezpośrednio w ten sposób
// Takie "wrapowanie" domyślnych HTML-owych elementów miałoby sens, jakbyś tutaj dodatkowo je stylował, np. dodawał
// jakieś klasy, tak, że ten `div` wyglądałby inaczej, niż ten wbudowany ;)
const Div = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
export default Div;
