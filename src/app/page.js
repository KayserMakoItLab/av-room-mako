'use client'
import { Environment, Gltf, Grid, Loader, OrbitControls, Plane } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Suspense fallback={<Loader />}>
        <Canvas camera={{ position: [10, 10, -10], fov: 60 }}>
          <ambientLight intensity={1} />
          <OrbitControls dampingFactor={1} screenSpacePanning />
          {/* <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="yellow" />
        </mesh> */}
          {/* <Environment  background /> */}
          <Gltf
            src="/assets/rooms/room1.gltf"
            receiveShadow
            castShadow
            position={[0,0.4,0]}
          />
          <Plane
            args={[100, 100]}
            position={[0, -0.01, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <Grid position={[0, 0, 0]} args={[200, 200]} cellSize={0.1} />
        </Canvas>
      </Suspense>
    </div>
  );
}
