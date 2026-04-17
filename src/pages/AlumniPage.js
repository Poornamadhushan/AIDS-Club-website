import React from 'react';
import { FaLinkedin, FaAward } from 'react-icons/fa';
import { alumniMembers } from '../data/membersData';
import './AlumniPage.css';

const AlumniPage = () => {
  return (
    <div className="alumni-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Alumni</h1>
          <p>Celebrating our successful members who've gone on to make an impact</p>
        </div>
      </section>

      {/* Alumni Introduction */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <p>
              Our alumni have gone on to become leaders, innovators, and experts in the field of 
              AI and Data Science. They continue to inspire and support our current members. 
              Here are some of the remarkable achievements of our alumni community.
            </p>
          </div>
        </div>
      </section>

      {/* Alumni Grid */}
      <section className="section alumni-section">
        <div className="container">
          <div className="alumni-grid">
            {alumniMembers.map((alumni, index) => (
              <div key={alumni.id} className="alumni-card card animate-fade" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Profile Image */}
                <div className="alumni-image-wrapper">
                  <img src={alumni.image} alt={alumni.name} className="alumni-image" />
                  <div className="achievement-badge">
                    <FaAward /> Achievement
                  </div>
                </div>

                {/* Alumni Info */}
                <div className="alumni-info">
                  <h3>{alumni.name}</h3>
                  <p className="alumni-former-role">{alumni.role}</p>

                  <div className="achievement-box">
                    <h4>Current Role</h4>
                    <p className="achievement-text">{alumni.achievement}</p>
                  </div>

                  <p className="alumni-fun-fact">
                    <span className="fact-icon">✨</span> {alumni.funFact}
                  </p>

                  {/* LinkedIn Link */}
                  <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                    <FaLinkedin /> Connect on LinkedIn
                  </a>

                  {/* Message */}
                  <div className="alumni-message">
                    <p>"Proud to be part of AIDS Club and continue supporting the community!"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Achievements */}
      <section className="section achievements-section bg-gradient">
        <div className="container">
          <div className="section-title">
            <h2>Alumni Achievements</h2>
          </div>

          <div className="achievements-grid">
            <div className="achievement-item animate-fade">
              <i className="fas fa-briefcase"></i>
              <h4>50+</h4>
              <p>In Top Tech Companies</p>
            </div>
            <div className="achievement-item animate-fade" style={{ animationDelay: '0.1s' }}>
              <i className="fas fa-graduation-cap"></i>
              <h4>100+</h4>
              <p>Pursuing Advanced Degrees</p>
            </div>
            <div className="achievement-item animate-fade" style={{ animationDelay: '0.2s' }}>
              <i className="fas fa-star"></i>
              <h4>25+</h4>
              <p>Research Publications</p>
            </div>
            <div className="achievement-item animate-fade" style={{ animationDelay: '0.3s' }}>
              <i className="fas fa-rocket"></i>
              <h4>15+</h4>
              <p>Startups Founded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Stories */}
      <section className="section stories-section">
        <div className="container">
          <div className="section-title">
            <h2>Alumni Success Stories</h2>
            <p>Inspiring journeys from our community members</p>
          </div>

          <div className="grid grid-2">
            <div className="story-card card animate-fade">
              <h4>From Club Member to Google Engineer</h4>
              <p>
                After joining the club 3 years ago, I went from coding basics to landing a position 
                at Google as an ML Engineer. The projects and mentorship through the club were instrumental 
                in my success.
              </p>
              <p className="story-author">— Dr. Sarah Chen, Alumni</p>
            </div>
            <div className="story-card card animate-fade" style={{ animationDelay: '0.1s' }}>
              <h4>Building a Startup with Club Knowledge</h4>
              <p>
                The club taught me not just technical skills, but also how to collaborate and lead a team. 
                These lessons were crucial when I co-founded our AI startup that's now raised $2M in funding.
              </p>
              <p className="story-author">— John Smith, Founder & Alumni</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Opportunities */}
      <section className="section mentorship-section">
        <div className="container text-center">
          <h2>Stay Connected</h2>
          <p>Our alumni remain an integral part of the AIDS Club community</p>

          <div className="mentorship-grid">
            <div className="mentorship-item">
              <i className="fas fa-users-teaching"></i>
              <h4>Alumni Mentorship</h4>
              <p>Current members can connect with alumni for guidance and advice</p>
            </div>
            <div className="mentorship-item">
              <i className="fas fa-briefcase"></i>
              <h4>Career Opportunities</h4>
              <p>Alumni help connect members with internships and job opportunities</p>
            </div>
            <div className="mentorship-item">
              <i className="fas fa-network-wired"></i>
              <h4>Professional Network</h4>
              <p>Build lasting connections with successful professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Ready to Become a Part of Our Success Story?</h2>
          <p>Join AIDS Club today and start your journey to becoming a successful AI professional!</p>
          <a href="/join" className="btn btn-primary btn-lg">
            Join the Club
          </a>
        </div>
      </section>
    </div>
  );
};

export default AlumniPage;
