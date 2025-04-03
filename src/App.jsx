import { Routes, Route } from 'react-router-dom';
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
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="techstack"><TechStack /></div>
      <div id="contact"><ContactForm /></div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
}

export default App;
