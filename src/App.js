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
import { useSelector } from 'react-redux';
import BlogPage from './BlogPage';

function App() {
  const token = useSelector(state => state.logintodash);
  // const postedcall = useSelector(state => state.postreducerfun);
  // console.log("POSTED APP>JS",postedcall);
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Welcome}></Route>
        <Route exact path="/login" component={(token.token)?Dashboard :Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/blogpage" component={BlogPage}></Route>
      </Switch>
      {/* <Apitemp/> */}
      </Router>
    </div>
  );
}

export default App;
