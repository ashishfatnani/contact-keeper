import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";
import ContactState from "../src/context/contact/contactState";
import AuthState from "../src/context/auth/AuthState";
import AlertState from "../src/context/alert/AlertState";
import PrivateRoute from "./components/routing/PrivateRoute";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <ContactState>
          <Router>
            <Fragment>
              <Navbar></Navbar>
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={HomePage}></PrivateRoute>
                  <Route exact path="/about" component={About}></Route>
                  <Route exact path="/login" component={Login}></Route>
                  <Route exact path="/register" component={Register}></Route>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </ContactState>
      </AlertState>
    </AuthState>
  );
};

export default App;
