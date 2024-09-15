import React, { useState, useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import QuestionCard from '../components/QuestionCard';
import Footer from '../components/Footer';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase_config";

const Practice = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          );

        // Randomly shuffle the questions and select 20
        const randomQuestions = fetchedQuestions
          .sort(() => 0.5 - Math.random()) // Shuffle the array
          .slice(0, 20); // Take the first 20 questions after shuffling

        setQuestions(randomQuestions);
      } catch (error) {
        console.error("Error fetching questions from Firestore:", error);
        setError("Failed to load questions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="bg-black min-h-screen px-12 flex flex-col justify-between">
      <Navbar />
      <div className="flex-1 flex-col items-center justify-center space-y-6">
        {questions.map((item, index) => (
          <QuestionCard
            key={index}
            question={item.text}
            options={item.choices.map(choice => choice.text)}
            correctAnswer={item.choices.find(choice => choice.isCorrect)?.text}
          />
        ))}
      </div>
      <Footer buttonText="Go Back" />
    </div>
  );
};

export default Practice;
