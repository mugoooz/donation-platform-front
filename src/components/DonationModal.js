import React from 'react';

const DonationModal = ({ isOpen, onClose, plans }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded p-4">
        <button onClick={onClose} className="float-right">X</button>
        <h2 className="text-2xl mb-4">Choose a Donation Plan</h2>
        {plans.map((plan, index) => (
          <div key={index} className="mb-2">
            <button>{plan}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationModal;
