import React from "react";
import Section from "./Section";
import List from "./List";
import ListItem from "./ListItem";
import Link from "./Link";

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

        <div className="header__navList">
          <div className="add__product">
            <List className="header__navUl">
              <ListItem className="header__element">
                <Link href="#" className="main__page" label="Main Page" />
              </ListItem>
              <ListItem className="header__element">
                <Link
                  href="./product.html"
                  className="add__product"
                  label="Add Product"
                />
              </ListItem>
              <ListItem className="header__element">
                <Link href="#" className="product__list" label="Product List" />
              </ListItem>
            </List>
          </div>
        </div>
      </Section>
    </Section>
  );
};
export default Header;
