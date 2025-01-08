import React, { useState, useEffect } from "react";

const Counter = ({ start = 0, end = 309, duration = 10000 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const increment = (end - start) / (duration / 309); // Calculate increment based on duration
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= end) {
          clearInterval(interval); // Stop when the count reaches the end
          return end;
        }
        return prevCount + increment;
      });
    }, 100); // Update every 100ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [start, end, duration]);

  return (
    <div className="">
      <div className="text-4xl font-semibold text-black">
        {Math.floor(count)}+
      </div>
    </div>
  );
};

export default Counter;
