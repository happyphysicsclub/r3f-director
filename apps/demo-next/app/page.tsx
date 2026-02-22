"use client";

import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { Hello, Controls } from "@happyphysicsclub/r3f-director";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <div className="w-1/3 h-full p-8">
        This is a demo of the r3f-director package. It is a simple wrapper
        around the react-three-fiber library that provides a simple API for
        creating 3D scenes. The Hello component returns a string, and the Scene
        component renders a 3D scene with the children passed to it.
      </div>
      <main className="w-2/3 h-full flex flex-col items-start justify-center p-8">
        <Hello />
        <Canvas className="border" camera={{ position: [0, 2, 5], fov: 45 }}>
          <Box>
            <meshStandardMaterial color="hotpink" />
          </Box>
          <Controls />
        </Canvas>
      </main>
    </div>
  );
}
