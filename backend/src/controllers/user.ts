import User from "../models/user"
import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken'
import { Request, Response } from 'express';

export const registerUser = async (req: Request, res: Response) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) return res.status(400).json({ message: "This email is already in use" })

        user = new User(req.body)

        await user.save()

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY as string, { expiresIn: "1d" })

        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000
        })
        return res.status(200).json({ message: "Registration successful" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong!!!!" });
    }
}

export const loginUser = async (req: Request, res: Response) => {

    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Find the user by email
        const user = await User.findOne({ email });

        // Check if the user exists
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate a JWT token for authentication
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY as string, { expiresIn: "1d" });

        // Set the authentication token as a cookie in the response
        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000, // 1 day in milliseconds
        });

        // Send a successful response
        return res.status(200).json({ userId: user._id });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

