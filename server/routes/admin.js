import express from 'express';
const router =express.Router();


import {loginAdmin} from '../controllers/loginAdmin.js';


router.post('/login',loginAdmin);

export default router;