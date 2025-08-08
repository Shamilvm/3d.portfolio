import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  // const { progress } = useProgress();
  return (
    <Html center>
      <div class="loader">
        <p>Shamil</p>
        <div class="words">
          <span class="word">Vm</span>
          <span class="word">Vm</span>
          <span class="word">Vm</span>
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
