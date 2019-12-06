import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Header from './Components/Header';
import AllLessons from "./Components/allLessons";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path={"/lessons"} component={AllLessons}/>
      </Switch>
    </div>
  );
}

export default App;
