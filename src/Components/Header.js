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
import logo from '../assets/icon/image 54.png';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar  expand="md">
        <Container>
          <NavbarBrand href="/"><img src={logo} alt={logo}/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>

            <Nav className="w-50 mx-auto text-center" navbar>
            <div class="d-flex justify-content-center">
              <NavItem>
                <NavLink href="/components/">О проекте</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Уроки</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Новости</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Контакты</NavLink>
              </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
  );
}

export default Example;