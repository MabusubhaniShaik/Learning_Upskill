import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState;
  0;
  return (
    <div>
      <button
        onClick={() => {
          setCounter + 1;
        }}
      >
        {counter}
      </button>
      <h1>counter</h1>
    </div>
  );
};

export default App;
