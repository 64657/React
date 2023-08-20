// App.js
import React, { useState } from 'react';
import CreateTask from './CreateTask';
import TaskCard from './TaskCard';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, ...updatedTask } : task));
    setEditingTask(null);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setEditingTask(null);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredTasks = filterStatus === 'all'
    ? tasks
    : tasks.filter(task => task.status === filterStatus);

  return (
    <div className="app">
      <h1 className="app-title">Todo App</h1>
      <CreateTask
        tasks={tasks}
        addTask={addTask}
        updateTask={updateTask}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <div className="filter-container">
        <label>Filter by Status:</label>
        <select value={filterStatus} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="not completed">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="task-list">
        {filteredTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={handleEdit}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
