import React, { useRef, useState } from "react";
// import { Question } from "./ques";
import { questions } from "./ques";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const ansRef = useRef<string[]>([])

  // const result = () => {
  //   let correctAnswers = 0;
  //   userAnswers.forEach((answer, index) => {
  //     if (answer === questions[index].correctAnswer) {
  //       correctAnswers++;
  //     }
  //   });
  //   setScore(correctAnswers);
  // };

  // let new result

  const handleAnswerClick = (answer: string) => {
    setUserAnswers([...userAnswers, answer]);
    ansRef.current.push(answer);
    console.log("ref :"+ansRef.current)



    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      result();
    }
  };
  

  const result = () => {
    let correctAnswers = 0;
    ansRef.current.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(null);
  };

  return (
    <div>
      {score !== null ? (
        <div>
          <h2>
            Your Score: {score}/{questions.length}
          </h2>
          <button onClick={resetQuiz}>Once Again</button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion+1}</h2>
          <p>{questions[currentQuestion].text}</p>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
