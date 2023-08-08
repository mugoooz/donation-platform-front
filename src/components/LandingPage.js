import React, { useState } from 'react';
import './LandingPage.css';
import DeviseAuthForm from './DeviseAuthForm';

const LandingPage = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="quote">
          <p>Change A Childs Life</p>
        </div>
        <div className="get-started">
          <button onClick={() => setShowAuthForm(true)}>Get Started</button>
        </div>
      </div>

      {showAuthForm && (
        <div className="modal">
          <div className="modal-content">
          <h2 className="app-name">shiriki</h2> {/* App Name */}
            <span className="close-button" onClick={() => setShowAuthForm(false)}>&times;</span>
            <DeviseAuthForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
