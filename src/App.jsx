// src/App.jsx
import React from "react";
import { MyProvider } from "./MyProvider";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};

export default App;
