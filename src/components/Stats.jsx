import React from 'react';

const Stats = ({ stats }) => {
  return (
    <div className="stats">
      <div className="stat-item">
        <span>Total:</span>
        <span className="stat-number">{stats.total}</span>
      </div>
      <div className="stat-item">
        <span>Actives:</span>
        <span className="stat-number">{stats.active}</span>
      </div>
      <div className="stat-item">
        <span>Terminées:</span>
        <span className="stat-number">{stats.completed}</span>
      </div>
      <div className="stat-item">
        <span>Priorité haute:</span>
        <span className="stat-number">{stats.high}</span>
      </div>
    </div>
  );
};

export default Stats;