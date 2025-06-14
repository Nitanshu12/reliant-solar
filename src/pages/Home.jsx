import React from 'react';
import '../styles/HeroSection.css';
import { useInView } from '../hooks/useInView';
import logo from '../assets/logo.png';
import video from '../assets/video.mp4';
import About from '../assets/About.jpg';
import Process from '../assets/Process.jpg';
import Savings from '../assets/Savings.png';
import { Link } from 'react-router-dom';


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
            {[0,1,2].map((i) => (
              <div key={i} className="why-card fade-section animate-in">
                <div className="why-card-circle" />
                <h3 className="why-card-title">{['Eco-Friendly Solutions','Energy Efficiency','Reliability Guaranteed'][i]}</h3>
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
              Founded in 2015, Reliant Renewables has been at the forefront of solar energy innovation, helping homeowners and businesses transition to clean, renewable power sources.
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
                {['Consultation','Design','Installation','Activation'].map((step, i) => (
                  <div key={step} className="process-step fade-section animate-in">
                    <div className="process-icon-circle">
                      {i === 0 && (
                        // Chat icon
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" height="58" width="58" color='white'>
                          <path d="m68.738 63.73c1.9336 0 3.5898-0.60547 4.7305-1.7305 1.0859-1.0703 1.7266-2.6289 1.7266-4.6211v-23.602c0-1.9883-0.64062-3.5508-1.7266-4.6211-1.1406-1.125-2.7969-1.7305-4.7305-1.7305l-37.477 0.003907c-1.9336 0-3.5898 0.60547-4.7305 1.7305-1.0859 1.0703-1.7266 2.6289-1.7266 4.6211v23.602c0 1.9883 0.64062 3.5508 1.7266 4.6211 1.1406 1.125 2.7969 1.7305 4.7305 1.7305h12.137c0.38672 0 0.71875 0.21875 0.88672 0.54688l4.5938 7.4219 4.6406-7.4961c0.18359-0.30078 0.51172-0.46875 0.83984-0.46875zm6.1172-0.32422c-1.5195 1.4961-3.6602 2.3047-6.1133 2.3047h-13.836l-5.1797 8.3633c-0.39062 0.64062-1.3008 0.63672-1.6836 0.015625l-5.1914-8.375h-11.59c-4.9453 0-8.4336-3.2461-8.4336-8.3281v-23.602c0-5.0859 3.4883-8.3281 8.4336-8.3281h37.477c4.9453 0 8.4336 3.2461 8.4336 8.3281v23.602c0.003906 2.5391-0.86328 4.582-2.3164 6.0195z" fill-rule="evenodd"/>  
                        </svg>
                      )}
                      {i === 1 && (
                        // Design icon (pencil/ruler)
                        <svg width="58" height="58" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="19" cy="19" r="19" fill="#13705B"/>
                          <path d="M14 24L24 14M21.5 13.5L24.5 16.5M13.5 21.5L16.5 24.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                          <rect x="12.5" y="21.5" width="5" height="2" rx="1" transform="rotate(-45 12.5 21.5)" fill="#fff"/>
                        </svg>
                      )}
                      {i === 2 && (
                        // Wrench icon
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="19" cy="19" r="19" fill="#13705B"/>
                          <path d="M25.5 22.5L21.5 18.5M19.5 20.5C18.1193 21.8807 15.8807 21.8807 14.5 20.5C13.1193 19.1193 13.1193 16.8807 14.5 15.5C15.8807 14.1193 18.1193 14.1193 19.5 15.5C20.8807 16.8807 20.8807 19.1193 19.5 20.5Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {i === 3 && (
                        // Power icon
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="19" cy="19" r="19" fill="#13705B"/>
                          <path d="M19 11V19M24.5 15.5C26.9853 18.0147 26.9853 21.9853 24.5 24.5C22.0147 27.0147 18.0147 27.0147 15.5 24.5C13.0147 21.9853 13.0147 18.0147 15.5 15.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
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
            {[0,1,2].map((i) => (
              <div key={i} className="project-card fade-section animate-in">
                <div className="project-image-wrapper">
                  <img src={[
                    'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
                  ][i]} alt={`Project ${i+1}`} />
                </div>
                <div className="project-card-bottom" />
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
                <div className="testimonial-name">Michael Johnson</div>
                <div className="testimonial-role">Homeowner - Portland</div>
                <div className="testimonial-quote">"Switching to solar with Reliant Renewables was one of the best decisions we've made. The installation was quick and professional, and our energy bills have dropped by over 80%."</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-avatar" style={{ background: '#2176ae' }} />
              <div className="testimonial-content">
                <div className="testimonial-name">Sarah Thompson</div>
                <div className="testimonial-role">Business Owner - Sacramento</div>
                <div className="testimonial-quote">"Switching to solar with Reliant Renewables was one of the best decisions we've made. The installation was quick and professional, and our energy bills have dropped by over 80%."</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Home;