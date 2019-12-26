import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container
} from "reactstrap";
import "../styles/lesson.css"
import closeIcon from "../assets/icon/x.png"
import {Link} from 'react-router-dom'

const LessonHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="header" light expand="md">
      <Link to="/lessons">
        <div className="ml-4 mr-5">
          <img src={closeIcon} alt="close icon" />
        </div>
   </Link>
        <NavbarBrand tag={"div"}>
          <div className="lesson-header-title">Курс по СММ маркетингу</div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar></Collapse>
    </Navbar>
  );
};

export default LessonHeader;
