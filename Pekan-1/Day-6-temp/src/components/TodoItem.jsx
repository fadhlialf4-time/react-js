import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onDelete }) {
  const itemStyle = {
    backgroundColor: todo.completed ? '#f8fff8' : '#ffffff',
    borderLeft: `4px solid ${todo.completed ? '#2ecc71' : '#3498db'}`
  };

  return (
    <li className="todo-item" style={itemStyle}>
      <div className="todo-content">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="todo-checkbox"/>

          <span className="checkmark"></span>
        </label>
        
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      </div>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        aria-label="Hapus todo">

        <span className="delete-icon">×</span>
        <span className="delete-text">Hapus</span>
      </button>
    </li>
  );
}

export default TodoItem;