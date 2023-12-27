import React, { useState } from 'react';

const XDictionary = () => {
  const initialDictionary = [
    { word: 'React', meaning: 'A JavaScript library for building user interfaces.' },
    { word: 'Component', meaning: 'A reusable building block in React.' },
    { word: 'State', meaning: 'An object that stores data for a component.' },
  ];

  const [dictionary, setDictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const result = dictionary.find(
      (entry) => entry.word.toLowerCase() === lowerCaseSearchTerm
    );

    setSearchResult(result);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResult ? (
        <div>
          <h3>{searchResult.word}</h3>
          <p>{searchResult.meaning}</p>
        </div>
      ) : (
        <p>{searchTerm ? 'Word not found in the dictionary.' : ''}</p>
      )}
    </div>
  );
};

export default XDictionary;
