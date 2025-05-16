import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        {/* Floating gaming elements */}
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="floating-element"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            {getRandomGameIcon(index)}
          </motion.div>
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Unlock Your Child's Creative Potential</h1>
            <p>
              Join Edu-Game Namibia's innovative programs in game development,
              animation, and creative design for ages 7-18.
            </p>
            <div className="hero-buttons">
              <Button to="/courses" variant="primary">
                Explore Courses
              </Button>
              <Button to="/parent-portal" variant="outline">
                Parent Portal
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/api/placeholder/500/400"
              alt="Kids learning game development"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper function to generate random game-related icons
const getRandomGameIcon = (index) => {
  const icons = [
    // Game controller
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21,6H3C1.9,6,1,6.9,1,8v8c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V8C23,6.9,22.1,6,21,6z M10,15H8v2H6v-2H4v-2h2v-2h2v2h2V15z M15,15c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,15,15,15z M18,12c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S18.55,12,18,12z" />
    </svg>,
    // Puzzle piece
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.5,3c-1.2,0-2.3,0.5-3,1.4c-0.7-0.9-1.8-1.4-3-1.4c-2.2,0-4,1.8-4,4c0,2.1,1.6,3.7,3.5,4v3c0,0.6,0.4,1,1,1 h2c0.6,0,1-0.4,1-1v-3c1.9-0.2,3.5-1.9,3.5-4C20.5,4.8,18.7,3,19.5,3z M12.3,15L8,19l-4.5-4.5l4.5-4.5V15z" />
    </svg>,
    // Pixel art
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,3v18h18V3H3z M9,19H5v-4h4V19z M9,13H5V9h4V13z M9,7H5V3h4V7z M14,19h-4v-4h4V19z M14,13h-4V9h4V13z M14,7h-4V3h4V7z M19,19h-4v-4h4V19z M19,13h-4V9h4V13z M19,7h-4V3h4V7z" />
    </svg>,
    // Robot
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20,9V7c0-1.1-0.9-2-2-2h-3c0-1.7-1.3-3-3-3S9,3.3,9,5H6C4.9,5,4,5.9,4,7v2H2v6h2v3c0,1.1,0.9,2,2,2h12 c1.1,0,2-0.9,2-2v-3h2V9H20z M9,5c0-0.6,0.4-1,1-1s1,0.4,1,1H9z M15,15H9v-2h6V15z M17,11H7V9h10V11z" />
    </svg>,
  ];

  return icons[index % icons.length];
};

export default Hero;
