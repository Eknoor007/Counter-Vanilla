import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementIfOdd, increment } from './action/Action';

const App = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.example.value);

  const handleIncrementAsync = () => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => dispatch(incrementIfOdd())}>Increment if Odd</button>
      <button onClick={handleIncrementAsync}>Increment Async</button>
    </div>
  );
};

export default App;