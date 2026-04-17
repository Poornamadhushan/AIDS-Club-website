import React, { useState } from 'react';
import { FaCalendar, FaUser, FaClock, FaArrowRight } from 'react-icons/fa';
import { publications } from '../data/membersData';
import './PublicationsPage.css';

const PublicationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(publications.map(p => p.category))];
  
  const filteredPublications = selectedCategory === 'all' 
    ? publications 
    : publications.filter(p => p.category === selectedCategory);

  return (
    <div className="publications-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Publications & News</h1>
          <p>Stay updated with the latest news, articles, and insights</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section filter-section">
        <div className="container">
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredPublications.length > 0 && (
        <section className="section featured-section">
          <div className="container">
            <div className="featured-article">
              <div className="featured-image">
                <img src={filteredPublications[0].image} alt={filteredPublications[0].title} />
              </div>
              <div className="featured-content">
                <span className="featured-badge">{filteredPublications[0].category} - Fresh</span>
                <h2>{filteredPublications[0].title}</h2>
                <p>{filteredPublications[0].excerpt}</p>
                
                <div className="article-meta">
                  <div className="meta-item">
                    <FaUser /> <span>{filteredPublications[0].author}</span>
                  </div>
                  <div className="meta-item">
                    <FaCalendar /> <span>{new Date(filteredPublications[0].date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="meta-item">
                    <FaClock /> <span>{filteredPublications[0].readTime}</span>
                  </div>
                </div>

                <a href={filteredPublications[0].link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read Full Article <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section articles-section">
        <div className="container">
          <div className="section-title">
            <h2>Latest Articles</h2>
          </div>

          <div className="articles-grid">
            {filteredPublications.slice(1).map((publication, index) => (
              <article key={publication.id} className="article-card card animate-fade" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="article-image">
                  <img src={publication.image} alt={publication.title} />
                  <span className="category-badge">{publication.category}</span>
                </div>

                <div className="article-content">
                  <h3>{publication.title}</h3>
                  
                  <div className="article-excerpt">
                    <p>{publication.excerpt}</p>
                  </div>

                  <div className="article-footer">
                    <div className="article-meta-compact">
                      <span className="author">
                        <FaUser /> {publication.author}
                      </span>
                      <span className="read-time">
                        <FaClock /> {publication.readTime}
                      </span>
                    </div>

                    <div className="article-date">
                      <FaCalendar /> {new Date(publication.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>

                  <a href={publication.link} target="_blank" rel="noopener noreferrer" className="read-more">
                    Read Article <FaArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="empty-state">
              <i className="fas fa-newspaper"></i>
              <h3>No articles found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section newsletter-section bg-gradient">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Subscribe to Our Newsletter</h2>
              <p>Get the latest news, articles, and updates delivered to your inbox every week.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
              <button type="submit" className="btn btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Categories Info */}
      <section className="section categories-info">
        <div className="container">
          <div className="section-title">
            <h2>Content Categories</h2>
          </div>

          <div className="grid grid-3">
            <div className="category-card card animate-fade">
              <i className="fas fa-article"></i>
              <h4>Articles</h4>
              <p>In-depth articles covering AI, ML, and data science topics</p>
            </div>
            <div className="category-card card animate-fade" style={{ animationDelay: '0.1s' }}>
              <i className="fas fa-book"></i>
              <h4>Tutorials</h4>
              <p>Step-by-step tutorials and how-to guides</p>
            </div>
            <div className="category-card card animate-fade" style={{ animationDelay: '0.2s' }}>
              <i className="fas fa-newspaper"></i>
              <h4>News</h4>
              <p>Latest news and announcements from our club</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Have Something to Share?</h2>
          <p>We're always looking for great content from our community members.</p>
          <a href="mailto:club@example.com" className="btn btn-primary btn-lg">
            Submit Your Content
          </a>
        </div>
      </section>
    </div>
  );
};

export default PublicationsPage;
