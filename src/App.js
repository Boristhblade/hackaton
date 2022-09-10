import './App.css';
import { About } from './Components/About';
import { Courses } from './Components/Courses';
import { Header } from './Components/Header';
import { NewsCard } from './Components/NewsCard';

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Courses />
      <NewsCard />
    </div>
  );
}

export default App;
