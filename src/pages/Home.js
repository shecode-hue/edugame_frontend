import React from 'react';
import Hero from '../components/sections/Hero';
import Programs from '../components/sections/Programs';
import WhyChooseUs from '../components/sections/WhyChooseUs';
// import Software from '../components/sections/Software';
// import ParentPortal from '../components/sections/ParentPortal';
// import RegisterSection from '../components/sections/RegisterSection';
import '../styles/Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <WhyChooseUs />
      <Programs />
      {/* <Software /> */}
      <div className="home-cta-sections">
        {/* <ParentPortal /> */}
        {/* <RegisterSection /> */}
      </div>
    </main>
  );
};

export default Home;
