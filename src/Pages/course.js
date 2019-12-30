import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import img from "../assets/img/image1.png";
import teacher from "../assets/img/ns_8 1.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import moment from "moment";
import "moment/locale/ru";
import API from "../API";
import "../styles/course.css";
import "../styles/main.css";
import Spiner from "../Components/spiner";

class Course extends React.Component {
  state = {
    lesson: {},

    teacher: {}
  };

  componentDidMount() {
    API.getCourse(this.props.match.params.id)
      .then(res => {
        this.setState({
          lesson: res.data
        });
        API.getTeacherData(this.state.lesson.teacher_id)
          .then(res => {
            this.setState({
              teacher: res.data
            });
          })
          .catch(e => console.error(e));
      })
      .catch(e => console.error(e));
  }

  render() {
    console.log(this.state.lessons);

    const {
      name,
      category_name,
      language,
      description,
      start,
      image,
      registration_link,
      id
    } = this.state.lesson;
    console.log(this.state);
    return (
      <div>
        <Header />

        {this.state.lesson && this.state.lesson.name ? (
          <Container>
            <Row className={"mt-5"}>
              <Col md={6} className={"md-5 d-flex flex-column "}>
                <p className={"header-course"}>{name}</p>
                <p className={"teacher-archive mt-4"}>
                  <span className={"text-muted "}>Язык: </span>
                  <b className="courses-blue-color">
                    {language === "ru" ? "Русский" : "Кыргызский"}
                  </b>
                </p>
                <p className={"teacher-archive"}>
                  <span className={"text-muted"}>Категория: </span>
                  <b className="courses-blue-color">{category_name}</b>
                </p>
                <Row className="text-center text-md-left pr-md-5 mt-4">
                  <div className={"col-md "}>
                    <Link
                      to={`/lesson/${id}`}
                      className="coursebutton d-flex align-items-center justify-content-center"
                    >
                      Открыть курс
                    </Link>
                  </div>
                  {this.state.lesson.isOnline == true ? (
                    <div className={"col-md px-1"}>
                      <a
                        href={registration_link}
                        target={"_blank"}
                        className="coursebutton2 d-flex align-items-center justify-content-center text-light"
                      >
                        Регистрация
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </Row>
              </Col>
              <Col md={5}>
                <img className="img-course" src={image} alt={"image"} />
              </Col>
            </Row>

            <Row>
              <Col className="col-7">
                <h5 className="course-title">Описание курса</h5>
                <p className="course-about mt-4 text-left">{description}</p>
              </Col>
              {this.state.lesson.isOnline == true ? (
                <Col className="col-md-auto">
                  <div className="block">
                    <p className="details-course">Детали онлайн урока</p>
                    <p className="DET">
                      Дата:
                      <span className="date_course">
                        {moment(start).format("Do MMMM YYYY")}
                      </span>
                    </p>
                    <p className="DET">
                      Время:{" "}
                      <span className="date_course">
                        {" "}
                        {moment(start).format("LT")}{" "}
                      </span>
                    </p>
                  </div>
                </Col>
              ) : (
                ""
              )}
            </Row>
            <div className="mt-5">
              <p className={"teacher text-left"}> Преподаватель </p>
            </div>
            <Row
              className={
                "row justify-content-around align-items-center teacher-info"
              }
            >
              <Col md={3} className={""}>
                <img
                  src={this.state.teacher.image}
                  className={"img-fluid rounded-pill"}
                  alt={"teacher"}
                />
              </Col>
              <Col className={"col-7"}>
                <p className={"h2 teacher-title"}>
                  {this.state.teacher.name} {this.state.teacher.surname}
                </p>
                <p className={"teacher-subtitler"}>
                  {this.state.teacher.position}
                </p>
                <p className={"course-about text-left"}>
                  {this.state.teacher.about}
                </p>
                <p className="course-about">
                  Язык преподования:{" "}
                  <b>
                    {this.state.teacher.language === "ru"
                      ? "Русский"
                      : "Кыргызский"}
                  </b>
                </p>
              </Col>
            </Row>
            <Col className={"col-12"}>
              <Link to={`/lesson/${id}`}>
                <button className=" offset-4 my-5 teacher-page-btn">
                  открыть курс
                </button>
              </Link>
            </Col>
          </Container>
        ) : (
          <Spiner />
        )}

        <Footer />
      </div>
    );
  }
}
export default Course;
