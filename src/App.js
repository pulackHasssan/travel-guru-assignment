import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
