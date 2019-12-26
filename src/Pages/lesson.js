import React, { useState, useEffect } from "react";
import API from "../API";
import ReactHtmlParser from "react-html-parser";
import LessonSidebar from "../Components/lesson_sidebar";
import LessonHeader from "../Components/lesson_header";

const Lesson = ({match}) => {
  const [data, setData] = useState({});
  const [sortData, setSortData] = useState({});
  const [select, setSelect] = useState(0);

  useEffect(() => {
    API.getLesson(match.params.id)
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const newData =
      data.length > 0
        ? data.sort((a, b) => {
            return a.number - b.number;
          })
        : "";
    setSortData(newData);
  }, [data]);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0
    });
  };
  const nextBtnClicked = () => {
    setSelect(select + 1);
    scrollTop();
  };
  return (
    <div>
      <LessonHeader />
      <div className="col-12 row mt-5">
        <div className="col-3">
          <div className="lesson-sidebar-wrapper">
            {sortData.length > 0
              ? sortData.map((data, index) =>
                  index < 7 ? (
                    <LessonSidebar
                      id={data.id}
                      title={data.title}
                      number={data.number}
                      setSelect={setSelect}
                      select={select}
                      index={index}
                    />
                  ) : (
                    ""
                  )
                )
              : ""}
          </div>
        </div>
        <div className="col-9 shadow text-center">
          {sortData.length > 0 ? (
            <div className="mt-4" key={sortData[select].id}>
              {ReactHtmlParser(sortData[select].content)}
            </div>
          ) : (
            ""
          )}
          {sortData.length > 0 ? (
            <div>
              {select > 0 ? (
                <button
                  className="lesson-prev-btn"
                  onClick={() => setSelect(select - 1)}
                >
                  Назад
                </button>
              ) : (
                ""
              )}
              {select < sortData.length - 1 ? (
                <button
                  className=" lesson-next-btn"
                  onClick={() => nextBtnClicked()}
                >
                  Вперед
                </button>
              ) : (
                <button className=" lesson-next-btn bg-success">
                  Завершить
                </button>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
