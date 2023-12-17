import mongoose from "mongoose";

const yogaClassSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 65
    },
    phone: {
        type: Number,
        required: true
    },
    yogaShift: {
        type: String,
        enum: ["6-7AM", "7-8AM", "8-9AM", "5-6PM"], // Restricting to the specified shifts
        required: true
    },
    enrollmentDate: {
        type: Date,
        default: Date.now
    },
    monthlyFee: {
        type: Number,
        default: 500
    }
});

const YogaClass = mongoose.model("YogaClass", yogaClassSchema);

export default YogaClass;
