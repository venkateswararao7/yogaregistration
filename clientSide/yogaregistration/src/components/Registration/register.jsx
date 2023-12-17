import React, { useState } from "react";
import axios from "axios";
import Navbar from "../nav-bar";
import "./register.css";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: 18,
        phone: "",
        yogaShift: "6-7AM",
        monthlyFee: 0
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/enroll", formData)
                .then((response) => {
                    setFormData({
                        name: "",
                        email: "",
                        age: 18,
                        phone: "",
                        yogaShift: "6-7AM",
                        monthlyFee: 0
                    })
                })


        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="register-container">
            <div className="form-container">
                <div className="container">
                    <Navbar />
                </div>
                <div className="register-form">
                    <div className="reg-container">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="age">Age:</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                min="18"
                                max="65"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="yogaShift">Yoga Shift:</label>
                            <select
                                id="yogaShift"
                                name="yogaShift"
                                value={formData.yogaShift}
                                onChange={handleChange}
                                required
                            >
                                <option value="6-7AM">6-7AM</option>
                                <option value="7-8AM">7-8AM</option>
                                <option value="8-9AM">8-9AM</option>
                                <option value="5-6PM">5-6PM</option>
                            </select>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
