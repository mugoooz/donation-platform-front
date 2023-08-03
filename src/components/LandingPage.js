import React from 'react';
import Navbar from './Navbar';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="landing-content">
        <div className="quote">
          {/* Your quote goes here */}
          <p>Change A Childs Life</p>
        </div>
        <div className="get-started">
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
