//packages/r3f-director/src/index.ts

"use client";

import type { ReactNode } from "react";
import { Canvas, type CanvasProps } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Hello = () => {
  return (
    <div
      style={{ backgroundColor: "black", color: "white", padding: "10px 10px" }}
    >
      Hello from r3f-director!
    </div>
  );
};

export const Controls = () => {
  return (
    <>
      <OrbitControls autoRotate />
    </>
  );
};
