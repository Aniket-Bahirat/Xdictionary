import React, { useState } from "react";
import "./App.css";

function App() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchWord, setSearchWord] = useState("");
  const [definition, setDefinition] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const term = searchWord.trim().toLowerCase();
    const found = dictionary.find(item => item.word.toLowerCase() === term);

    if (found) {
      setDefinition(found.meaning);
      setNotFound(false);
    } else {
      setDefinition(null);
      setNotFound(true);
    }
  };

  return (
    <div className="container">
      <h1>Dictionary App</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter a word"
          value={searchWord}
          onChange={e => setSearchWord(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="result">
        {notFound ? (
          <p>Word not found in the dictionary.</p>
        ) : (
          definition && (
            <>
              <h3>Definition:</h3>
              <p>{definition}</p>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default App;
