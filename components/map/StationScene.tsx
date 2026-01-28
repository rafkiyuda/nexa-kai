'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import StationModel from './StationModel';
import { Suspense } from 'react';

export default function StationScene() {
    return (
        <div className="w-full h-[600px] bg-gray-100 dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-inner relative">
            <Canvas shadows gl={{ antialias: true }}>
                <PerspectiveCamera makeDefault position={[30, 20, 30]} fov={50} />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} maxPolarAngle={Math.PI / 2} />

                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 20, 10]} intensity={1} castShadow />

                <Suspense fallback={null}>
                    <StationModel />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>

            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur p-4 rounded-xl shadow-lg border border-gray-200 dark:border-neutral-800">
                <h3 className="font-bold text-[var(--primary)]">Station Map</h3>
                <p className="text-xs text-gray-500">Drag to rotate • Scroll to zoom</p>
            </div>
        </div>
    );
}
