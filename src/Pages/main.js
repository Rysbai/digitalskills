import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../styles/main.css';
import {Button,Container,Row,Col} from 'reactstrap';
import logo2 from '../assets/icon/image 64.png';
import blockphoto from '../assets/img/block-photo.png';
import blockphoto2 from '../assets/img/block-photo2.png';
import Card from '../Components/card';
import News_card from '../Components/news_card';
import Teacher_card from '../Components/teacher_card';



class Main extends React.Component {
	render(){
		return(
			<div>
			<Header/>
			<div className = "mainphoto">
			 <Row className = "logopart">
		        <Col sm={{ size: 'auto', offset: 1 }}><img src={logo2}/></Col>
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
					    <div class="col-4">
					      <h2 className='headtext '>Наша миссия</h2><p className="blocktext">Таким образом реализация намеченных плановых заданий позволяет выполнять важные задания по разработке новых предложений. Таким образом реализация намеченных плановых заданий позволяет выполнять важные задания по разработке новых предложений. аким образом реализация намеченных плановых заданий позволяет выполнять важные задания по разработке новых предложений.</p>
					    </div>
					    <div class="col-4">
					     <img className = "blockphoto" src={blockphoto}></img>
					    </div>
					    </Col>
					    </Row>
					    <Row>
		      <Col md={12} className={"d-flex justify-content-around mt-3 flex-wrap mb-5"}>
					    <div class="col-4">
					      <img className = "blockphoto" src={blockphoto2}></img>
					    </div>
					    <div class="col-4">
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
          <Card/>
          <Card/>
          <Card/>
          
        </Col>
		 
		     </Row> 
			</Container>
			<Container>
		        <Row>
        <Col md={12} className={"d-flex justify-content-between align-items-center mt-5 flex-wrap"}>
          <p className={"h1 "}>Новости</p>

          <div className={"d-inline-block"} style={{minWidth: '220px'}}>
            <Link to ="/lessons"><button className ="lessons_button">Все новости</button></Link>
            </div>
            </Col>
		        <Col md={12} className={"d-flex justify-content-between align-items-center mt-5 flex-wrap"}>
	          <News_card/>
			  <News_card/>
	          <News_card/>
	          <News_card/>
          
        </Col>
		 
		     </Row> 
			</Container>
			<Container>
		        <Row>
        <Col md={12} className={"d-flex justify-content-between align-items-center mt-5 flex-wrap"}>
          <p className={"h1 "}>Преподаватели</p>

            </Col>
		        <Col md={12} className={"d-flex justify-content-between align-items-center mt-5 flex-wrap"}>
	          <Teacher_card/>
			  <Teacher_card/>
	          
          
        </Col>
		 
		     </Row> 
			</Container>
			<Footer/>
			</div>
			</div>
			)




}
	}
	export default Main;
