import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store in localStorage
    const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    inquiries.push({
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    });
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
    
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have questions? We'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="info-card card animate-fade">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>Get in touch via email</p>
              <a href="mailto:club@example.com" className="contact-link">
                club@example.com
              </a>
            </div>

            <div className="info-card card animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="info-icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <p>Call us during office hours</p>
              <a href="tel:+1234567890" className="contact-link">
                +1 (234) 567-8900
              </a>
            </div>

            <div className="info-card card animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="info-icon">
                <FaWhatsapp />
              </div>
              <h3>WhatsApp</h3>
              <p>Chat with us on WhatsApp</p>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="contact-link">
                +1 (234) 567-8900
              </a>
            </div>

            <div className="info-card card animate-fade" style={{ animationDelay: '0.3s' }}>
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Location</h3>
              <p>Visit us at our office</p>
              <p className="location-text">KDU, Main Campus<br/>Tech Building, Room 205</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section form-section bg-gradient">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-content">
              <div className="section-title">
                <h2>Send us a Message</h2>
                <p>Fill out the form and we'll get back to you as soon as possible</p>
              </div>

              {submitted && (
                <div className="success-message animate-fade">
                  <FaCheckCircle className="success-icon" />
                  <h4>Thank You!</h4>
                  <p>Your message has been received. We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us what you'd like to discuss..."
                    rows="6"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-item">
                <h4>What are your office hours?</h4>
                <p>We're available Monday to Friday, 10 AM - 6 PM</p>
              </div>
              <div className="faq-item">
                <h4>How quickly will I receive a response?</h4>
                <p>We typically respond within 24 hours</p>
              </div>
              <div className="faq-item">
                <h4>Can I visit in person?</h4>
                <p>Yes! Visit us in Tech Building, Room 205</p>
              </div>
              <div className="faq-item">
                <h4>How do I become a member?</h4>
                <p>Click the "Join Us" button in the navigation to fill out the membership form</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Connect Section */}
      <section className="section quick-connect">
        <div className="container text-center">
          <h2>Need Quick Help?</h2>
          <p>Choose your preferred way to connect with us</p>

          <div className="quick-actions">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="quick-btn whatsapp">
              <FaWhatsapp /> Chat on WhatsApp
            </a>
            <a href="mailto:club@example.com" className="quick-btn email">
              <FaEnvelope /> Send Email
            </a>
            <a href="tel:+1234567890" className="quick-btn phone">
              <FaPhone /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Looking to Join?</h2>
          <p>Don't just contact us, become part of the AIDS Club community!</p>
          <a href="/join" className="btn btn-primary btn-lg">
            Join the Club
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
