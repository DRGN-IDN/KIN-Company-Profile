//import logo from './logo.svg';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dash from "./views/Dashboard";
import About from "./views/AboutUs";
import PK from "./views/PengalamanKerja";
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Dash} />
            <Route exact path="/home" component={Dash} />
            <Route exact path="/about" component={About} />
            <Route exact path="/pengalaman" component={PK} />
          </Switch>
        </Router>
      </div>
    );
  }

}
export default App;