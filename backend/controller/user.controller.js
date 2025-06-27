import User from '../model/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

import config from '../config.js';

export const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await User.findOne({ email });
        console.log("Request body:", req.body);

        if (existingUser) {
            console.log("User already exists");
            return res.status(400).json({ message: "User already exists" });
        }


        const user = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword
        });

        await user.save();

        console.log("New user:", user);
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Error occurred while creating user" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;


        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }


        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Wrong password" });
        }

        const token = jwt.sign({
            id: user._id
        }, config.JWT_USER_PASSWORD)
        res.cookie("jwt",token)

        res.status(200).json({ message: "User logged in successfully!", user, token });

    } catch (error) {
        console.log("error", error)

    }



}
export const logout = async(req,res)=>{
    try {
        res.clearCookie("jwt");
        res.status(200).json({message: "loggedout successfully"})
    } catch (error) {
        console.log("error: ",error); 
        res.status(500).json({message: "internal error"})
    }
}
