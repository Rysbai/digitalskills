import React from "react";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../styles/main.css';
import {Container,Row,Col,Button} from 'reactstrap';
import logo2 from '../assets/icon/image 64.png';
import blockphoto from '../assets/img/block-photo.png';
import blockphoto2 from '../assets/img/block-photo2.png';
import arrow from '../assets/img/arrow.png';
import Card from '../Components/card';
import NewsCard from '../Components/news_card';
import TeacherCard from '../Components/teacher_card';
import API from '../API';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LeftButton = ({onClick}) => {
	return (
		<Button className={"rounded-pill main-page-slider-button"} onClick={onClick} color={"primary"}>
			<img className={"position-relative main-page-slider-button__img-left"} src={arrow} alt={"arrow"}/>
		</Button>
)};

const RightButton = ({onClick}) => {
	return (
		<Button className={"rounded-pill main-page-slider-button"} onClick={onClick} color={"primary"}>
			<img className={"position-relative main-page-slider-button__img-right"} src={arrow} alt={"arrow"}/>
		</Button>
)};


class Main extends React.Component {

	state = {
		lessons: {},
		news: {},
		teachers: {},
	};

	componentDidMount() {
		API.getAllLessons()
			.then(res => this.setState({
				lessons: res.data
			}))
			.catch(e => console.error(e));

		API.getAllNews()
			.then(res => this.setState({
				news: res.data
			}))
			.catch(e => console.error(e));

		API.allTeachers()
			.then(res => this.setState({
				teachers: res.data,
			}))
			.catch(e => console.error(e));
	};

	render(){

		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true,
			nextArrow: <RightButton/>,
			prevArrow: <LeftButton/>,
		};

		return(
			<div className={"w-100 overflow-hidden"}>
			<Header/>
			<div className = "mainphoto">
			 <Row className = "logopart">
		        <Col sm={{ size: 'auto', offset: 1 }}><img src={logo2} alt={"logo"}/></Col>
		      </Row>
		      <Row>
		        <Col sm={{ size: 'auto', offset: 1 }}><h1 className="mainheader">ЦИФРОВОЙ Я - ЦИФРОВОЙ КЫРГЫЗСТАН 
		        СТАНЬ ЦИФРОВЫМ!</h1></Col>
		      </Row>
		      <Row>
		        <Col sm={{ size: 'auto', offset: 1 }}><p className="text2">Digi Skills - это платформа для получения цифровых
		         навыках для всех регионов страны совершенно бесплатно</p></Col>
		      </Row>
		      <Row>
		        <Col sm={{ size: 'auto', offset: 1 }}><button className ="mainbutton">Смотреть все</button></Col>
		      </Row>
		      </div>
		      <Row>
		      <Col md={12} className={"d-flex justify-content-around mt-3 flex-wrap mb-5"}>
					    <div className="col-4">
					      <h2 className='headtext '>Наша миссия</h2><p className="blocktext">Таким образом реализация намеченных плановых заданий позволяет выполнять важные задания по разработке новых предложений. Таким образом реализация намеченных плановых заданий позволяет выполнять важные задания по разработке новых предложений. аким образом реализация намеченных плановых заданий позволяет выполнять важные задания по разработке новых предложений.</p>
					    </div>
					    <div className="col-4">
					     <img className = "blockphoto" src={blockphoto} alt={"image"}/>
					    </div>
					    </Col>
					    </Row>
					    <Row>
		      <Col md={12} className={"d-flex justify-content-around mt-3 flex-wrap mb-5"}>
					    <div className="col-4">
					      <img className = "blockphoto" src={blockphoto2} alt={"image"}/>
					    </div>
					    <div className="col-4">
					     <h2 className='headtext'>Повседневная практика</h2><p className="blocktext " >Таким образом реализация 
					     	намеченных плановых заданий позволяет выполнять важные задания по разработке новых предложений.
					      Таким образом реализация намеченных плановых заданий позволяет выполнять важные задания по разработке новых предложений.</p>
					    </div>
					    </Col>
					    </Row>
					    <div className="photo2"><h1 className="banner2">ЦИФРОВОЙ Я - ЦИФРОВОЙ КЫРГЫЗСТАН 
		        СТАНЬ ЦИФРОВЫМ!</h1></div>
		        <div>
		        <Container>
		        <Row>
        <Col md={12} className={"d-flex justify-content-between align-items-center mt-5 flex-wrap"}>
          <p className={"h1 "}>Наши уроки</p>

          <div className={"d-inline-block"} style={{minWidth: '220px'}}>
            <Link to ="/lessons"><button className ="lessons_button">Все уроки</button></Link>
            </div>
            </Col>
		        <Col md={12} className={"d-flex justify-content-around mt-3 flex-wrap mb-5"}>
							{this.state.lessons && this.state.lessons.length ? this.state.lessons.map((item,idx) => {
								return <Card key={idx} {...item}/>
							}) : <p className={"text-center h4"}>Загрузка</p>}
        		</Col>
		 
		     </Row> 
			</Container>
			<Container>
		        <Row>
        <Col md={12} className={"d-flex justify-content-between align-items-center mt-5 flex-wrap"}>
          <p className={"h1 "}>Новости</p>

          <div className={"d-inline-block"} style={{minWidth: '220px'}}>
									<Link to="/all-news"><button className ="lessons_button">Все новости</button></Link>
            </div>
            </Col>
		        <Col md={12} className={"d-flex justify-content-between align-items-center mt-5 flex-wrap"}>
							{this.state.news && this.state.news.length ? this.state.news.map((item,idx) => {
								return <NewsCard key={idx} {...item}/>
							}) : <p className={"text-center h4"}>Загрузка</p>}
        		</Col>
		     </Row> 
			</Container>
			<Container>
		        <Row>
        <Col md={12} className={"d-flex justify-content-between align-items-center mt-5 flex-wrap"}>
          <p className={"h1"}>Преподаватели</p>

            </Col>
		        {/*<Col md={12} className={"d-flex justify-content-between align-items-center mt-5 flex-wrap"}>*/}
						<div className={"w-100 mb-5"}>
		        	<Slider {...settings}>
								{
									this.state.teachers.length ? this.state.teachers.map((item,idx) => {
										return <div key={idx} className={"w-100"}><TeacherCard {...item}/></div>
									}) :  <p className={"text-center h4"}>Загрузка</p>
								}
		        	</Slider>
						</div>
        		{/*</Col>*/}
		 
		     </Row> 
			</Container>
			<Footer/>
			</div>
			</div>
			)




}
	}
	export default Main;
