import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../styles/main.css";
import { Container, Row, Col } from "reactstrap";
import logo2 from "../assets/icon/image 64.png";
import blockphoto from "../assets/img/block-photo.png";
import blockphoto2 from "../assets/img/block-photo2.png";
import Card from "../Components/card";
import TeacherCard from "../Components/teacher_card";
import API from "../API";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spiner from "../Components/spiner";

// const LeftButton = ({ onClick }) => {
//   return (
//     <Button
//       className={"rounded-pill main-page-slider-button slick-arrow slick-prev"}
//       onClick={onClick}
//       color={"primary"}
//     >
//       <img
//         className={"position-relative main-page-slider-button__img-left"}
//         src={arrow}
//         alt={"arrow"}
//       />
//     </Button>
//   );
// };
//
// const RightButton = ({ onClick }) => {
//   return (
//     <Button
//       className={"rounded-pill main-page-slider-button slick-arrow slick-next"}
//       onClick={onClick}
//       color={"primary"}
//     >
//       <img
//         className={"position-relative main-page-slider-button__img-right"}
//         src={arrow}
//         alt={"arrow"}
//       />
//     </Button>
//   );
// };

class Main extends React.Component {
  state = {
    lessons: {},
    news: {},
    teachers: {}
  };

  componentDidMount() {
    API.getAllLessons()
      .then(res =>
        this.setState({
          lessons: res.data
        })
      )
      .catch(e => console.error(e));

    API.getAllNews()
      .then(res =>
        this.setState({
          news: res.data
        })
      )
      .catch(e => console.error(e));

    API.allTeachers()
      .then(res =>
        this.setState({
          teachers: res.data
        })
      )
      .catch(e => console.error(e));
  }

  render() {
    // const settings = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 2,
    //   slidesToScroll: 1,
    //   arrows: true,
    //   nextArrow: <RightButton />,
    //   prevArrow: <LeftButton />,
    //   adaptiveHeight: true,
    //   slidesPerView: true,
    //   centerMode: true,
    //   centerPadding: "40px",
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         arrows: false
    //       }
    //     }
    //   ]
    // };

    //

    // <Link
    //   to={"/lessons"}
    //   className="mainbutton d-flex justify-content-center align-items-center">
    //   Смотреть все
    // </Link>

    return (
      <div className={"w-100 overflow-hidden"}>
        <Header />
        <div className="mainphoto mb-5 pb-md-5 pt-md-5">
          <Container>
            <Row>
              <Col md={12} className={"pt-4 pb-4 pb-md-5 pt-md-5"}>
                <img src={logo2} alt={"logo"} className={"mb-2 mb-md-5 main-page-heading-img-logo"}/>
                <p className={"text-light h1 main-page-heading-title"}>
                  ЦИФРОВОЙ Я - ЦИФРОВОЙ КЫРГЫЗСТАН <br className={"d-none d-sm-inline-block"}/>
                  СТАНЬ ЦИФРОВЫМ!
                </p>
                <p className={"text-light mb-2 mb-md-4 main-page-heading-subtitle"}>
                  Digi Skills - это платформа для получения цифровых <br/>
                  навыках для всех регионов страны совершенно <br/>
                  бесплатно
                </p>
                <Link
                  to={"/lessons"}
                  className="mainbutton d-flex justify-content-center align-items-center">
                  Смотреть все
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>

          <Row className={"mb-5"}>

            <Col md={6} className={"mb-5 d-flex justify-content-center flex-column order-2 order-sm-1 pl-0 pr-0 pr-sm-2"}>
              <Col md={10} className={"d-flex justify-content-center flex-column"}>
                <p className={"h2 main-page-heading-text d-none d-sm-block"}>Наша миссия</p>
                <p className={"text-muted main-page-text"}>
                  Таким образом реализация намеченных плановых заданий позволяет выполнять важные задания по разработке новых предложений. Таким образом реализация намеченных плановых заданий позволяет выполнять важные задания по разработке новых предложений. аким образом реализация намеченных плановых заданий позволяет выполнять важные задания по разработке новых предложений.
                </p>
              </Col>
            </Col>

            <Col md={6} className={"mb-5 pl-0 order-sm-2 order-1 d-flex justify-content-end pr-0 pr-sm-2"}>
              <Col md={10}>
                <p className={"h2 main-page-heading-text d-sm-none"}>Наша миссия</p>
                <img src={blockphoto} className={"img-fluid"} alt=""/>
              </Col>
            </Col>

            <Col md={6} className={'pl-0 mt-5 order-sm-3 order-3'}>
              <Col md={10}>
                <p className={"h2 main-page-heading-text d-sm-none"}>Повседневная практика</p>
                <img src={blockphoto2} className={"img-fluid"} alt=""/>
              </Col>
            </Col>

            <Col md={6} className={"d-flex justify-content-center flex-column align-items-end mt-5 order-4 order-sm-4"}>
              <Col md={10} className={"d-flex justify-content-center flex-column"}>
                <p className={"h2 main-page-heading-text d-none d-sm-block"}>Повседневная практика</p>
                <p className={"text-muted main-page-text"}>Таким образом реализация намеченных плановых заданий позволяет выполнять важные задания по разработке новых предложений. Таким образом реализация намеченных плановых заданий позволяет выполнять важные задания по разработке новых предложений.</p>
              </Col>
            </Col>
          </Row>
        </Container>
          {/*<Col*/}
          {/*  md={12}*/}
          {/*  className={"d-flex justify-content-around mt-3 flex-wrap mb-5"}*/}
          {/*>*/}
          {/*  <div className="col-4">*/}
          {/*    <h2 className="headtext ">Наша миссия</h2>*/}
          {/*    <p className="blocktext">*/}
          {/*      Предоставить возможность каждому кыргызстанцу приобрести*/}
          {/*      минимальные цифровые навыки, а также определиться с*/}
          {/*      профессиональной ориентацией в области информационных*/}
          {/*      технологий.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div className="col-4">*/}
          {/*    <img className="blockphoto" src={blockphoto} alt={"image"} />*/}
          {/*  </div>*/}
          {/*</Col>*/}
          {/*<Col*/}
          {/*  md={12}*/}
          {/*  className={"d-flex justify-content-around mt-3 flex-wrap mb-5"}*/}
          {/*>*/}
          {/*  <div className="col-4">*/}
          {/*    <img className="blockphoto" src={blockphoto2} alt={"image"} />*/}
          {/*  </div>*/}
          {/*  <div className="col-4">*/}
          {/*    <h2 className="headtext">Цель</h2>*/}
          {/*    <p className="blocktext ">*/}
          {/*      Объединить все имеющиеся разработки государственного и частного*/}
          {/*      сектора, а также донорских проектов по направлению «Цифровые*/}
          {/*      навыки и компетенции» для удобства пользования гражданами.*/}
          {/*      Граждане в свою очередь по технологии «единого окна» смогут на*/}
          {/*      единой площадке получить требуемую информацию по интересующей*/}
          {/*      теме в области информационных технологий.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</Col>*/}
        <div className="photo2 d-flex align-items-end mt-5">
          <Container>
            <p className={"h1 text-light mb-3 mb-sm-5 banner2"}>
              ЦИФРОВОЙ Я - ЦИФРОВОЙ КЫРГЫЗСТАН
              <br/>
              СТАНЬ ЦИФРОВЫМ!
            </p>
          </Container>
        </div>
        <div>
          <Container>
            <Row>
              <Col
                md={12}
                className={
                  "d-flex justify-content-between align-items-center mt-5 flex-wrap"
                }
              >
                <p className={"h1"}>Наши уроки</p>

                <div className={"d-inline-block"} style={{ minWidth: "220px" }}>
                  <Link to="/lessons">
                    <button className="lessons_button">Все уроки</button>
                  </Link>
                </div>
              </Col>
              {/*<Col*/}
              {/*  md={12}*/}
              {/*  className={"d-flex justify-content-between mt-3 flex-wrap mb-5"}*/}
              {/*>*/}
                {this.state.lessons && this.state.lessons.data ? (
                  this.state.lessons.data.map((item, idx) => {
                    return <Col className={"mt-3"} sm={12} md={4}><Card key={idx} {...item} /></Col>;
                  })
                ) : (
                  <Spiner />
                )}
              {/*</Col>*/}
            </Row>
          </Container>
          {/*<Container>*/}
          {/*      <Row>*/}
          {/*  <Col md={12} className={"d-flex justify-content-between align-items-center mt-5 flex-wrap"}>*/}
          {/*    <p className={"h1 "}>Новости</p>*/}

          {/*    <div className={"d-inline-block"} style={{minWidth: '220px'}}>*/}
          {/*						<Link to="/all-news"><button className ="lessons_button">Все новости</button></Link>*/}
          {/*      </div>*/}
          {/*      </Col>*/}
          {/*      <Col md={12} className={"d-flex justify-content-between align-items-center mt-5 flex-wrap"}>*/}
          {/*				{this.state.news && this.state.news.data ? this.state.news.data.map((item,idx) => {*/}
          {/*					return <NewsCard key={idx} {...item}/>*/}
          {/*				}) : <p className={"text-center h4"}>Загрузка</p>}*/}
          {/*  		</Col>*/}
          {/*   </Row> */}
          {/*</Container>*/}
          <Container>
            <Row>
              <Col
                md={12}
                className={
                  "d-flex justify-content-between align-items-center mt-5 flex-wrap"
                }
              >
                <p className={"h1"}>Преподаватели</p>
              </Col>
              {/*<Col md={12} className={"d-flex justify-content-between align-items-center mt-5 flex-wrap"}>*/}
                {this.state.teachers.length ? (
                  this.state.teachers.map((item, idx) => {
                    return (
                      <TeacherCard {...item} key={idx}/>
                    );
                  })
                ) : (
                  <p className={"text-center h4"}>Загрузка</p>
                )}
              {/*</Col>*/}
            </Row>
          </Container>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Main;
