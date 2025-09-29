import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../Components/Assets/Goalhublogo.png";
import "./Carpetcare.css";

function CarpetCare() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you for your feedback!");
    setFeedback({ name: "", email: "", rating: "", message: "" });
  };

  const navigate = useNavigate();

  return (
    <div className="carpetcare">
      {/* ✅ Emoji Background */}
      <div className="emoji-bg">
        <span>⚽</span>
        <span>🏀</span>
        <span>🎱</span>
        <span>🏃‍♂️</span>
        <span>🤸‍♀️</span>
        <span>🏓</span>
        <span>🏐</span>
        <span>🥊</span>
        <span>🏸</span>
        <span>⛹️‍♂️</span>
      </div>

      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <img src={logo} alt="GoalHub Logo" />
          <span>GoalHub</span>
        </div>
        <ul className="navbar-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/services")}>Services</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </nav>

      {/* ✅ Social bar */}
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

      {/* ✅ Content */}
      <div className="carpetcare-container">
        <h1>Carpet Care Services</h1>
        <p>
          At <strong>GoalHub CarpetCare</strong>, we specialize in professional
          carpet pick-up, deep cleaning, and delivery right to your doorstep. 
          Our goal is to ensure your carpets are fresh, hygienic, and spotless.
        </p>

        {/* Services section */}
        <div className="service-section">
          <div className="service-card">
            <h3>🚚 Pick-Up</h3>
            <p>We collect your carpets from your location, hassle-free.</p>
          </div>
          <div className="service-card">
            <h3>🧼 Cleaning</h3>
            <p>Our experts use modern techniques to deep clean and sanitize.</p>
          </div>
          <div className="service-card">
            <h3>📦 Delivery</h3>
            <p>Clean carpets delivered back to you in record time.</p>
          </div>
        </div>

        {/* Payment section */}
        <div className="payment-section">
          <h2>💳 Payments</h2>
          <p>We accept payments via:</p>
          <ul>
            <li>✔️ Mpesa</li>
            <li>✔️ PayPal</li>
            <li>✔️ Credit/Debit Card</li>
          </ul>
        </div>

        {/* Feedback form */}
        <div className="feedback-section">
          <h2>📝 Client Feedback</h2>
          <form onSubmit={handleFeedbackSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={feedback.name}
              onChange={handleFeedbackChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={feedback.email}
              onChange={handleFeedbackChange}
              required
            />
            <select
              name="rating"
              value={feedback.rating}
              onChange={handleFeedbackChange}
              required
            >
              <option value="">Rate Us</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="2">⭐⭐ Fair</option>
              <option value="1">⭐ Poor</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Feedback"
              value={feedback.message}
              onChange={handleFeedbackChange}
              required
            />
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CarpetCare;
