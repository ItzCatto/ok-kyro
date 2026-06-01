"use client";
import { MeshGradient } from "@paper-design/shaders-react";

export function ShaderBackground() {
  return (
    <MeshGradient
      className="fixed inset-0 w-full h-full -z-10"
      colors={["#000000", "#0a0018", "#1a0035", "#2d0060", "#000000"]}
      speed={0.35}
      distortion={0.6}
      swirl={0.3}
    />
  );
}
