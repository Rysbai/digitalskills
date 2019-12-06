import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Switch>
        <Header />
      </Switch>
    </div>
  );
}

export default App;
