// src/MyProvider.jsx
import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  // state
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
