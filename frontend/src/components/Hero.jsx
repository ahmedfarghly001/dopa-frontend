import React, { useState } from 'react';
import { Illust } from './illust';
import Popup from './Popup';  // Importing the Popup component

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleButtonClick = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  return (
    <section className="bg-black text-white py-12">  
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 lg:w-2/5 flex flex-col items-start ml-24">
          <h1 className="text-6xl font-bold mb-6">Welcome Doctor,</h1>
          <p className="text-xl font-semibold mb-10">we are here to enhance your studying journey</p> 
          <div className="flex space-x-4">
            <button 
              onClick={() => handleButtonClick("Practice content here")}
              className="bg-teal text-white py-3 px-10 rounded-md hover:bg-teal-600 text-2xl font-semibold"
            >
              Practice
            </button>
            <button 
              onClick={() => handleButtonClick("Exam content here")}
              className="bg-red-500 text-white py-3 px-10 rounded-md hover:bg-red-600 text-2xl font-semibold"
            >
                Exam 
            </button>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-3/5 mt-10 md:mt-0 flex justify-center">
          <Illust/>
        </div>
      </div>
      {showPopup && <Popup onClose={() => setShowPopup(false)}>{popupContent}</Popup>}
    </section>
  );
};

export default Hero;
