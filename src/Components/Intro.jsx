import React from 'react';
import logo from '../Components/Assets/Goalhublogo.png'; // Make sure this path is correct
import './Intro.css';

function Intro() {
    return (
        <div className='intro'>
            <img src={logo} alt="Goal Hub Logo" className="logo" />
        </div>
    );
}

export default Intro;
