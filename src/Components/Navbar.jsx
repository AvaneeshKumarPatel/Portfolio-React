import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
   useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-black">
      <div className="container mx-auto flex h-16 w-full max-w-[1024px] items-center justify-between px-4 rounded-xl border border-white/25 backdrop-blur-md">
        {/* Logo */}
        <div className="text-white text-xl font-bold">[A]</div>

        {/* Desktop Menu */}
        {!isMobile && (
          <ul className="hidden md:flex items-center gap-6 text-white cursor-pointer">
            <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
          </ul>
        )}

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 text-gray-300">
          <FaLinkedin className="text-xl cursor-pointer hover:text-white" />
          <FaGithub className="text-xl cursor-pointer hover:text-white" />
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {/* Mobile Sidebar with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-full w-2/3 bg-black text-white z-50 flex flex-col items-center pt-20 space-y-6 shadow-lg"
            >
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes />
              </button>

              {/* Animated Links */}
              {["home", "about", "projects", "contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <ScrollLink
                    to={item}
                    smooth={true}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer text-lg hover:text-gray-400 transition"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </ScrollLink>
                </motion.div>
              ))}

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="flex gap-4 mt-4"
              >
                <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-400" />
                <FaGithub className="text-2xl cursor-pointer hover:text-gray-400" />
              </motion.div>
            </motion.div>

            {/* Overlay (Click to Close Sidebar) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
              onClick={() => setMenuOpen(false)}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
