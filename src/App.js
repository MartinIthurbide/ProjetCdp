import './App.css';
import MyAppBar from './components/menu/AppBar';
import AppContainer from './components/AppContainer';
import SignUp from './components/homepage/contact';
import Accueil from './components/homepage/Accueil';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <AppContainer />
      </header>
    </div>
  );
}

export default App;
