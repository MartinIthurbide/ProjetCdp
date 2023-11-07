import './App.css';
import { useState } from 'react';
import MyAppBar from './components/menu/AppBar';
import SignUp from './components/homepage/contact';
import ProjectComponent from './components/homepage/ProjectComponent';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <MyAppBar />
          <Routes>
            <Route exact path='/' element={<ProjectComponent />} />
            <Route path='/about' element={<SignUp />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
