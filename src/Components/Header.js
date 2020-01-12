import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import "../styles/main.css";
import { Link } from "react-router-dom";
import logo from "../assets/icon/image 54.png";

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="header" light expand="md">
      <Container>
        <NavbarBrand tag={"div"}>
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className={"w-100 d-flex justify-content-center"}>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to={"/about"}>О проекте</Link>
              </NavLink>
            </NavItem>
            <NavItem className="item ">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to="/lessons">Уроки</Link>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to="/all-news">Новости</Link>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to="/contacts">Контакты</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Example;
