import React from 'react'

export default function ProgressTracker({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <p className="progress-label">
          <span>{completed}</span> of <span>{total}</span> tasks completed
        </p>
        <span className="progress-percent">{percentage}%</span>
      </div>

      <div className="progress-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>

      <div className="progress-stats">
        <div className="stat-pill">
          <span className="stat-value total">{total}</span>
          <span className="stat-desc">Total</span>
        </div>
        <div className="stat-pill">
          <span className="stat-value done">{completed}</span>
          <span className="stat-desc">Done</span>
        </div>
        <div className="stat-pill">
          <span className="stat-value pending">{pending}</span>
          <span className="stat-desc">Pending</span>
        </div>
      </div>
    </div>
  );
}
