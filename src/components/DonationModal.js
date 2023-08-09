import React, { useState } from 'react';

const DonationModal = ({ isOpen, onClose }) => {
  const [donationType, setDonationType] = useState('monthly');
  const [customAmount, setCustomAmount] = useState('');
  
  const plans = [5, 25, 50, 100, 125];
  const handleCustomAmountChange = (e) => setCustomAmount(e.target.value);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded p-4">
        <button onClick={onClose} className="float-right">X</button>
        <h2 className="text-2xl mb-4">Choose a Donation Plan</h2>
        <div className="mb-4">
          <label>
            <input type="radio" name="donationType" value="monthly" checked={donationType === 'monthly'} onChange={() => setDonationType('monthly')} />
            Monthly
          </label>
          <label className="ml-4">
            <input type="radio" name="donationType" value="yearly" checked={donationType === 'yearly'} onChange={() => setDonationType('yearly')} />
            Yearly
          </label>
        </div>
        {plans.map((plan, index) => (
          <div key={index} className="mb-2">
            <button onClick={() => console.log(`Donated ${donationType === 'monthly' ? plan : plan * 12}`)}>{donationType === 'monthly' ? `$${plan} per month` : `$${plan * 12} per year`}</button>
          </div>
        ))}
        <div className="mb-2">
          <label>
            Custom Amount:
            <input type="number" value={customAmount} onChange={handleCustomAmountChange} />
          </label>
          <button onClick={() => console.log(`Custom donation of ${donationType === 'monthly' ? customAmount : customAmount * 12}`)}>{donationType === 'monthly' ? `Donate $${customAmount} monthly` : `Donate $${customAmount * 12} yearly`}</button>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
