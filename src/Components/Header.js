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
import logo from '../assets/icon/image 54.png';

const Example = (props) => {
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
                <NavLink href="/aboutproject">О проекте</NavLink>
              </NavItem>
              <NavItem className = "item ">
                <NavLink href="/lessons">Уроки</NavLink>
              </NavItem>
              <NavItem className = "item">
                <NavLink href="/news">Новости</NavLink>
              </NavItem>
              <NavItem className = "item">
                <NavLink href="/contacts">Контакты</NavLink>
              </NavItem>
           
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
  );
}

export default Example;