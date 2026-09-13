import React, { useState } from 'react'

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = task.trim();
    if (!trimmed) return;
    addTask({ text: trimmed, priority, category, completed: false });
    setTask('');
    setPriority('Medium');
    setCategory('General');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      {/* Input + Add button row */}
      <div className="form-row">
        <div className="input-wrapper">
          <input
            id="task-input"
            className="task-input"
            type="text"
            placeholder="What needs to be done?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            autoComplete="off"
          />
          <svg
            className="input-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>

        <button type="submit" className="add-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Task
        </button>
      </div>

      {/* Priority + Category row */}
      <div className="select-row">
        <div className="select-group">
          <label className="select-label" htmlFor="priority-select">Priority</label>
          <select
            id="priority-select"
            className="styled-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">🔴 High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>
        </div>

        <div className="select-group">
          <label className="select-label" htmlFor="category-select">Category</label>
          <select
            id="category-select"
            className="styled-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="General">📋 General</option>
            <option value="Work">💼 Work</option>
            <option value="Personal">🏠 Personal</option>
          </select>
        </div>
      </div>
    </form>
  );
}
