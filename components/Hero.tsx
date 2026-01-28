'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import TicketScanner from './TicketScanner';

export default function Hero() {
    const [isScannerOpen, setIsScannerOpen] = useState(false);

    return (
        <>
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[var(--background)] pt-32">
                {/* Abstract Background with gradients - only show in dark mode */}
                <div className="absolute inset-0 z-0 hidden dark:block">
                    <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob"></div>
                    <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob animation-delay-2000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 flex flex-col items-center gap-3"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 bg-[var(--card)]/50 backdrop-blur-md rounded-full border border-[var(--border)] shadow-sm">
                            <span className="text-sm font-medium text-[var(--foreground)]">👋 Halo, Rafki</span>
                            <span className="text-gray-300">|</span>
                            <span className="text-sm font-medium text-[var(--primary)] flex items-center gap-1">
                                📍 Stasiun Gambir
                            </span>
                        </div>
                        <span className="px-4 py-2 bg-[var(--muted)] text-[var(--primary)] rounded-full text-sm font-semibold border border-[var(--border)]">
                            ✨ Redefining Travel with AI & Local Warmth
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-[var(--foreground)] tracking-tight leading-tight"
                    >
                        Smartly Global, <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">Warmly Local</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl text-[var(--muted-foreground)] mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Let NEXA guide your journey home
                    </motion.p>

                    {/* Scan Ticket Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="mb-6 flex justify-center"
                    >
                        <button
                            onClick={() => setIsScannerOpen(true)}
                            className="px-10 py-5 bg-[var(--secondary)] text-white text-lg font-bold rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <path d="M7 7h.01M7 12h.01M7 17h.01M12 7h.01M12 12h.01M12 17h.01M17 7h.01M17 12h.01M17 17h.01" />
                            </svg>
                            Scan Tiket Anda
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col md:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/booking">
                            <button className="px-8 py-4 bg-[var(--primary)] text-white text-lg font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                Start Journey
                            </button>
                        </Link>
                        <Link href="/navigation">
                            <button className="px-8 py-4 bg-[var(--card)] text-[var(--foreground)] text-lg font-semibold rounded-full border border-[var(--border)] hover:bg-[var(--muted)] transition-all">
                                View Station Map
                            </button>
                        </Link>
                    </motion.div>

                    {/* Dashboard/App Preview Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-16 w-full max-w-5xl mx-auto"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-12">
                            {/* Decorative background elements - only in dark mode */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] rounded-full filter blur-3xl opacity-10 hidden dark:block"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--secondary)] rounded-full filter blur-3xl opacity-10 hidden dark:block"></div>

                            {/* App Preview Image */}
                            <div className="relative z-10 flex justify-center">
                                <div className="relative w-full max-w-md">
                                    <img
                                        src="/nexa_preview.png"
                                        alt="NEXA App Preview"
                                        className="w-full h-auto drop-shadow-2xl"
                                    />
                                    {/* Glow effect - only in dark mode */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent rounded-3xl blur-xl hidden dark:block"></div>
                                </div>
                            </div>

                            {/* Feature badges */}
                            <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3">
                                <span className="px-4 py-2 bg-[var(--background)] rounded-full text-sm font-semibold text-[var(--foreground)] shadow-md border border-[var(--border)]">
                                    🗺️ Real-time Navigation
                                </span>
                                <span className="px-4 py-2 bg-[var(--background)] rounded-full text-sm font-semibold text-[var(--foreground)] shadow-md border border-[var(--border)]">
                                    🤖 AI Assistant
                                </span>
                                <span className="px-4 py-2 bg-[var(--background)] rounded-full text-sm font-semibold text-[var(--foreground)] shadow-md border border-[var(--border)]">
                                    🎫 Smart Ticketing
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Ticket Scanner Modal */}
            <TicketScanner isOpen={isScannerOpen} onClose={() => setIsScannerOpen(false)} />
        </>
    );
}
