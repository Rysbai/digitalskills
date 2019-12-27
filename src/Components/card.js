import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from "react-router-dom";

const CardItem = ({name,image,id,language,category_name}) => {
  return (
      <Card className={"border-0 shadow mb-3 position-relative"} style={{maxWidth: '330px',height: '450px',}}>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle className={"card_custom_title mb-4"}>{name}</CardTitle>
          <CardSubtitle className={"d-flex justify-content-between w-100"}>
            <span className={"text-muted card_custom_subtitle-text"}>Категория</span>
            <span className={"text-muted card_custom_subtitle-text"}>Язык</span>
          </CardSubtitle>
          <CardText className={"mt-0 mb-5"}>
            <span className={"w-100 d-flex justify-content-between card_custom_body-text"}>
              <span>{category_name}</span>
              <span>{language === "ru" ? "Русский" : "Кыргызский"}</span>
            </span>
          </CardText>
          <p className={"w-100 d-flex justify-content-center main-card-button-pos"}>
            <Link to={`/course/${id}`} className={"w-50"}>
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