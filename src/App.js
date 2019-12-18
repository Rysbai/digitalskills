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

function App() {
  return (
    <div className="App">
      <Switch>
      	<Route exact path={"/"} component={Main}/>
        <Route exact path={"/lessons"} component={AllLessons}/>
        <Route exact path={"/news"} component={News}/>
        <Route exact path={"/all-news"} component={AllNews}/>
        <Route exact path={"/teacher"} component={TeacherPage}/>
        <Route exact path={"/contacts"} component={Contacts}/>
        <Route exact path={"/about"} component={Aboutus}/>
        <Route exact path={"/course"} component={Course}/>
      </Switch>
    </div>
  );
}

export default App;
