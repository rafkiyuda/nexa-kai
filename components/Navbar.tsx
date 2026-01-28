'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
        >
            <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full px-6 py-3 shadow-lg flex items-center gap-8 max-w-2xl w-[90%] justify-between md:justify-center">

                {/* Logo */}
                <Link href="/" className="font-bold text-xl tracking-tight text-[var(--primary)] flex items-center gap-2">
                    <div className="w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white">
                        N
                    </div>
                    <span>NEXA</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <Link href="/booking" className="hover:text-[var(--primary)] transition-colors">Booking</Link>
                    <Link href="/navigation" className="hover:text-[var(--primary)] transition-colors">Navigation</Link>
                    <Link href="/train" className="hover:text-[var(--primary)] transition-colors">On-Board</Link>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link href="/booking">
                        <button className="bg-[var(--primary)] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition shadow-md">
                            Book Ticket
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2 text-gray-600">
                    <Menu size={24} />
                </button>
            </div>
        </motion.nav>
    );
}
