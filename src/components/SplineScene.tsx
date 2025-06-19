
import Spline from '@splinetool/react-spline';
import { useState } from 'react';

interface SplineSceneProps {
  scene: string;
  className?: string;
  fallback?: React.ReactNode;
}

const SplineScene = ({ scene, className = "", fallback }: SplineSceneProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    console.log(`Spline scene failed to load: ${scene}`);
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  if (hasError) {
    return fallback || (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 ${className}`}>
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30"></div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-50 animate-pulse"></div>
        </div>
      )}
      <Spline
        scene={scene}
        style={{ width: '100%', height: '100%' }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default SplineScene;
