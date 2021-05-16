import React from "react";

const Link = ({ className, label, href }) => {
  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
};
export default Link;
