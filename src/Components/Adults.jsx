// src/Components/Adults.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Adults.css';

const Adults = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="adults-container">
      <h1>Adult Training Schedule</h1>
      
      <div className="schedule">
        <h2>Morning Sessions</h2>
        <ul>
          <li>6:00 AM - 7:30 AM: Running on Track</li>
          <li>7:30 AM - 9:00 AM: Group Workout</li>
        </ul>

        <h2>Daytime Availability</h2>
        <p>Open for anyone who can make it during the day.</p>
        <ul>
          <li>10:00 AM - 12:00 PM: Running Track Open</li>
          <li>12:00 PM - 2:00 PM: Yoga and Meditation</li>
        </ul>

        <h2>Evening Sessions</h2>
        <ul>
          <li>5:00 PM - 6:30 PM: Running on Track</li>
          <li>6:30 PM - 8:00 PM: Strength Training at Gym</li>
        </ul>
        
        <p className="coming-soon">Coming Soon: Gym and Café!</p>
      </div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/welcome')}>
      ↩
      </button>
    </div>
  );
};

export default Adults;
