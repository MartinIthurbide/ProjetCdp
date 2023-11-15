// Column.js
import React, { useState } from 'react';
import Task from './Task';
import './KanbanColumn.css';

const Column = ({ title, tasks }) => {
  const [newTask, setNewTask] = useState('');
  const [isAddTaskPopupOpen, setIsAddTaskPopupOpen] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      tasks.push(newTask.trim());
      setNewTask('');
      closeAddTaskPopup();
    }
  };

  const handleRemoveTask = (index) => {
    tasks.splice(index, 1);
    setNewTask('');
  };

  const openAddTaskPopup = () => {
    setIsAddTaskPopupOpen(true);
  };

  const closeAddTaskPopup = () => {
    setIsAddTaskPopupOpen(false);
  };

  return (
    <div className="column">
      <h2>{title}</h2>
      <div className="add-task">
        <button onClick={openAddTaskPopup} className='btnAddTask'>+</button>
        {isAddTaskPopupOpen && (
          <div className="popup">
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={handleAddTask}>Add Task</button>
            <button onClick={closeAddTaskPopup}>Cancel</button>
          </div>
        )}
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task key={index} text={task} onRemove={() => handleRemoveTask(index)} />
        ))}
      </div>
      
    </div>
  );
};

export default Column;
