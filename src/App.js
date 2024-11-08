import React, { useState } from 'react';
import StarshipList from './StarshipList';
import StarshipDetails from './StarshipDetails';
import './App.css';

function App() {
  const [selectedStarship, setSelectedStarship] = useState(null);

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      {selectedStarship ? (
        <StarshipDetails starship={selectedStarship} goBack={() => setSelectedStarship(null)} />
      ) : (
        <StarshipList onSelectStarship={setSelectedStarship} />
      )}
    </div>
  );
}

export default App;
