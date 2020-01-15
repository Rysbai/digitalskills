import React, { useState,useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";
import "../styles/main.css";
import { Link } from "react-router-dom";
import logo from "../assets/icon/image 54.png";

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang,setLang] = useState(localStorage.getItem('language'));
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

  const handleChange = (language) => {
    localStorage.setItem('language',language);
    setLang(language);
    window.location.reload(true);
  };

  return (
    <Navbar className="header" light expand="md">
      <Container fluid>
        <NavbarBrand tag={"div"}>
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
        </NavbarBrand>

        <div className={"d-block d-md-none"}>
          <Button color={"faded"}
                  className={`header-button shadow-none ${lang === 'ru' ? '' : 'text-muted'}`}
                  onClick={() => handleChange('ru')}>
            Рус
          </Button>
          <Button color={"faded"}
                  className={`header-button shadow-none ${lang === 'kg' ? '' : 'text-muted'}`}
                  onClick={() => handleChange('kg')}>
            Кырг
          </Button>
        </div>

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
        <div className={"d-none d-md-block"}>
          <Button color={"faded"}
                  className={`header-button shadow-none ${lang === 'ru' ? '' : 'text-muted'}`}
                  onClick={() => handleChange('ru')}>
            Рус
          </Button>
          <Button color={"faded"}
                  className={`header-button shadow-none ${lang === 'kg' ? '' : 'text-muted'}`}
                  onClick={() => handleChange('kg')}>
            Кырг
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Example;
