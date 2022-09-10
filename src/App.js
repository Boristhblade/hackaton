import './App.css';
import { About } from './Components/About';
import { Courses } from './Components/Courses';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Courses />
    </div>
  );
}

export default App;
