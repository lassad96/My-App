//use import in place of require: enable it : add "type": "module" after "main" in package.json
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';



import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';
import adminRoutes from './routes/admin.js'
const app= express ();




app.use(bodyParser.json({limit: "50mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
app.use(cors());

//Middlewares
app.use(express.json());
app.use('/user/',userRoutes);
app.use('/posts', postRoutes);
app.use('/admin',adminRoutes);



// connect app with real db
// use mongodb cloud atlas 

const CONNECTION_URL ="mongodb+srv://tajouri:tajouri123@cluster0.uujjz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT =process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then (() => app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify',false);




