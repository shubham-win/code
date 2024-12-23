import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [counting, autoCount] = useState(false);

  useEffect(() => {
    let intervalTime;
    if (counting) {
      intervalTime = setInterval(() => {
        setCount(count + 1);
      }, 500);
    }
    return () => clearInterval(intervalTime);
  }, [counting, count]);

  const Start = () => {
    autoCount(true);
  };

  const Stop = () => {
    autoCount(false);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>
    </div>
  );
}

export default Counter;