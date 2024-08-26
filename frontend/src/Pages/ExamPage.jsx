import React, { useState, useEffect, useRef } from 'react'; 
import Navbar from '../components/Navbar';
import QuestionCardExam from '../components/QuestionCardExam';
import Footer from '../components/Footer';

const ExamPage = () => {
  const questions = [
    { questionText: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"], correctAnswer: "Paris" },
    { questionText: "What is the largest planet in our solar system?", options: ["Mars", "Jupiter", "Earth", "Saturn"], correctAnswer: "Jupiter" },
    { questionText: "What year did the Titanic sink?", options: ["1912", "1905", "1898", "1923"], correctAnswer: "1912" }
  ];

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [submitClicked, setSubmitClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(300); // Timer set for 5 minutes (300 seconds)
  const timerRef = useRef(null); // Using useRef to hold the interval ID

  useEffect(() => {
    if (!submitClicked) { // Only start the timer if submit has not been clicked
      timerRef.current = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer === 1) {
            handleSubmit();
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerRef.current); // Clean up the interval on component unmount
  }, [submitClicked]); // Reactivate the effect when submitClicked changes

  const handleOptionChange = (index, option) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = option;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    clearInterval(timerRef.current); // Clear the interval when submitting
    setSubmitClicked(true);
    let newScore = 0;
    questions.forEach((question, index) => {
      if (question.correctAnswer === userAnswers[index]) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  //some change from saad

  const isCorrect = (index, option) => questions[index].correctAnswer === option;

  return (
    <div className="bg-black min-h-screen px-12 flex flex-col justify-between">
      <Navbar />
      <div className="flex-1 flex-col items-center justify-center space-y-6">
        {submitClicked && (
          <div className="text-white text-lg font-bold">
            You got {score} out of {questions.length} correct!
          </div>
        )}
        {questions.map((item, index) => (
          <QuestionCardExam
            key={index}
            question={item.questionText}
            options={item.options}
            selectedOption={userAnswers[index]}
            onOptionChange={(option) => handleOptionChange(index, option)}
            isCorrect={(option) => isCorrect(index, option)}
            submitClicked={submitClicked}
          />
        ))}
      </div>
      {!submitClicked && (
        <Footer buttonText="Submit" onClick={handleSubmit} />
      )}
    </div>
  );
};

export default ExamPage;
