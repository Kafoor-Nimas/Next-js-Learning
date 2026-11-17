"use client";

import { useState } from "react";

const Counter = () => {
  const [buttonCounter, setButtonCounter] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setButtonCounter((prev) => prev + 1);
          setButtonClicked(true);
        }}
      >
        This counter has been clicked {buttonCounter} number of times
      </button>
      {buttonClicked && <p>Button has been clicked!</p>}

      {buttonCounter > 10 && <p>You really like clicking this button!</p>}
    </div>
  );
};

export default Counter;
