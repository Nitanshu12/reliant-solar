import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useInView } from '../hooks/useInView';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Footer() {

  return (
    <>
{/* CTA Section */}

{/* Footer Section */}
<footer className="footer-section">
<div className="footer-container">
  <div className="footer-brand">
    <img src={logo} alt="Reliant Renewables" className="footer-logo" />
    <div>
      <div className="footer-brand-title">Reliant Renewables</div>
      <div className="footer-brand-tag">Where Reliability Meets Renewable Energy</div>
    </div>
  </div>
  <div className="footer-links">
    <div className="footer-col">
      <div className="footer-col-title">Quick Links</div>
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Projects</a>
      <a href="#">Solar Calculator</a>
      <a href="#">Contact Us</a>
    </div>
    <div className="footer-col">
      <div className="footer-col-title">Our Services</div>
      <a href="#">Residential Solar</a>
      <a href="#">Commercial Solar</a>
      <a href="#">Solar Maintenance</a>
      <a href="#">Energy Consulting</a>
    </div>
    <div className="footer-col footer-contact">
      <div className="footer-col-title">Contact us</div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <FaMapMarkerAlt style={{ marginRight: '10px' }} />
          Bhosari, Pune, Maharashtra
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <FaPhoneAlt style={{ marginRight: '10px' }} />
          +91 9075115354
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <FaEnvelope style={{ marginRight:'10px'}}/>
          reliantrenewables04@gmail.com
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaClock style={{ marginRight: '10px', color: 'white' }} />
          Mon-Fri: 8AM-9PM
        </div>
    </div>
  </div>
</div>
</footer>
</>
);
}