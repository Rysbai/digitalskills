import React from "react";
import "../styles/lesson.css";
const LessonSidebar = props => {
  const lessonSidebarClass = ["lesson-sidebar row mb-3 "];
  const lessonSidebarActiveClass = [
    "lesson-sidebar row  lesson-sidebar-active mb-3"
  ];

  return (
    <div
      className={
        props.index < props.select
          ? lessonSidebarActiveClass
          : lessonSidebarClass
      }
      key={props.id}
      onClick={() => props.setSelect(props.id)}
    >
      <div className="lesson-sidebar-numbering mx-3 my-3">
        {props.index + 1}{" "}
      </div>
      <div className="lesson-sidebar-title col-9 text-left my-3">
        {props.name}
      </div>
    </div>
  );
};
export default LessonSidebar;
