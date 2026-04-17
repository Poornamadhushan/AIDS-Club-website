import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={handleLinkClick}>
          <span className="logo-gradient">AIDS</span>
          <span className="logo-text">Club</span>
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
