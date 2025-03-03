"use client";

import { useState } from "react";

const Conuter = () => {
  const [count, setCount]: any = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};

export default Conuter;
