import React from 'react';

const FinishScreen = ({ points, numPoints, highscore, dispatch }) => {
  const percentage = (points / numPoints) * 100;

  let emoji;

  if (percentage === 100) emoji = '🥇';
  if (percentage >= 80) emoji = '🥳';
  if (percentage >= 50 && percentage < 80) emoji = '😅';
  if (percentage >= 0 && percentage < 50) emoji = '🫢';
  if (percentage === 0) emoji = '🤦‍♂️';

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{' '}
        {numPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highscore: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restarted' })}
      >
        Restart
      </button>
    </>
  );
};

export default FinishScreen;
