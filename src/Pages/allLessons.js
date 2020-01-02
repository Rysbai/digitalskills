import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import Card from "../Components/card";
import API from "../API";
import Spiner from "../Components/spiner";

const AllLessons = () => {
  const [choice, setChoice] = useState("Все");
  const [choiceID, setChoiceID] = useState(0);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    API.getCategoryLessons(choiceID)
      .then(res => setCategoryData(res.data))
      .catch(e => console.error(e));
    console.log(choiceID);
  }, [choiceID]);

  useEffect(() => {
    API.getAllLessons()
      .then(res => setData(res.data))
      .catch(e => console.error(e));
    API.getCategory()
      .then(res => setCategory(res.data))
      .catch(e => console.error(e));
  }, []);

  let result;
  if (choice === "Все") {
    result = data;
  } else {
    result = categoryData;
  }
  console.log(result);
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col
            md={12}
            className={
              "d-flex justify-content-between align-items-center mt-5 flex-wrap"
            }
          >
            <p className={"h1 text-uppercase"}>Все уроки</p>

            <div className={"d-inline-block"} style={{ minWidth: "220px" }}>
              <UncontrolledDropdown>
                <DropdownToggle
                  className={
                    "w-100 shadow-none rounded-0 border-dark d-flex justify-content-between align-items-center"
                  }
                  color={"fade"}
                  caret
                >
                  {choice}
                </DropdownToggle>
                <DropdownMenu className={"border-0 rounded-0 shadow w-100"}>
                  <DropdownItem
                    key={0}
                    onClick={e => setChoice(e.target.innerText)}
                    className={"dropdown-item-custom"}
                  >
                    Все
                  </DropdownItem>
                  {category &&
                    category.map((item, idx) => {
                      return (
                        <DropdownItem
                          key={idx}
                          onClick={e => {
                            setChoice(e.target.innerText);
                            setChoiceID(item.id);
                          }}
                          className={"dropdown-item-custom"}
                        >
                          {item.name}
                        </DropdownItem>
                      );
                    })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Col>
          <Col
            md={12}
            className={"d-flex justify-content-around mt-3 flex-wrap mb-5"}
          >
            {result && result.data ? (
              result.data.length > 0 ? (
                result.data.map((item, idx) => {
                  return <Card key={idx} {...item} />;
                })
              ) : (
                "Нету курсов"
              )
            ) : (
              <Spiner />
            )}
          </Col>
          <div className={"w-50 mx-auto text-center mb-5"}>
            <Button
              className={
                "text-muted shadow all-lessons-pagination all-lessons-pagination-active rounded-0 mr-3 bg-white"
              }
              color={"faded"}
            >
              1
            </Button>
            <Button
              className={
                "shadow all-lessons-pagination all-lessons-pagination-inactive rounded-0 mr-3 bg-white"
              }
              color={"faded"}
            >
              2
            </Button>
            <Button
              className={
                "shadow all-lessons-pagination all-lessons-pagination-inactive rounded-0 mr-3 bg-white"
              }
              color={"faded"}
            >
              3
            </Button>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AllLessons;
