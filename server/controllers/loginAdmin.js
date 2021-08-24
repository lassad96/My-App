import jwt from 'jsonwebtoken';
import User from '../models/userRegister.js';
import bcrypt, { compareSync } from 'bcrypt';




export const loginAdmin= async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)
    try {
        const searchUser = await User.findOne({ email })
        console.log(searchUser)
        if (!searchUser) { return res.status(400).json({ msg: "bad credential" }) }
        const isMatch = await bcrypt.compareSync(password, searchUser.password)
        console.log(isMatch)
        if (!isMatch) { return res.status(400).json({ msg: "bad credential" }) }
        const payload = {
            id: searchUser._id,
            name: searchUser.name,
            email: searchUser.email
        }
        
        const user= await User.findOne({ email }).select('-password')
        console.log(user)
        if (user.isAdmin){return res.status(400).json({ msg: "Acces denied" })}
        console.log(user.isAdmin)
        jwt.sign(payload, "mySecretKey", function (err, token) {
            if (err) throw err;
            res.json({ token: `Bearer ${token}`,user:user })
            console.log(res.json)
        });
    }
    catch (error) {
        res.status(500).json({ errors: error })
    }
}

