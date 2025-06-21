import React from 'react';
import '../styles/HeroSection.css';
import { useInView } from '../hooks/useInView';
import logo from '../assets/logo.png';
import video from '../assets/video.mp4';
import About from '../assets/About.jpg';
import Process from '../assets/Process.jpg';
import Savings from '../assets/Savings.png';
import { Link } from 'react-router-dom';
import { MdDesignServices } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";
import { RiInstallLine } from "react-icons/ri";
import { IoMdPower } from "react-icons/io";
import { ImPowerCord } from "react-icons/im";
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import Seo from '../components/Seo';

function Home() {
  // Hero Section
  const [heroRef, heroInView] = useInView({ threshold: 0.2 });
  // Why Choose
  const [whyRef, whyInView] = useInView({ threshold: 0.2 });
  // About
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  // Process
  const [processRef, processInView] = useInView({ threshold: 0.2 });
  // Projects
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });
  // Savings
  const [savingsRef, savingsInView] = useInView({ threshold: 0.2 });
  // Testimonials
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.2 });
  // CTA
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2 });

  return (
    <>
      <Seo
        title="Home | Reliant Renewables - Zero Capex Solar Company"
        description="Empowering India with rooftop solar solutions at zero upfront cost. Trusted solar EPC company across Pune and beyond."
        keywords="Solar, Rooftop Solar, Zero Capex Solar, Solar Company India, Reliant Renewables"
        canonical="https://reliantrenewables.in/"
      />
      <section ref={heroRef} className={`hero-section fade-section${heroInView ? ' animate-in' : ''}`}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">Where Reliability Meets<br />Renewable Energy</h1>
            <p className="hero-subtitle">
              Powering a sustainable future with innovative solar solutions that deliver reliability, efficiency, and peace of mind.
            </p>
            <div className="hero-buttons">
              <Link to="/contact">
                <button className="hero-btn hero-btn-yellow">Get a Free Quote</button>
              </Link>
              <Link to="/about">
                <button className="hero-btn hero-btn-outline">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="hero-right">
            {/* Replace src with your video/image as needed */}
            <div className="hero-media">
              <video src={video} autoPlay loop muted playsInline />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section ref={whyRef} className={`why-choose-section fade-section${whyInView ? ' animate-in' : ''}`}>
        <div className="why-choose-container">
          <h2 className="why-choose-title">Why Choose Reliant Renewables?</h2>
          <p className="why-choose-subtitle">
            We deliver exceptional solar energy solutions that combine cutting-edge technology with unmatched reliability.
          </p>
          <div className="why-choose-cards">
            {[0, 1, 2].map((i) => (
              <div key={i} className="why-card fade-section animate-in">
                <div className="why-card-circle" />
                <h3 className="why-card-title">{['Eco-Friendly Solutions', 'Energy Efficiency', 'Reliability Guaranteed'][i]}</h3>
                <p className="why-card-desc">
                  {[
                    'Reduce your carbon footprint with our sustainable solar energy systems designed for maximum environmental impact.',
                    'Our systems are optimized for maximum energy production, ensuring you get the most value from your investment.',
                    'With industry-leading warranties and expert maintenance, your solar system will perform reliably for decades.'
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className={`about-section fade-section${aboutInView ? ' animate-in' : ''}`}>
        <div className="about-container">
          <div className="about-image-placeholder">
            <img src={About} alt="About" />
          </div>
          <div className="about-content">
            <h2 className="about-title">About Reliant Renewables</h2>
            <p className="about-desc">
              Founded in 2020, Reliant Renewables has been at the forefront of solar energy innovation, helping homeowners and businesses transition to clean, renewable power sources.
            </p>
            <p className="about-desc">
              Our team of certified experts brings decades of combined experience in renewable energy solutions, ensuring every project is completed to the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Process Section */}
      <section ref={processRef} className={`process-section fade-section${processInView ? ' animate-in' : ''}`}>
        <div className="process-container">
          <div className="process-header">
            <h2 className="process-title">Our Simple Process</h2>
            <p className="process-subtitle">
              We make going solar easy with our straightforward, customer-focused approach.
            </p>
          </div>
          <div className="process-content">
            <div className="process-left">
              <div className="process-steps">
                {['Consultation', 'Design', 'Installation', 'Activation'].map((step, i) => (
                  <div key={step} className="process-step fade-section animate-in">
                    <div className="process-icon-circle">
                      {i === 0 && (
                        <IoChatboxOutline color='white' strokeWidth={7} />
                      )}
                      {i === 1 && (
                        <MdDesignServices color='white' />
                      )}
                      {i === 2 && (
                        <ImPowerCord color='white' />
                      )}
                      {i === 3 && (
                        <IoMdPower color='white' />
                      )}
                    </div>
                    <div>
                      <div className="process-step-title">{step}</div>
                      <div className="process-step-desc">We assess your energy needs and provide a detailed proposal tailored to your requirements.</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="process-right">
              <img className="process-image" src={Process} alt="Solar workers" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Projects Section */}
      <section ref={projectsRef} className={`projects-section fade-section${projectsInView ? ' animate-in' : ''}`}>
        <div className="projects-container">
          <h2 className="projects-title">Our Features Projects</h2>
          <p className="projects-subtitle">
            Explore some of our most impactful solar installations that have helped our clients achieve energy independence.
          </p>
          <div className="projects-cards">
            {[
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
              }
            ].map((project, i) => (
              <div key={i} className="project-card fade-section animate-in">
                <div className="project-image-half">
                  <img src={project.img} alt={project.name} />
                </div>
                <div className="project-info-half">
                  <div className="project-name">{project.name}</div>
                  <div className="project-desc">{project.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="projects-btn-wrapper">
            <Link to="/projects">
              <button className="projects-btn">All Projects</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Calculate Your Solar Savings Section */}
      <section ref={savingsRef} className={`savings-section fade-section${savingsInView ? ' animate-in' : ''}`}>
        <div className="savings-container">
          <div className="savings-left">
            <h2 className="savings-title">Calculate Your Solar Savings</h2>
            <p className="savings-desc">
              Our interactive RESCO Cost & Profit Calculator helps you understand the financial benefits of switching to solar energy.
            </p>
            <ul className="savings-list">
              <li><span className="savings-dot" />Estimate your potential energy production</li>
              <li><span className="savings-dot" />Calculate monthly and annual savings</li>
              <li><span className="savings-dot" />Determine your return on investment</li>
              <li><span className="savings-dot" />View environmental impact metrics</li>
            </ul>
            <Link to="/calculator">
              <button className="savings-btn">Try Our Calculator</button>
            </Link>
          </div>
          <div className="savings-right">
            <img className="savings-image" src={Savings} alt="Solar Dashboard" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className={`testimonials-section fade-section${testimonialsInView ? ' animate-in' : ''}`}>
        <div className="testimonials-container">
          <h2 className="testimonials-title">What Our clients Say</h2>
          <p className="testimonials-subtitle">
            Hear from homeowners and businesses who have made the switch to solar energy with Reliant Renewables.
          </p>
          <div className="testimonials-cards">
            <div className="testimonial-card">
              <div className="testimonial-avatar" style={{ background: '#2176ae' }} />
              <div className="testimonial-content">
                <div className="testimonial-name">Himanshu Bagdi</div>
                <div className="testimonial-role">Owner, Hanuman Hardware</div>
                <div className="testimonial-quote">"I was struggling with rising electricity bills at my shop. Reliant Renewables provided a solar solution with zero upfront cost, and now I only pay for what I consume — at a much lower rate. The system has been running smoothly, and the savings are visible every month. It’s one of the best business decisions I’ve made."</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-avatar" style={{ background: '#2176ae' }} />
              <div className="testimonial-content">
                <div className="testimonial-name">Shubham Lande</div>
                <div className="testimonial-role">Individual Solar Adopter</div>
                <div className="testimonial-quote">"I always wanted to shift to solar, but I wasn't sure where to begin. Reliant Renewables made it easy. Their team guided me through every step — from understanding the technicals to installation. Now I generate clean energy and save money every month. More importantly, I feel proud to be contributing to a sustainable future."</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={ctaRef} className={`cta-section fade-section${ctaInView ? ' animate-in' : ''}`}>
        <div className="cta-container">
          <h2 className="cta-title">Ready to Harness the Power of the Sun?</h2>
          <p className="cta-subtitle">
            Join thousands of satisfied customers who have made the switch to clean, renewable solar energy with Reliant Renewables.
          </p>
          <div className="cta-btns">
            <Link to="/contact">
              <button className="cta-btn cta-btn-primary">Get a Free Consultation</button>
            </Link>
            <Link to="/calculator">
              <button className="cta-btn cta-btn-outline">Calculate Your Savings</button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;