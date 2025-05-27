export const initialTasks = [
  {
    id: 1,
    text: "Finaliser le projet React",
    completed: false,
    priority: "high",
    createdAt: new Date(),
    isEditing: false
  },
  {
    id: 2,
    text: "Préparer la présentation client",
    completed: false,
    priority: "medium",
    createdAt: new Date(Date.now() - 86400000),
    isEditing: false
  },
  {
    id: 3,
    text: "Réviser le code backend",
    completed: true,
    priority: "low",
    createdAt: new Date(Date.now() - 2 * 86400000),
    isEditing: false
  }
];