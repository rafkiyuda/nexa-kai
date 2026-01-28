'use client';

import { useState } from 'react';
import Image from 'next/image';

// POI positions on the image (percentage-based for responsiveness)
const poiMarkers = [
    { id: 1, name: "Peron 1", icon: "🚂", x: 75, y: 45, distance: 50, time: 1 },
    { id: 2, name: "Peron 2", icon: "🚂", x: 75, y: 60, distance: 75, time: 2 },
    { id: 3, name: "Peron 3", icon: "🚂", x: 75, y: 75, distance: 100, time: 2 },
    { id: 4, name: "Starbucks", icon: "☕", x: 30, y: 40, distance: 60, time: 1 },
    { id: 5, name: "KFC", icon: "🍗", x: 25, y: 65, distance: 40, time: 1 },
    { id: 6, name: "Toilet", icon: "🚻", x: 15, y: 50, distance: 30, time: 1 },
    { id: 7, name: "ATM", icon: "💳", x: 20, y: 75, distance: 55, time: 1 },
    { id: 8, name: "Anda", icon: "📍", x: 50, y: 85, distance: 0, time: 0, isUser: true },
];

export default function StationMapView() {
    const [selectedPOI, setSelectedPOI] = useState<typeof poiMarkers[0] | null>(null);
    const userMarker = poiMarkers.find(m => m.isUser);

    return (
        <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-neutral-900 rounded-3xl overflow-hidden">
            {/* Station Image Background */}
            <div className="absolute inset-0">
                <Image
                    src="/station_interior_map.png"
                    alt="Station Map"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay gradient for better marker visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Route Line (if POI selected) */}
            {selectedPOI && !selectedPOI.isUser && userMarker && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line
                        x1={`${userMarker.x}%`}
                        y1={`${userMarker.y}%`}
                        x2={`${selectedPOI.x}%`}
                        y2={`${selectedPOI.y}%`}
                        stroke="#e7690d"
                        strokeWidth="4"
                        strokeDasharray="8,4"
                        strokeLinecap="round"
                    />
                </svg>
            )}

            {/* POI Markers */}
            {poiMarkers.map((poi) => (
                <button
                    key={poi.id}
                    onClick={() => !poi.isUser && setSelectedPOI(poi)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${poi.isUser ? 'cursor-default' : 'cursor-pointer hover:scale-110'
                        }`}
                    style={{ left: `${poi.x}%`, top: `${poi.y}%` }}
                >
                    <div
                        className={`relative ${poi.isUser
                                ? 'w-14 h-14 bg-blue-500 animate-pulse'
                                : selectedPOI?.id === poi.id
                                    ? 'w-12 h-12 bg-[var(--secondary)] ring-4 ring-white'
                                    : 'w-10 h-10 bg-white'
                            } rounded-full shadow-lg flex items-center justify-center text-xl border-2 ${poi.isUser ? 'border-white' : 'border-gray-200'
                            }`}
                    >
                        {poi.icon}
                    </div>
                    {/* Label */}
                    <div
                        className={`absolute top-full mt-1 left-1/2 transform -translate-x-1/2 whitespace-nowrap ${poi.isUser
                                ? 'bg-blue-500 text-white'
                                : 'bg-white dark:bg-neutral-800 text-gray-800 dark:text-white'
                            } px-2 py-1 rounded-lg text-xs font-bold shadow-md`}
                    >
                        {poi.name}
                    </div>
                </button>
            ))}

            {/* Helper Text */}
            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs text-gray-600 dark:text-gray-300">
                💡 Ketuk lokasi untuk melihat rute
            </div>
        </div>
    );
}
