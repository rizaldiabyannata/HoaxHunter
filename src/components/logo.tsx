"use client";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import * as React from "react";

const Logo = () => {
  const sword = useGLTF("/assets/3dmodel/3d_diamond_sword.glb", true);

  return (
    <motion.mesh
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeIn" }}
    >
      <hemisphereLight intensity={0.25} groundColor="black" />
      <pointLight position={[10, 0, 0]} intensity={40} />
      <pointLight intensity={40} position={[-10, 0, 0]} />
      <primitive
        object={sword.scene}
        scale={2}
        position={[0, 6, 0]}
        rotation={[Math.PI, 0, 0]}
        castShadow={false}
      />
    </motion.mesh>
  );
};

export default function swordCanvas() {
  return (
    <div style={{ width: "30px", height: "90px" }}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [30, 0, 0], fov: 25, far: 1000 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <React.Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate={true}
            autoRotateSpeed={4.0}
          />
          <Logo />
        </React.Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
}
