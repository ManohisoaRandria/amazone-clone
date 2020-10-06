import { Switch } from "react-router-dom";
import React from "react";
import Checkout from "./Checkout";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";
import Header from "./Header";

function Subroute() {
  return (
    <div>
      <Header />
      <Switch>
        <ProtectedRoute path="/checkout" component={Checkout} />
        <ProtectedRoute path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default Subroute;
