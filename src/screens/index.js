import React, { useState } from "react";
// react router
//Common practice to give BrowserRouter alias of Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages (Actually just components)
import Dashboard from "./Dashboard";
import About from "./About";
import Players from "./Players";
import Player from "./Player";

import Error from "./Error";
import Competitions from "./Competitions";
// navbar
import Navbar from "../components/Navbar";

import Login from "../components/Login/Login";

const ReactRouterSetup = () => {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Router>
      <Navbar />
      {/* Switch component matches and returns only the the first matched route */}
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/players">
          <Players />
        </Route> */}
        {/* <Route path="/competitions">
          <Competitions />
        </Route>
        <Route path="/player/:id" children={<Player />}></Route> */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
