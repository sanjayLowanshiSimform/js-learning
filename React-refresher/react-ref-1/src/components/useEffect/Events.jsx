import React, { useState, useEffect } from 'react';

function ClickLogger() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setClickCount(prevCount => prevCount + 1);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <p>Click count: {clickCount}</p>
    </div>
  );
}

export default ClickLogger;
