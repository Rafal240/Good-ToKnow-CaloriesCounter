import React from "react";

// Tu tak samo, jak w tamtych - nie warto tworzyć dodatkowej warstwy abstrakcji
const Section = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};
export default Section;
