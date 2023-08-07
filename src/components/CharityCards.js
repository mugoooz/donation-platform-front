import React from 'react';

const charities = [
  { name: 'Charity 1', description: 'Description 1' },
  { name: 'Charity 2', description: 'Description 2' },
  { name: 'Charity 2', description: 'Description 2' },
  { name: 'Charity 2', description: 'Description 2' },
  { name: 'Charity 2', description: 'Description 2' },
  { name: 'Charity 2', description: 'Description 2' },
  
  // ... other charities
];

const CharityCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {charities.map((charity, index) => (
        <div key={index} className="p-4 border rounded shadow-lg">
          <h2 className="text-2xl font-bold">{charity.name}</h2>
          <p>{charity.description}</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Donate</button>
        </div>
      ))}
    </div>
  );
};

export default CharityCards;
