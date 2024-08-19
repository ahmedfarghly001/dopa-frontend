import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white py-3">
      <div className="container mx-auto flex justify-between items-center px-10">
        <div className="flex items-center space-x-10">
          <img src="./assets/vertical.png" alt="Dopa Logo" className="h-10" />
          <nav className="flex space-x-12 text-xl font-medium">  {/* Adjusted from text-lg to text-xl */}
            <a href="#services" className="hover:text-gray-400">Services</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
            <a href="#about" className="hover:text-gray-400">About</a>
          </nav>
        </div>
        <div className="border-l border-gray-400 pl-12">
          <a href="#signout" className="hover:text-gray-400 text-xl font-medium">Sign out</a>  {/* Adjusted from text-lg to text-xl */}
        </div>
      </div>
    </header>
  );
};

export default Header;
