import React from 'react';
import './App.css';

function StarshipCard({ starship, onClick }) {
  // Using a dynamic URL based on starship name for variety
  const imageUrl = `https://stickermarketing.com.tr/wp-content/uploads/2023/07/YEG00043kurrtt-syah.png`;

  return (
    <div className="starship-card" onClick={onClick}>
      <img src={imageUrl} alt={`${starship.name}`} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
      <h3>{starship.name}</h3>
      <p>Model: {starship.model}</p>
      <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
    </div>
  );
}

export default StarshipCard;
