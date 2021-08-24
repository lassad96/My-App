import React, {useState} from "react";
import {loginUser} from '../../../redux/actions/user';
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton
} from "react-social-login-buttons";

import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'

import './Login.css';

const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }, history));
        setEmail("");
        setPassword("")
    }

    return (
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
             <div className="formCenter">
        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton" type="submit">Sign In</button>
            <Link to="/register" className="formFieldLink">
              Create an account
            </Link>
          </div>

          <div className="socialMediaButtons">
            <div className="facebookButton">
              <FacebookLoginButton onClick={() => alert("Hello")} />
            </div>

            <div className="instagramButton">
              <InstagramLoginButton onClick={() => alert("Hello")} />
            </div>
          </div>
        </form>
      </div>
        </div>
        </div>
    )
}

export default Login
