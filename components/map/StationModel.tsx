'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

function Floor({ position, args, color, name }: any) {
    return (
        <group position={position}>
            <mesh receiveShadow>
                <boxGeometry args={args} />
                <meshStandardMaterial color={color} transparent opacity={0.8} />
            </mesh>
            <Text
                position={[0, args[1] / 2 + 0.5, 0]}
                fontSize={1}
                color="black"
                anchorX="center"
                anchorY="middle"
            >
                {name}
            </Text>
        </group>
    );
}

function POI({ position, label }: any) {
    const [hovered, setHovered] = useState(false);

    return (
        <group position={position}>
            <mesh
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color={hovered ? "orange" : "#262271"} emissive={hovered ? "orange" : "#000"} />
            </mesh>
            <Html distanceFactor={10}>
                <div className={`bg-white px-2 py-1 rounded shadow text-xs font-bold whitespace-nowrap ${hovered ? 'block' : 'hidden'}`}>
                    {label}
                </div>
            </Html>
        </group>
    );
}

export default function StationModel() {
    return (
        <group>
            {/* Floor 1: Service Area */}
            <Floor position={[0, 0, 0]} args={[40, 0.5, 20]} color="#e0e0e0" name="L1: Main Hall / Ticket" />

            {/* Floor 2: Waiting Room */}
            <Floor position={[0, 5, 0]} args={[30, 0.5, 15]} color="#d0d0d0" name="L2: Waiting Lounge" />

            {/* Stairs/Connector */}
            <mesh position={[10, 2.5, 0]} rotation={[0, 0, -0.5]}>
                <boxGeometry args={[12, 0.5, 4]} />
                <meshStandardMaterial color="gray" />
            </mesh>

            {/* POIs */}
            <POI position={[-10, 1, 5]} label="Ticket Validating" />
            <POI position={[10, 1, -5]} label="Food Court" />
            <POI position={[0, 6, 0]} label="Executive Lounge" />
            <POI position={[-8, 6, 4]} label="Toilet" />

            {/* Player/Path Dummy Animation */}
            {/* In a real app, this would be a pathfinding visualization */}
        </group>
    );
}
