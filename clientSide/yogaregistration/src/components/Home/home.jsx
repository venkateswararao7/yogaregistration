import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
import Navbar from '../nav-bar';
const Home = () => {

    return (
        <div className='Home-container'>
            <div className="home">
                <div className='container'>
                    <Navbar />
                </div>
                <div className='home-welcome'>
                    <h1>
                        Welcome To The Yoga Registration.
                    </h1>
                    <button className='home-btn'>
                        <Link to="/register" className='reg'>
                            Register
                        </Link>

                    </button>
                    <br />
                    <br />
                    <button className='home-btn'>
                        <Link to="/payment" className='reg'>
                            payment
                        </Link>
                    </button>
                    <br />
                    <br />
                    <button className='home-btn'>
                        <Link to="/profile" className='reg'>
                            profile
                        </Link>

                    </button>
                    <h2>
                        Choose the available above options
                    </h2>
                </div>
            </div>


        </div>
    );
};

export default Home;
