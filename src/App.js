import React, { useState } from "react";

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function XDictionary() {
  const [searchWord, setSearchWord] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    if (!searchWord.trim()) {
   
      setDefinition("Word not found in the dictionary.");
      return;
    }


    const found = dictionary.find(
      entry => entry.word.toLowerCase() === searchWord.toLowerCase()
    );

    if (found) {
      setDefinition(found.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ padding: "10px", maxWidth: "400px" }}>
      <h1>Dictionary App</h1>

      <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchWord}
          onChange={e => setSearchWord(e.target.value)}
          style={{ flexGrow: 1 }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <h3>Definition:</h3>
      <p>{definition}</p>
    </div>
  );
}

export default XDictionary;
