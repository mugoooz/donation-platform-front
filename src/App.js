
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<LandingPage />} /> {/* Update syntax */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/charity-login" element={<CharityLogin />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
