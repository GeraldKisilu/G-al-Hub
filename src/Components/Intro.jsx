import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../Components/Assets/Goalhublogo.png';
import pitchImage from '../Components/Assets/pitch.avif';
import './Intro.css';

function Intro() {
    const [showIntroduction, setShowIntroduction] = useState(false);
    const [cardsVisible, setCardsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntroduction(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const introContainer = document.querySelector('.introduction-container');
            const introBottom = introContainer.getBoundingClientRect().bottom;

            if (scrollPosition > introBottom - windowHeight / 2) {
                setCardsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleContinue = () => {
        navigate('/welcome');
    };

    return (
        <div className='intro'>
            <div className="social-bar">
                <a href="https://facebook.com/goalhub_254" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="social-icon" />
                </a>
                <a href="https://twitter.com/goalhub_254" target="_blank" rel="noopener noreferrer">
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
                        
                    </div>
                    <button onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            )}

            <div className={`cards-container ${cardsVisible ? 'cards-visible' : ''}`}>
                {['Carpetcare', 'Cafe', 'Track', 'Playgrounds'].map((cardName) => (
                    <div key={cardName} className="card">
                        <img src={pitchImage} alt={`${cardName}`} className="card-image" />
                        <div className="card-content">
                            <h3>{cardName}</h3>
                            <button className="view-button">View</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Section */}
            {/* <footer className="footer">
                <div className="footer-content">
                    <div className="billing-info">
                        <img src="/path-to-mpesa-logo" alt="Mpesa Logo" className="mpesa-logo" />
                        <p><strong>Location:</strong> Acacia Feeder - Namanga Road Intersection</p>
                        <p><strong>Time:</strong> Daily from 6:00 AM to 11:00 PM</p>
                    </div>
                    <div className="activities">
                        <strong>Activities:</strong>
                        <ul>
                            <li>Floodlights</li>
                            <li>Astroturf Pitches</li>
                            <li>Court Sports</li>
                            <li>Football Academy</li>
                            <li>Walking and Running Track</li>
                        </ul>
                    </div>
                    <div className="contact-info">
                        <p><strong>Call Us:</strong> +254 740 266 811</p>
                        <p><strong>Email:</strong> <a href="mailto:info@goalhub.co.ke">info@goalhub.co.ke</a></p>
                        <p><strong>Website:</strong> <a href="https://www.goalhub.co.ke">www.goalhub.co.ke</a></p>
                        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/goalhub_254/">@goalhubke</a></p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <img src="/path-to-small-goalhub-logo" alt="Goalhub Logo" className="footer-logo" />
                    <p>&copy; 2024 Gerald Kisilu</p>
                </div>
            </footer> */}
        </div>
    );
}

export default Intro;


