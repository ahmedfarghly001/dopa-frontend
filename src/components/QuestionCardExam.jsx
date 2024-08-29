const QuestionCardExam = ({ question, options, selectedOption, onOptionChange, isCorrect, submitClicked }) => {
  return (
    <div className="bg-black p-4 rounded-lg my-4 border border-white">
      <div className="text-white font-semibold mb-4">{question}</div>
      {options.map((option, index) => (
        <button
          key={index}
          className={`w-full text-left py-2 px-4 mb-2 rounded ${
            submitClicked
              ? (isCorrect(option)
                  ? 'bg-green-500'
                  : (selectedOption === option ? 'bg-red-500' : 'hover:bg-gray-700'))
              : (selectedOption === option ? 'bg-blue-500' : 'hover:bg-gray-700')
          } text-white`}
          onClick={() => onOptionChange(option)}
          disabled={submitClicked}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionCardExam;
