import Admin from "../model/admin.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import config from '../config.js';

export const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await Admin.findOne({ email });
        console.log("Request body:", req.body);

        if (existingUser) {
            console.log("admin already exists");
            return res.status(400).json({ message: "admin already exists" });
        }


        const user = new Admin({
            firstname,
            lastname,
            email,
            password: hashedPassword
        });

        await user.save();

        console.log("New admin:", user);
        res.status(201).json({ message: "admin created successfully", user });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Error occurred while creating admin" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;


        const user = await Admin.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "admin not found" });
        }


        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Wrong password" });
        }

        const token = jwt.sign({
            id: user._id
        }, config.JWT_ADMIN_PASSWORD , {expiresIn : "1d"})
        res.cookie("jwt",token)

        res.status(200).json({ message: "admin logged in successfully!", user, token });

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