import React from 'react';
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import  logo2 from '../assets/icon/image 64.png';

import '../styles/main.css';

const Example = (props) => {
  return (
    <div className = "footer">
      <Nav vertical >
      <Row>
        <Col xs="5" sm="3" className="margin">
        <NavItem>
           <Link to ="/about"><p href>О проекте</p></Link>
        </NavItem>
        <NavItem>
         <Link to ="/news"><p >Новости</p></Link>
        </NavItem>
        <NavItem>
          <p><a href="/courses"/>Курсы</p>
        </NavItem>
        <NavItem>
          <p href="/contacts">Контакты</p>
        </NavItem></Col>
        <Col xs="7" sm="5" className="margin2">
        <NavItem>
          <p href="/"><img src = {logo2}/></p>
        </NavItem>
        <NavItem>
          <p href="#"></p>
        </NavItem>
        <NavItem>
          <p href ="https://www.neobis.kg">Разработано Neobis 2019</p>
        </NavItem>
        <NavItem>
          <p href="#">Copyright © 2019</p>
        </NavItem></Col>
        <Col xs="5" sm="3" className="margin"><NavItem>
          <p href="#">+996708453423 </p>
        </NavItem>
        <NavItem>
          <p href="#">+996510212345</p>
        </NavItem>
        <NavItem>
          <p href="#">digitalskills.kg@mail.ru </p>
        </NavItem>
        </Col>
      </Row>
        
      </Nav>
    </div>
  );
}

export default Example;