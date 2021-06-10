import React from "react";
import Section from "./Section";
import List from "./List";
import ListItem from "./ListItem";
import Div from "./Div";
import { Link } from "react-router-dom";

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
                <Link to="/">Main Page</Link>
              </ListItem>
              <ListItem className="header__element">
                <Link to="/add-product">Add Product</Link>
              </ListItem>
              <ListItem className="header__element">
                <Link to="/product-list">Product List</Link>
              </ListItem>
            </List>
          </Div>
        </Div>
      </Section>
    </Section>
  );
};
export default Header;
