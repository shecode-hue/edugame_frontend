import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import './Programs.css';

const Programs = () => {
  const [activeTab, setActiveTab] = useState('all');

  const programs = [
    {
      id: 1,
      title: 'Game Development & Gamification (Beginners)',
      level: 'Beginners',
      price: 'N$1100 per month',
      schedule: 'Twice a week',
      duration: '3 months',
      ageRange: '7-18 years',
      requirements:
        'Students need their own laptop and basic computer literacy.',
      category: 'game-dev',
    },
    {
      id: 2,
      title: 'Game Development & Gamification (Intermediate)',
      level: 'Intermediate',
      price: 'N$1300 per month',
      schedule: 'Twice a week',
      duration: '6 months',
      ageRange: '7-18 years',
      requirements:
        'Students need their own laptop and beginners understanding of coding knowledge.',
      category: 'game-dev',
    },
    {
      id: 3,
      title: 'Game Development & Gamification (Advanced)',
      level: 'Advanced',
      price: 'N$18000 per month',
      schedule: 'Twice a week',
      duration: '6 months',
      ageRange: '7-18 years',
      requirements:
        'Students need their own laptop, intermediate understanding of coding languages (Lua, C#, Java), 3D Modeling, animation.',
      category: 'game-dev',
    },
    {
      id: 4,
      title: 'Art & Stop-Motion Animation',
      level: 'Beginners',
      price: 'N$1300 per month',
      schedule: 'Twice a week',
      duration: '3 months',
      ageRange: '7-18 years',
      requirements: 'Basic arts understanding.',
      category: 'animation',
    },
    {
      id: 5,
      title: 'Board Game Creation',
      level: 'Creative',
      price: 'N$1600 per month',
      schedule: 'Twice a week',
      duration: '3 months',
      ageRange: '7-18 years',
      requirements: 'No specific requirements.',
      category: 'board-games',
    },
  ];

  const tabs = [
    { id: 'all', label: 'All Programs' },
    { id: 'game-dev', label: 'Game Development' },
    { id: 'animation', label: 'Animation' },
    { id: 'board-games', label: 'Board Games' },
  ];

  const filteredPrograms =
    activeTab === 'all'
      ? programs
      : programs.filter((program) => program.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="programs">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Programs</h2>
          <p>
            Discover our range of courses designed to develop technical skills,
            creativity, and problem-solving abilities.
          </p>
        </motion.div>

        <div className="program-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          className="programs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredPrograms.map((program) => (
            <motion.div
              key={program.id}
              className="program-card"
              variants={itemVariants}
            >
              <div className="program-header">
                <h3>{program.title}</h3>
                <span className="level-badge">{program.level}</span>
              </div>
              <div className="program-details">
                <div className="program-info">
                  <p className="price">{program.price}</p>
                  <p>
                    <strong>Schedule:</strong> {program.schedule}
                  </p>
                  <p>
                    <strong>Duration:</strong> {program.duration}
                  </p>
                  <p>
                    <strong>Ages:</strong> {program.ageRange}
                  </p>
                </div>
                <div className="program-requirements">
                  <p>
                    <strong>Requirements:</strong> {program.requirements}
                  </p>
                </div>
              </div>
              <Button to="/enroll" variant="primary" className="enroll-button">
                Enroll Now
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
            