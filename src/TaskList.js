// src/TaskList.js
import React, { useEffect } from 'react';
import { useTaskContext } from './TaskContext';

const TaskList = () => {
  const { state, dispatch } = useTaskContext();

  useEffect(() => {
    console.log('Task list updated:', state.tasks);
  }, [state.tasks]);

  return (
    <ul>
      {state.tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
