import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import clubLogo from '../AIclub3dnew.png';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Club Branding - Left Side */}
        <Link to="/" className="nav-club-branding" onClick={handleLogoClick}>
          <img src={clubLogo} alt="AI & Data Science Club Logo" className="club-logo" />
          <div className="club-info">
            <span className="club-name">AI & Data Science Club</span>
            <span className="club-university">General Sir John Kotelawala Defence University</span>
          </div>
        </Link>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/overview" className="nav-link" onClick={handleLinkClick}>
              Overview
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link" onClick={handleLinkClick}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={handleLinkClick}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/publications" className="nav-link" onClick={handleLinkClick}>
              Publications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-link" onClick={handleLinkClick}>
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/alumni" className="nav-link" onClick={handleLinkClick}>
              Alumni
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/join" className="nav-link nav-btn" onClick={handleLinkClick}>
              Join Us
            </Link>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;