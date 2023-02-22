import React, { useState } from 'react';
import Button from '../components/UI/Button/Button';
import Input from '../components/UI/Input/Input';
import Card from '../components/UI/Card/Card';
import './QuizStyles.css'
const questions = [
  {
    question: 'Who is the father of our nation?',
    options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Donald Trump', 'Barrack Obama'],
    answer: 'Mahatma Gandhi',
  },
  {
    question: 'What color is are the leaves?',
    options: ['Blue', 'Red', 'Yellow','Green'],
    answer: 'Green',
  },
  {
    question: 'What color is the sky?',
    options: ['Blue', 'Red', 'Yellow','Green'],
    answer: 'Blue',
  },
  {
    question: 'What color is the sky?',
    options: ['Blue', 'Red', 'Yellow','Green'],
    answer: 'Blue',
  },
  {
    question: 'What color is the fire?',
    options: ['Blue', 'Red', 'Yellow','Green'],
    answer: 'Red',
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleShowResult = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    alert(`Your have answered ${score} / ${questions.length}`);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Card title="Quiz">
      <h3 className='quest'>{currentQuestion.question}</h3>
      {currentQuestion.options.map((option) => (
        <div key={option}>
          <Input
            type="radio"
            name="option"
            value={option}
            onChange={handleOptionChange}
            checked={selectedOption === option}
          />
          <label>{option}</label>
        </div>
      ))}
      {currentQuestionIndex < questions.length - 1 ? (
        <Button onClick={handleNextQuestion} disabled={!selectedOption}>
          Next Question
        </Button>
      ) : (
        <Button onClick={handleShowResult} disabled={!selectedOption}>
          Show Result
        </Button>
      )}
    </Card>
  );
};

export default Quiz;
