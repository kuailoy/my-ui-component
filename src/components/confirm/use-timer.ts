import { useEffect, useState } from 'react';

export const useTimer = (timer: number) => {
  const [seconds, setSeconds] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return seconds;
};
