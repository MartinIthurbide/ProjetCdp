import React, { useState } from 'react';
import MyAppBar from './menu/AppBar';
import Accueil from './homepage/Accueil';
import SignUp from './homepage/contact';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function AppContainer() {
  const [dynamicLinks, setDynamicLinks] = useState([]);

  const addDynamicLink = (link) => {
    setDynamicLinks([...dynamicLinks, link]);
  };

  return (
    <div>
        <Router>
            <MyAppBar dynamicLinks={dynamicLinks} />
          <Routes>
            <Route exact path='/' element={<Accueil addDynamicLink={addDynamicLink} />} />
            <Route path='/about' element={<SignUp/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default AppContainer;
