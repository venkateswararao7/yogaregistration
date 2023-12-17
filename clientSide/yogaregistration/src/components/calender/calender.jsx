import React from 'react'
import "./calender.css";
import Navbar from '../nav-bar';
import image from './image.jpg';
function calender() {
    return (
        <div className='calender'>
            <div className='calender-container'>
                <div className='navbar-container'>
                    <Navbar />
                </div>
                <div className='cal-con'>
                    <img src={image} alt="calendar" className='calender-image' />
                </div>
            </div>

        </div>
    )
}

export default calender