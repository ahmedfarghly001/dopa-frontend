import React from 'react';
import { Link } from 'react-router-dom';

const Popup = ({ onClose, content }) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-black" h-64>
        {/* Navbar with close button */}
        <nav className="flex justify-between items-center mb-8">
          <span className="font-bold text-lg">Choose your subject</span>
          <button onClick={onClose} className="text-black hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </nav>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <select id="module" name="module" className="mt-1 block w-full p-2 border-2 border-black text-base rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal">
              <option>Module 1</option>
              <option>Module 2</option>
              <option>Module 3</option>
            </select>
          </div>
          <div>
            <select id="section" name="section" className="mt-1 block w-full p-2 border-2 border-black text-base rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal">
              <option>Section 1</option>
              <option>Section 2</option>
            </select>
          </div>
          <div>
            <select id="chapter" name="chapter" className="mt-1 block w-full p-2 border-2 border-black text-base rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal">
              <option>Chapter 1</option>
              <option>Chapter 2</option>
            </select>
          </div>
        </div>
        {content === "Exam content here" ? (
          <Link
            to="/ExamPage"
            className="w-full bg-teal text-white py-3 rounded-lg hover:bg-teal-600 text-lg font-semibold flex justify-center items-center"
          >
            OK
          </Link>
        ) : content === "Practice content here" ? (
          <Link
            to="/practice"
            className="w-full bg-teal text-white py-3 rounded-lg hover:bg-teal-600 text-lg font-semibold flex justify-center items-center"
          >
            OK
          </Link>
        ) : (
          <button onClick={onClose} className="w-full bg-teal text-white py-3 rounded-lg hover:bg-teal-600 text-lg font-semibold">
            OK
          </button>
        )}
      </div>
    </div>
  );
};

export default Popup;
