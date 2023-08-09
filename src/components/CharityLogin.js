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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Charity Login</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border border-gray-200 rounded">
        <label className="block mb-2">
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full p-2 border rounded" />
        </label>
        <label className="block mb-2">
          Location:
          <input type="text" name="location" value={form.location} onChange={handleChange} required className="w-full p-2 border rounded" />
        </label>
        <label className="block mb-2">
          Phone Number:
          <input type="tel" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} required className="w-full p-2 border rounded" />
        </label>
        <label className="block mb-2">
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full p-2 border rounded" />
        </label>
        <label className="block mb-2">
          Purpose:
          <input type="text" name="purpose" value={form.purpose} onChange={handleChange} required className="w-full p-2 border rounded" />
        </label>
        <label className="block mb-2">
          Password:
          <input type="password" name="password" value={form.password} onChange={handleChange} required className="w-full p-2 border rounded" />
        </label>
        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">Login</button>
      </form>
    </div>
  );
};

export default CharityLogin;
