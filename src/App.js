import React from 'react';
import {Switch,Route} from 'react-router-dom';
import AllLessons from "./Pages/allLessons";
import Main from "./Pages/main";
import './style.css';
import News from "./Pages/news";
import TeacherPage from "./Pages/teacher";
import Contacts from "./Pages/contacts";
import Aboutus from "./Pages/aboutus";
import AllNews from "./Pages/allNews";
import Course from "./Pages/course";
import Lesson from './Pages/lesson';

function App() {

  localStorage.setItem("language", "ru");

  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={Main} />
        <Route exact path={"/lessons"} component={AllLessons} />
        <Route exact path={"/news/:id"} component={News} />
        <Route exact path={"/all-news"} component={AllNews} />
        <Route exact path={"/teacher/:id"} component={TeacherPage} />
        <Route exact path={"/contacts"} component={Contacts} />
        <Route exact path={"/about"} component={Aboutus} />
        <Route exact path={"/course/:id"} component={Course} />
        <Route exact path={"/lesson/:id"} component={Lesson} />
      </Switch>
    </div>
  );
}

export default App;
