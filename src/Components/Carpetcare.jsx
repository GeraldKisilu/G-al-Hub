import React from "react";
import "./Carpetcare.css";

const Carpetcare = () => {
  return (
    <div className="carpetcare-container">
      {/* Hero Section */}
      <section className="carpetcare-hero">
        <h1>🧼 Express Carpet Care</h1>
        <p>
          Fast, Fresh, and Flawless! We collect, clean, and deliver your carpets
          within <strong>24 hours</strong> — using modern, eco-friendly
          technology for a spotless finish.
        </p>
      </section>

      {/* Animation Section */}
      <section className="animation-section">
        <div className="scene">
          {/* Background */}
          <svg
            className="bg-svg"
            viewBox="0 0 1200 300"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="hillGrad" x1="0" x2="1">
                <stop offset="0" stopColor="#005f99" />
                <stop offset="1" stopColor="#0099cc" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="transparent" />
            <ellipse
              className="hill"
              cx="300"
              cy="250"
              rx="450"
              ry="90"
              fill="url(#hillGrad)"
              opacity="0.25"
            />
            <ellipse
              className="hill2"
              cx="900"
              cy="270"
              rx="400"
              ry="70"
              fill="url(#hillGrad)"
              opacity="0.18"
            />
            <rect y="240" width="100%" height="60" fill="#192841" />
          </svg>

          {/* Van - Collection */}
          <div className="vehicle van">
            <svg viewBox="0 0 200 100">
              <rect x="10" y="30" width="120" height="40" rx="8" fill="#00bfff" />
              <rect x="110" y="18" width="60" height="52" rx="6" fill="#007acc" />
              <rect x="24" y="38" width="40" height="24" rx="4" fill="#ffffff33" />
              <text x="18" y="56" className="van-label">CarpetCare</text>
              <circle cx="40" cy="78" r="10" fill="#111" />
              <circle cx="130" cy="78" r="10" fill="#111" />
            </svg>
          </div>

          {/* Washer - Cleaning */}
          <div className="washer">
            <svg viewBox="0 0 160 140">
              <rect
                x="6"
                y="10"
                width="148"
                height="120"
                rx="12"
                fill="#ffffff10"
                stroke="#00bfff"
                strokeWidth="3"
              />
              <circle
                cx="80"
                cy="70"
                r="36"
                fill="#ffffff20"
                stroke="#00e6ff"
                strokeWidth="3"
              />
              <g className="bubbles">
                <circle cx="58" cy="55" r="4" fill="#fff" opacity="0.9" />
                <circle cx="72" cy="40" r="6" fill="#fff" opacity="0.8" />
                <circle cx="96" cy="50" r="3" fill="#fff" opacity="0.85" />
                <circle cx="88" cy="35" r="5" fill="#fff" opacity="0.7" />
              </g>
              <text x="20" y="115" className="washer-label">Deep Clean</text>
            </svg>
          </div>

          {/* Truck - Delivery */}
          <div className="vehicle truck">
            <svg viewBox="0 0 220 100">
              <rect x="10" y="26" width="140" height="44" rx="8" fill="#004d99" />
              <rect x="150" y="34" width="50" height="36" rx="6" fill="#0099cc" />
              <text x="24" y="54" className="truck-label">Delivery</text>
              <circle cx="48" cy="78" r="10" fill="#111" />
              <circle cx="170" cy="78" r="10" fill="#111" />
            </svg>
          </div>

          {/* House + Sparkles */}
          <div className="setup">
            <svg viewBox="0 0 120 120">
              <polygon points="20,55 60,25 100,55" fill="#00bfff66" />
              <rect
                x="20"
                y="55"
                width="80"
                height="50"
                rx="6"
                fill="#fff1"
                stroke="#00e6ff"
                strokeWidth="2"
              />
              <g className="sparkles">
                <polygon
                  className="star s1"
                  points="88,40 90,46 96,46 92,50 94,56 88,52 82,56 84,50 80,46 86,46"
                  fill="#fff"
                  opacity="0"
                />
                <polygon
                  className="star s2"
                  points="36,48 38,52 44,52 40,56 42,60 36,58 30,60 32,56 28,52 34,52"
                  fill="#fff"
                  opacity="0"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Caption */}
        <div className="carpet-caption">
          <h3>Express Carpet Care</h3>
          <p>
            🚚 Picked up, cleaned with modern tech, delivered, and set — all in
            24 hours.
          </p>
          <button className="cartoon-cta">📅 Book Now</button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-card">
        <h3>📞 Contact Us</h3>
        <p>
          Location: Acacia Feeder–Namanga Road Intersection <br />
          Email: info@goalhub.co.ke | Website: www.goalhub.co.ke <br />
          Phone: +254 740 266 811 <br />
          Open Daily: 6:00 AM – 11:00 PM
        </p>
      </section>

      {/* Feedback Section */}
      <section className="feedback-section">
        <h3>💬 Customer Feedback</h3>
        <div className="feedback-cards">
          <div className="feedback-card">
            <p>“My carpets were spotless and smelled amazing! Great service.”</p>
            <strong>- Aisha K.</strong>
          </div>
          <div className="feedback-card">
            <p>“Fast and reliable — they delivered within a day as promised!”</p>
            <strong>- Brian M.</strong>
          </div>
          <div className="feedback-card">
            <p>“Professional and friendly staff, highly recommend GoalHub.”</p>
            <strong>- Mercy L.</strong>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carpetcare;
