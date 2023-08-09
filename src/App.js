
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Home from './components/Home'; // Import your Home component
import AboutUs from './components/AboutUs'; // Import your AboutUs component
import Impact from './components/Impact'; // Import your Impact component
import Donate from './components/Donate'; // Import your Donate component
import CharityLogin from './components/CharityLogin'; // Import your CharityLogin component
import Footer from './components/Footer';
import SignUpForm from './components/SignUpForm'; // Adjust the path if needed
import LoginForm from './components/LoginForm'; // Adjust the path if needed


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/charity-login" element={<CharityLogin />} />
        <Route path="/signup" element={<SignUpForm />} /> {/* Add this line */}
        <Route path="/login" element={<LoginForm />} /> {/* Add this line */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
