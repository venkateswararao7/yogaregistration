import express from "express";
import YogaClass from "../models/userschema.js";

export const addyogastudent = async (req, res) => {
    try {
        // Check if the user already exists based on a unique identifier (e.g., email)
        const existingUser = await YogaClass.findOne({ email: req.body.email });

        if (existingUser) {
            console.log("User already exists");
            return res.status(409).json({ message: "User already exists" });
        }

        // Create a new instance of the YogaClass model with data from the request body
        const newUser = new YogaClass(req.body);

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Respond with the saved user data
        res.status(201).json(savedUser);
    } catch (error) {
        console.error("Error adding yoga student:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
