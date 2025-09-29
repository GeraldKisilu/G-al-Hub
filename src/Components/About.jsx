import React from "react";
import "./About.css";

// Image imports
import aboutImg from "../Components/Assets/about-goalhub.png";
import blogImg from "../Components/Assets/blog.jpeg";
import eventsImg from "../Components/Assets/events.jpeg";
import innovationImg from "../Components/Assets/innovation.jpeg";

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="overlay">
          <h1>Welcome to GoalHub Foundation</h1>
          <p>
            Where sports, wellness, and innovation come together to create
            unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <img src={aboutImg} alt="About GoalHub" className="about-img" />
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            GoalHub is more than a sports facility – it’s a lifestyle and
            community hub. With state-of-the-art turfs, a running track,
            basketball court, pool, cafeteria, and spacious grounds, we provide
            the perfect balance of fitness, leisure, and innovation. We’re
            dedicated to fostering talent, hosting unforgettable events, and
            building a healthier, more connected community.
          </p>
        </div>
      </section>

      {/* Blog and Innovation */}
      <section className="about-grid">
        <div className="grid-card">
          <img src={blogImg} alt="GoalHub Blog" />
          <h3>GoalHub Blog</h3>
          <p>
            Stay updated with our blog – covering training tips, community
            stories, health & wellness insights, and recaps from our most
            exciting events.
          </p>
        </div>
        <div className="grid-card">
          <img src={innovationImg} alt="Innovation at GoalHub" />
          <h3>Innovation & Future</h3>
          <p>
            We are committed to innovation – integrating technology in booking,
            performance tracking, and AI-driven training solutions for the
            future of fitness.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="about-section reverse">
        <div className="about-text">
          <h2>Events & Community</h2>
          <p>
            At GoalHub, the excitement never stops. From football tournaments
            and basketball leagues to car shows, park-and-chill hangouts, and
            concerts – we provide a dynamic venue where the community connects,
            competes, and celebrates together.
          </p>
        </div>
        <img src={eventsImg} alt="GoalHub Events" className="about-img" />
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Be Part of the GoalHub Experience</h2>
        <p>
          Book your training sessions, join our tournaments, or attend our
          community events today!
        </p>
        <div className="cta-buttons">
          <a href="/booking" className="btn">Book Services</a>
          <a href="/blog" className="btn secondary">Visit Blog</a>
        </div>
      </section>
    </div>
  );
}

export default About;
