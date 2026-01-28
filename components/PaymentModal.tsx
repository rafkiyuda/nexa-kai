'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, CreditCard, Smartphone, QrCode, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    totalPrice: number;
    totalItems: number;
    onSuccess: () => void;
}

export default function PaymentModal({ isOpen, onClose, totalPrice, totalItems, onSuccess }: PaymentModalProps) {
    const [step, setStep] = useState<'selection' | 'processing' | 'success'>('selection');
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setStep('selection');
            setSelectedMethod(null);
        }
    }, [isOpen]);

    const handlePayment = () => {
        if (!selectedMethod) return;

        setStep('processing');
        // Simulate payment processing
        setTimeout(() => {
            setStep('success');
        }, 2000);
    };

    const handleClose = () => {
        if (step === 'success') {
            onSuccess();
        }
        onClose();
    };

    const paymentMethods = [
        { id: 'qris', name: 'QRIS', icon: QrCode, description: 'Scan QR Code' },
        { id: 'kaipay', name: 'KAIPay', icon: Smartphone, description: 'Saldo: Rp 500.000' },
        { id: 'card', name: 'Kartu Kredit/Debit', icon: CreditCard, description: 'Visa, Mastercard' },
    ];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative bg-[var(--card)] rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-[var(--border)]"
                >
                    {step === 'selection' && (
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-[var(--foreground)]">Pembayaran</h2>
                                <button onClick={onClose} className="p-2 hover:bg-[var(--muted)] rounded-full transition-colors">
                                    <X size={24} className="text-[var(--muted-foreground)]" />
                                </button>
                            </div>

                            {/* Order Summary */}
                            <div className="bg-[var(--muted)]/50 rounded-2xl p-4 mb-6">
                                <div className="flex justify-between text-sm text-[var(--muted-foreground)] mb-1">
                                    <span>Total Item</span>
                                    <span>{totalItems} items</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-[var(--foreground)]">Total Bayar</span>
                                    <span className="text-xl font-bold text-[var(--primary)]">
                                        Rp {totalPrice.toLocaleString('id-ID')}
                                    </span>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <h3 className="font-semibold text-[var(--foreground)] mb-4">Pilih Metode Pembayaran</h3>
                            <div className="space-y-3 mb-8">
                                {paymentMethods.map((method) => (
                                    <button
                                        key={method.id}
                                        onClick={() => setSelectedMethod(method.id)}
                                        className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${selectedMethod === method.id
                                                ? 'border-[var(--primary)] bg-[var(--primary)]/5 ring-2 ring-[var(--primary)]/20'
                                                : 'border-[var(--border)] hover:bg-[var(--muted)]'
                                            }`}
                                    >
                                        <div className={`p-3 rounded-full ${selectedMethod === method.id ? 'bg-[var(--primary)] text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'
                                            }`}>
                                            <method.icon size={20} />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-semibold text-[var(--foreground)]">{method.name}</p>
                                            <p className="text-sm text-[var(--muted-foreground)]">{method.description}</p>
                                        </div>
                                        {selectedMethod === method.id && (
                                            <CheckCircle2 className="ml-auto text-[var(--primary)]" size={20} />
                                        )}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={handlePayment}
                                disabled={!selectedMethod}
                                className="w-full py-4 bg-[var(--primary)] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:hover:translate-y-0 disabled:shadow-none flex items-center justify-center gap-2"
                            >
                                Bayar Sekarang
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    )}

                    {step === 'processing' && (
                        <div className="p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-16 h-16 border-4 border-[var(--primary)] border-t-transparent rounded-full mb-6"
                            />
                            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Memproses Pembayaran...</h3>
                            <p className="text-[var(--muted-foreground)]">Mohon tunggu sebentar</p>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600"
                            >
                                <CheckCircle2 size={48} />
                            </motion.div>
                            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Pembayaran Berhasil!</h2>
                            <p className="text-[var(--muted-foreground)] mb-8 max-w-[250px]">
                                Makanan Anda akan segera disiapkan dan diantar ke kursi 12A.
                            </p>

                            <div className="bg-[var(--muted)]/30 rounded-xl p-4 w-full mb-8">
                                <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wider mb-1">Order ID</p>
                                <p className="font-mono font-bold text-lg text-[var(--foreground)]">NX-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                            </div>

                            <button
                                onClick={handleClose}
                                className="w-full py-4 bg-[var(--secondary)] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                            >
                                Selesai
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
