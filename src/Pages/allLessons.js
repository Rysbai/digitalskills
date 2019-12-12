import React,{useState} from 'react';
import {Container,Row,Col,UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,Button} from 'reactstrap';
import Card from '../Components/card';

const AllLessons = () => {

  const [choice,setChoice] = useState("Все");

  return (
    <Container>
      <Row>
        <Col md={12} className={"d-flex justify-content-between align-items-center mt-5 flex-wrap"}>
          <p className={"h1 text-uppercase"}>Все уроки</p>

          <div className={"d-inline-block"} style={{minWidth: '220px'}}>
            <UncontrolledDropdown>
              <DropdownToggle className={"w-100 shadow-none rounded-0 border-dark d-flex justify-content-between align-items-center"}
                              color={"fade"} caret>
                {choice}
              </DropdownToggle>
              <DropdownMenu className={"border-0 rounded-0 shadow w-100"}>
                <DropdownItem onClick={e => setChoice(e.target.innerText)} className={"dropdown-item-custom"}>Программирование</DropdownItem>
                <DropdownItem onClick={e => setChoice(e.target.innerText)} className={"dropdown-item-custom"}>Дизайн</DropdownItem>
                <DropdownItem onClick={e => setChoice(e.target.innerText)} className={"dropdown-item-custom"}>Бизнес</DropdownItem>
                <DropdownItem onClick={e => setChoice(e.target.innerText)} className={"dropdown-item-custom"}>Интернет</DropdownItem>
                <DropdownItem onClick={e => setChoice(e.target.innerText)} className={"dropdown-item-custom"}>Электронная коммерция</DropdownItem>
                <DropdownItem onClick={e => setChoice(e.target.innerText)} className={"dropdown-item-custom"}>Компьютерная грамотность</DropdownItem>
                <DropdownItem onClick={e => setChoice(e.target.innerText)} className={"dropdown-item-custom"}>Аналитика данных</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </Col>
        <Col md={12} className={"d-flex justify-content-around mt-3 flex-wrap mb-5"}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Col>
        <div className={"w-50 mx-auto text-center mb-5"}>
          <Button className={"text-muted shadow all-lessons-pagination all-lessons-pagination-active rounded-0 mr-3 bg-white"} color={"faded"}>1</Button>
          <Button className={"shadow all-lessons-pagination all-lessons-pagination-inactive rounded-0 mr-3 bg-white"} color={"faded"}>2</Button>
          <Button className={"shadow all-lessons-pagination all-lessons-pagination-inactive rounded-0 mr-3 bg-white"} color={"faded"}>3</Button>
        </div>
      </Row>
    </Container>
  );
};

export default AllLessons;