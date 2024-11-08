import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarshipCard from './StarshipCard';
import './App.css';

function StarshipList({ onSelectStarship }) {
  const [starships, setStarships] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchStarships();
  }, [page]);

  const fetchStarships = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`);
      setStarships((prev) => [...prev, ...response.data.results]);
    } catch (error) {
      console.error("Error fetching starships:", error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const filteredStarships = starships.filter((ship) =>
    ship.name.toLowerCase().includes(search.toLowerCase()) || ship.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Name / Model" value={search} onChange={handleSearch} />
      <button onClick={loadMore}>Load More</button>
      <div className="starship-grid">
        {filteredStarships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} onClick={() => onSelectStarship(starship)} />
        ))}
      </div>
    </div>
  );
}

export default StarshipList;
