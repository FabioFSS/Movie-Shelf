import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Details from "./Details/index"
import Home from "./Home/index"
import Login from "./LogIn/index"
import Profile from "./Profile/profile"
import Reset from "./Reset/index"
import Signup from "./SignUp/index"

export default function Routes() {
  return (
    <Router>
        <Route component = { Details }  path="/details:id"/>
        <Route component = { Home }  path="/"/>
        <Route component = { Profile }  path="/profile"/>
        <Route component = { Reset }  path="/reset"/>
        <Route component = { Signup }  path="/signup"/>
        <Route component = { Login }  path="/login"/>
    </Router>
  );
}