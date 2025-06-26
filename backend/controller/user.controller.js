import User from '../model/user.model.js';
import bcrypt from 'bcryptjs';



export const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;  
    const hashedPassword = await bcrypt.hash(password, 10);
      
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("User already exists");
            return res.status(400).json({ message: "User already exists" });
        }

        
        const user = new User({
            firstname,
            lastname,
            email,
            password  : hashedPassword
        });

        await user.save();

        console.log("New user:", user);
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Error occurred while creating user" });
    }
};
