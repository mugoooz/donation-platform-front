import React, { useState } from 'react';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Perform a mock login or sign-up action (replace this with actual API calls when you have a backend)
    try {
      // Simulate a successful response
      console.log('Login / Sign Up successful');
    } catch (error) {
      console.error('Error occurred while performing login / sign-up', error);
    }

    // Clear form fields after submission (optional)
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button type="submit">Login / Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
