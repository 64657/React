// TaskCard.js
import React from 'react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="task-card">
      <h3>{task.taskName}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button className="edit-button" onClick={() => onEdit(task)}>Edit</button>
      <button className="delete-button" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
