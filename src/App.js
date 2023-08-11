

import {React, } from 'react';
import { Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

import Donate from './components/Donate';
import CharityLogin from './components/CharityLogin';
import Footer from './components/Footer';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import AdminLogin from './components/AdminLogin';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/charity-login" element={<CharityLogin />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin-login" element={<AdminLogin />} /> {/* Updated line */}
      </Routes>
      <Footer />

    </div>
  );
}


export default App;
