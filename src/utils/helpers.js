export const formatDate = (date) => {
  const now = new Date();
  const diff = now - date;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) return "Aujourd'hui";
  if (days === 1) return "Hier";
  if (days < 7) return `Il y a ${days} jours`;
  return date.toLocaleDateString('fr-FR');
};

export const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high': return '#dc2626';
    case 'medium': return '#ca8a04';
    case 'low': return '#16a34a';
    default: return '#64748b';
  }
};

export const getPriorityLabel = (priority) => {
  switch (priority) {
    case 'high': return 'Haute';
    case 'medium': return 'Moyenne';
    case 'low': return 'Faible';
    default: return 'Non définie';
  }
};