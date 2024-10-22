import React from 'react';
import './Kids.css'; // Import the CSS for styling
import under18 from '../Components/Assets/under18.jpg'; // Adjust the path as needed

function Kids() {
    const trainingSchedule = [
        {
            time: '9:00 AM - 9:30 AM',
            activity: 'Warm-Up',
            description: 'Light jogging and dynamic stretching to prepare the body for training.'
        },
        {
            time: '9:30 AM - 10:15 AM',
            activity: 'Dribbling Drills',
            description: 'Practice dribbling with cones to improve ball control and agility.'
        },
        {
            time: '10:15 AM - 10:30 AM',
            activity: 'Break',
            description: 'Short break to hydrate and rest.'
        },
        {
            time: '10:30 AM - 11:15 AM',
            activity: 'Sprinting Drills',
            description: 'Sprint exercises to enhance speed and quickness.'
        },
        {
            time: '11:15 AM - 12:00 PM',
            activity: 'Ladder Drills',
            description: 'Use agility ladders to improve footwork and coordination.'
        },
        {
            time: '12:00 PM - 12:30 PM',
            activity: 'Lunch Break',
            description: 'Healthy lunch to refuel for the second half of training.'
        },
        {
            time: '12:30 PM - 1:15 PM',
            activity: 'Penalty Shootouts',
            description: 'Practice penalty kicks to improve accuracy and confidence in front of goal.'
        },
        {
            time: '1:15 PM - 2:00 PM',
            activity: 'Free Kicks',
            description: 'Work on free kick techniques and positioning.'
        },
        {
            time: '2:00 PM - 3:00 PM',
            activity: 'Friendly Matches',
            description: 'Split into teams and play matches to apply skills learned during training.'
        },
        {
            time: '3:00 PM - 3:15 PM',
            activity: 'Cool Down',
            description: 'Gentle stretching to help recover and prevent injuries.'
        },
    ];

    return (
        <div className="kids-container">
            <div className="kids-content">
                <h1>Kids Football Training</h1>
                <p>Welcome to the Kids Training section! Here, we focus on developing essential football skills while having fun. Below is the training schedule for the weekend:</p>
                
                <div className="schedule">
                    <h2>Training Schedule</h2>
                    <ul>
                        {trainingSchedule.map((session, index) => (
                            <li key={index} className="session">
                                <h3>{session.time}: {session.activity}</h3>
                                <p>{session.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Kids;
