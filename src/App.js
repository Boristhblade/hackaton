import './App.css';
import { About } from './Components/About';
import { BestPracticies } from './Components/BestPracticies';
import { Courses } from './Components/Courses';
import { Header } from './Components/Header';
import { News } from './Components/News';

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Courses />
      <News />
      <BestPracticies />
    </div>
  );
}

export default App;
