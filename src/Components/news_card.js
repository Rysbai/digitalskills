import React, { useEffect, useState } from "react";
import { Card, Col, Row, CardTitle, CardText, CardImg } from "reactstrap";
import moment from "moment";
import "moment/locale/ru";
import "../styles/components_style.css";
import { Link } from "react-router-dom";

const News_card = ({ title, image, views, pub_date, id }) => {
  const [filterTitle, setFilterTitle] = useState("");

  useEffect(() => {
    if (title.length > 40) setFilterTitle(title.substring(0, 40));
    else setFilterTitle(title);
  }, []);

  return (
    <div>
      <Link to={`/news/${id}`} className={"text-decoration-none text-dark"}>

      <Card className={"border-0 shadow mb-2"} style={{ maxWidth: "552px" }}>
        <Row>
          <Col className="col-12 col-md-6">
            <CardImg width="100%" src={image} />
          </Col>
          <Col
            className={
              "d-flex pl-0 justify-content-around flex-column col-12 col-md-6 p-4 py-lg-0"
            }
          >
              <CardTitle className="news_title text-dark mb-0">{filterTitle}</CardTitle>
            <CardText className={"d-flex justify-content-between"}>
              <small className="text-muted">{views} просмотров</small>
              <small className="pr-2">
                <b>{moment(pub_date).format("Do MMMM YYYY")}</b>
              </small>
            </CardText>
          </Col>
        </Row>
      </Card>
      </Link>

    </div>
  );
};

export default News_card;
