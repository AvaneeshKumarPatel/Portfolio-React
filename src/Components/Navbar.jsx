import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black bg-cover bg-top bg-no-repeat">
      <div className="container mx-auto flex h-16 w-full max-w-[1024px] items-center justify-between px-4 rounded-xl border border-white/25 backdrop-blur-md">
        
        {/* Logo */}
        <div className="text-white text-xl font-bold">[A]</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 text-gray-300">
          <FaLinkedin className="text-xl cursor-pointer hover:text-white" />
          <FaGithub className="text-xl cursor-pointer hover:text-white" />
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Slide-in from Top) */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-6 text-white transition-transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link to="/" onClick={() => setMenuOpen(true)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(true)}>About</Link>
        <Link to="/projects" onClick={() => setMenuOpen(true)}>Projects</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        {/* Social Icons */}
        <div className="flex gap-4">
          <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaGithub className="text-2xl cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
