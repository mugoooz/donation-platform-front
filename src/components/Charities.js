import React from 'react';
import CharityCard from './CharityCard';

const Charities = ({ charities }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {charities.map((charity) => (
        <CharityCard key={charity.id} charity={charity} />
      ))}
    </div>
  );
};

export default Charities;
