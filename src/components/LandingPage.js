import React, { useState } from 'react';
import './LandingPage.css';
import AuthForm from './AuthForm';

const LandingPage = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="quote">
          {/* Your quote goes here */}
          <p>Change A Childs Life</p>
        </div>
        <div className="get-started">
          <button onClick={() => setShowAuthForm(!showAuthForm)}>Get Started</button>
          {showAuthForm && <AuthForm />}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
