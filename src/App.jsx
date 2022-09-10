import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { Main } from './Pages/Main';
import { Registration } from './Pages/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/registration' element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
