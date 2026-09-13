# TaskBuddy

TaskBuddy is a lightweight task manager built with React and Vite. Add tasks, organize them by priority and category, track completion progress, and keep your list available between browser sessions.

## Features

- Add tasks with a name, priority, and category.
- Mark tasks as complete or return them to pending.
- Delete individual tasks or clear the entire list.
- View total tasks and completion progress.
- Persist tasks in the browser with `localStorage`.
- Responsive interface for desktop and mobile screens.

## Tech Stack

- React 19
- Vite 6
- JavaScript (ES modules)
- CSS

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Usage

1. Enter a task in the input field.
2. Choose its priority and category.
3. Select **Add Task**.
4. Use the check button to mark a task complete, or the undo button to mark it pending again.
5. Use the trash button to remove one task, or **Clear All Tasks** to remove every task.

Task data is stored only in the current browser's local storage. Clearing browser storage removes the saved tasks.

