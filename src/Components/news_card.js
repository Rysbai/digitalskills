import React from 'react';
import { Card, Col, Row, CardTitle, CardText, CardImg } from 'reactstrap';
import news from "../assets/img/news.png";
import "../styles/components_style.css";

const News_card = ({title,views}) => {
  return (
    <div>
      <Card className={"border-0 shadow mb-2"} style={{maxWidth: '552px'}}>
      <Row>
      <Col>
        <CardImg width="100%" src={news}/>
        </Col>
        <Col>
          <CardTitle className = "news_title">{title}</CardTitle>
          <CardText>
            <small className="text-muted">{views} просмотров</small>
          </CardText>
        </Col>
        </Row>
      </Card>
    </div>
  );
};

export default News_card;