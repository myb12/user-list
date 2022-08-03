import React from 'react';
import { BsDot } from 'react-icons/bs';

const TopBar = () => {
    return (
        <div className='top-bar'>
            <h5>User List</h5>
            <div className="dot-wrapper">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default TopBar;