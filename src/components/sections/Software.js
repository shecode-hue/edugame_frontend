import React from 'react';
import './Software.css';

const Software = () => {
  const softwareTools = [
    {
      name: 'Roblox Studio',

      icon: 'game-controller',
    },
    {
      name: 'Blender',

      icon: 'cube',
    },
    {
      name: 'Stop Motion Studio',

      icon: 'film',
    },
    {
      name: 'Unity for XR',

      icon: 'glasses',
    },
    {
      name: 'Krita',

      icon: 'brush',
    },
  ];

  return (
    <section className="software-section">
      <div className="container">
        <h2 className="section-title">Software We Use</h2>
        <div className="software-grid">
          {softwareTools.map((tool, index) => (
            <div className="software-card" key={index}>
              <div className="software-icon">
                <i className={`icon-${tool.icon}`}></i>
              </div>
              <h3 className="software-name">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Software;
