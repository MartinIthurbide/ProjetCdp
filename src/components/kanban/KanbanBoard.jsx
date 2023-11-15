// KanbanBoard.js
import React from 'react';
import Column from './KanbanColumn';
import './Kanban.css';

const KanbanBoard = ({ columns }) => {
  return (
      <div className="kanban-board">
        {columns.map((column, index) => (
          <Column key={index} title={column.title} tasks={column.tasks} />
        ))}
      </div>
  );
};

export default KanbanBoard;