import React,{useState,useEffect} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import NewsCard from "../Components/news_card";
import API from '../API';
import Spiner from '../Components/spiner';

const AllNews = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    API.getAllNews('ru')
      .then(res => setData(res.data))
      .catch(e => console.error(e))
  },[]);

  console.log(data.data);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <p className={"h1 text-uppercase mt-5 mb-4 w-100"}>новости</p>
          {/*<div className={"w-100 d-flex mb-5"}>*/}
          {/*  <Col md={6} className={"pl-0"}>*/}
          {/*    <img className={"img-fluid w-100"} src={news} alt={news}/>*/}
          {/*  </Col>*/}
          {/*  <Col md={6} className={"d-flex justify-content-between flex-column"}>*/}
          {/*    <p className={"h3 contacts-subtitle"}>15 декабря состоится онлайн митап по электронной коммерции</p>*/}
          {/*    <p className={"all-news__body"}>*/}
          {/*      Сегодня мы становимся свидетелями беспрецедентного развития цифровых технологий и их воздействия на*/}
          {/*      экономический рост, государственное управление, качество услуг, способы ведения бизнеса и образ жизни*/}
          {/*      людей. Наступает четвертая индустриальная революция, где технологии трансформируют*/}
          {/*      традиционные сектора экономики*/}
          {/*    </p>*/}
          {/*    <div className="w-100 d-flex justify-content-between">*/}
          {/*      <b>100 просмотров</b>*/}
          {/*      <p className="mb-0 text-muted">1 декабря 2019</p>*/}
          {/*    </div>*/}
          {/*  </Col>*/}
          {/*</div>*/}
          {data && data.data && data.data.length ? data.data.map((item,idx) => {
            return (
              <Col key={idx} md={6} className={"mb-4"}>
                <NewsCard {...item}/>
              </Col>
            )
          }) : <Spiner/>}
          <div className={"w-100 mx-auto text-center mb-5"}>
            <Button className={"text-muted shadow all-lessons-pagination all-lessons-pagination-active rounded-0 mr-3 bg-white"} color={"faded"}>1</Button>
            <Button className={"shadow all-lessons-pagination all-lessons-pagination-inactive rounded-0 mr-3 bg-white"} color={"faded"}>2</Button>
            <Button className={"shadow all-lessons-pagination all-lessons-pagination-inactive rounded-0 mr-3 bg-white"} color={"faded"}>3</Button>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  )
};

export default AllNews;