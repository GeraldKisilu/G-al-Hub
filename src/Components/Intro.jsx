import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../Components/Assets/Goalhublogo.png";
import footballImg from "../Components/Assets/football.jpg";
import basketballImg from "../Components/Assets/basketball.jpg";
import poolImg from "../Components/Assets/pooltable.jpg";
import runningImg from "../Components/Assets/running.jpg";
import stretchingImg from "../Components/Assets/stretching.jpg";
import pitchImage from "../Components/Assets/pitch.avif";
import "./Intro.css";

function Intro() {
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const navigate = useNavigate();

  // Show intro container after small delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntroduction(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Show cards on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const introContainer = document.querySelector(".introduction-container");
      if (!introContainer) return;
      const introBottom = introContainer.getBoundingClientRect().bottom;

      if (scrollPosition > introBottom - windowHeight / 2) {
        setCardsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContinue = () => {
    navigate("/welcome");
  };

  // ✅ Define card routes
  const cardRoutes = {
    Carpetcare: "/carpetcare",
    Cafe: "/cafe",
    Track: "/track",
    Turfs: "/turfs",
    "Pool Table": "/pooltable",
  };

  return (
    <div className="intro">
      {/* ✅ Emoji Background */}
      <div className="emoji-bg">
        <span>⚽</span>
        <span>🏀</span>
        <span>🎱</span>
        <span>🏃‍♂️</span>
        <span>🤸‍♀️</span>
        <span>🏓</span>
        <span>⚽</span>
        <span>🏀</span>
        <span>🎱</span>
        <span>🏃‍♂️</span>
        <span>🤸‍♀️</span>
        <span>🏓</span>
        <span>⚽</span>
        <span>🏀</span>
        <span>🎱</span>
      </div>

      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="GoalHub Logo" />
          <span>GoalHub</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
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

      {/* ✅ Animated Logo */}
      <img
        src={logo}
        alt="Goal Hub Logo"
        className={`logo ${showIntroduction ? "move-up" : ""}`}
      />

      {/* ✅ Intro Section with Slideshow */}
      {showIntroduction && (
        <div className="introduction-container">
          <div className="slideshow">
            <div className="slides">
              <div className="slide"><img src={footballImg} alt="Football" /></div>
              <div className="slide"><img src={basketballImg} alt="Basketball" /></div>
              <div className="slide"><img src={poolImg} alt="Pool Table" /></div>
              <div className="slide"><img src={runningImg} alt="Running" /></div>
              <div className="slide"><img src={stretchingImg} alt="Stretching" /></div>
            </div>
          </div>

          {/* Overlay text */}
          <div className="intro-overlay">
            <h2>GoalHub Training and Fitness Centre</h2>
            <button onClick={handleContinue} className="continue-btn">
              Continue
            </button>
          </div>
        </div>
      )}

      {/* ✅ Cards Section */}
      <div className={`cards-container ${cardsVisible ? "cards-visible" : ""}`}>
        {Object.keys(cardRoutes).map((cardName) => (
          <div key={cardName} className="card">
            <img src={pitchImage} alt={cardName} className="card-image" />
            <div className="card-content">
              <h3>{cardName}</h3>
              <button
                className="view-button"
                onClick={() => navigate(cardRoutes[cardName])}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intro;
