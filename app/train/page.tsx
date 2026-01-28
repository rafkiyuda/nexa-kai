'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Coffee, Wifi, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TrainPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black pt-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="mb-10 text-center">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-2 inline-block">On Board</span>
                    <h1 className="text-3xl font-bold text-[var(--primary)]">Argo Parahyangan</h1>
                    <p className="text-gray-500">Executive Class • Car 3 • Seat 4A</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800"
                    >
                        <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Next Station</h3>
                        <div className="text-2xl font-bold text-[var(--primary)] mb-1">Bekasi</div>
                        <p className="text-sm text-gray-500 flex items-center gap-1"><Clock size={14} /> Arriving in 15 mins</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800"
                    >
                        <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Destination</h3>
                        <div className="text-2xl font-bold text-[var(--primary)] mb-1">Bandung</div>
                        <p className="text-sm text-gray-500 flex items-center gap-1"><Clock size={14} /> ETA 10:45</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="bg-[var(--secondary)] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between"
                    >
                        <h3 className="font-bold opacity-90">Order Food</h3>
                        <p className="text-sm opacity-80 mb-4">Hungry? Order Nasi Goreng straight to your seat.</p>
                        <button className="bg-white text-[var(--secondary)] py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition">View Menu</button>
                    </motion.div>
                </div>

                {/* Route Visualization */}
                <div className="bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-neutral-800 mb-8">
                    <h3 className="font-bold text-lg mb-6">Course Journey</h3>
                    <div className="relative">
                        <div className="absolute left-[19px] top-0 bottom-0 w-1 bg-gray-100 dark:bg-neutral-800"></div>
                        <div className="space-y-8 relative">
                            <div className="flex gap-4 items-center opacity-50">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0 z-10 text-gray-500"><MapPin size={18} /></div>
                                <div>
                                    <h4 className="font-bold line-through">Gambir (GMR)</h4>
                                    <p className="text-xs text-gray-400">Departed 08:00</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center shrink-0 z-10 text-white shadow-lg shadow-blue-500/20">
                                    <div className="w-3 h-3 bg-white rounded-full animate-ping absolute"></div>
                                    <div className="w-3 h-3 bg-white rounded-full relative"></div>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl border border-blue-100 dark:border-blue-800 w-full">
                                    <h4 className="font-bold text-[var(--primary)]">En Route to Bekasi</h4>
                                    <p className="text-xs text-[var(--primary)] opacity-80">Current Speed: 85 km/h</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center opacity-40">
                                <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center shrink-0 z-10"></div>
                                <div>
                                    <h4 className="font-bold">Cimahi</h4>
                                    <p className="text-xs text-gray-400">Estimated 10:20</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center opacity-40">
                                <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center shrink-0 z-10"><MapPin size={18} /></div>
                                <div>
                                    <h4 className="font-bold">Bandung (BD)</h4>
                                    <p className="text-xs text-gray-400">Estimated 10:45</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ecosystem Integrations */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 hover:border-[var(--primary)] transition cursor-pointer">
                        <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-3">
                            <MapPin size={20} />
                        </div>
                        <h4 className="font-bold text-sm">Hotel at Bandung</h4>
                        <p className="text-xs text-gray-500">Book your stay</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 hover:border-[var(--primary)] transition cursor-pointer">
                        <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                            <ArrowRight size={20} />
                        </div>
                        <h4 className="font-bold text-sm">Transport</h4>
                        <p className="text-xs text-gray-500">Order Shuttle/Taxi</p>
                    </div>
                </div>

                <div className="mt-8 text-center pb-8">
                    <Link href="/" className="text-sm text-gray-400 hover:text-[var(--primary)] transition">Back to Home for Demo</Link>
                </div>
            </div>
        </div>
    );
}
