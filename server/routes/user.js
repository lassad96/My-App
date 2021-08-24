import express from 'express';
import { postUser } from '../controllers/register.js';
import { loginUser} from '../controllers/login.js';
//import {profileUser, deleteProfile, deleteUser } from '../controllers/profile.js'
const router =express.Router();

import {isAuth} from '../Middlewares/passport.js'

//test

router.get('/test', (req, res) => {
    res.send({ mes: 'hello router' })
})

//Signup

router.post('/register',postUser);

//Signin

router.post('/login',loginUser);

//Profile



//AUTHO

router.get("/current",isAuth(),(req,res)=>{
    console.log(req.user)
    try {
        res.send({user:req.user})
    } catch (error) {
        res.status(500).json({errors:error})
    }
})


export default router;