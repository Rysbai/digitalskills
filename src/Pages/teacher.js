import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import CardItem from '../Components/card';
import teacher from '../assets/img/ns_8 1.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const TeacherPage = () => {

  return (
    <div>
    <Header/>
    <Container>
      <Row className={"mt-5"}>
        <Col md={4} className={"text-center"}>
          <img src={teacher} className={"img-fluid rounded-pill"} alt={"teacher"}/>
        </Col>
        <Col md={7} className={"ml-md-5 d-flex flex-column justify-content-center"}>
          <p className={"h2 teacher"}>Тимур Алхожоев</p>
          <p className={"teacher teacher-subtitle"}>Руководитель проекта “DigiSkills”</p>
          <p className={"teacher-archive"}>Кесиби юрист. Ж.Баласагын атындагы Кыргыз улуттук университетинин юридикалык факультетинен билим алган. Азыркы учурда КР Өкмөтүнүн алдындагы Кыргыз мамлекеттик юридикалык академиясынын аспиранты. Телекоммуникация тармагында эмгектенип, массалык маалымат каражаттарына байланышкан маселелерге өзгөчө көңүл буруп келет. Байкоочу кеңешинин курамына жарандык коом тарабынан сунушталган</p>
          <p>Язык преподования: <b>кыргызский</b></p>
        </Col>
        <Col md={12} className={"d-flex justify-content-around mt-3 flex-wrap mt-5 pt-5"}>
          {[1,1,1,1,1,1].map((item,idx) => {
            return <CardItem key={idx}/>
          })}
        </Col>
      </Row>
    </Container>
    <Footer/>
      </div>
  )
};

export default TeacherPage;