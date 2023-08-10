const charities = [
  { name: 'Charity 1', description: 'Description 1', hosted_button_id: 'WWPW4MDKB68ZU' },
  { name: 'Charity 2', description: 'Description 2', hosted_button_id: 'WWPW4MDKB68ZU' },
  { name: 'Charity 2', description: 'Description 2', hosted_button_id: 'WWPW4MDKB68ZU' },
  { name: 'Charity 2', description: 'Description 2', hosted_button_id: 'WWPW4MDKB68ZU' },
  { name: 'Charity 2', description: 'Description 2', hosted_button_id: 'WWPW4MDKB68ZU' },
  { name: 'Charity 2', description: 'Description 2', hosted_button_id: 'WWPW4MDKB68ZU' },

  // ... other charities using the same hosted_button_id
];

const CharityCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {charities.map((charity, index) => (
        <div key={index} className="p-4 border rounded shadow-lg">
          <h2 className="text-2xl font-bold">{charity.name}</h2>
          <p>{charity.description}</p>
          <a 
            href={`https://www.paypal.com/donate/?hosted_button_id=${charity.hosted_button_id}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded inline-block"
          >
            Donate
          </a>
        </div>
      ))}
    </div>
  );
};

export default CharityCards;
