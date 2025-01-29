import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">MyPortfolio</h3>
            <p className="text-gray-400 mt-2">
              A passionate developer building beautiful web experiences.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chat" className="hover:text-gray-400">
                  Chat
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/projects" className="hover:text-gray-400">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h4 className="text-lg font-medium">Follow Me</h4>
            <div className="flex justify-center space-x-6 mt-2">
              <a
                href="https://github.com/ROULIK970"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://in.linkedin.com/in/pritish-bordoloi-a9819bbb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            &copy; 2025 MyPortfolio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer