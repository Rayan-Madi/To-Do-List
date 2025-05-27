import React from 'react';

const EmptyState = ({ searchTerm }) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">📝</div>
      <h3>Aucune tâche trouvée</h3>
      <p>
        {searchTerm 
          ? "Essayez un autre terme de recherche"
          : "Commencez par ajouter votre première tâche"
        }
      </p>
    </div>
  );
};

export default EmptyState;