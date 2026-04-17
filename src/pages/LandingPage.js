import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import CountdownTimer from '../components/CountdownTimer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content animate-slide-left">
            <h1 className="hero-title">
              AI & Data Science <span className="gradient-text">Club</span>
            </h1>
            <p className="hero-subtitle">
              Empowering students through cutting-edge AI, machine learning, and data science education
            </p>
            <div className="hero-cta">
              <Link to="/join" className="btn btn-primary btn-lg">
                Join Our Community <FaArrowRight />
              </Link>
              <Link to="/overview" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image animate-slide-right">
            <div className="hero-graphic">
              <div className="gradient-orb orb1"></div>
              <div className="gradient-orb orb2"></div>
              <div className="hero-icon">
                <i className="fas fa-brain"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section section">
        <div className="container">
          <CountdownTimer 
            eventDate="2026-05-22T09:00:00" 
            eventName="🚀 Annual Hackathon 2026"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section section">
        <div className="container">
          <div className="section-title">
            <h2>Why Join AIDS Club?</h2>
          </div>
          <div className="grid grid-3">
            <div className="intro-card animate-fade">
              <div className="intro-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Learn & Grow</h3>
              <p>Access workshops, courses, and mentorship from industry experts to accelerate your learning journey.</p>
            </div>
            <div className="intro-card animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="intro-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3>Build Projects</h3>
              <p>Collaborate on real-world projects and challenges that make a difference in the AI and data science field.</p>
            </div>
            <div className="intro-card animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="intro-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>Network with 500+ passionate students and professionals in AI, ML, and data science.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section section bg-gradient">
        <div className="container">
          <div className="section-title">
            <h2>Club Highlights</h2>
          </div>
          <div className="grid grid-4">
            <div className="highlight-item">
              <div className="highlight-number">500+</div>
              <p>Active Members</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">50+</div>
              <p>Projects Completed</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">25+</div>
              <p>Events Per Year</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">10+</div>
              <p>Publications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section className="events-preview section">
        <div className="container">
          <div className="section-title">
            <h2>Upcoming Events</h2>
          </div>
          <div className="grid grid-3">
            <div className="event-card card animate-fade">
              <div className="event-badge">Workshop</div>
              <h3>AI & ML Workshop</h3>
              <p className="event-date"><i className="far fa-calendar"></i> May 15, 2026</p>
              <p>Learn the basics of deep learning with hands-on TensorFlow exercises.</p>
              <Link to="/events" className="read-more">
                Explore Events <FaArrowRight />
              </Link>
            </div>
            <div className="event-card card animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="event-badge hackathon">Hackathon</div>
              <h3>Data Hackathon 2026</h3>
              <p className="event-date"><i className="far fa-calendar"></i> May 22, 2026</p>
              <p>24-hour hackathon with real-world datasets and amazing prizes!</p>
              <Link to="/events" className="read-more">
                Explore Events <FaArrowRight />
              </Link>
            </div>
            <div className="event-card card animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="event-badge seminar">Seminar</div>
              <h3>AI & Future Discussion</h3>
              <p className="event-date"><i className="far fa-calendar"></i> June 5, 2026</p>
              <p>Industry experts discussing trends, challenges, and opportunities in AI.</p>
              <Link to="/events" className="read-more">
                Explore Events <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Link Section */}
      <section className="mission-link section">
        <div className="container">
          <div className="mission-card">
            <div className="mission-content animate-slide-left">
              <h2>Our Vision & Mission</h2>
              <p>
                Discover our commitment to fostering innovation, collaboration, and excellence in AI and Data Science education.
              </p>
              <Link to="/overview" className="btn btn-primary">
                Learn Our Vision <FaArrowRight />
              </Link>
            </div>
            <div className="mission-image animate-slide-right">
              <i className="fas fa-lightbulb"></i>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section bg-gradient">
        <div className="container text-center">
          <h2>Ready to Join the Future?</h2>
          <p>
            Be part of a thriving community of AI and Data Science enthusiasts. 
            <br />
            Start your journey today!
          </p>
          <Link to="/join" className="btn btn-secondary btn-lg">
            Join Our Club <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
