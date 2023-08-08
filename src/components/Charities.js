import React from 'react';
import CharityCard from './CharityCards'; // Make sure the import path is correct

const charities = [
  { name: 'Charity 1', description: 'Description 1' },
  { name: 'Charity 2', description: 'Description 2' },
  // ... other charities
];

const Charities = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {charities.map((charity, index) => (
        <CharityCard key={index} charity={charity} />
      ))}
    </div>
  );
};

export default Charities;
