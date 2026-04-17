import React, { useState } from 'react';
import { FaGithub, FaFilter } from 'react-icons/fa';
import { projects, challenges } from '../data/membersData';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [projectFilter, setProjectFilter] = useState('all');
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = [...new Set(projects.flatMap(p => p.tags))];
  
  const filteredProjects = projects.filter(project => {
    if (selectedTag) return project.tags.includes(selectedTag);
    if (projectFilter === 'completed') return project.status === 'Completed';
    if (projectFilter === 'inprogress') return project.status === 'In Progress';
    return true;
  });

  return (
    <div className="projects-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Projects & Challenges</h1>
          <p>Explore our innovative projects and join exciting challenges</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section">
        <div className="container">
          <div className="section-title">
            <h2>Club Projects</h2>
            <p>Real-world solutions built by our community</p>
          </div>

          {/* Filter Controls */}
          <div className="filter-controls">
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${projectFilter === 'all' ? 'active' : ''}`}
                onClick={() => setProjectFilter('all')}
              >
                <FaFilter /> All Projects
              </button>
              <button 
                className={`filter-btn ${projectFilter === 'completed' ? 'active' : ''}`}
                onClick={() => setProjectFilter('completed')}
              >
                Completed
              </button>
              <button 
                className={`filter-btn ${projectFilter === 'inprogress' ? 'active' : ''}`}
                onClick={() => setProjectFilter('inprogress')}
              >
                In Progress
              </button>
            </div>

            {/* Tag Filter */}
            <div className="tag-filter">
              <button
                className={`tag-btn ${selectedTag === null ? 'active' : ''}`}
                onClick={() => setSelectedTag(null)}
              >
                All Tags
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`tag-btn ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card card animate-fade" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-status" data-status={project.status.toLowerCase().replace(' ', '-')}>
                    {project.status}
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag" onClick={() => setSelectedTag(tag)}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <i className="fas fa-search"></i>
              <h3>No projects found</h3>
              <p>Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section challenges-section bg-gradient">
        <div className="container">
          <div className="section-title">
            <h2>Open Challenges</h2>
            <p>Test your skills and win amazing prizes!</p>
          </div>

          <div className="challenges-grid">
            {challenges.map((challenge, index) => (
              <div key={challenge.id} className="challenge-card card animate-fade" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="challenge-header">
                  <h3>{challenge.title}</h3>
                  <span className={`difficulty ${challenge.difficulty.toLowerCase()}`}>
                    {challenge.difficulty}
                  </span>
                </div>

                <p className="challenge-description">{challenge.description}</p>

                <div className="challenge-details">
                  <div className="detail-item">
                    <span className="label">Dataset:</span>
                    <span className="value">{challenge.dataset}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Deadline:</span>
                    <span className="value">
                      {new Date(challenge.deadline).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Participants:</span>
                    <span className="value">{challenge.participants}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Rewards:</span>
                    <span className="value reward">{challenge.rewards}</span>
                  </div>
                </div>

                <button className="btn btn-primary" style={{ width: '100%' }}>
                  Join Challenge
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="section getting-started">
        <div className="container">
          <div className="section-title">
            <h2>How to Participate</h2>
          </div>

          <div className="steps-grid">
            <div className="step-card animate-fade">
              <div className="step-number">1</div>
              <h4>Browse Projects</h4>
              <p>Explore our current projects and challenges</p>
            </div>
            <div className="step-card animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="step-number">2</div>
              <h4>Join a Team</h4>
              <p>Find a project that interests you and join</p>
            </div>
            <div className="step-card animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="step-number">3</div>
              <h4>Collaborate</h4>
              <p>Work with team members on the project</p>
            </div>
            <div className="step-card animate-fade" style={{ animationDelay: '0.3s' }}>
              <div className="step-number">4</div>
              <h4>Submit & Win</h4>
              <p>Complete and submit your project</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Ready to Work on Something Amazing?</h2>
          <p>Choose a project or challenge and start building today!</p>
          <a href="/join" className="btn btn-primary btn-lg">
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
