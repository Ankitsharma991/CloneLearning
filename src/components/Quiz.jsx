import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Quiz = (props) => {
  const location = useLocation();
  const propsData = location.state;
  const [questions, setQuestions] = useState();

  const fetch = async () => {
    const response = await axios.get(
      "https://api-language-learning-app.onrender.com/quiz"
    );
    setQuestions(response.data.quiz[propsData ? propsData : 0]);
    // data = data.quiz[0];
    // setQuestions(data);
  };
  // const questions = {
  //   quiz_title: "Spanish Basics Quiz",
  //   questions: [
  //     {
  //       question_text: "What does 'hola' mean in English?",
  //       options: ["Goodbye", "Hello", "Thank you", "Excuse me"],
  //       correct_option: 1,
  //     },
  //     {
  //       question_text: "What is the Spanish word for 'yes'?",
  //       options: ["Sí", "No", "Por favor", "Gracias"],
  //       correct_option: 0,
  //     },
  //     {
  //       question_text: "What is the Spanish word for 'thank you'?",
  //       options: ["Sí", "No", "Por favor", "Gracias"],
  //       correct_option: 3,
  //     },
  //     {
  //       question_text: "What is the Spanish word for 'goodbye'?",
  //       options: ["Hasta la vista", "Hola", "Adiós", "Buenos días"],
  //       correct_option: 2,
  //     },
  //     {
  //       question_text: "What is the Spanish word for 'please'?",
  //       options: ["Sí", "No", "Por favor", "Gracias"],
  //       correct_option: 2,
  //     },
  //   ],
  // };
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(120); // Two minute timer

  useEffect(() => {
    if (!questions) {
      fetch();
    }
    const interval = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => {
        if (prevTimeRemaining === 0) {
          clearInterval(interval);
          setShowScore(true);
          return prevTimeRemaining;
        } else {
          return prevTimeRemaining - 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [questions]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleNextButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const renderTimer = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return (
      <div className="text-xl font-bold text-center">{`${minutes}:${seconds
        .toString()
        .padStart(2, "0")}`}</div>
    );
  };

  const renderQuestion = (question) => {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{question.text}</h2>
        <div className="grid grid-cols-2 gap-4">
          {question.options.map((option) => (
            <button
              key={option.text}
              className="p-4 bg-gray-100 text-gray-800 rounded-lg shadow-md hover:bg-gray-200"
              onClick={() => handleAnswerOptionClick(option.correct)}
            >
              {option.text}
            </button>
          ))}
        </div>
        <button
          className="mt-8 bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600"
          onClick={handleNextButtonClick}
        >
          Next
        </button>
      </div>
    );
  };

  const renderScore = () => {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Quiz completed!</h2>
        <p className="text-xl mb-4">
          You scored {score} out of {questions.length} questions
        </p>
        <button
          className="mt-8 bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => window.location.reload()}
        >
          Restart Quiz
        </button>
      </div>
    );
  };

  return (
    <>
      {questions ? (
        <div className="max-w-3xl mx-auto my-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">{questions.title}</h1>
            {showScore
              ? renderScore()
              : renderQuestion(questions.questions[currentQuestion])}
            <div className="mt-8">{renderTimer()}</div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default Quiz;
