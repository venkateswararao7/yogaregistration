import express from "express";
import YogaClass from "../models/userschema.js";

export const updatepayment = async (req, res) => {
    try {
        const { email, monthlyFee } = req.body;

        // Find the document by email and increment the monthlyFee
        const updatedStudent = await YogaClass.findOneAndUpdate(
            { email },
            { $inc: { monthlyFee } }, // Use $inc to increment the value
            { new: true }
        );

        // Check if the student is found
        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Respond with the updated student data
        res.status(200).json({ message: "Payment updated successfully", student: updatedStudent });
    } catch (error) {
        console.error("Error updating payment:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
