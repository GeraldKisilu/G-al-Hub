import React from 'react';
import logo from '../Components/Assets/Goalhublogo.png'; // Assuming this is your logo
import './Intro.css'; // Add this for your styling

function Intro() {
    return (
        <div className='intro'>
            <img src={logo} className="card-img-top" alt="Card Image" />
            {/* Card Component */}
            <div className="card" style={{ width: '18rem' }}>
                
                <div className="card-body">
                    <h5 className="card-title">Welcome to Goal Hub</h5>
                    <p className="card-text">
                        This is a training guidance app for kids to view their schedules, times, and activities. Enjoy the journey!
                    </p>
                    <a href="#" className="btn btn-primary">Get Started</a>
                </div>
            </div>
        </div>
    );
}

export default Intro;
