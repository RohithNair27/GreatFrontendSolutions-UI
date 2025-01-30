import { useState, useEffect } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    });
  }, []);
  return (
    <div className="bar-container">
      <div className="bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

export default function App() {
  const [progressBarCount, setProgressBarCount] = useState([]);
  function onClick() {
    setProgressBarCount((prev) => {
      return [...prev, {}];
    });
  }
  return (
    <div>
      <button onClick={onClick}>Add</button>
      {progressBarCount.map((element) => (
        <ProgressBar />
      ))}
    </div>
  );
}
