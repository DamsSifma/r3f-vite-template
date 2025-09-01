import { StrictMode } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Leva, useControls } from "leva";
import { Perf } from "r3f-perf";

function App() {
  const { backgroundColor } = useControls("Colors", {
    backgroundColor: { value: "#1e1e1e" },
  });
  return (
    <>
      <Leva theme={{ sizes: { rootWidth: "350px" } }} />
      <StrictMode>
        <Canvas shadows camera={{ position: [3, 3, 3] }}>
          <Perf showGraph={false} position="top-left" />
          <color attach="background" args={[backgroundColor]} />
          <Experience />
        </Canvas>
      </StrictMode>
    </>
  );
}

export default App;
