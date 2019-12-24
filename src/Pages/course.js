import React from 'react';
import {Container,Row,Col,Media,Button, Form, FormGroup, Input, CardItem} from 'reactstrap';
import img from '../assets/img/image1.png';
import teacher from '../assets/img/ns_8 1.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import API from '../API';
import "../styles/course.css";
import '../styles/main.css';


class Course extends React.Component {

	state = {
		lesson: {},
	};

	componentDidMount() {
		API.getLesson(this.props.match.params.id)
			.then(res => {
				this.setState({
					lesson: res.data
				})
			}).catch(e => console.error(e));
	}

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
						<Col className =".col-auto - variable width content ">
							<h5 className ="course-title">Описание курса</h5>
								<p className = "course-about">Узнаем основные тренды и тенденции продвижения в Instagram. Разберёмся с функционалом и настройками аккаунта.
								Сформируем стратегию продвижения: проанализируем конкурентов, определим задачи и установим цели.
								Узнаем основные тренды и тенденции продвижения в Instagram. Разберёмся с функционалом и настройками аккаунта.
								Сформируем стратегию продвижения: проанализируем конкурентов, определим задачи и установим цели.
								</p>
						</Col>
						<Col className ="col-md-auto">
							<div className ="block">
								<p className ="details-course">Детали онлайн урока</p>
								<p className = "DET">Дата: <span className ="date_course"> 10 декабря, 2019 </span></p>
								<p className = "DET">Время: <span className ="date_course"> 18:00 </span></p>
							</div>
						</Col>
		      </Row>
		      <Row className={"row justify-content-center teacher-info"}>

	        <Col  className={" col-4"}>
	          <img src={teacher} className={"img-fluid rounded-pill"} alt={"teacher"}/>
	        </Col>
	        <Col className={"col-4"}>
	          <p className={"teacher"}> Преподаватель </p>
	          <p className={"h2"}>Тимур Алхожоев</p>
	          <p className={"teacher-subtitler "}>Руководитель проекта “DigiSkills”</p>
	          <p className={"bio-teacher"}>Кесиби юрист. Ж.Баласагын атындагы Кыргыз улуттук университетинин юридикалык факультетинен билим алган. Азыркы учурда КР Өкмөтүнүн алдындагы Кыргыз мамлекеттик юридикалык академиясынын аспиранты. Телекоммуникация тармагында эмгектенип, массалык маалымат каражаттарына байланышкан маселелерге өзгөчө көңүл буруп келет. Байкоочу кеңешинин курамына жарандык коом тарабынан сунушталган</p>
	          <p>Язык преподования: <b>кыргызский</b></p>
	        </Col>
       
				</Row>
					</Container>
				<Footer/>
			</div>
			)}
		}export default Course;
