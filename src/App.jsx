import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './Components/About';
import { BestPracticies } from './Components/BestPracticies';
import { Courses } from './Components/Courses';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { News } from './Components/News';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <About />
        <Courses />
        <News />
        <BestPracticies />
      </div>
      <Footer />
    </>
  );
}

export default App;
