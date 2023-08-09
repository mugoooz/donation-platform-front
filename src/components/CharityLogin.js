import React, { useState } from 'react';

const CharityLogin = () => {
  const [form, setForm] = useState({
    name: '',
    location: '',
    phoneNumber: '',
    email: '',
    purpose: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
  };

  const labelStyle = {
    margin: '10px 0',
  };

  const buttonStyle = {
    padding: '10px',
    background: '#4caf50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
  };

  return (
    <div>
      <h1>Charity Login</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label style={labelStyle}>
          Location:
          <input type="text" name="location" value={form.location} onChange={handleChange} required />
        </label>
        <label style={labelStyle}>
          Phone Number:
          <input type="tel" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} required />
        </label>
        <label style={labelStyle}>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label style={labelStyle}>
          Purpose:
          <input type="text" name="purpose" value={form.purpose} onChange={handleChange} required />
        </label>
        <label style={labelStyle}>
          Password:
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </label>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

export default CharityLogin;
