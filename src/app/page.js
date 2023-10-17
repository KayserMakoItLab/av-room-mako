'use client'
import ControlPanel from "@/components/ControlPanel";
import { Gltf, Grid, Loader, OrbitControls, Plane, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import './page.css'
import { IoIosArrowBack } from "react-icons/io";

export default function Home() {
  const [openControlPanel, setOpenControlPanel] = useState(false)

  const handleControlPanelMenu = () => {
    console.log('clicked');
    setOpenControlPanel(true);
  }

  return (
    <div style={{ width: "100vw", height: "100vh", position: "fixed" }}>
      <Suspense fallback={<Loader />}>
        {!openControlPanel ? (
          <div className="control-panel-btn">
            <div
              className="control-panel-back-btn"
              onClick={handleControlPanelMenu}
            >
              <IoIosArrowBack />
            </div>
            <div className="control-panel-btn-text">Control Panel</div>
          </div>
        ) : (
          <ControlPanel open={setOpenControlPanel} />
        )}
        <Canvas camera={{ position: [10, 5, -10], fov: 60 }}>
          <perspectiveCamera position={[0, 0, 5]} />
          <ambientLight intensity={3} />
          <OrbitControls
            dampingFactor={1}
            screenSpacePanning
            minPolarAngle={0}
            maxPolarAngle={1.65}
            minDistance={1}
            maxDistance={15}
          />
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
