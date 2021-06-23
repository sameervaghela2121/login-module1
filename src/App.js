import React from 'react';
import './App.css';
import Register from './Register';
import Header from './Header';
import Login from './Login';
import Welcome from './Welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" render={()=>{
          return(
            <>
              <Welcome/>
            </>
          )
        }}>
        </Route>
        <Route exact path="/login" render={()=>{
          return(
            <>
              <Login/>
            </>
          )
        }}>
        </Route>
        <Route exact path="/register" render={()=>{
          return(
            <>
              <Register/>
            </>
          )
        }}>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
