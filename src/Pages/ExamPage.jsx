import React, { useState, useEffect, useRef } from 'react'; 
import Navbar from '../components/Navbar';
import QuestionCardExam from '../components/QuestionCardExam';
import Footer from '../components/Footer';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase_config"; // Ensure your Firebase config is correctly imported

const ExamPage = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(300); // Timer set for 5 minutes (300 seconds)
  const timerRef = useRef(null); // Using useRef to hold the interval ID

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "questions"));
        const fetchedQuestions = querySnapshot.docs
          .map((doc) => doc.data())
          .filter((question) => 
            question.choices && 
            question.choices.length === 4 && 
            question.choices.some(choice => choice.isCorrect)
          ); // Filter out invalid questions

        setQuestions(fetchedQuestions);
        setUserAnswers(Array(fetchedQuestions.length).fill('')); // Initialize user answers based on fetched questions
      } catch (error) {
        console.error("Error fetching questions from Firestore:", error);
      }
    };

    fetchQuestions();
  }, []);

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
      const correctChoice = question.choices.find(choice => choice.isCorrect);
      if (correctChoice && correctChoice.text === userAnswers[index]) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const isCorrect = (index, option) => {
    const correctChoice = questions[index].choices.find(choice => choice.isCorrect);
    return correctChoice && correctChoice.text === option;
  };

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
            question={item.text}
            options={item.choices.map(choice => choice.text)}
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
