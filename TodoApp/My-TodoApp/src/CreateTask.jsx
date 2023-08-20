// CreateTask.js
import React, { useState, useEffect } from 'react';

const CreateTask = ({ tasks, addTask, updateTask, editingTask, setEditingTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('not completed');

  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.taskName);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      updateTask(editingTask.id, { taskName, description, status });
      setEditingTask(null);
    } else {
      if (taskName.trim() === '') return;
      addTask({ taskName, description, status });
    }
    setTaskName('');
    setDescription('');
    setStatus('not completed');
  };

  return (
    <div className="create-task">
      <h2>{editingTask ? 'Edit Task' : 'Create New Task'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Task Name:</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="not completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
        {editingTask && (
          <button onClick={() => setEditingTask(null)}>Cancel Editing</button>
        )}
      </form>
    </div>
  );
};

export default CreateTask;
