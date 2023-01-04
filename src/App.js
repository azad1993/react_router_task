import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import { Link, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
      </ul>
      <Routes>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="work" element={<Work />}/>
      </Routes>
    </div>
  );
}

export default App;
