import { useState, useEffect } from 'react';

function Timer({ initialMinutes }) {
  const [time, setTime] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    if (time > 0) {
      setIsActive(true);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(initialMinutes * 60);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div>
      <h2>Temporizador</h2>
      <div>
        <p>{formatTime()}</p>
      </div>
      <button onClick={handleStart} disabled={isActive || time === 0}>
        Iniciar
      </button>
      <button onClick={handleReset}>
        Resetar
      </button>
    </div>
  );
}

export default Timer;
