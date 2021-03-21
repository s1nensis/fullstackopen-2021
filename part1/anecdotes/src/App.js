import React, { useState } from 'react';

const AnecdoteDay = ({ anecdote, votes }) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdote} <br /> has {votes} votes
      </p>
    </div>
  );
};

const MostVotedAnecdote = ({ anecdote }) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdote}</p>
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ];

  const votes = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(votes);
  const mostVotedAnecdote = points.indexOf(Math.max(...points));

  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  const handleNextAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdote);
  };

  return (
    <div>
      <AnecdoteDay anecdote={anecdotes[selected]} votes={points[selected]} />
      <div>
        <Button handleClick={handleVote} text="vote" />
        <Button handleClick={handleNextAnecdote} text="next anecdote" />
      </div>
      <MostVotedAnecdote anecdote={anecdotes[mostVotedAnecdote]} />
    </div>
  );
};

export default App;
