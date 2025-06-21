import React from 'react';
import '../styles/Projects.css';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.jpeg';
import card6 from '../assets/card6.png';
import Seo from '../components/Seo';

const projects = [
  {
    img: card1,
    name: 'Ravet – 200 kW',
    desc: 'Premium residential society solarization project underway with long-term savings and centralized monitoring.'
  },
  {
    img: card2,
    name: 'Lohegaon – 180 kW',
    desc: 'A high-capacity rooftop solar system being installed for a mid-rise gated community with 24/7 uptime tracking.'
  },
  {
    img: card3,
    name: 'Dighi – 95 kW',
    desc: 'Mid-scale Residencial Housing Society solar integration, engineered for performance and sustainability.'
  },

];
const pastProjects = [
  {
    img: card4,
    name: 'Vadgaon Budruk – 51 kW',
    desc: 'Hotel and Lodge-focused solar project designed for maximum ROI with minimal disruption with Battery Energy Storage System.'
  },
  {
    img: card5,
    name: 'Dighi – 95 kW',
    desc: 'Mid-scale Residencial Housing Society solar integration, engineered for performance and sustainability.'
  },
  {
    img: card6,
    name: 'Bhosari – 25 kW',
    desc: 'Compact installation tailored for a Bunglow, emphasizing smart space optimization and efficient generation.'
  }

];

function Projects() {
  return (
    <div className="projects-page">
      <Seo
        title="Projects | Reliant Renewables"
        description="Explore our portfolio of successful solar installations and ongoing projects. Each project highlights our commitment to reliability and renewable energy innovation."
        keywords="Solar Projects, Solar Installations, Reliant Renewables"
        canonical="https://reliantrenewables.in/projects"
      />
      {/* Hero Section */}
      <section className="projects-hero-section">
        <div className="projects-hero-bg" />
        <div className="projects-hero-content">
          <h1 className="projects-hero-title">Our Projects</h1>
          <p className="projects-hero-subtitle">
            Explore our portfolio of successful solar installations and ongoing projects. Each project highlights our commitment to reliability and renewable energy innovation.
          </p>
        </div>
      </section>

      {/* Live Projects Section */}
      <section className="live-projects-section">
        <div className="live-projects-container">
          <h2 className="live-projects-title">Live Projects</h2>
          <div className="live-projects-cards">
            {projects.map((project, i) => (
              <div key={i} className="live-project-card">
                <div className="live-project-image-wrapper">
                  <img src={project.img} alt={project.name} className="live-project-image" />
                </div>
                <div className="live-project-info">
                  <div className="live-project-name">{project.name}</div>
                  <div className="live-project-desc">{project.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section className="past-projects-section">
        <div className="past-projects-container">
          <h2 className="past-projects-title">Past Projects</h2>
          <div className="past-projects-cards">
            {pastProjects.map((project, i) => (
              <div key={i} className="past-project-card">
                <div className="past-project-image-wrapper">
                  <img src={project.img} alt={project.name} className="past-project-image" />
                </div>
                <div className="past-project-info">
                  <div className="past-project-name">{project.name}</div>
                  <div className="past-project-desc">{project.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;