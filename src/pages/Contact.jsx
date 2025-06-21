import React from 'react';
import '../styles/Contact.css';
import heroBg from '../assets/contact.jpg';
// You can use react-icons for icons if desired
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLink, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Seo from '../components/Seo';

function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | Reliant Renewables"
        description="Get in touch with Reliant Renewables. Fill out the form below or use the provided links for quick support and resources."
        keywords="Contact Reliant, Solar Company, Zero Capex, Solar EPC"
        canonical="https://reliantrenewables.in/contact"
      />
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
                    <strong>Near Unity Paradise, Sector 10, Opp Spine Road Mall</strong><br />
                    MIDC, Bhosari,<br />
                    Pune, Maharashtra 411026<br />
                    <a href="https://maps.google.com/?q=456+Solar+Park+Drive+Dallas+TX+75201" target="_blank" rel="noopener noreferrer" className="contact-info-link">View on Map</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <FaEnvelope className="contact-info-icon" />
                  <div>
                    <strong>Email</strong><br />
                    <a href="reliantrenewables04@gmail.com" className="contact-info-link">support@reliantrenewables.com</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <FaPhone className="contact-info-icon" />
                  <div>
                    <strong>Phone</strong><br />
                    <a href="tel:+91 9075115354" className="contact-info-link">+91 9075115354</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <FaLink className="contact-info-icon" />
                  <div>
                    <strong>Useful Links</strong>
                    <ul className="contact-info-links-list">
                      <li><a href="/about" className="contact-info-link">About Us</a></li>
                      <li><a href="/projects" className="contact-info-link">Project Portfolio</a></li>
                      <li><a href="/linkedIn" className="contact-info-link">Linkedin</a></li>
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
              <div className="contact-map-placeholder">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3023274500815!2d73.83475967540922!3d18.650424565194445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9fa09779773%3A0xca5d0b979f59d008!2sReliant%20Renewables%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1750482233500!5m2!1sen!2sin" width="300" height="50" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

      export default Contact;