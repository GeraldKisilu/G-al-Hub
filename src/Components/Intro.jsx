import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import logo from '../Components/Assets/Goalhublogo.png';
import kidsBackground from '../Components/Assets/field.jpg';
import './Intro.css';

function Intro() {
    const [showIntroduction, setShowIntroduction] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate for redirection

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntroduction(true);
        }, 1000); // Show introduction after 1 second

        return () => clearTimeout(timer);
    }, []);

    const handleContinue = () => {
        navigate('/welcome'); // Redirect to Welcome.jsx
    };

    return (
        <div className='intro'>
            <img
                src={logo}
                alt="Goal Hub Logo"
                className={`logo ${showIntroduction ? 'move-up' : ''}`}
            />

            {showIntroduction && (
                <div className="introduction-container">
                    <div className="welcome-message">
                        <p className="typewriter">
                            Welcome to the <strong>Goal Hub</strong> training application! <br />
                            This app will guide you through your training schedule, practice events, and activities. <br />
                            If you want to know more about <strong>Goal Hub</strong>, <a href="https://goalhub.co.ke/" target="_blank" rel="noopener noreferrer">click here</a> to explore more!
                        </p>
                    </div>
                    <button onClick={() => window.location.href = '/welcome'}>
                        Continue
                    </button>
                </div>
            )}
        </div>
    );
}

export default Intro;
