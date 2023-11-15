import './App.css';
import { useState } from 'react';
import MyAppBar from './components/menu/AppBar';
import SignUp from './components/homepage/contact';
import Accueil from './components/homepage/Accueil';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import KanbanBoard from './components/kanban/KanbanBoard';
import Backlog from './pages/Backlog';

const tasksAndColumns2 = [
  { title: 'To Do', tasks: ['Task 1', 'Task 2'] },
  { title: 'In Progress', tasks: ['Task 3', 'Task 4'] },
  { title: 'Done', tasks: ['Task 5', 'Task 6'] },
  { title: 'To be tested', tasks: ['Task 7', 'Task 8'] },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <MyAppBar/>
          <Routes>
            <Route exact path='/' element={<Accueil/>} />
            <Route path='/about' element={<SignUp/>}/>
            <Route path='/backlog' element={<Backlog/>}/>
            <Route path='/sprint' element={<KanbanBoard columns={tasksAndColumns2}/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
