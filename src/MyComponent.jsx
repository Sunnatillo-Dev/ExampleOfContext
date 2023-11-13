// src/MyComponent.jsx
import React, { useContext } from 'react';
import { MyContext } from './MyProvider';

const MyComponent = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponent;
