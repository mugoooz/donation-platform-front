import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Charities from './Charities';

const Dashboard = () => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    axios.get('/api/charities').then((response) => {
      setCharities(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to the Charity Dashboard</h1>
      <Charities charities={charities} />
    </div>
  );
};

export default Dashboard;
