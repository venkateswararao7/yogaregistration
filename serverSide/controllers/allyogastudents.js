import express from "express";
import YogaClass from "../models/userschema.js"
export const students = async (req, res) => {
    try {
        // Retrieve all yoga students from the database
        const students = await YogaClass.find({});

        // Check if any students are found
        if (students.length === 0) {
            return res.status(404).json({ message: "No yoga students found" });
        }

        // Respond with the list of students
        res.status(200).json({ students });

    } catch (error) {
        console.error("Error retrieving yoga students:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
