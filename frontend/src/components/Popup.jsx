// Popup.jsx
import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-black">  {/* Added text-black here */}
        <h2 className="font-bold text-lg mb-8">Choose your subject</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <select id="module" name="module" className="mt-1 block w-full p-2 border-gray-300 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
              <option>Module 1</option>
              <option>Module 2</option>
              <option>Module 3</option>
            </select>
          </div>
          <div>
            <select id="section" name="section" className="mt-1 block w-full p-2 border-gray-300 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
              <option>Section 1</option>
              <option>Section 2</option>
            </select>
          </div>
          <div>
            <select id="chapter" name="chapter" className="mt-1 block w-full p-2 border-gray-300 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
              <option>Chapter 1</option>
              <option>Chapter 2</option>
            </select>
          </div>
        </div>
        <button onClick={onClose} className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 text-lg font-semibold">OK</button>
      </div>
    </div>
  );
};

export default Popup;
