import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Furniture from './pages/Furniture';
import About from './pages/About';
import Partnerships from './pages/Partnerships';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Furniture />} />
          <Route path="about" element={<About />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
