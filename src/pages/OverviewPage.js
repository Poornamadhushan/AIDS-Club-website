import React from 'react';
import { FaBullseye, FaEye, FaHandshake, FaRocket } from 'react-icons/fa';
import './OverviewPage.css';

const OverviewPage = () => {
  return (
    <div className="overview-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Vision & Mission</h1>
          <p>Shaping the future of AI and Data Science education</p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section vision-section">
        <div className="container">
          <div className="two-column">
            <div className="column content animate-slide-left">
              <div className="section-icon">
                <FaEye />
              </div>
              <h2>Our Vision</h2>
              <p>
                To become a leading hub for artificial intelligence and data science innovation, 
                fostering a community of passionate learners and creators who drive technological 
                advancement and contribute to solving real-world problems.
              </p>
              <ul className="vision-points">
                <li>
                  <span className="point-icon">✓</span>
                  <strong>Innovation First:</strong> Encouraging cutting-edge thinking and experimentation
                </li>
                <li>
                  <span className="point-icon">✓</span>
                  <strong>Community Driven:</strong> Building a supportive ecosystem of learners
                </li>
                <li>
                  <span className="point-icon">✓</span>
                  <strong>Impact Focused:</strong> Creating solutions that make a real difference
                </li>
                <li>
                  <span className="point-icon">✓</span>
                  <strong>Continuous Growth:</strong> Inspiring lifelong learning and development
                </li>
              </ul>
            </div>
            <div className="column image animate-slide-right">
              <i className="fas fa-telescope"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section bg-gradient">
        <div className="container">
          <div className="two-column reverse">
            <div className="column image animate-slide-left">
              <i className="fas fa-map"></i>
            </div>
            <div className="column content animate-slide-right">
              <div className="section-icon">
                <FaBullseye />
              </div>
              <h2>Our Mission</h2>
              <p>
                Our mission is to empower students with practical knowledge, hands-on experience, 
                and industry exposure in artificial intelligence, machine learning, and data science 
                through collaborative learning, innovative projects, and mentorship.
              </p>
              <ul className="mission-points">
                <li>
                  <span className="point-icon">→</span>
                  <strong>Education:</strong> Provide quality workshops, bootcamps, and training
                </li>
                <li>
                  <span className="point-icon">→</span>
                  <strong>Collaboration:</strong> Foster teamwork on meaningful projects
                </li>
                <li>
                  <span className="point-icon">→</span>
                  <strong>Mentorship:</strong> Connect students with industry experts
                </li>
                <li>
                  <span className="point-icon">→</span>
                  <strong>Career Growth:</strong> Prepare members for exciting career opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>Principles that guide everything we do</p>
          </div>
          <div className="grid grid-4">
            <div className="value-card animate-fade">
              <div className="value-icon">
                <FaRocket />
              </div>
              <h3>Innovation</h3>
              <p>
                We embrace creativity and push boundaries to discover novel solutions 
                and approaches in AI and Data Science.
              </p>
            </div>
            <div className="value-card animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h3>Collaboration</h3>
              <p>
                We believe in the power of teamwork, sharing knowledge, and growing 
                together as a community.
              </p>
            </div>
            <div className="value-card animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="value-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Excellence</h3>
              <p>
                We strive for the highest standards in our work, projects, and 
                commitment to continuous improvement.
              </p>
            </div>
            <div className="value-card animate-fade" style={{ animationDelay: '0.3s' }}>
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Inclusivity</h3>
              <p>
                We welcome everyone regardless of background and foster an environment 
                where all voices are heard and valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Membership Section */}
      <section className="section membership-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Join AIDS Club?</h2>
          </div>
          <div className="grid grid-2">
            <div className="benefit-card card animate-fade">
              <i className="benefit-icon fas fa-book"></i>
              <h3>Learn Cutting-Edge Skills</h3>
              <p>
                Gain hands-on experience with the latest AI, ML, and data science technologies 
                through workshops and bootcamps led by experts.
              </p>
            </div>
            <div className="benefit-card card animate-fade" style={{ animationDelay: '0.1s' }}>
              <i className="benefit-icon fas fa-project-diagram"></i>
              <h3>Work on Real Projects</h3>
              <p>
                Contribute to meaningful projects that solve real-world problems and build 
                a strong portfolio for your career.
              </p>
            </div>
            <div className="benefit-card card animate-fade" style={{ animationDelay: '0.2s' }}>
              <i className="benefit-icon fas fa-network-wired"></i>
              <h3>Network & Mentorship</h3>
              <p>
                Connect with industry professionals, alumni, and like-minded peers who are 
                passionate about the same fields.
              </p>
            </div>
            <div className="benefit-card card animate-fade" style={{ animationDelay: '0.3s' }}>
              <i className="benefit-icon fas fa-trophy"></i>
              <h3>Competitions & Recognition</h3>
              <p>
                Participate in hackathons, competitions, and challenges to showcase your skills 
                and win awards and recognition.
              </p>
            </div>
            <div className="benefit-card card animate-fade" style={{ animationDelay: '0.4s' }}>
              <i className="benefit-icon fas fa-calendar-alt"></i>
              <h3>Diverse Events</h3>
              <p>
                Enjoy seminars, workshops, webinars, and meetups with industry experts and 
                thought leaders in AI and Data Science.
              </p>
            </div>
            <div className="benefit-card card animate-fade" style={{ animationDelay: '0.5s' }}>
              <i className="benefit-icon fas fa-rocket"></i>
              <h3>Career Opportunities</h3>
              <p>
                Get exposed to internship and job opportunities with leading companies through 
                our industry partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section bg-gradient">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box animate-fade">
              <div className="stat-number">500+</div>
              <p>Active Members</p>
              <span className="stat-label">Passionate learners</span>
            </div>
            <div className="stat-box animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="stat-number">5+</div>
              <p>Years Active</p>
              <span className="stat-label">Building community</span>
            </div>
            <div className="stat-box animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="stat-number">50+</div>
              <p>Projects</p>
              <span className="stat-label">Real-world solutions</span>
            </div>
            <div className="stat-box animate-fade" style={{ animationDelay: '0.3s' }}>
              <div className="stat-number">100+</div>
              <p>Alumni</p>
              <span className="stat-label">Industry professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-final">
        <div className="container text-center">
          <h2>Ready to Join Our Community?</h2>
          <p>
            Become part of the fastest-growing AI and Data Science community on campus.
            Start your journey with us today!
          </p>
          <a href="/join" className="btn btn-primary btn-lg">
            Join Now & Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default OverviewPage;
