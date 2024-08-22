import Navbar from '../components/Navbar';
import QuestionCard from '../components/QuestionCard';
import Footer from '../components/Footer';

const Practice = () => {
  const questions = [
    {
      questionText: "Q1: What’s the color of the car?",
      options: ["A. Red", "B. Black", "C. Abahor", "D. Green"],
      correctAnswer: "A. Red"
    },
    {
      questionText: "Q2: What’s the speed of the car?",
      options: ["A. 100mph", "B. 150mph", "C. 200mph", "D. 250mph"],
      correctAnswer: "C. 200mph"
    },
    {
      questionText: "Q3: What type of car is it?",
      options: ["A. Sedan", "B. SUV", "C. Convertible", "D. Coupe"],
      correctAnswer: "D. Coupe"
    }
  ];

  return (
    <div className="bg-black min-h-screen px-12 flex flex-col justify-between">
      <Navbar />
      <div className="flex-1  flex-col items-center justify-center space-y-6">
        {questions.map((item, index) => (
          <QuestionCard
            key={index}
            question={item.questionText}
            options={item.options}
            correctAnswer={item.correctAnswer}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Practice;
