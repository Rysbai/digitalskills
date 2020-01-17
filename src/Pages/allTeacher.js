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
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = "Все учителя";
    API.allTeachers()
      .then(res => {
        console.log(res.data);
        setData(res.data)
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
              "d-flex justify-content-lg-between align-items-center mt-5 flex-wrap justify-content-center"
            }
          >
            <p className={"h1 text-uppercase"}>Все учителя</p>
          </Col>
          <Col
            md={12}
            className={"d-flex justify-content-around mt-3 flex-wrap mb-5"}
          >
            {data && data ? (
              data.length > 0 ? (
                data.map((item, idx) => {
                  return (
                    <TeacherCard key={idx} {...item} />
                  );
                })
              ) : (
                <Spiner />
              )
            ) : (
              "Нету учителей"
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AllTeacher;