import React from 'react';

const Progress = ({ index, numQuestions, points, numPoints, answer }) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index}</strong>/{numQuestions}
      </p>
      <p>
        Points <strong>{points}</strong> / {numPoints}
      </p>
    </header>
  );
};

export default Progress;
