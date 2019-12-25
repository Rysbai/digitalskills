import React, { useState, useEffect } from "react";
import Axios from "axios";
import LessonSidebar from "../Components/lesson_sidebar";
import LessonHeader from "../Components/lesson_header";

const Lesson = () => {
  const [data, setData] = useState({});
  const [select, setSelect] = useState(1);

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <LessonHeader />
      <div className="col-12 row mt-5">
        <div className="col-3 ">
          {data.length > 0
            ? data.map((data, index) =>
                index < 7 ? (
                  <LessonSidebar
                    id={data.id}
                    name={data.name}
                    index={index}
                    setSelect={setSelect}
                    select={select}
                  />
                ) : (
                  ""
                )
              )
            : ""}
        </div>
        <div className="col-9 shadow text-center">
          {data.length > 0 ? (
            <div className="mt-4">
              <p>{data[select].name}</p>
              <p>{data[select].email}</p>
              <p>{data[select].body}</p>
              <p>{data[select].name}</p>
              <p>{data[select].email}</p>
              <p>{data[select].body}</p>
              <p>{data[select].name}</p>
              <p>{data[select].email}</p>
              <p>{data[select].body}</p>
              <p>{data[select].name}</p>
              <p>{data[select].email}</p>
              <p>{data[select].body}</p>
              <p>{data[select].name}</p>
              <p>{data[select].email}</p>
              <p>{data[select].body}</p>
              <p>{data[select].name}</p>
              <p>{data[select].email}</p>
              <p>{data[select].body}</p>
              <p>{data[select].name}</p>
              <p>{data[select].email}</p>
              <p>{data[select].body}</p>
              <p>{data[select].name}</p>
              <p>{data[select].email}</p>
              <p>{data[select].body}</p>
              <p>{data[select].name}</p>
              <p>{data[select].email}</p>
              <p>{data[select].body}</p>
            </div>
          ) : (
            ""
          )}
          {data.length > 0 ? (
            <div>
              {select > 1 ? (
                <button
                  className="lesson-prev-btn"
                  onClick={() => setSelect(select - 1)}
                >
                  Назад
                </button>
              ) : (
                ""
              )}
              {select < data.length - 3 ? (
                <button
                  className=" lesson-next-btn"
                  onClick={() => setSelect(select + 1)}
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
