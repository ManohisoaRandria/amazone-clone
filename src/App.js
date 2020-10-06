import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Checkout.css";
import Login from "./Login";
import Subroute from "./Subroute";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Subroute />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
