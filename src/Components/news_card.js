import React from 'react';
import { Card, Col, Row, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import news from "../assets/img/news.png";
import "../styles/components_style.css";
const News_card = (props) => {
  return (
    <div>
      <Card className={"border-0 shadow mb-2"} style={{maxWidth: '552px'}}>
      <Row>
      <Col>
        <CardImg width="100%" src={news}/>
        </Col>
        <Col>
          <CardTitle className = "news_title">15 декабря состоится онлайн митап по электронной коммерции</CardTitle>
          <CardText>
            <small className="text-muted">100 просмотров</small>
          </CardText>
        </Col>
        </Row>
      </Card>
    </div>
  );
};

export default News_card;