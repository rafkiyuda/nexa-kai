'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Coffee, Wifi, ArrowRight, Plug, Wind, Armchair, Tv, Bath, UtensilsCrossed, Bell, Share2, Navigation, Train } from 'lucide-react';
import Link from 'next/link';

export default function TrainPage() {
    const currentDate = new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const facilities = [
        { icon: Wifi, label: 'WiFi Gratis', color: 'text-green-600' },
        { icon: Plug, label: 'Stop Kontak', color: 'text-blue-600' },
        { icon: Wind, label: 'AC', color: 'text-cyan-600' },
        { icon: Armchair, label: 'Reclining Seat', color: 'text-purple-600' },
        { icon: UtensilsCrossed, label: 'Gerbong Makan', color: 'text-orange-600' },
        { icon: Tv, label: 'Hiburan', color: 'text-pink-600' },
        { icon: Bath, label: 'Toilet Bersih', color: 'text-teal-600' },
        { icon: Coffee, label: 'Snack Service', color: 'text-amber-600' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-32 px-4 md:px-8 pb-10">
            <div className="max-w-4xl mx-auto">
                {/* Trip Card Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-3xl shadow-xl mb-6"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <Train className="w-5 h-5" />
                        <span className="text-sm opacity-90">Info Perjalanan</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-1">Argo Parahyangan</h1>
                    <p className="text-blue-100 text-sm mb-3">KA 34 • {currentDate}</p>
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                            Kelas Eksekutif
                        </span>
                        <span className="text-xs opacity-75">• AC • Recline Seat • Meal</span>
                    </div>
                </motion.div>

                {/* Trip Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-[var(--card)] p-6 rounded-3xl shadow-sm border border-[var(--border)] mb-6"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                <Train className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--muted-foreground)]">Gerbong</p>
                                <p className="font-bold text-[var(--foreground)]">Eksekutif 2</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                                <Armchair className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--muted-foreground)]">Kursi</p>
                                <p className="font-bold text-[var(--foreground)]">12A</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 col-span-2">
                            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--muted-foreground)]">Platform</p>
                                <p className="font-bold text-orange-600 dark:text-orange-400">Peron 3</p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-2xl">
                        <div>
                            <p className="text-2xl font-bold text-[var(--foreground)]">GMR</p>
                            <p className="text-sm text-[var(--muted-foreground)]">08:00</p>
                        </div>
                        <div className="flex-1 mx-4 flex items-center">
                            <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            <div className="mx-2 px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs font-semibold text-[var(--primary)] border border-[var(--border)]">
                                2 jam 45 menit
                            </div>
                            <div className="h-1 flex-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold text-[var(--foreground)]">BD</p>
                            <p className="text-sm text-[var(--muted-foreground)]">10:45</p>
                        </div>
                    </div>
                </motion.div>

                {/* Primary Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Navigation className="w-6 h-6" />
                            </div>
                            <ArrowRight className="w-5 h-5 opacity-75 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Ke Peron 3</h3>
                        <p className="text-sm text-blue-100">Navigasi ke platform keberangkatan</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <UtensilsCrossed className="w-6 h-6" />
                            </div>
                            <ArrowRight className="w-5 h-5 opacity-75 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Pesan Makanan</h3>
                        <p className="text-sm text-orange-100">Pesan langsung ke kursi Anda</p>
                    </motion.div>
                </div>

                {/* Facilities Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-[var(--card)] p-6 rounded-3xl shadow-sm border border-[var(--border)] mb-6"
                >
                    <h3 className="font-bold text-lg mb-4 text-[var(--foreground)]">Fasilitas Kereta</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {facilities.map((facility, idx) => {
                            const Icon = facility.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                    className="flex flex-col items-center text-center p-4 bg-[var(--muted)] hover:bg-[var(--muted)]/70 rounded-2xl transition-all cursor-pointer group"
                                >
                                    <div className={`w-12 h-12 ${facility.color} bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-sm`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <p className="text-xs font-semibold text-[var(--foreground)]">{facility.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Route Visualization */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-[var(--card)] p-8 rounded-3xl shadow-sm border border-[var(--border)] mb-6"
                >
                    <h3 className="font-bold text-lg mb-6 text-[var(--foreground)]">Perjalanan Kereta</h3>
                    <div className="relative">
                        <div className="absolute left-[19px] top-0 bottom-0 w-1 bg-gradient-to-b from-gray-300 via-blue-500 to-gray-300 dark:from-gray-600 dark:via-blue-400 dark:to-gray-600"></div>
                        <div className="space-y-8 relative">
                            {/* Departed Station */}
                            <div className="flex gap-4 items-center opacity-50">
                                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center shrink-0 z-10">
                                    <MapPin size={18} className="text-gray-500 dark:text-gray-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold line-through text-gray-500 dark:text-gray-600">Gambir (GMR)</h4>
                                    <p className="text-xs text-gray-400">Berangkat 08:00</p>
                                </div>
                            </div>

                            {/* Current Position */}
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center shrink-0 z-10 shadow-lg shadow-blue-500/30">
                                    <div className="w-3 h-3 bg-white rounded-full animate-ping absolute"></div>
                                    <div className="w-3 h-3 bg-white rounded-full relative"></div>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800 w-full">
                                    <h4 className="font-bold text-[var(--primary)]">Menuju Bekasi</h4>
                                    <p className="text-xs text-[var(--primary)] opacity-80 mb-2">Kecepatan: 85 km/h</p>
                                    <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                                        <Clock size={12} />
                                        <span>Tiba dalam 15 menit</span>
                                    </div>
                                </div>
                            </div>

                            {/* Upcoming Stations */}
                            <div className="flex gap-4 items-center opacity-40">
                                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center shrink-0 z-10"></div>
                                <div>
                                    <h4 className="font-bold text-[var(--foreground)]">Cimahi</h4>
                                    <p className="text-xs text-gray-400">Estimasi 10:20</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center opacity-40">
                                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center shrink-0 z-10">
                                    <MapPin size={18} className="text-gray-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--foreground)]">Bandung (BD)</h4>
                                    <p className="text-xs text-gray-400">Estimasi 10:45</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Notification Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-3xl border border-purple-200 dark:border-purple-800 mb-6"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center shrink-0">
                            <Bell className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-[var(--foreground)] mb-1">Notifikasi</h4>
                            <p className="text-sm text-[var(--muted-foreground)] mb-3">
                                Kirim saya pengingat 1 jam sebelum keberangkatan via WhatsApp/Email
                            </p>
                            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-semibold transition-colors">
                                Atur Pengingat
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Share Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-6"
                >
                    <button className="w-full py-4 bg-[var(--card)] hover:bg-[var(--muted)] border border-[var(--border)] rounded-2xl font-semibold text-[var(--foreground)] transition-all flex items-center justify-center gap-2 group">
                        <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Bagikan Informasi Perjalanan
                    </button>
                </motion.div>

                {/* Secondary Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="grid grid-cols-2 gap-4 mb-8"
                >
                    <Link href="/tourism">
                        <div className="p-5 bg-[var(--card)] rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition cursor-pointer group">
                            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <MapPin size={20} />
                            </div>
                            <h4 className="font-bold text-sm text-[var(--foreground)] mb-1">Wisata di Bandung</h4>
                            <p className="text-xs text-[var(--muted-foreground)]">Jelajahi destinasi menarik</p>
                        </div>
                    </Link>
                    <div className="p-5 bg-[var(--card)] rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition cursor-pointer group">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                            <ArrowRight size={20} />
                        </div>
                        <h4 className="font-bold text-sm text-[var(--foreground)] mb-1">Transportasi</h4>
                        <p className="text-xs text-[var(--muted-foreground)]">Pesan Shuttle/Taxi</p>
                    </div>
                </motion.div>

                <div className="text-center pb-8">
                    <Link href="/" className="text-sm text-gray-400 hover:text-[var(--primary)] transition">
                        Kembali ke Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
