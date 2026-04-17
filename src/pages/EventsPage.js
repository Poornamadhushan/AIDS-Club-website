import React, { useState } from 'react';
import { FaCalendar, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { upcomingEvents, pastEvents } from '../data/membersData';
import './EventsPage.css';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const events = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className="events-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Events & Activities</h1>
          <p>Join us for workshops, hackathons, seminars, and more!</p>
        </div>
      </section>

      {/* Tab Section */}
      <section className="section">
        <div className="container">
          <div className="tabs-container">
            <div className="tabs">
              <button
                className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
                onClick={() => setActiveTab('upcoming')}
              >
                <span className="tab-label">Upcoming Events</span>
                <span className="tab-count">{upcomingEvents.length}</span>
              </button>
              <button
                className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
                onClick={() => setActiveTab('past')}
              >
                <span className="tab-label">Past Events</span>
                <span className="tab-count">{pastEvents.length}</span>
              </button>
            </div>
            <div className="tab-indicator"></div>
          </div>

          {/* Events Grid */}
          <div className={`events-grid ${activeTab}-tab`}>
            {events.map((event, index) => (
              <div key={event.id} className="event-card card animate-fade" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-category">{event.category}</div>
                </div>

                <div className="event-content">
                  <h3>{event.title}</h3>

                  <div className="event-meta">
                    <div className="meta-item">
                      <FaCalendar className="meta-icon" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                      {event.time && <span className="time">{event.time}</span>}
                    </div>
                    
                    {event.location && (
                      <div className="meta-item">
                        <FaMapMarkerAlt className="meta-icon" />
                        <span>{event.location}</span>
                      </div>
                    )}

                    {event.capacity && (
                      <div className="meta-item">
                        <FaUsers className="meta-icon" />
                        <span>{event.registered}/{event.capacity} Registered</span>
                      </div>
                    )}

                    {event.attendance && (
                      <div className="meta-item">
                        <FaUsers className="meta-icon" />
                        <span>{event.attendance} Attendees</span>
                      </div>
                    )}
                  </div>

                  <p className="event-description">{event.description}</p>

                  {activeTab === 'upcoming' && (
                    <button className="btn btn-primary btn-sm">Register Now</button>
                  )}

                  {activeTab === 'past' && (
                    <div className="past-event-info">
                      <span className="badge">Completed</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {events.length === 0 && (
            <div className="empty-state">
              <i className="fas fa-calendar-check"></i>
              <h3>No events found</h3>
              <p>Check back soon for upcoming events!</p>
            </div>
          )}
        </div>
      </section>

      {/* Event Category Legend */}
      <section className="section legend-section bg-gradient">
        <div className="container">
          <div className="section-title">
            <h2>Event Categories</h2>
          </div>
          <div className="grid grid-4">
            <div className="legend-item">
              <div className="legend-badge workshop">Workshop</div>
              <p>Hands-on learning sessions with practical exercises</p>
            </div>
            <div className="legend-item">
              <div className="legend-badge hackathon">Hackathon</div>
              <p>Competitive coding and problem-solving challenges</p>
            </div>
            <div className="legend-item">
              <div className="legend-badge seminar">Seminar</div>
              <p>Expert talks and industry insights</p>
            </div>
            <div className="legend-item">
              <div className="legend-badge bootcamp">Bootcamp</div>
              <p>Intensive training programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Don't Miss Out!</h2>
          <p>Stay updated with all our events and seminars</p>
          <button className="btn btn-primary btn-lg">Subscribe to Updates</button>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
