import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons
import logo from '../Components/Assets/Goalhublogo.png';
import pitchImage from '../Components/Assets/pitch.avif'; // Assuming you have the pitch image
import './Intro.css';

function Intro() {
    const [showIntroduction, setShowIntroduction] = useState(false);
    const [cardsVisible, setCardsVisible] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate for redirection

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntroduction(true);
        }, 1000); // Show introduction after 1 second

        return () => clearTimeout(timer);
    }, []);

    // Scroll effect to show cards once the user scrolls
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const introContainer = document.querySelector('.introduction-container');
            const introBottom = introContainer.getBoundingClientRect().bottom;

            // When scrolling past the intro container, cards become visible
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
        navigate('/welcome'); // Redirect to Welcome.jsx
    };

    return (
        <div className='intro'>
            {/* Sidebar for social media icons */}
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

            {/* Cards section */}
            <div className={`cards-container ${cardsVisible ? 'cards-visible' : ''}`}>
                {['Gym', 'Cafe', 'Track', 'Pitch', 'Sponsorships'].map((cardName) => (
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
            <footer className="footer">
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
            </footer>
        </div>
    );
}

export default Intro;
