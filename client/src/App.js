import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from'./components/Pages/Home';
import './Style.css';
import Profile from './components/User/Profile/Profile';
import { Switch, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPosts } from './redux/actions/posts';
import Dash from './components/Dash/Dash';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register'
import PrivateRoute from './components/SecretRoute/PrivateRoute'
import Admin from './components/adminArea/Admin';
import adminArea from './components/adminArea/adminArea';




const App=() => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

    return ( 
    <div> 
      <Switch>
        <Route path="/admin" component ={Admin}/>
        <div>
        <Navbar />
        
      

        <Route path='/' exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/Dashbord" component={Dash}/>
        <PrivateRoute path="/admin-area" component={adminArea} />

      
      </div>
      </Switch>
      </div>
  );
};


export default App;