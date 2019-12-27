import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import { Card, Col, Row, CardBody, Container, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import API from '../API';
import HtmlParser from "react-html-parser";
import '../styles/main.css';
import karta from '../assets/img/kg-07 1.png';

class Aboutus extends React.Component {

	state = {
		data: {},
	};

	componentDidMount() {
		API.getDataAboutUs()
			.then(res => this.setState({data: res.data}))
			.catch(e => console.error(e));
	}

	render(){
		return(
			<div>
			<Header/>
			<Container>
			<Row>
			<Col>
			<p className={"h1 text-uppercase head-text"}>О ПРОЕКТЕ</p>
			<p className={'text-about'}>
				{this.state.data && this.state.data.payload ? HtmlParser(this.state.data.payload) : <p>Загрузка</p>}
			</p>
			</Col>
			<Col className = "karta"><img src={karta}/></Col>
			</Row>
			</Container>
			<Footer/>
			</div>
		)
	}
};
export default Aboutus;