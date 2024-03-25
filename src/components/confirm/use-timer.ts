import { useEffect, useState } from 'react';

export type TimeoutHandler = () => void;

export const useTimer = (timer: number, onTimeout: TimeoutHandler) => {
  const [seconds, setSeconds] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 0) {
          onTimeout();
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
