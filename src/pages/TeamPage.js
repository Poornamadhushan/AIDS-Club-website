import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { teamMembers } from '../data/membersData';
import './TeamPage.css';

const TeamPage = () => {
  return (
    <div className="team-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Team</h1>
          <p>Meet the amazing people behind AIDS Club</p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="section intro-section">
        <div className="container text-center">
          <p className="intro-text">
            Our diverse and talented team is composed of passionate AI enthusiasts, 
            data science experts, and creative innovators working together to build 
            an amazing community and deliver exceptional projects.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="member-card animate-fade" style={{ animationDelay: `${(index % 6) * 0.1}s` }}>
                {/* Profile Image */}
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="member-links">
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="link-btn github" title="GitHub">
                        <FaGithub />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="link-btn linkedin" title="LinkedIn">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  
                  {/* Fun Fact */}
                  <div className="fun-fact">
                    <span className="fact-label">Fun Fact:</span>
                    <p className="fact-text">{member.funFact}</p>
                  </div>

                  {/* Social Links in Card */}
                  <div className="member-social-links">
                    <a href={member.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                      GitHub
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section stats-section bg-gradient">
        <div className="container">
          <div className="section-title">
            <h2>Team Statistics</h2>
          </div>

          <div className="stats-grid">
            <div className="stat-item animate-fade">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-number">{teamMembers.length}</div>
              <p>Team Members</p>
            </div>
            <div className="stat-item animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="stat-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="stat-number">100%</div>
              <p>Dedication</p>
            </div>
            <div className="stat-item animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="stat-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="stat-number">50+</div>
              <p>Projects</p>
            </div>
            <div className="stat-item animate-fade" style={{ animationDelay: '0.3s' }}>
              <div className="stat-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <div className="stat-number">500+</div>
              <p>Community Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-title">
            <h2>What We Value</h2>
          </div>

          <div className="grid grid-3">
            <div className="value-item card animate-fade">
              <i className="fas fa-lightbulb"></i>
              <h4>Innovation</h4>
              <p>We constantly explore new ideas and technologies to stay ahead in AI and Data Science.</p>
            </div>
            <div className="value-item card animate-fade" style={{ animationDelay: '0.1s' }}>
              <i className="fas fa-handshake"></i>
              <h4>Collaboration</h4>
              <p>Our strength lies in teamwork and the diverse perspectives of our talented members.</p>
            </div>
            <div className="value-item card animate-fade" style={{ animationDelay: '0.2s' }}>
              <i className="fas fa-rocket"></i>
              <h4>Excellence</h4>
              <p>We strive for excellence in every project and initiative we undertake.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="section join-team-section">
        <div className="container text-center">
          <h2>Want to Join Our Team?</h2>
          <p>We're always looking for passionate individuals who want to make a difference in AI and Data Science.</p>
          <a href="/join" className="btn btn-primary btn-lg">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
