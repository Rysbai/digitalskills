import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import teacher from '../assets/img/Sanira 1.png';

const Teacher_card = (props) => {
  return (
    <div>
      <Card className = {"border-0 shadow mb-3"} style={{maxWidth: '420px'}}>
        <div class="container">
          <div class="row justify-content-md-left">
            <div class="p-2 bd-highlight">
             <CardImg style={{maxWidth: '90px'}} src={teacher} alt="Card image cap" />
            </div>
            <div class="col-6">
             <CardTitle>Санира Маджикова</CardTitle>
             <CardSubtitle>Руководитель проекта “Neobis</CardSubtitle>
            </div>
            
          </div>
         
        </div>
        
        <CardBody>
          
          
          <CardText>Кесиби юрист. Ж.Баласагын атындагы Кыргыз улуттук университетинин юридикалык факультетинен билим алган. Азыркы учурда КР Өкмөтүнүн алдындагы Кыргыз мамлекеттик юридикалык академиясынын аспиранты. Телекоммуникация тармагында эмгектенип, массалык маалымат каражаттарына байланышкан маселелерге өзгөчө көңүл буруп келет. Байкоочу кеңешинин курамына жарандык коом тарабынан сунушталган</CardText>
          <Button>Подробнее</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Teacher_card;