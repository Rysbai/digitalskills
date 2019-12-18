import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from "react-router-dom";

const CardItem = ({name,image,id}) => {
  return (
      <Card className={"border-0 shadow mb-3"} style={{maxWidth: '360px'}}>
        <CardImg top width="100%" src={`http://64.225.36.157/${image}`} alt="Card image cap" />
        <CardBody>
          <CardTitle className={"card_custom_title"}>{name}</CardTitle>
          <CardSubtitle className={"d-flex justify-content-between w-100"}>
            <span className={"text-muted card_custom_subtitle-text"}>Начало курса</span>
            <span className={"text-muted card_custom_subtitle-text"}>Длительность</span>
          </CardSubtitle>
          <CardText className={"mt-2"}>
            <span className={"w-100 d-flex justify-content-between card_custom_body-text"}>
              <span>11 декабря</span>
              <span>1 месяц</span>
            </span>
            <span className={"w-100 d-flex justify-content-between card_custom_body-text"}>
              <span>14:00 - 16:00</span>
              <span>13 занятий</span>
            </span>
          </CardText>
          <p className={"w-100 d-flex justify-content-center"}>
            <Link to={`/teacher/${id}`} className={"w-50"}>
            <Button tag={'span'}
                    color={"faded"}
                    className={"w-100 shadow-none rounded-0 card_custom_button"}>Подробнее</Button>
            </Link>
          </p>
        </CardBody>
      </Card>
  );
};

export default CardItem;