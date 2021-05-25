import React from "react";
import Section from "./Section";
import List from "./List";
import ListItem from "./ListItem";
import Link from "./Link";
import Div from "./Div";

const Header = () => {
  return (
    <Section className="header__container">
      <Section className="header__wrapper">
        <Div className="header__logo">
          <h2>
            Good to know -
            <span className="title__color">Calories Calculator</span>
          </h2>
        </Div>

        <Div className="header__navList">
          <Div className="add__product">
            <List className="header__navUl">
              <ListItem className="header__element">
                <Link href="#" className="main__page" label="Main Page" />
              </ListItem>
              <ListItem className="header__element">
                {/* Ten link nie zadziała poprawnie - jeśli chcesz dodać inne podstronki, będziesz musiał... Użyć React Router ;) */}
                <Link
                  href="src\Components\ProductWeb.jsx"
                  className="add__product"
                  label="Add Product"
                />
              </ListItem>
              <ListItem className="header__element">
                <Link href="#" className="product__list" label="Product List" />
              </ListItem>
            </List>
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default Header;
