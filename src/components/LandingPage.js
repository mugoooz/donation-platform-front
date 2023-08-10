import React, { useState } from 'react';
import './LandingPage.css';
import DeviseAuthForm from './SignUpForm';

// import Footer from './Footer';

const LandingPage = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="quote">
          <p>Change a Child's Life</p>
        </div>
        <div className="get-started">
          <button onClick={() => setShowAuthForm(true)}>Get Started</button>
        </div>
      </div>

      {showAuthForm && (
        <div className="modal">
          <div className="modal-content">
          <h2 className="app-name">shiriki</h2> 

            <span className="close-button" onClick={() => setShowAuthForm(false)}>&times;</span>
            <DeviseAuthForm />
            
          </div>
        </div>
      )}
    </div>
    
  );
};

export default LandingPage;
