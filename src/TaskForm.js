// src/TaskForm.js
import React, { useEffect, useRef, useState } from 'react';
import { useTaskContext } from './TaskContext';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const { state, dispatch } = useTaskContext();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [isEditing]);

  const handleAddTask = () => {
    if (isEditing) {
      dispatch({ type: 'EDIT_TASK', payload: { id: editId, text: task } });
      setIsEditing(false);
      setEditId(null);
    } else {
      dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), text: task } });
    }
    setTask('');
  };

  const handleEditTask = (task) => {
    setTask(task.text);
    setIsEditing(true);
    setEditId(task.id);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>{isEditing ? 'Edit Task' : 'Add Task'}</button>
      {state.tasks.map((task) => (
        <button key={task.id} onClick={() => handleEditTask(task)}>
          Edit {task.text}
        </button>
      ))}
    </div>
  );
};

export default TaskForm;
