import express from "express";
import YogaClass from "../models/userschema.js";

export const changeshift = async (req, res) => {
    try {
        const { email, shift } = req.body;

        // Find the document by email and update the shift
        const updatedStudent = await YogaClass.findOneAndUpdate(
            { email },
            { $set: { yogaShift: shift } },
            { new: true }
        );

        // Check if the student is found
        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Respond with the updated student data
        res.status(200).json({ message: "Shift updated successfully", student: updatedStudent });
    } catch (error) {
        console.error("Error updating shift:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
