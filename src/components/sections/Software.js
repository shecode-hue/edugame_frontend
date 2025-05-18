import React from 'react';
import './Software.css';
import Roblox from '../../assets/images/roblox.png';
import StopMotion from '../../assets/images/stopmotion.png';
import Unity from '../../assets/images/unity.png';
import Krita from '../../assets/images/krita.png';
import Blender from '../../assets/images/blender.png';

const Software = () => {
  const softwareTools = [
    {
      name: 'Roblox Studio',
      image: Roblox,
    },
    {
      name: 'Blender',
      image: Blender,
    },
    {
      name: 'Stop Motion Studio',
      image: StopMotion,
    },
    {
      name: 'Unity for XR',
      image: Unity,
    },
    {
      name: 'Krita',
      image: Krita,
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
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="software-image"
                />
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
