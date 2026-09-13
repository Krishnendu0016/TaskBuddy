import React, { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ProgressTracker from './components/ProgressTracker'
import './Style.css'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('tasks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-badge">
          <span className="dot" />
          TaskBuddy
        </div>
        <h1 className="title">Organize Your Day</h1>
        <p className="tagline">Your friendly task manager — beautiful, fast, and simple.</p>
      </header>

      <main className="main-content">
        <div className="card">
          <TaskForm addTask={addTask} />
        </div>

        {tasks.length > 0 && (
          <div className="card">
            <ProgressTracker tasks={tasks} />
          </div>
        )}

        <div className="card">
          <TaskList
            tasks={tasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        </div>

        {tasks.length > 0 && (
          <button className="clear-btn" onClick={clearTasks}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Clear All Tasks
          </button>
        )}
      </main>
    </div>
  );
}
