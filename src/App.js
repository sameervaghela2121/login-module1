import React from 'react';
import './App.css';
import Register from './Register';
import Header from './Header';
import Login from './Login';
import Welcome from './Welcome';
// import Apitemp from './Apitemp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Welcome}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
      </Switch>
      {/* <Apitemp/> */}
      </Router>
    </div>
  );
}

export default App;
