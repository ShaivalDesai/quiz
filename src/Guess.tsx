import React, { useState } from 'react';

export default function Guess() {

  const [userGuess, setUserGuess] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  let targetNumber=15;

  const handleInputChange = (e:any) => {
    const value = parseInt(e.target.value);
    setUserGuess(value);
  };

  const handleGuess = () => {
    if (userGuess !== null) {
      if (userGuess === targetNumber) {
        alert('Congratulations! You guessed the correct number.');
      } else if (userGuess < targetNumber) {
        alert('Try again! The correct number is higher.');
      } else {
        alert('Try again! The correct number is lower.');
      }
    }
    else{
        alert("Enter the number");
    }
  };

  return (
    <div>
      <h1>Guess the Number Game</h1>
      <p>Guess a number between 1 and 20:</p>
      <input type="number" onChange={handleInputChange} value={userGuess || ''} />
      <button onClick={handleGuess}>Submit Guess</button>
      {message && <p>{message}</p>}
    </div>
  );
};


