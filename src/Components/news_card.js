import React,{useEffect,useState} from 'react';
import { Card, Col, Row, CardTitle, CardText, CardImg } from 'reactstrap';
import moment from "moment";
import "moment/locale/ru";
import news from "../assets/img/news.png";
import "../styles/components_style.css";
import {Link} from "react-router-dom";

const News_card = ({title,views,pub_date,id}) => {

  const [filterTitle,setFilterTitle] = useState('');

  useEffect(() => {
    if(title.length > 30) setFilterTitle(title.substring(0,30));
    else setFilterTitle(title);
  },[]);

  return (
    <div>
      <Card className={"border-0 shadow mb-2"} style={{maxWidth: '552px'}}>
      <Row>
      <Col>
        <CardImg width="100%" src={news}/>
        </Col>
        <Col className={"d-flex pl-0 justify-content-around flex-column"}>
          <Link to={`/news/${id}`} className={"text-dark"}>
            <CardTitle className = "news_title mb-0">{filterTitle}</CardTitle>
          </Link>
          <CardText className={"d-flex justify-content-between"}>
            <small className="text-muted">{views} просмотров</small>
            <small className="pr-2"><b>{moment(pub_date).format('Do MMMM YYYY')}</b></small>
          </CardText>
        </Col>
        </Row>
      </Card>
    </div>
  );
};

export default News_card;