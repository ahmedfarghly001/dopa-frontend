import { useState } from 'react';

const QuestionCard = ({ question, options, correctAnswer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-black p-4 rounded-lg my-4 border border-white">
      <div className="text-white font-semibold mb-4">{question}</div>
      <div className="flex justify-between mb-2">
        {options.slice(0, 2).map((option, index) => (
          <button key={index} className="w-1/2 text-left text-white py-2 px-4 mr-2 last:mr-0 hover:bg-gray-800 rounded">
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        {options.slice(2, 4).map((option, index) => (
          <button key={index} className="w-1/2 text-left text-white py-2 px-4 mr-2 last:mr-0 hover:bg-gray-800 rounded">
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button type="button" className="py-2 px-6 border border-white text-white rounded transition duration-300 ease-in-out transform hover:scale-105"
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
