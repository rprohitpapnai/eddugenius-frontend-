
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

const SplineScene = ({ scene, className = "" }: SplineSceneProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Spline
        scene={scene}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default SplineScene;
