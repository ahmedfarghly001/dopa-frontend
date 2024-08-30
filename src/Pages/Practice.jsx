import React, { useState, useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import QuestionCard from '../components/QuestionCard';
import Footer from '../components/Footer';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase_config"; // Ensure your Firebase config is correctly imported

const Practice = () => {
  const [questions, setQuestions] = useState([]);

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
      } catch (error) {
        console.error("Error fetching questions from Firestore:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="bg-black min-h-screen px-12 flex flex-col justify-between">
      <Navbar />
      <div className="flex-1 flex-col items-center justify-center space-y-6">
        {questions.map((item, index) => (
          <QuestionCard
            key={index}
            question={item.text} // Assuming 'text' is the field for question text
            options={item.choices.map(choice => choice.text)} // Assuming 'choices' is an array of objects with a 'text' field
            correctAnswer={item.choices.find(choice => choice.isCorrect)?.text} // Find the correct answer
          />
        ))}
      </div>
      <Footer buttonText="Go Back" />
    </div>
  );
};

export default Practice;
