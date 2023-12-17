import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./payment.css";
import Navbar from "../../components/nav-bar";
import axios from 'axios';
import { store } from "../../App";


const Payment = () => {
    const [message, setMessage] = useState("");
    const [amount, setAmount] = useState(0);
    const [logEamil, setLogEmail] = useContext(store);
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = {
                    Email: logEamil,
                    date: formattedDate
                };

                const response = await axios.get("http://localhost:5000/api/amount", {
                    params: data
                });

                console.log(response.data);  // Do something with the response
                setMessage(response.data.message);
                setAmount(response.data.amount);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='payment'>
            <div className='payment-container'>
                <div className='navbar-container'>
                    <Navbar />
                </div>
                <div className='pay-con'>
                    <h1>Email: {logEamil}</h1>
                    <h2>Date: {formattedDate}</h2>
                    <h2>{message}</h2>
                    <h3>Amount: {amount}</h3>
                    <button >
                        <Link to="/payment" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Pay-Amount
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Payment;
