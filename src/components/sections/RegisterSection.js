import React from 'react';
import './RegisterSection.css';

const RegisterSection = () => {
  return (
    <section className="register-section">
      <div className="container">
        <div className="register-content">
          <h2 className="section-title">Register Your Child</h2>
          <p className="section-description">
            Create an account to register your child for our programs and start
            their journey in game development and digital creativity.
          </p>
          <a href="/register" className="btn btn-secondary">
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
