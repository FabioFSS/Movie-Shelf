import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Details from "./Details/index"
import Home from "./Home/index"
import Login from "./LogIn/index"
import Profile from "./Profile/index"
import Reset from "./Reset/index"
import Signup from "./SignUp/index"
import Lists from "./Lists/index"
import ListDetails from "./ListDetails";
import Progress from "./Progress/index"
import ProgressDetailsOverview from "./ProgressDetailsOverview";


export default function Routes() {
  return (
    <Router>
        <Route component = { Details }  path="/details:id"/>
        <Route component = { Home }  path="/home"/>
        <Route component = { Profile }  path="/profile"/>
        <Route component = { Lists }  path="/lists"/>
        <Route component = { ListDetails }  path="/listdetails"/>
        <Route component = { Progress }  path="/progress"/>
        <Route component = { ProgressDetailsOverview }  path="/progressdetailsoverview"/>
        <Route component = { Reset }  path="/reset"/>
        <Route component = { Signup }  path="/signup"/>
        <Route component = { Login }  path="/login"/>
    </Router>
  );
}