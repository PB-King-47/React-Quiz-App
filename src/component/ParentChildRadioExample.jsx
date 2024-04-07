import React, { useState } from 'react';

function ParentChildRadioExample() {
    const questions = [
      {
        questionText: 'What is the capital of France?',
        answerOptions: [
          { answerText: 'Paris', isCorrect: true },
          { answerText: 'Berlin', isCorrect: false },
          { answerText: 'Madrid', isCorrect: false },
          { answerText: 'Rome', isCorrect: false },
        ],
      },
      {
        questionText: 'What is 2 + 2?',
        answerOptions: [
          { answerText: '3', isCorrect: false },
          { answerText: '4', isCorrect: true },
          { answerText: '5', isCorrect: false },
          { answerText: '6', isCorrect: false },
        ],
      },
      // Add more questions here...
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
  
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
  
    const restartQuiz = () => {
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
    };
  
    return (
      <div className="quiz-app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
            <button onClick={restartQuiz}>Restart Quiz</button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">{questions[currentQuestion].questionText}</div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <div key={index}>
                  <label>
                    <input
                      type="radio"
                      name="answer"
                      value={option.answerText}
                      onClick={() => handleAnswerOptionClick(option.isCorrect)}
                    />
                    {option.answerText}
                  </label>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

export default ParentChildRadioExample;
