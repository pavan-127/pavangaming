import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Divide } from 'lucide-react';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    window.open('https://www.youtube.com/@PavanGamingOfficial', '_blank');
    setSubscribed(true);
  };

  return (
    <footer className="footer d-flex justify-content-between align-items-center p-0 text-light">
      <div className="footer-content">
        <p className="mb-1">&copy; 2025 PavanGaming. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="/about" className="text-decoration-none text-light">About Us</Link>
          <Link to="/contact" className="text-decoration-none text-light ms-2">Contact</Link>
        </div>
      </div>
      <div className='subscribe'>
      <button
        className={`btn ${subscribed ? 'btn-success' : 'btn-danger'}`}
        onClick={handleSubscribe}
        disabled={subscribed}
      >
        {subscribed ? 'Thanks for visiting' : 'Subscribe'}
      </button>
      </div>
    </footer>
  );
};

export default Footer;
