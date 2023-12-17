import express from "express";
import YogaClass from "../models/userschema.js";

export const amount = async (req, res) => {
    try {
        console.log(req.body);
        const { Email, date } = req.query;;

        // Find the student by email
        console.log(Email);
        const student = await YogaClass.findOne({ email: Email });

        // Check if the student is found
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Ensure that the student has the 'monthlyFee' property
        const monthlyFee = student.monthlyFee || 0;

        // Extract enrollment date from the student document
        const enrollmentDate = student.enrollmentDate;

        // Calculate the number of months from enrollment to now
        const currentDate = new Date(date);
        const monthsDifference = (currentDate.getFullYear() - enrollmentDate.getFullYear()) * 12 +
            (currentDate.getMonth() - enrollmentDate.getMonth()) + 1;

        // Calculate the amount owed
        const monthlyFeeRate = 500;
        const amountToPay = Math.max(monthsDifference, 0) * monthlyFeeRate;

        if (amountToPay > monthlyFee) {
            const amountDifference = amountToPay - monthlyFee;
            res.status(200).json({ message: "Amount To pay", amount: amountDifference });
        } else {
            const amountDifference = monthlyFee - amountToPay;
            res.status(200).json({ message: "Excess Amount applied", amount: amountDifference });
        }
    } catch (error) {
        console.error("Error calculating amount:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
