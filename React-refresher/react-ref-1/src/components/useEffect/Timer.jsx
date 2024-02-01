import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId); // Cleanup function to clear the interval when the component unmounts
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
}

export default Timer;
