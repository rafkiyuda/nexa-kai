'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Train, Calendar, Search, MapPin, CreditCard, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function BookingPage() {
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
    const [selectedTrain, setSelectedTrain] = useState<any>(null);

    const onSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate search delay
        setTimeout(() => setStep(2), 500);
    };

    const handleSelectTrain = (train: any) => {
        setSelectedTrain(train);
        setStep(3);
    };

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => setStep(4), 1000);
    };

    return (
        <div className="min-h-screen bg-[var(--background)] pt-32 pb-10 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8 flex justify-center items-center gap-4">
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} className={`w-3 h-3 rounded-full transition-colors ${step >= s ? 'bg-[var(--primary)]' : 'bg-gray-300'}`} />
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-[var(--card)] p-8 rounded-3xl shadow-xl border border-[var(--border)]"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-[var(--primary)] flex items-center gap-2">
                                <Search className="w-6 h-6" /> Find Your Train
                            </h2>
                            <form onSubmit={onSearch} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[var(--muted-foreground)]">Origin</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                                            <input type="text" placeholder="Gambir (GMR)" className="w-full pl-10 p-3 bg-[var(--muted)] text-[var(--foreground)] rounded-xl border-none focus:ring-2 focus:ring-[var(--primary)]" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[var(--muted-foreground)]">Destination</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                                            <input type="text" placeholder="Bandung (BD)" className="w-full pl-10 p-3 bg-[var(--muted)] text-[var(--foreground)] rounded-xl border-none focus:ring-2 focus:ring-[var(--primary)]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--muted-foreground)]">Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <input type="date" className="w-full pl-10 p-3 bg-[var(--muted)] text-[var(--foreground)] rounded-xl border-none focus:ring-2 focus:ring-[var(--primary)]" />
                                    </div>
                                </div>
                                <button type="submit" className="w-full py-4 bg-[var(--primary)] text-white font-bold rounded-xl hover:bg-opacity-90 transition shadow-lg">
                                    Search Trains
                                </button>
                            </form>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-[var(--card)] p-8 rounded-3xl shadow-xl border border-[var(--border)]"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">Select Train</h2>
                            <div className="space-y-4">
                                {[
                                    { name: "Argo Parahyangan", depart: "08:00", arrive: "10:45", price: "IDR 150.000" },
                                    { name: "Argo Parahyangan Luxury", depart: "10:00", arrive: "12:45", price: "IDR 350.000" },
                                ].map((train, i) => (
                                    <div key={i} className="p-4 border border-[var(--border)] rounded-2xl hover:border-[var(--primary)] cursor-pointer transition flex justify-between items-center group"
                                        onClick={() => handleSelectTrain(train)}>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-[var(--muted)] rounded-full flex items-center justify-center text-[var(--primary)]">
                                                <Train size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[var(--foreground)]">{train.name}</h3>
                                                <p className="text-sm text-[var(--muted-foreground)]">{train.depart} - {train.arrive}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-[var(--secondary)]">{train.price}</p>
                                            <p className="text-xs text-gray-400 group-hover:text-[var(--primary)]">Select &rarr;</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => setStep(1)} className="mt-6 text-sm text-gray-500 hover:text-[var(--primary)]">
                                &larr; Back to Search
                            </button>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-[var(--card)] p-8 rounded-3xl shadow-xl border border-[var(--border)]"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">Payment</h2>
                            <div className="mb-6 p-4 bg-[var(--muted)] rounded-xl">
                                <h3 className="font-bold text-[var(--foreground)]">{selectedTrain?.name}</h3>
                                <p className="text-sm text-[var(--muted-foreground)]">Ticket for 1 Adult • Executive Class</p>
                                <div className="mt-2 text-xl font-bold text-[var(--secondary)]">{selectedTrain?.price}</div>
                            </div>
                            <form onSubmit={handlePayment} className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-[var(--muted-foreground)]">Card Number</label>
                                    <div className="relative">
                                        <CreditCard className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-10 p-3 bg-[var(--muted)] text-[var(--foreground)] rounded-xl border-none focus:ring-2 focus:ring-[var(--primary)]" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-[var(--muted-foreground)]">Expiry</label>
                                        <input type="text" placeholder="MM/YY" className="w-full p-3 bg-[var(--muted)] text-[var(--foreground)] rounded-xl border-none focus:ring-2 focus:ring-[var(--primary)]" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-[var(--muted-foreground)]">CVV</label>
                                        <input type="text" placeholder="123" className="w-full p-3 bg-[var(--muted)] text-[var(--foreground)] rounded-xl border-none focus:ring-2 focus:ring-[var(--primary)]" />
                                    </div>
                                </div>
                                <button type="submit" className="w-full py-4 bg-[var(--secondary)] text-white font-bold rounded-xl hover:bg-opacity-90 transition shadow-lg mt-4">
                                    Pay Now
                                </button>
                            </form>
                            <button onClick={() => setStep(2)} className="mt-6 text-sm text-gray-500 hover:text-[var(--primary)]">
                                &larr; Back to Selection
                            </button>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-[var(--card)] p-8 rounded-3xl shadow-xl border border-[var(--border)] text-center"
                        >
                            <div className="w-20 h-20 bg-[var(--muted)] text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={40} />
                            </div>
                            <h2 className="text-3xl font-bold mb-2 text-[var(--primary)]">Booking Confirmed!</h2>
                            <p className="text-[var(--muted-foreground)] mb-8">Your e-ticket has been sent to your email.</p>

                            <div className="p-4 bg-[var(--muted)] rounded-xl text-left mb-8">
                                <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-widest mb-1">Booking ID</p>
                                <p className="font-mono text-lg font-bold text-[var(--foreground)]">NEXA-8829-KAI</p>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <Link href="/navigation">
                                    <button className="w-full py-4 bg-[var(--primary)] text-white font-bold rounded-xl hover:bg-opacity-90 transition shadow-lg">
                                        Navigate to Station Boarding
                                    </button>
                                </Link>
                                <Link href="/">
                                    <button className="w-full py-4 bg-[var(--muted)] text-[var(--muted-foreground)] font-bold rounded-xl hover:bg-[var(--border)] transition">
                                        Back to Home
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
