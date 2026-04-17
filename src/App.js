import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import OverviewPage from './pages/OverviewPage';
import EventsPage from './pages/EventsPage';
import ProjectsPage from './pages/ProjectsPage';
import PublicationsPage from './pages/PublicationsPage';
import TeamPage from './pages/TeamPage';
import AlumniPage from './pages/AlumniPage';
import ContactPage from './pages/ContactPage';
import JoinPage from './pages/JoinPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        
        <main className="main-content">
          <Routes>
            {/* Landing Page - Home Route */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Club Overview */}
            <Route path="/overview" element={<OverviewPage />} />
            
            {/* Events */}
            <Route path="/events" element={<EventsPage />} />
            
            {/* Projects and Challenges */}
            <Route path="/projects" element={<ProjectsPage />} />
            
            {/* Publications and News */}
            <Route path="/publications" element={<PublicationsPage />} />
            
            {/* Team Members */}
            <Route path="/team" element={<TeamPage />} />
            
            {/* Alumni */}
            <Route path="/alumni" element={<AlumniPage />} />
            
            {/* Contact Us */}
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Join Us - Membership */}
            <Route path="/join" element={<JoinPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
