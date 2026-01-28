'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, QrCode, Ticket } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface TicketScannerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TicketScanner({ isOpen, onClose }: TicketScannerProps) {
    const [ticketCode, setTicketCode] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (ticketCode.trim()) {
            // Redirect to trip info page with ticket code
            router.push(`/train?ticket=${ticketCode.toUpperCase()}`);
            onClose();
            setTicketCode('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition"
                            >
                                <X size={20} className="text-gray-500" />
                            </button>

                            {/* Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-[var(--primary)] mb-2">
                                    Masukkan Kode Tiket
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Scan QR code pada tiket Anda atau masukkan kode booking
                                </p>
                            </div>

                            {/* QR Icon */}
                            <div className="flex justify-center mb-8">
                                <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center">
                                    <QrCode size={48} className="text-[var(--primary)]" />
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Ticket size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        value={ticketCode}
                                        onChange={(e) => setTicketCode(e.target.value.toUpperCase())}
                                        placeholder="Contoh: ABC123XYZ"
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-neutral-800 rounded-2xl border-2 border-gray-200 dark:border-neutral-700 focus:border-[var(--primary)] focus:outline-none transition font-mono text-center text-lg tracking-wider"
                                        maxLength={20}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={!ticketCode.trim()}
                                    className="w-full py-4 bg-[var(--primary)] text-white font-bold rounded-2xl hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                >
                                    Lanjutkan
                                </button>
                            </form>

                            {/* Helper Text */}
                            <p className="text-xs text-center text-gray-400 mt-4">
                                💡 Kode tiket dapat ditemukan di email konfirmasi Anda
                            </p>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
