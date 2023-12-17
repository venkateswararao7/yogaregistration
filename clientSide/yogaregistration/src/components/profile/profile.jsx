import React, { useContext, useState } from 'react';
import Navbar from '../nav-bar';
import "./profile.css";
import { store } from '../../App';
import axios from 'axios';

export default function Profile() {
    const [logEmail, setLogEmail] = useContext(store);
    const [userExists, setUserExists] = useState(false);
    const [yogashift, setShift] = useState({
        email: logEmail,
        shift: "6-7AM",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const l = ["6-7AM", "7-8AM", "8-9AM", "5-6PM"];

    function handleChange(e) {
        const { value } = e.target;
        setShift({ ...yogashift, shif: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.put('http://localhost:5000/api/changeshift', yogashift);
            setErrorMessage(response.data.message);
            setUserExists(true); // Assuming the response indicates that the user exists
        } catch (error) {
            if (error.response && error.response.data.message === "Student not found") {
                setErrorMessage("Student not found");
            } else {
                console.error('Error updating shift:', error);
            }
        }
    }

    return (
        <div className='profile'>
            <div className='profile-container'>
                <div className='navbar-container'>
                    <Navbar />
                </div>
                <div className='prof-con'>
                    <h2>Email: {logEmail}</h2>
                    <h3>Do you want to change shifts</h3>
                    <div className='form-center'>
                        <form onSubmit={handleSubmit} className="form-container">
                            <select
                                id="yogaShift"
                                name="yogaShift"
                                className='form-selection'
                                value={yogashift.shift}
                                onChange={handleChange}
                                required
                            >
                                {l.map((s, index) => (
                                    <option key={index} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                            <br />
                            <br />
                            <input type='submit' className='btn-button' />
                        </form>
                        {userExists && <p style={{ color: 'green' }}>{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
