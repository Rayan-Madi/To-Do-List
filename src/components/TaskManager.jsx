import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import SearchAndFilter from './SearchAndFilter';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import Stats from './Stats';
import { initialTasks } from '../data/initialData';
import './TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("medium");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        priority: newPriority,
        createdAt: new Date(),
        isEditing: false
      };
      setTasks([task, ...tasks]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEditing = (task) => {
    setEditingTask(task.id);
    setEditText(task.text);
  };

  const saveEdit = () => {
    if (editText.trim()) {
      setTasks(tasks.map(task =>
        task.id === editingTask ? { ...task, text: editText.trim() } : task
      ));
    }
    setEditingTask(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setEditText("");
  };

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) return;
      e.preventDefault();
      action();
    }
    if (e.key === 'Escape' && action === cancelEdit) {
      action();
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = 
      filter === "all" ||
      (filter === "active" && !task.completed) ||
      (filter === "completed" && task.completed) ||
      (filter === task.priority);
    
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    active: tasks.filter(t => !t.completed).length,
    high: tasks.filter(t => t.priority === "high").length
  };

  return (
    <div className="app-container">
      <div className="main-card">
        <Header />
        
        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
        />
        
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          newPriority={newPriority}
          setNewPriority={setNewPriority}
          onAddTask={addTask}
          onKeyPress={handleKeyPress}
          inputRef={inputRef}
        />
        
        <TaskList
          tasks={filteredTasks}
          searchTerm={searchTerm}
          editingTask={editingTask}
          editText={editText}
          setEditText={setEditText}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onStartEditing={startEditing}
          onSaveEdit={saveEdit}
          onCancelEdit={cancelEdit}
          onKeyPress={handleKeyPress}
        />
        
        <Stats stats={stats} />
      </div>
    </div>
  );
};

export default TaskManager;