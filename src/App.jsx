import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { Main } from './Pages/Main';
import { Registration } from './Pages/Registration';
import { Fillprofile } from './Pages/Fillprofile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/registration' element={<Registration />} />
        <Route exact path='/profilefill' element={<Fillprofile />} />
      </Routes>
    </Router>
  );
}

export default App;
