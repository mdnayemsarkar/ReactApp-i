import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  function tick() {
    setTime(new Date());
  }

  return (
    <div className="bg-gray-900 text-white font-mono text-4xl py-4 px-8 rounded-lg shadow-lg">
      {time.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
