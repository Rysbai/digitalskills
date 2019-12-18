import React from 'react';
import {Container,Row,Col,Media,Button, Form, FormGroup, Input, CardItem} from 'reactstrap';
import img from '../assets/img/image1.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "../styles/course.css";
import '../styles/main.css';


class Course extends React.Component {
	render(){
		return(
		<div>
			<Header/>
			<Container>
		      <Row className={"mt-5"}>
		        
		        <Col md={6} className={"md-5 d-flex flex-column "}>
		          <p className={"header-course"}>Курс по Digital СММ маркетингу</p>
		          <p className={"teacher-archive"}>Язык: <b> кыргызский </b></p>
		          <p className={"teacher-archive"}>Категория: <b> Бизнес </b></p>
		          <Row className="text-center text-md-left pr-md-5">
		       <div className={"col-md px-1"}><button className ="coursebutton">Открыть курс</button></div>
		        <div className={"col-md px-1"}><button className ="coursebutton2">Регистрация</button></div>
		      </Row>
		          
		        </Col>
		        <Col md={5} >
		          <img className ="img-course"  src={img}/>
		        </Col>
		      </Row>
		      <Row>
		      <Col className =".col-auto - variable width content">
		      <h5 className ="course-title">Описание курса</h5>
		      <p>Узнаем основные тренды и тенденции продвижения в Instagram. Разберёмся с функционалом и настройками аккаунта. Сформируем стратегию продвижения: проанализируем конкурентов, определим задачи и установим цели. Узнаем основные тренды и тенденции продвижения в Instagram. Разберёмся с функционалом и настройками аккаунта. Сформируем стратегию продвижения: проанализируем конкурентов, определим задачи и установим цели.</p>
		      </Col>
		      <Col className ="col-md-auto">
		      <div className ="block">
		      <p>Детали онлайн урока</p>
		      <p >Язык: <b> кыргызский </b></p>
		      <p >Категория: <b> Бизнес </b></p>
		      </div>
		      </Col>
		      </Row>
		    </Container>
			<Footer/>
			</div>
			)}
		}export default Course;
