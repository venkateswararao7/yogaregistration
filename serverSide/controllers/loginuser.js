import express from "express";
import bcrypt from "bcrypt";
import User from "../models/loginschema.js";

export const user = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if a user with the specified email exists
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            // If user doesn't exist, create a new user with hashed password
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ email, password: hashedPassword });
            await newUser.save();
            return res.status(200).json({ message: "OK" });
        }

        // If user exists, check if the provided password matches
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (isPasswordValid) {
            return res.status(200).json({ message: "OK" });
        } else {
            return res.status(200).json({ message: "wrong" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
