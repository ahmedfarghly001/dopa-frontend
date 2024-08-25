import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import QuestionCardExam from '../components/QuestionCardExam';
import Footer from '../components/Footer';

const ExamPage = () => {
  const questions = [
    // Your ten questions
    { questionText: "Q1: What’s the color of the car?", options: ["A. Red", "B. Black", "C. Blue", "D. Green"], correctAnswer: "A. Red" },
    { questionText: "Q2: What’s the speed of the car?", options: ["A. 100mph", "B. 150mph", "C. 200mph", "D. 250mph"], correctAnswer: "C. 200mph" },
  ];

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleOptionChange = (index, option) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = option;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitClicked(true);
    let score = 0;
    questions.forEach((question, index) => {
      if (question.correctAnswer === userAnswers[index]) {
        score += 1;
      }
    });
    console.log(`Score: ${score}`);
  };

  const isCorrect = (index, option) => questions[index].correctAnswer === option;

  return (
    <div className="bg-black min-h-screen px-12 flex flex-col justify-between">
      <Navbar />
      <div className="flex-1 flex-col items-center justify-center space-y-6">
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
      <Footer buttonText="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default ExamPage;
