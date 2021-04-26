import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Australia from "./Australia";
import Turkey from "./Turkey";
import About from "./About";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <main className="container">
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/australia" component={Australia}/>
            <Route exact path="/turkey" component={Turkey}/>
            <Route exact path="/about" component={About}/>
          </div>
        </main> 
      </HashRouter>
    )
  }
}

export default Main;