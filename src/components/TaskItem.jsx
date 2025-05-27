import React from 'react';
import { CheckCircle2, Circle, Calendar, Edit3, Trash2, Save, X } from 'lucide-react';
import { formatDate, getPriorityLabel } from '../utils/helpers';

const TaskItem = ({ 
  task, 
  isEditing, 
  editText, 
  setEditText, 
  onToggle, 
  onDelete, 
  onStartEdit, 
  onSaveEdit, 
  onCancelEdit, 
  onKeyPress 
}) => {
  return (
    <div className={`task-item fade-in ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <button className="task-checkbox" onClick={onToggle}>
          {task.completed ? (
            <CheckCircle2 size={24} color="#22c55e" />
          ) : (
            <Circle size={24} color="#64748b" />
          )}
        </button>
        
        <div className="task-content">
          {isEditing ? (
            <textarea
              className="task-edit-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  onSaveEdit();
                }
                if (e.key === 'Escape') {
                  onCancelEdit();
                }
              }}
              autoFocus
              rows={2}
            />
          ) : (
            <div
              className={`task-text ${task.completed ? 'completed' : ''}`}
              onDoubleClick={() => !task.completed && onStartEdit()}
            >
              {task.text}
            </div>
          )}
          
          <div className="task-meta">
            <span className={`priority-badge priority-${task.priority}`}>
              {getPriorityLabel(task.priority)}
            </span>
            <div className="task-date">
              <Calendar size={14} />
              {formatDate(task.createdAt)}
            </div>
          </div>
        </div>

        <div className="task-actions">
          {isEditing ? (
            <>
              <button
                className="action-btn save"
                onClick={onSaveEdit}
                title="Sauvegarder"
              >
                <Save size={16} />
              </button>
              <button
                className="action-btn"
                onClick={onCancelEdit}
                title="Annuler"
              >
                <X size={16} />
              </button>
            </>
          ) : (
            <>
              {!task.completed && (
                <button
                  className="action-btn"
                  onClick={onStartEdit}
                  title="Modifier"
                >
                  <Edit3 size={16} />
                </button>
              )}
              <button
                className="action-btn delete"
                onClick={onDelete}
                title="Supprimer"
              >
                <Trash2 size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;