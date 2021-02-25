import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Tech from "./components/tech/Tech";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/tech" component={Tech} />
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
