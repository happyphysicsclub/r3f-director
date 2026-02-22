"use client";

import { Hello, Scene } from "@happyphysicsclub/r3f-director";
import { Box } from "@react-three/drei";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-1/3 h-full p-8">
        This is a demo of the r3f-director package. It is a simple wrapper
        around the react-three-fiber library that provides a simple API for
        creating 3D scenes. The Hello component returns a string, and the Scene
        component renders a 3D scene with the children passed to it.
      </div>
      <main className="w-2/3 h-full flex flex-col items-start justify-center">
        <Hello />
        <Scene>
          <Box>
            <meshStandardMaterial color="hotpink" />
          </Box>
        </Scene>
      </main>
    </div>
  );
}
