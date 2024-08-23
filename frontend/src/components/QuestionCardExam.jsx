import React, { useState } from 'react';

const QuestionCardExam = ({ question, options, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Set the selected option state
  };

  return (
    <div className="bg-black p-4 rounded-lg my-4 border border-white">
      <div className="text-white font-semibold mb-4">{question}</div>
      {options.map((option, index) => (
        <button
          key={index}
          className={`w-full text-left text-white py-2 px-4 mb-2 rounded ${
            selectedOption === option ? "bg-gray-800" : "hover:bg-gray-700"
          }`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionCardExam;
