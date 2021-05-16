import React from "react";
import Section from './Section';

const Header = () => {
  return (
    <Section className="header__container">
      <Section className="header__wrapper">
        <div className="header__logo">
          <h2>
            Good to know -
            <span className="title__color">Calories Calculator</span>
          </h2>
        </div>
      </Section>
    </Section>
  );
};
export default Header;
