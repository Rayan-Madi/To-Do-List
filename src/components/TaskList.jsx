import React from 'react';
import TaskItem from './TaskItem';
import EmptyState from './EmptyState';

const TaskList = ({ 
  tasks, 
  searchTerm, 
  editingTask, 
  editText, 
  setEditText,
  onToggleTask, 
  onDeleteTask, 
  onStartEditing, 
  onSaveEdit, 
  onCancelEdit, 
  onKeyPress 
}) => {
  return (
    <div className="tasks-container">
      {tasks.length === 0 ? (
        <EmptyState searchTerm={searchTerm} />
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            isEditing={editingTask === task.id}
            editText={editText}
            setEditText={setEditText}
            onToggle={() => onToggleTask(task.id)}
            onDelete={() => onDeleteTask(task.id)}
            onStartEdit={() => onStartEditing(task)}
            onSaveEdit={onSaveEdit}
            onCancelEdit={onCancelEdit}
            onKeyPress={onKeyPress}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;