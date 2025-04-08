import React from 'react'
import "../Footer/Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* About Novalyan University */}
        <div className="footer-section">
          <h3>About Novalyan University</h3>
          <p>123 University Road, City, Country</p>
          <p>Email: contact@novalyan.edu | Phone: +123 456 7890</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Our Campus */}
        <div className="footer-section">
          <h3>Our Campus</h3>
          <ul>
            <li><a href="#">Library</a></li>
            <li><a href="#">Hostel</a></li>
            <li><a href="#">Sports Complex</a></li>
            <li><a href="#">Labs & Research</a></li>
          </ul>
        </div>

        {/* Newsletter & Social Links */}
        <div className="footer-section">
          <h3>Newsletter & Social Links</h3>
          <p>Subscribe to our newsletter for updates:</p>
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button className="subscribe-button">Subscribe</button>
          <div className="social-icons">
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">▶️</a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">&copy; {new Date().getFullYear()} Novalyan University. All rights reserved.</p>
    </footer>
  );
}

export default Footer