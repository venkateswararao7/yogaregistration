import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { store } from "../../App";
import "../Login/login.css";

export default function Login() {
    const initialUser = {
        email: '',
        password: '',
    };

    const [logEmail, setLogEmail] = useContext(store);
    const [user, setUser] = useState(initialUser);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        setPasswordError(false); // Reset password error when the user types
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // Check if email and password are not empty
        if (!user.email || !user.password) {
            // Set password error and return, preventing the API call
            setPasswordError(true);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/create', user);
            console.log(response.data.message);
            if (response.data.message === 'OK') {
                setLogEmail(user.email);
                navigate('/home');
            } else {
                // Set password error if login is not successful
                setPasswordError(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="Login-page">
            <div className="Login">
                <div className="login-heading">
                    <h2>Welcome To The Yoga Class Registration</h2>
                </div>
                <div>
                    <div className="log-sym">
                        <LoginIcon />
                    </div>
                    <div className="log-details">
                        <form onSubmit={handleSubmit} method="post">
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="Enter Email"
                            />
                            <br />
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                placeholder="Password"
                                style={{ borderColor: passwordError ? 'red' : '' }}
                            />
                            <br />
                            <button className="log-button" type="submit">
                                Log In
                            </button>
                            {passwordError ? <h2 style={{ color: 'red' }}>Incorrect password</h2> : ""}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
