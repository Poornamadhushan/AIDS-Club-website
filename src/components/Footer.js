import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaHeart } from 'react-icons/fa';
import clubLogo from '../AIclub3d.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-3">

          {/* About Section */}
          <div className="footer-section animate-fade">
            <Link to="/" className="footer-logo">
              <img src={clubLogo} alt="DatAInspire Logo" className="footer-club-logo" />
              <div className="footer-club-info">
                <span className="footer-club-name">AI & Data Science Club</span>
                <span className="footer-club-uni">KDU</span>
              </div>
            </Link>
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/overview">Overview</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
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
                <FaHeart /> Made with passion by DatAInspire
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <hr className="footer-divider" />
          <p className="copyright">
            © {currentYear} AI & Data Science Club — General Sir John Kotelawala Defence University. All rights reserved. |{' '}
            <Link to="/">Home</Link> |{' '}
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;