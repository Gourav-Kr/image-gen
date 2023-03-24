import express from 'express';
import * as dotenv from 'dotenv';
import User from "../mongodb/models/user.js";
import jwt from "jsonwebtoken";

dotenv.config();

const router = express.Router();

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

//login
router.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token, user,name:user.name })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});


//register
router.post("/register", async (req,res)=>{
    const {name, email, password } = req.body;
    // console.log(name, email, password);
    // console.log(req.body);
    try {
        const user = await User.signup(name, email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ name, email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

export default router;