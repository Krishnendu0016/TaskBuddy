import React from 'react'

const priorityClass = {
  High:   'tag-priority-high',
  Medium: 'tag-priority-medium',
  Low:    'tag-priority-low',
};

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const UndoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

export default function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  };

  return (
    <>
      <div className="section-header">
        <span className="section-title">Tasks</span>
        {tasks.length > 0 && (
          <span className="task-count-badge">{tasks.length} total</span>
        )}
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">✨</div>
          <p>No tasks yet. Add one above to get started!</p>
        </div>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`task-item${task.completed ? ' completed' : ''}`}
            >
              {/* Checkbox */}
              <div
                className="task-checkbox"
                role="checkbox"
                aria-checked={task.completed}
                tabIndex={0}
                onClick={() => toggleComplete(index)}
                onKeyDown={(e) => e.key === 'Enter' && toggleComplete(index)}
              >
                <CheckIcon />
              </div>

              {/* Body */}
              <div className="task-body">
                <p className="task-text">{task.text}</p>
                <div className="task-meta">
                  <span className={`tag ${priorityClass[task.priority] || 'tag-priority-medium'}`}>
                    {task.priority}
                  </span>
                  <span className="tag tag-category">{task.category}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="task-actions">
                <button
                  className={`icon-btn ${task.completed ? 'undo-btn' : 'complete-btn'}`}
                  onClick={() => toggleComplete(index)}
                  title={task.completed ? 'Mark as pending' : 'Mark as complete'}
                  aria-label={task.completed ? 'Undo' : 'Complete'}
                >
                  {task.completed ? <UndoIcon /> : <CheckIcon />}
                </button>
                <button
                  className="icon-btn delete-btn"
                  onClick={() => deleteTask(index)}
                  title="Delete task"
                  aria-label="Delete"
                >
                  <TrashIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
