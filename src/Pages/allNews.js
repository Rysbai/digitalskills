import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NewsCard from "../Components/news_card";
import API from "../API";
import Spiner from "../Components/spiner";
import moment from "moment";
import { Link } from "react-router-dom";
import "../styles/news.css";

const AllNews = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const count = 5;

  useEffect(() => {
    API.getAllNews(page, count)
      .then(res => setData(res.data))
      .catch(e => console.error(e));
  }, [page]);

  const createPage = () => {
    // Outer loop to create parent
    let buttons = [],
      pages = Math.ceil(data.total / count);
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
  console.log(data.data);

  return (
    <div className="wrapper">
      <Header />
      <Container>
        <Row>
          <p
            className={
              "h1 text-uppercase text-lg-left mx-2 text-center mt-5 mb-4 w-100"
            }
          >
            новости
          </p>
          {data && data.data ? (
            <Link
              to={`/news/${data.data[0].id}`}
              className={"text-decoration-none text-dark"}
            >
              <div className={"col-12 mx-2 d-flex mb-5  shadow  rounded "}>
                <Row>
                  <Col className={"pl-0 col-12 col-lg-6"}>
                    <img
                      className={"img-fluid w-100  rounded"}
                      src={data.data[0].image}
                      alt="img"
                    />
                  </Col>
                  <Col
                    className={
                      "d-flex justify-content-between flex-column py-3 py-lg-5 px-4 col-12 col-lg-6"
                    }
                  >
                    <p className={"h3 contacts-subtitle main-news-subtitle"}>
                      {data.data[0].title}
                    </p>

                    <div className="w-100 d-flex justify-content-between">
                      <p className="text-muted main-news-views">
                        {data.data[0].views} просмотров
                      </p>
                      <b className="mb-0 text-dark main-news-date">
                        {moment(data.data[0].pub_date).format("Do MMMM YYYY")}
                      </b>
                    </div>
                  </Col>
                </Row>
              </div>
            </Link>
          ) : (
            ""
          )}
          {data && data.data && data.data.length ? (
            data.data.map((item, idx) =>
              idx > 0 ? (
                <Col key={idx} md={6} className={"mb-4"}>
                  <NewsCard {...item} />
                </Col>
              ) : (
                ""
              )
            )
          ) : (
            <Spiner />
          )}
          <div className={"w-100 mx-auto text-center mb-5"}>
            {data && data.total > count ? createPage() : null}
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AllNews;
