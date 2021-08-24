import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../redux/actions/user';
import { useHistory, Link } from "react-router-dom"
import "./Register.css"

const Register = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
        dispatch(registerUser({name, email, phone, password},history));
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
    }

    return (
        <div>
             <div className="formCenter">
        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="phone"
              id="phone"
              className="formFieldInput"
              placeholder="Enter your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="formField">
            <button className="formFieldButton" >Sign Up</button>{" "}
            <Link to="/login" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
        </div>
    )
}

export default Register
