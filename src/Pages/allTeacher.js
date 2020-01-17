import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import API from "../API";
import Spiner from "../Components/spiner";
import TeacherCard from "../Components/teacher_card";

const AllTeacher = () => {
  const [allTeachers, setAllTeachers] = useState([]);



  useEffect(() => {
    document.title = "Все учителя";
    API.allTeachers(0,6)
      .then(res => {
        setAllTeachers(res.data);
      })
      .catch(e => console.error(e));
  }, []);


  return (
    <div className="wrapper">
      <Header />
      <Container>
        <Row>
          <Col
            md={12}
            className={
              "d-flex justify-content-lg-between align-items-center mt-5 mb-3 flex-wrap justify-content-center"
            }
          >
            <p className={"h1 text-uppercase"}>Все учителя</p>
          </Col>
          {data.data && data.data.length ?
            data.data.map((item, idx) => {
              return (
                <TeacherCard key={idx} {...item} />
              );
            }) : <Spiner/>}
          <Col
            md={12}
            className={"d-flex justify-content-around mt-3 flex-wrap mb-5"}
          >
            {allTeachers && allTeachers.data ? (
              allTeachers.data.map((item, idx) => {
                return <TeacherCard key={idx} {...item} />;
              })
            ) : (
              <Spiner />
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AllTeacher;