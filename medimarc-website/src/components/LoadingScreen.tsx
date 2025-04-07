import { useEffect, useState } from "react";
import "../styles/LoadingScreen.css";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  fadeOut: boolean;
}

const LoadingScreen = ({ onLoadingComplete, fadeOut }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + 20, 100));
      } else {
        onLoadingComplete();
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-container">
        <div className="loading-pulse"></div>
        <div className="loading-logo">MEDIMARC</div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-inner" style={{ width: `${progress}%` }} />
      </div>
      <div className="typing-text">Welcome to Medimarc.</div>
    </div>
  );
};

export default LoadingScreen;
