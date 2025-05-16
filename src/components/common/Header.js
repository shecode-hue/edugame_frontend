import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-container">
            <div className="logo">
              <motion.svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="#ffa404"
                  strokeWidth="4"
                />
                <path
                  d="M20 10V30M10 20H30"
                  stroke="#ffa404"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </div>
            <h1 className="site-name">Edu-Game Namibia</h1>
          </Link>

          <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className={location.pathname === '/' ? 'active' : ''}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className={location.pathname === '/courses' ? 'active' : ''}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === '/about' ? 'active' : ''}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === '/contact' ? 'active' : ''}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="auth-buttons">
            <Link to="/login" className="btn btn-outline">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </div>

          <div
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
