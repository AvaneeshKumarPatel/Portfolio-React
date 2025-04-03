import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Pages/Hero';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import TechStack from './Components/Pages/TechStack';
import ContactForm from './Components/Pages/ContactForm';

function App() {
  return (
         <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      </>
  );
}

export default App;
