import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Media
} from 'reactstrap';
import {Link} from 'react-router-dom';
import teacher from '../assets/img/Sanira 1.png';

const TeacherCard = ({id,image,name,surname,position,language,about}) => {
  return (
    <div>
      <Card className = {"border-0 shadow mb-3"} style={{maxWidth: '420px', minWidth: '300px'}}>
        <Media className={"d-flex align-items-center justify-content-center pr-3 pl-3 pt-3 pb-0"}>
          <Media object src={image} className={"rounded-pill teacher-card-image"}  alt="Generic placeholder image" />
          <Media body>
            <Media heading className={"mb-1 pl-3 teacher-card-name"}>{name} {surname}</Media>
            <p className={"text-muted mb-0 pl-3 teacher-card-who"}>{position}</p>
          </Media>
        </Media>
        <CardBody>
          <CardText className={"text-muted"}>{about}</CardText>
          <p>Язык преподования: <b>{language === "ru" ? "Русский" : "Кыргызский"}</b></p>
          <div className={"w-100 d-flex justify-content-center"}>
            <Link to={`/teacher/${id}`} className={"w-50 mx-auto d-inline-block mb-3"}>
              <Button color={"faded"} tag={"span"} className={"w-100 card_custom_button rounded-0 pl-5 pr-5"}>
                <b>Подробнее</b>
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TeacherCard;