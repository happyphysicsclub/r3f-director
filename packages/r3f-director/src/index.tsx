//packages/r3f-director/src/index.ts

import type { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";

export const Hello = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px 10px",
      }}
    >
      Hello from r3f-director!
    </div>
  );
};

export function Scene({ children }: { children: ReactNode }) {
  return <Canvas>{children}</Canvas>;
}
