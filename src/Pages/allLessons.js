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
  const [page, setPage] = useState(0);
  const [choice, setChoice] = useState("Все");
  const [choiceID, setChoiceID] = useState(0);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const count = 3;
  useEffect(() => {
    API.getCategoryLessons(choiceID, page, count)
      .then(res => setCategoryData(res.data))
      .catch(e => console.error(e));
  }, [choiceID]);

  useEffect(() => {
    API.getCategoryLessons(choiceID, page, count)
      .then(res => setCategoryData(res.data))
      .catch(e => console.error(e));
  }, [page]);

  useEffect(() => {
    API.getAllLessons(page, count)
      .then(res => setData(res.data))
      .catch(e => console.error(e));
    API.getCategory()
      .then(res => setCategory(res.data))
      .catch(e => console.error(e));
  }, [page]);

  let result;
  if (choice === "Все") {
    result = data;
  } else {
    result = categoryData;
  }

  const createPage = () => {
    let buttons = [],
      pages = Math.ceil(result.total / count);
    for (let i = 0; i < pages; i++) {
      buttons.push(
        <Button
          key={i}
          className={
            i === page
              ? "paginationActiveButton shadow all-lessons-pagination all-lessons-pagination-inactive rounded-0 mr-3"
              : "shadow all-lessons-pagination all-lessons-pagination-active rounded-0 mr-3 bg-white"
          }
          color={"faded"}
          onClick={() => setPage(i)}
        >
          {i + 1}
        </Button>
      );
    }
    return buttons;
  };

  return (
    <div className="wrapper">
      <Header />
      <Container>
        <Row>
          <Col
            md={12}
            className={
              "d-flex justify-content-lg-between align-items-center mt-5 flex-wrap justify-content-center"
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
                            setPage(0);
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
                  return (
                    <Col key={idx} md={4}>
                      <Card {...item} />
                    </Col>
                  );
                })
              ) : (
                "Нету курсов"
              )
            ) : (
              <Spiner />
            )}
          </Col>
          <div className={"w-50 mx-auto text-center mb-5"}>
            {result && result.total > count ? createPage() : null}
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AllLessons;
