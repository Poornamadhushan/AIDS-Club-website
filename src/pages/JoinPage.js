import React, { useState } from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import './JoinPage.css';

const JoinPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interests: [],
    experience: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const interests = ['AI/ML', 'Data Science', 'Web Development', 'Computer Vision', 'NLP', 'Data Visualization'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store in localStorage
    const memberships = JSON.parse(localStorage.getItem('memberships') || '[]');
    memberships.push({
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    });
    localStorage.setItem('memberships', JSON.stringify(memberships));
    
    setSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interests: [],
      experience: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="join-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Join Our Community</h1>
          <p>Become part of the fastest-growing AI and Data Science Club</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Join AIDS Club?</h2>
          </div>

          <div className="grid grid-3">
            <div className="benefit-item card animate-fade">
              <i className="fas fa-graduation-cap"></i>
              <h3>Learn & Grow</h3>
              <p>Access workshops, bootcamps, and mentorship from industry experts</p>
            </div>
            <div className="benefit-item card animate-fade" style={{ animationDelay: '0.1s' }}>
              <i className="fas fa-project-diagram"></i>
              <h3>Build Projects</h3>
              <p>Work on real-world projects and build your professional portfolio</p>
            </div>
            <div className="benefit-item card animate-fade" style={{ animationDelay: '0.2s' }}>
              <i className="fas fa-network-wired"></i>
              <h3>Network</h3>
              <p>Connect with 500+ like-minded individuals and industry professionals</p>
            </div>
            <div className="benefit-item card animate-fade" style={{ animationDelay: '0.3s' }}>
              <i className="fas fa-trophy"></i>
              <h3>Competitions</h3>
              <p>Participate in hackathons and competitions with great prizes</p>
            </div>
            <div className="benefit-item card animate-fade" style={{ animationDelay: '0.4s' }}>
              <i className="fas fa-briefcase"></i>
              <h3>Career Growth</h3>
              <p>Get internship and job opportunities from top companies</p>
            </div>
            <div className="benefit-item card animate-fade" style={{ animationDelay: '0.5s' }}>
              <i className="fas fa-star"></i>
              <h3>Community</h3>
              <p>Be part of a supportive community that celebrates your growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form Section */}
      <section className="section form-section bg-gradient">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Complete Your Application</h2>
              <p>Fill out the form below and we'll send you a welcome package!</p>
            </div>

            {submitted && (
              <div className="success-message animate-fade">
                <FaCheckCircle className="success-icon" />
                <h4>Welcome Aboard!</h4>
                <p>Your membership application has been received. We'll contact you soon with next steps!</p>
                <p className="success-details">Check your email for a welcome message and community guidelines.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="membership-form">
              {/* Personal Info */}
              <fieldset className="form-section-group">
                <legend>Personal Information</legend>
                
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-row">
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
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Interests */}
              <fieldset className="form-section-group">
                <legend>Your Interests *</legend>
                <p className="form-hint">Select all that apply</p>
                
                <div className="interests-grid">
                  {interests.map(interest => (
                    <label key={interest} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Experience */}
              <fieldset className="form-section-group">
                <legend>Experience Level *</legend>
                
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="experience"
                      value="beginner"
                      checked={formData.experience === 'beginner'}
                      onChange={handleChange}
                      required
                    />
                    <span>Beginner - Just starting my journey</span>
                  </label>

                  <label className="radio-label">
                    <input
                      type="radio"
                      name="experience"
                      value="intermediate"
                      checked={formData.experience === 'intermediate'}
                      onChange={handleChange}
                    />
                    <span>Intermediate - Some experience with AI/ML</span>
                  </label>

                  <label className="radio-label">
                    <input
                      type="radio"
                      name="experience"
                      value="advanced"
                      checked={formData.experience === 'advanced'}
                      onChange={handleChange}
                    />
                    <span>Advanced - Substantial experience</span>
                  </label>
                </div>
              </fieldset>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Tell us about yourself (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are your goals? What motivated you to join?"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                Join the Club <FaArrowRight />
              </button>

              <p className="form-notice">
                By joining, you agree to our community guidelines and Code of Conduct.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="section next-steps">
        <div className="container">
          <div className="section-title">
            <h2>What Happens Next?</h2>
          </div>

          <div className="steps-timeline">
            <div className="timeline-item animate-fade">
              <div className="timeline-number">1</div>
              <h4>Application Submitted</h4>
              <p>Your membership application is received and reviewed</p>
            </div>
            <div className="timeline-separator"></div>
            <div className="timeline-item animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="timeline-number">2</div>
              <h4>Welcome Email</h4>
              <p>Receive a welcome email with community guidelines and Discord link</p>
            </div>
            <div className="timeline-separator"></div>
            <div className="timeline-item animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="timeline-number">3</div>
              <h4>Join Community</h4>
              <p>Join our Discord and attend your first meeting or event</p>
            </div>
            <div className="timeline-separator"></div>
            <div className="timeline-item animate-fade" style={{ animationDelay: '0.3s' }}>
              <div className="timeline-number">4</div>
              <h4>Start Learning</h4>
              <p>Pick a project, join a team, and start your AI/ML journey!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section requirements">
        <div className="container">
          <div className="section-title">
            <h2>Membership Requirements</h2>
          </div>

          <div className="grid grid-2">
            <div className="requirement-card card animate-fade">
              <FaCheckCircle className="requirement-icon" />
              <h4>Be a Student</h4>
              <p>Currently enrolled at KDU or participating institution</p>
            </div>
            <div className="requirement-card card animate-fade" style={{ animationDelay: '0.1s' }}>
              <FaCheckCircle className="requirement-icon" />
              <h4>Passion for AI/Data Science</h4>
              <p>Genuine interest in learning and growing in these fields</p>
            </div>
            <div className="requirement-card card animate-fade" style={{ animationDelay: '0.2s' }}>
              <FaCheckCircle className="requirement-icon" />
              <h4>Active Participation</h4>
              <p>Commitment to attending events and contributing to projects</p>
            </div>
            <div className="requirement-card card animate-fade" style={{ animationDelay: '0.3s' }}>
              <FaCheckCircle className="requirement-icon" />
              <h4>Community Spirit</h4>
              <p>Support and uplift fellow members in the community</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section bg-gradient">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>Is there a membership fee?</h4>
              <p>No! AIDS Club membership is completely free. All events and workshops are open to members at no cost.</p>
            </div>
            <div className="faq-item">
              <h4>Do I need prior experience?</h4>
              <p>Not at all! We welcome members at all levels, from complete beginners to advanced practitioners.</p>
            </div>
            <div className="faq-item">
              <h4>How often do we meet?</h4>
              <p>We have weekly meetings, monthly hackathons, and regular workshops. You choose how much to participate!</p>
            </div>
            <div className="faq-item">
              <h4>Can I join if I'm not a CS student?</h4>
              <p>Absolutely! We welcome members from all disciplines. AI and Data Science are interdisciplinary fields.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-final">
        <div className="container text-center">
          <h2>Start Your AI & Data Science Journey Today!</h2>
          <p>Join 500+ students who are learning, building, and growing together</p>
          <button onClick={() => document.querySelector('.membership-form').scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary btn-lg">
            Continue to Application
          </button>
        </div>
      </section>
    </div>
  );
};

export default JoinPage;
