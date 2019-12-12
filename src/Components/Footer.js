import React from 'react';
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import  logo2 from '../assets/icon/image 64.png';
import '../styles/main.css';

const Example = (props) => {
  return (
    <div className = "footer">
      <Nav vertical>
      <Row>
        <Col xs="6" sm="4">
        <NavItem>
          <NavLink href="#">О нас</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Новости</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Курсы</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Контакты</NavLink>
        </NavItem></Col>
        <Col xs="6" sm="4" className>
        <NavItem>
          <NavLink href="#"><img src = {logo2}/></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Разработано Neobis 2019</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Copyright © 2019</NavLink>
        </NavItem></Col>
        <Col sm="4"><NavItem>
          <NavLink href="#">О нас</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Новости</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Курсы</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Контакты</NavLink>
        </NavItem></Col>
      </Row>
        
      </Nav>
    </div>
  );
}

export default Example;