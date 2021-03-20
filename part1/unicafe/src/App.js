import React, { useState } from 'react';

const Feedback = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  );
};

const Statistics = ({ value }) => {
  const all = value.good + value.neutral + value.bad;
  const average = ((value.good - value.bad) / all).toFixed(1) || 0;
  const positive = ((value.good * 100) / all).toFixed(1);

  if (all === 0) return <div>No feedback given</div>;

  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={value.good} />
          <Statistic text="neutral" value={value.neutral} />
          <Statistic text="bad" value={value.bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={isNaN(average) ? 0 : average} />
          <Statistic
            text="positive"
            value={isNaN(positive) ? 0 + '%' : positive + '%'}
          />
        </tbody>
      </table>
    </div>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const feedbackValue = {
    good,
    neutral,
    bad,
  };

  return (
    <>
      <Feedback />
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>Statistics</h1>
      <Statistics value={feedbackValue} />
    </>
  );
};

export default App;
