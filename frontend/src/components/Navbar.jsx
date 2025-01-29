import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-xl font-semibold">
          <Link to="/" className="hover:text-gray-400">
            Pritish Bordoloi
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/chat" className="hover:text-gray-400">
            Chat
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link to="/projects" className="hover:text-gray-400">
            Projects
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <i className="fas fa-times text-xl"></i> // Close icon when menu is open
            ) : (
              <i className="fas fa-bars text-xl"></i> // Menu icon when menu is closed
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default on larger screens) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 bg-gray-800 p-4 rounded-lg">
          <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/chat" className="hover:text-gray-400" onClick={toggleMenu}>
            Chat
          </Link>
          <Link
            to="/projects"
            className="hover:text-gray-400"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-400"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar