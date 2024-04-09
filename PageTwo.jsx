// src/pages/PageTwo.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const PageTwo = () => {
  // Dummy MCQ questions and options (can be different from Page One)
  const questions = [
    {
      id: 1,
      question: 'Which planet is closest to the Sun?',
      options: ['Mercury', 'Venus', 'Earth', 'Mars'],
    },
    // Add more questions here...
  ];

  return (
    <div>
      <h1>Page Two</h1>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.options.map((option) => (
            <div key={option}>{option}</div>
          ))}
        </div>
      ))}
      {/* Continue button */}
      <button>Finish</button>
    </div>
  );
};

export default PageTwo;
