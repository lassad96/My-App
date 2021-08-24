import User from '../models/userRegister.js';
import bcrypt from 'bcrypt';



export const postUser = async(req,res)=>{
    //console.log(req.body);
    const {name, email, password, phone, isAdmin, isFarmer}=req.body
    try {
        const newUser= new User ({name, email, password, phone, isAdmin, isFarmer})
        console.log(newUser);
        const existUser= await User.findOne({email})
        //console.log(existUser);
        if (existUser){return res.status(400).json({msg:'user exist'})}
        const hashedPassword = await bcrypt.hash(password, 10)
        newUser.password = hashedPassword
        
        //console.log(newUser.password)
        const result= await newUser.save()
        res.json({ user:result,msg:"user added"})
        console.log(res.json)
    } catch (error) {
       res.status(500).json({errors:error}) 
    }
}