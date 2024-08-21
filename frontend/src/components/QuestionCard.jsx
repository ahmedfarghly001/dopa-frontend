import React, { useState } from 'react';

const QuestionCard = ({ question, options, correctAnswer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-black p-4 rounded-lg my-4 border border-white">
      <div className="text-white font-semibold mb-4">{question}</div>
      <div className="flex justify-between">
        {options.map((option, index) => (
          <button key={index} className="w-1/2 text-left text-white py-2 px-4 mr-2 last:mr-0 hover:bg-gray-800 rounded">
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="py-2 px-6 border border-white text-white rounded"
          onMouseEnter={() => setShowAnswer(true)}
          onMouseLeave={() => setShowAnswer(false)}
        >
          {showAnswer ? correctAnswer : 'ANSWER'}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
