import React from "react";
import "../styles/lesson.css";
const LessonSidebar = props => {
  const lessonSidebarClass = [
    "lesson-sidebar row mb-3 d-flex align-items-center "
  ];
  const lessonSidebarActiveClass = [
    "lesson-sidebar row  lesson-sidebar-active mb-3   d-flex align-items-center "
  ];

  return (
    <div
      className={
        props.index <= props.select
          ? lessonSidebarActiveClass
          : lessonSidebarClass
      }
      key={props.id}
      onClick={() => props.setSelect(props.index)}
    >
      <div className="lesson-sidebar-numbering mx-2 my-3">{props.number} </div>
      <div className="lesson-sidebar-title col-10 ">{props.title}</div>
    </div>
  );
};
export default LessonSidebar;
