import React from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import QuizIcon from '@mui/icons-material/Quiz';
import Person2Icon from '@mui/icons-material/Person2';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-container'>
                <Link to="/home" className='nav-icons'>
                    <HomeIcon className='icon' />
                    <h2>Home</h2>
                </Link>
                <Link to="/calender" className='nav-icons'>
                    <LeaderboardIcon className='icon' />
                    <h2>calender</h2>
                </Link>
                <Link to="/payment" className='nav-icons'>
                    <QuizIcon className='icon' />
                    <h2>payment</h2>
                </Link>
                <Link to="/profile" className='nav-icons'>
                    <Person2Icon className='icon' />
                    <h2>Profile</h2>
                </Link>
                <Link to="/register" className='nav-icons'>
                    <AddCommentOutlinedIcon className='icon' />
                    <h2>Register</h2>
                </Link>
            </div>
        </div>
    )
}

export default Navbar