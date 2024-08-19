import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg p-8 z-50 relative">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold">Chose your subject</span>
          <button onClick={closeModal} className="text-black text-lg font-bold">X</button>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <label className="font-semibold">Module</label>
            <select className="border p-2 rounded">
              <option>Choose a module</option>
            </select>
          </div>
          <div className="flex flex-col mx-4">
            <label className="font-semibold">Section</label>
            <select className="border p-2 rounded">
              <option>Choose a section</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Chapter</label>
            <select className="border p-2 rounded">
              <option>Choose a chapter</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600">OK</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
