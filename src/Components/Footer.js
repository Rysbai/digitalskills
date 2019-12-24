import React from 'react';
import { Nav, NavItem, Row, Col, Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import  logo2 from '../assets/icon/image 64.png';

import '../styles/main.css';

const Example = () => {
  return (
    <div className="footer overflow-hidden">
      <Nav vertical>
        <Container>
          <Row className={"justify-content-between"}>
            <Col md={3} className="margin">
              <NavItem>
                <Link to={"/about"} className={"text-light"}><p className={"mb-1"}>О проекте</p></Link>
              </NavItem>
              <NavItem>
                <Link to={"/all-news"} className={"text-light"}><p className={"mb-1"}>Новости</p></Link>
              </NavItem>
              <NavItem>
                <Link to={'/lessons'} className={"text-light"}><p className={"mb-1"}>Курсы</p></Link>
              </NavItem>
              <NavItem>
                <Link to={"/contacts"} className={"text-light"}><p className={"mb-1"}>Контакты</p></Link>
              </NavItem>
            </Col>
            <Col md={3} className="margin2">
              <NavItem className={"mb-5"}>
                <p className={"mb-1"}><img alt={"logo"} src={logo2}/></p>
              </NavItem>
              <NavItem>
                <p className={"mb-0"} />
              </NavItem>
              <NavItem>
                <p className={"mb-1"}>Разработано Neobis 2019</p>
              </NavItem>
              <NavItem>
                <p className={"mb-1"}>Copyright © 2019</p>
              </NavItem>
            </Col>
            <Col md={3} className="margin text-right">
              <NavItem>
                <p className={"mb-1"}>+996708453423 </p>
              </NavItem>
              <NavItem>
                <p className={"mb-1"}>+996510212345</p>
              </NavItem>
              <NavItem>
                <p className={"mb-1"}>digitalskills.kg@mail.ru </p>
              </NavItem>
            </Col>
          </Row>
        </Container>
      </Nav>
    </div>
  );
};

export default Example;