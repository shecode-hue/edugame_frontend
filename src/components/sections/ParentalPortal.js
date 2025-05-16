import React from 'react';
import './ParentalPortal.css';

const ParentPortal = () => {
  return (
    <section className="parent-portal-section">
      <div className="container">
        <div className="parent-portal-content">
          <div className="parent-portal-text">
            <h2 className="section-title">Parent Portal</h2>
            <p className="section-description">
              Track your child's progress, view upcoming classes, and manage
              your account all in one place.
            </p>
            <ul className="feature-list">
              <li>Real-time progress tracking</li>
              <li>View completed projects</li>
              <li>Communicate with instructors</li>
              <li>Manage billing and payments</li>
            </ul>
            <a href="/portal" className="btn btn-primary">
              Access Portal
            </a>
          </div>
          <div className="parent-portal-image">
            <div className="portal-device">
              <div className="portal-screen">
                <div className="portal-ui">
                  <div className="portal-header"></div>
                  <div className="portal-content">
                    <div className="portal-sidebar"></div>
                    <div className="portal-main">
                      <div className="portal-card"></div>
                      <div className="portal-card"></div>
                      <div className="portal-card"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentPortal;
