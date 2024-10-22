import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons
import logo from '../Components/Assets/Goalhublogo.png';
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
            {/* Sidebar for social media icons */}
            <div className="social-bar">
                <a href="https://facebook.com/goalhub" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="social-icon" />
                </a>
                <a href="https://twitter.com/goalhub" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="social-icon" />
                </a>
                <a href="https://www.instagram.com/goalhub_254/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                </a>
            </div>

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
                    <button onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            )}
        </div>
    );
}

export default Intro;
