import React from 'react';
import { useInView } from '../hooks/useInView';
import Atharva from '../assets/Athrava.jpeg';
import Navin from '../assets/Navin.jpeg';
import Shubham from '../assets/Shubham.jpeg';
import Seo from '../components/Seo';
import '../styles/About.css';

function About() {
  const [heroRef, heroInView] = useInView({ threshold: 0.2 });
  const [mvRef, mvInView] = useInView({ threshold: 0.2 });
  const [teamRef, teamInView] = useInView({ threshold: 0.2 });

  return (
    <>
      <Seo
        title="About Us | Reliant Renewables"
        description="Discover the mission, vision, and values of Reliant Renewables, India's trusted partner in sustainable solar energy."
        keywords="About Reliant, Solar Company, Green Energy, Zero Capex, Solar EPC"
        canonical="https://reliantrenewables.in/about"
      />
      {/* Hero Section */}
      <section ref={heroRef} className={`about-hero-section fade-section${heroInView ? ' animate-in' : ''}`}>
        <div className="about-hero-bg" />
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Reliant Renewables</h1>
          <p className="about-hero-subtitle">
            Leading the way in sustainable energy solutions since 2015, with a commitment to excellence and environmental stewardship.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={mvRef} className={`mv-section fade-section${mvInView ? ' animate-in' : ''}`}>
        <div className="mv-container">
          <div className="mv-card">
            <div className="mv-circle" />
            <div className="mv-title">Our Mission</div>
            <div className="mv-desc">
              To accelerate the world's transition to sustainable energy by providing reliable, innovative solar solutions that empower homes and businesses to achieve energy independence while contributing to a cleaner planet.
            </div>
          </div>
          <div className="mv-card">
            <div className="mv-circle" />
            <div className="mv-title">Our Vision</div>
            <div className="mv-desc">
              To be the global leader in renewable energy solutions, creating a world where clean, sustainable power is accessible to all, driving positive environmental change for future generations.
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section ref={teamRef} className={`team-section fade-section${teamInView ? ' animate-in' : ''}`}>
        <div className="team-container">
          <h2 className="team-title">Our Leadership Team</h2>
          <p className="team-subtitle">
            Meet the experienced professionals driving innovation and excellence at Reliant Renewables.
          </p>
          <div className="team-cards">
            <div className="team-card">
              <div className="team-avatar-wrapper">
                <img className="team-avatar avatar-athrava" src={Atharva} alt="Atharva ChandraKant Devkar" />
              </div>
              <div className="team-name">Atharva ChandraKant Devkar</div>
              <div className="team-role">Chief Executive Officer</div>
              <div className="team-exp">5+ years of experience in renewable energy sector</div>
            </div>
            <div className="team-card">
              <div className="team-avatar-wrapper">
                <img className="team-avatar" src={Navin} alt="Navin" />
              </div>
              <div className="team-name">Navin Singh</div>
              <div className="team-role">Chief Technology Officer</div>
              <div className="team-exp">12+ years of experience in solar technology</div>
            </div>
            <div className="team-card">
              <div className="team-avatar-wrapper">
                <img className="team-avatar" src={Shubham} alt="Shubham" />
              </div>
              <div className="team-name">Shubham Borhade</div>
              <div className="team-role">Chief Operations Officer</div>
              <div className="team-exp">10+ years in operations management</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;