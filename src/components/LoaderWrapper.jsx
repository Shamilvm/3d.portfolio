import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const LoaderWrapper = ({ children }) => {
  const { progress } = useProgress();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setIsLoaded(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50 text-white">
        <span className="canvas-loader" />
        <p className="mt-10 font-bold text-sm">
          {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
        </p>
      </div>
    );
  }

  return children;
};

export default LoaderWrapper;
