import React from 'react';
import { Search, Filter } from 'lucide-react';

const SearchAndFilter = ({ searchTerm, setSearchTerm, filter, setFilter }) => {
  const filterOptions = [
    { key: "all", label: "Toutes" },
    { key: "active", label: "Actives" },
    { key: "completed", label: "Terminées" },
    { key: "high", label: "Priorité haute" }
  ];

  return (
    <div className="controls">
      <div className="search-container">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Rechercher une tâche..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="filter-container">
        <Filter size={16} />
        {filterOptions.map(({ key, label }) => (
          <button
            key={key}
            className={`filter-btn ${filter === key ? 'active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilter;