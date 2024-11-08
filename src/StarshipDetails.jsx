import React from 'react';
import './App.css';

function StarshipDetails({ starship, goBack }) {
  // Using the same dynamic URL based on starship name
  const imageUrl = `https://stickermarketing.com.tr/wp-content/uploads/2023/07/YEG00043kurrtt-syah.png`;

  return (
    <div className="starship-details">
      <button onClick={goBack}>Back to List</button>
      <img src={imageUrl} alt={`${starship.name}`} style={{ width: '100%', borderRadius: '8px' }} />
      <h2>{starship.name}</h2>
      <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Passengers:</strong> {starship.passengers}</p>
      <p><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
      <p><strong>Crew:</strong> {starship.crew}</p>
      <p><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</p>
    </div>
  );
}

export default StarshipDetails;
