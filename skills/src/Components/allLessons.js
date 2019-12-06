import React from 'react';
import {Container,Row,Col,UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

const AllLessons = () => {

  return (
    <Container>
      <Row>
        <Col md={12} className={"d-flex justify-content-between align-items-center mt-5"}>
          <p className={"h1"}>Все уроки</p>

          <UncontrolledDropdown>
            <DropdownToggle className={"shadow-none rounded-0 border-dark"} color={"fade"} caret>
              Все
            </DropdownToggle>
            <DropdownMenu className={"border-0 rounded-0 shadow"}>
              <DropdownItem>Программирование</DropdownItem>
              <DropdownItem>Дизайн</DropdownItem>
              <DropdownItem>Бизнес</DropdownItem>
              <DropdownItem>Интернет</DropdownItem>
              <DropdownItem>Электронная коммерция</DropdownItem>
              <DropdownItem>Компьютерная грамотность</DropdownItem>
              <DropdownItem>Аналитика данных</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default AllLessons;