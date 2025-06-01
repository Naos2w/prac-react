import { useState } from "react";
import "./App.css";
import useTimer from "./hooks/useTimer";

function App() {
  const [timer, setTimer] = useState(0);
  const { time, start, stop, reset } = useTimer({ seconds: timer });

  return (
    <>
      <div className="wrp">
        <h1>Timer</h1>
        <input
          type="number"
          value={timer}
          required
          placeholder="input the timer"
          min={0}
          onChange={(e) => setTimer(parseInt(e.target.value))}
        />
        <h2>{time}</h2>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
