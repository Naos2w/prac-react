import { useState, useRef, useEffect } from "react";

type Props = {
  seconds?: number;
};
const useTimer = ({ seconds = 10 }: Props) => {
  const [timer, setTimer] = useState(seconds);
  console.log(`timer: ${timer}`);
  let time = timer;
  console.log(`time: ${time}`);
  const intervalRef = useRef<number | null>(null);

  const start = () => {
    console.log("Start");
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => setTimer((t) => t - 1), 1000);
    if (seconds <= 0) stop();
  };
  const stop = () => {
    console.log("Stop");
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const reset = () => {
    console.log("Reset");
    setTimer(seconds);
  };
  // change the timer if seconds change
  useEffect(() => {
    setTimer(seconds);
    stop();
  }, [seconds]);
  useEffect(() => {
    if (seconds <= 0) stop();
  }, [timer]);
  useEffect(() => {
    // 只在元件掛載時執行
    return () => stop();
  }, []);
  return { time, start, stop, reset };
};

export default useTimer;
