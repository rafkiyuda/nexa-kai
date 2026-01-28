'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, MapPin, Navigation as NavigationIcon } from 'lucide-react';
import StationMapView from '@/components/map/StationMapView';

// Mock POI data with distances
const pois = [
    { id: 1, name: "Peron 1", icon: "🚂", distance: 50, time: 1, category: "platform" },
    { id: 2, name: "Peron 2", icon: "🚂", distance: 75, time: 2, category: "platform" },
    { id: 3, name: "Peron 3", icon: "🚂", distance: 100, time: 2, category: "platform" },
    { id: 4, name: "Peron 4", icon: "🚂", distance: 125, time: 3, category: "platform" },
    { id: 5, name: "Starbucks", icon: "☕", distance: 60, time: 1, category: "food" },
    { id: 6, name: "KFC", icon: "🍗", distance: 40, time: 1, category: "food" },
    { id: 7, name: "Indomaret", icon: "🏪", distance: 45, time: 1, category: "shop" },
    { id: 8, name: "Toilet", icon: "🚻", distance: 30, time: 1, category: "facility" },
    { id: 9, name: "ATM Center", icon: "💳", distance: 55, time: 1, category: "facility" },
    { id: 10, name: "Executive Lounge", icon: "✨", distance: 90, time: 2, category: "lounge" },
];

export default function NavigationPage() {
    const [view, setView] = useState<'map' | 'list'>('map');
    const [selectedPOI, setSelectedPOI] = useState<typeof pois[0] | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[var(--primary)] to-blue-900 pt-4 px-4 pb-24">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                        <Link href="/">
                            <button className="p-2 hover:bg-white/10 rounded-full transition">
                                <ArrowLeft size={20} />
                            </button>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold">Navigasi Stasiun</h1>
                            <p className="text-sm text-white/70">Stasiun Gambir</p>
                            <p className="text-xs text-white/50">Jakarta Pusat • Buka 24 Jam</p>
                        </div>
                    </div>
                    <button className="p-2 hover:bg-white/10 rounded-full transition">
                        <NavigationIcon size={20} />
                    </button>
                </div>

                {/* Tab Toggle */}
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 flex gap-1 mb-6">
                    <button
                        onClick={() => setView('map')}
                        className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all ${view === 'map'
                            ? 'bg-white text-[var(--primary)] shadow-lg'
                            : 'text-white hover:bg-white/10'
                            }`}
                    >
                        🗺️ Peta
                    </button>
                    <button
                        onClick={() => setView('list')}
                        className={`flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all ${view === 'list'
                            ? 'bg-white text-[var(--primary)] shadow-lg'
                            : 'text-white hover:bg-white/10'
                            }`}
                    >
                        📋 Daftar
                    </button>
                </div>

                {/* Content Area */}
                {view === 'map' ? (
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-4">
                        <StationMapView />

                        {/* POI Quick Access Below Map */}
                        <div className="p-4 bg-gray-50 dark:bg-neutral-900">
                            <h3 className="text-sm font-bold text-gray-500 mb-3">Lokasi Populer</h3>
                            <div className="grid grid-cols-4 gap-2">
                                {pois.slice(0, 8).map((poi) => (
                                    <button
                                        key={poi.id}
                                        onClick={() => setSelectedPOI(poi)}
                                        className={`p-3 rounded-2xl text-center transition-all ${selectedPOI?.id === poi.id
                                            ? 'bg-[var(--primary)] text-white shadow-lg scale-105'
                                            : 'bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700'
                                            }`}
                                    >
                                        <div className="text-2xl mb-1">{poi.icon}</div>
                                        <div className="text-xs font-medium truncate">{poi.name}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                        <div className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {pois.map((poi) => (
                                <button
                                    key={poi.id}
                                    onClick={() => setSelectedPOI(poi)}
                                    className={`w-full p-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-all ${selectedPOI?.id === poi.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${selectedPOI?.id === poi.id
                                        ? 'bg-[var(--primary)] text-white'
                                        : 'bg-gray-100 dark:bg-neutral-800'
                                        }`}>
                                        {poi.icon}
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h3 className="font-bold text-[var(--foreground)]">{poi.name}</h3>
                                        <p className="text-sm text-gray-500">
                                            {poi.distance}m • {poi.time} min
                                        </p>
                                    </div>
                                    <div className="text-gray-400">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Selected Destination Status Bar */}
                {selectedPOI && (
                    <div className="fixed bottom-6 left-4 right-4 max-w-2xl mx-auto">
                        <div className="bg-[var(--secondary)] text-white p-4 rounded-2xl shadow-2xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                                {selectedPOI.icon}
                            </div>
                            <div className="flex-1">
                                <p className="text-xs opacity-80">Tujuan dipilih:</p>
                                <h3 className="font-bold text-lg">{selectedPOI.name}</h3>
                                <p className="text-sm opacity-90">{selectedPOI.distance}m • {selectedPOI.time} menit berjalan</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Link href="/train">
                                    <button className="px-4 py-2 bg-white text-[var(--secondary)] rounded-lg font-bold text-sm hover:bg-gray-100 transition">
                                        Mulai
                                    </button>
                                </Link>
                                <button
                                    onClick={() => setSelectedPOI(null)}
                                    className="px-4 py-2 bg-white/20 text-white rounded-lg font-medium text-xs hover:bg-white/30 transition"
                                >
                                    Ganti
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
