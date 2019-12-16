import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import '../styles/main.css';
import {Link} from 'react-router-dom';
import logo from '../assets/icon/image 54.png';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
       <Navbar className="header" light expand="md">
        <Container>
          <NavbarBrand href="/"><img src={logo} alt={logo}/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>

            <Nav className="mr-auto" navbar>
              <NavItem className="first item">
                <NavLink tag={"p"}>
                  <Link to={"/aboutproject"}>
                    О проекте
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className = "item ">
                <NavLink tag={"p"}>
                  <Link to="/lessons">
                    Уроки
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className = "item">
                <NavLink tag={"p"}>
                  <Link to="/news">
                    Новости
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className = "item">
                <NavLink tag={"p"}>
                  <Link to="/contacts">
                    Контакты
                  </Link>
                </NavLink>
              </NavItem>
           
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
  );
};

export default Example;