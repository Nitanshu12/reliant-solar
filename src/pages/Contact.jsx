import React from 'react';
import '../styles/Contact.css';
import heroBg from '../assets/contact.jpg';
// You can use react-icons for icons if desired
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLink, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact us</h1>
          <p className="contact-hero-subtitle">
            Get in touch with Reliant Renewables. Fill out the form below or use the provided links for quick support and resources.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          {/* Contact Form */}
          <div className="contact-form-block">
            <h2 className="contact-form-title">Sends Us a Message</h2>
            <form className="contact-form"
              action="https://formspree.io/f/xanjdoey"
              method="POST">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" />

              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email address" />

              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Type your message here" />

              <button type="submit" className="contact-form-btn">Sends us a Message</button>
            </form>
          </div>

          {/* Quick Links & Info */}
          <div className="contact-info-block">
            <h2 className="contact-info-title">Quick Links & Information</h2>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <FaMapMarkerAlt className="contact-info-icon" />
                <div>
                  <strong>Head Office</strong><br />
                  456 Solar Park Drive<br />
                  Dallas, TX 75201, USA<br />
                  <a href="https://maps.google.com/?q=456+Solar+Park+Drive+Dallas+TX+75201" target="_blank" rel="noopener noreferrer" className="contact-info-link">View on Map</a>
                </div>
              </div>
              <div className="contact-info-item">
                <FaEnvelope className="contact-info-icon" />
                <div>
                  <strong>Email</strong><br />
                  <a href="mailto:support@reliantrenewables.com" className="contact-info-link">support@reliantrenewables.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <FaPhone className="contact-info-icon" />
                <div>
                  <strong>Phone</strong><br />
                  <a href="tel:+18001234567" className="contact-info-link">+1 (800) 123-4567</a>
                </div>
              </div>
              <div className="contact-info-item">
                <FaLink className="contact-info-icon" />
                <div>
                  <strong>Useful Links</strong>
                  <ul className="contact-info-links-list">
                    <li><a href="/faqs" className="contact-info-link">FAQs</a></li>
                    <li><a href="/projects" className="contact-info-link">Project Portfolio</a></li>
                    <li><a href="/careers" className="contact-info-link">Careers at Reliant</a></li>
                    <li><a href="/sustainability" className="contact-info-link">Sustainability Reports</a></li>
                  </ul>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-social-label"><strong>Connect with Us</strong></div>
                <div className="contact-info-socials">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-info-social"><FaLinkedin /></a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-info-social"><FaTwitter /></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-info-social"><FaInstagram /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="contact-map-section">
          <div className="contact-map-container">
            {/* Replace with actual map embed if needed */}
            <div className="contact-map-placeholder">Insert a map here</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;