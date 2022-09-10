import './App.css';
import { About } from './Components/About';
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
    </div>
  );
}

export default App;
