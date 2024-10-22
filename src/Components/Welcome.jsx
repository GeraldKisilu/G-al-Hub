import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import kidsBackground from '../Components/Assets/kids.jpg';
import './Welcome.css';

function Welcome() {
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    const handleCategorySelection = (category) => {
        console.log(`Selected category: ${category}`);
        if (category === 'Kids') {
            navigate('/kids'); // Navigate to Kids component
        } else if (category === 'Adults') {
            navigate('/adults'); // Navigate to Adults component
        }
    };

    return (
        <div className='welcome-container'>
            <button className="back-button" onClick={() => navigate('/')}>↩</button>
            <div className="welcome-message">
                <h1>Welcome to Goal Hub!</h1>
                <p>We are excited to have you here. Let’s get started on your training journey and select the category of your preference!</p>
            </div>
            {/* Category selection buttons */}
            <div className="category-selection">
                <button onClick={() => handleCategorySelection('Kids')}>Kids</button>
                <button onClick={() => handleCategorySelection('Adults')}>Adults</button>
            </div>
        </div>
    );
}

export default Welcome;
