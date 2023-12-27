import React, { useState } from 'react';

const App = () => {
  const initialDictionary = [
    { term: 'React', definition: 'A JavaScript library for building user interfaces' },
    { term: 'Node.js', definition: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
    // Add more words and their meanings to the dictionary
  ];

  const [dictionary, setDictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchMessage, setSearchMessage] = useState('');

  const handleSearch = () => {
    // Implement search logic here
    const result = dictionary.find(
      (entry) => entry.term.toLowerCase() === searchTerm.toLowerCase()
    );

    // Update the search result and message state
    setSearchResult(result);

    if (result) {
      setSearchMessage('');
    } else {
      setSearchMessage('Word not found in the dictionary.');
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResult && (
        <div>
          <h3>{searchResult.term}</h3>
          <p>{searchResult.definition}</p>
        </div>
      )}

      {searchMessage && <p>{searchMessage}</p>}
    </div>
  );
};

export default App;
