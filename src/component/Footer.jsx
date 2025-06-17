import React from 'react';
import './Footer.css'; // Make sure this path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Useful Links */}
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/contact">Contact</a></li>
             <li><a href="/searchPage">Online order</a></li>

          </ul>
        </div>

        {/* Column 2: Food Categories */}
        <div className="footer-column">
          <h3>Food Categories</h3>
          <ul>
            <li>Snacks</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>BreakFast</li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p>📍 123 Food Street, Yum City</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@foodies.com</p>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Foodies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
