import React, { useState } from 'react';
import DonationModal from './DonationModal'; // Adjust the path if needed
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {charities.map((charity, index) => (
        <div key={index} className="p-4 border rounded shadow-lg">
          <h2 className="text-2xl font-bold">{charity.name}</h2>
          <p>{charity.description}</p>
          <button onClick={() => setIsModalOpen(true)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Donate</button>
        </div>
      ))}
      <DonationModal isOpen={isModalOpen} onClose={handleModalClose} plans={['Plan 1', 'Plan 2']} />
    </div>
  );
};

export default CharityCards;
