'use client'
import { Environment, Gltf, Grid, Loader, OrbitControls, Plane, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [10, 5, -10], fov: 60 }}
        >
          <perspectiveCamera
            position={[0, 0, 5]} // Set your initial camera position
          />
          <ambientLight intensity={3} />
          <OrbitControls dampingFactor={1} screenSpacePanning minPolarAngle={0} maxPolarAngle={1.5} minDistance={1} maxDistance={15}/>
          {/* <Environment  background /> */}
          <Sky />
          <Gltf
            src="/assets/rooms/room1.gltf"
            receiveShadow
            castShadow
            position={[0, -1.4, 0]}
          />
          <Plane
            args={[250, 250]}
            position={[0, -1.75, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          {/* <Grid position={[0, 0, 0]} args={[200, 200]} cellSize={0.1} /> */}
        </Canvas>
      </Suspense>
    </div>
  );
}
