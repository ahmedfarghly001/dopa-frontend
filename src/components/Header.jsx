import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-black text-white py-7">
      <div className="container mx-auto flex justify-between items-baseline px-10 pl-24"> {/* Increased left padding more significantly */}
        <div className="flex items-center space-x-16">
          <img src="./assets/vertical.png" alt="Dopa Logo" className="h-16" />
          <nav className="flex space-x-12 text-2xl font-medium pt-10">
            <a href="#services" className="hover:text-gray-400">Services</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
            <a href="#about" className="hover:text-gray-400">About</a>
            <div className="w-144 h-2 bg-white rounded-full mt-3"></div>
            <div className="ml-10">
              <Link to="/Login-Page" className="hover:text-gray-400">Sign out</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
