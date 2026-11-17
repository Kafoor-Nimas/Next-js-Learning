"use client";

import { useState } from "react";

const Counter = () => {
  const [buttonCounter, setButtonCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setButtonCounter((prev) => prev + 1)}>
        This counter has been clicked {buttonCounter} number of times
      </button>
    </div>
  );
};

export default Counter;
