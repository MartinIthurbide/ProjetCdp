import React from 'react';
import KanbanBoard from '../components/kanban/KanbanBoard';
import './Backlog.css';

const tasksAndColumns = [
    { title: 'To Do', tasks: ['Task 1', 'Task 2'] },
    { title: 'In Progress', tasks: ['Task 3', 'Task 4'] },
    { title: 'Done', tasks: ['Task 5', 'Task 6'] },
  ];

const Backlog = ({  }) => {
    return (
        <div className="backlog-div">
            <KanbanBoard columns={tasksAndColumns}/>
        </div>
    );
  };

export default Backlog;