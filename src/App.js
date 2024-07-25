// src/App.js
import React from 'react';
import { TaskProvider } from './TaskContext';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
