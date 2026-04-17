import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-3">
          {/* About Section */}
          <div className="footer-section animate-fade">
            <div className="footer-logo">
              <span className="logo-gradient">AIDS</span>
              <span className="logo-text">Club</span>
            </div>
            <p>
              Empowering students through AI and Data Science education, projects, and community building.
            </p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section animate-fade" style={{ animationDelay: '0.1s' }}>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/overview">Overview</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section animate-fade" style={{ animationDelay: '0.2s' }}>
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <p>
                <FaEnvelope /> <a href="mailto:club@example.com">club@example.com</a>
              </p>
              <p>
                <FaWhatsapp /> <a href="https://wa.me/1234567890">+1 (234) 567-8900</a>
              </p>
              <p>
                <FaHeart /> Made with passion by AIDS Club
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <hr className="footer-divider" />
          <p className="copyright">
            © {currentYear} AI and Data Science Club. All rights reserved. | 
            <a href="/">Home</a> | 
            <a href="/contact">Contact</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
