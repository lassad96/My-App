import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import RegisterUser from "./RegisterUser";
import RegisterAgric from "./RegisterAgric";



import "./Register.css";

const Register = () => {
   
    return (
      <Router>
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <Link
                to="/userreg"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In As User
              </Link>
              <Link
                exact
                to="/agric"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign in As A Farmer
              </Link>
            </div>

            <div className="formTitle">
              <Link
                to="/userreg"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Am A Simple User
              </Link>{" "}
              or{" "}
              <Link
                exact
                to="/agric"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Am A Farmer
              </Link>
            </div>

            <Route  path="/userreg" component={RegisterUser} />
            <Route path="/agric" component={RegisterAgric} />
          </div>
        </div>
      </Router>
    );
  }


export default Register;