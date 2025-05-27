import React from 'react';
import { Plus } from 'lucide-react';

const AddTaskForm = ({ 
  newTask, 
  setNewTask, 
  newPriority, 
  setNewPriority, 
  onAddTask, 
  onKeyPress, 
  inputRef 
}) => {
  return (
    <div className="add-task-container">
      <div className="add-task-form">
        <textarea
          ref={inputRef}
          placeholder="Ajouter une nouvelle tâche..."
          className="task-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => onKeyPress(e, onAddTask)}
          rows={1}
        />
        <select
          className="priority-select"
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
        >
          <option value="low">Faible</option>
          <option value="medium">Moyenne</option>
          <option value="high">Haute</option>
        </select>
        <button className="add-btn" onClick={onAddTask}>
          <Plus size={20} />
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default AddTaskForm;