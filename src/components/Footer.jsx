import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useInView } from '../hooks/useInView';

export default function Footer() {
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2 });
  return (
    <>
{/* CTA Section */}
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
      <a href="#">Solar Battery Storage</a>
      <a href="#">Solar Maintenance</a>
      <a href="#">Energy Consulting</a>
    </div>
    <div className="footer-col">
      <div className="footer-col-title">Contact us</div>
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Projects</a>
      <a href="#">Solar Calculator</a>
      <a href="#">Contact Us</a>
    </div>
  </div>
</div>
</footer>
</>
);
}