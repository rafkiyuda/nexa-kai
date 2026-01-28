'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
        >
            <div className="bg-[var(--background)]/80 backdrop-blur-md border border-[var(--border)] rounded-full px-6 py-3 shadow-lg flex items-center gap-8 max-w-2xl w-[90%] justify-between md:justify-center">

                {/* Logo */}
                <Link href="/" className="font-bold text-xl tracking-tight text-[var(--primary)] flex items-center gap-2">
                    <Image
                        src="/assets/logos/kai-logo.png"
                        alt="NEXA Logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                    <span>NEXA</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <Link href="/booking" className="hover:text-[var(--primary)] transition-colors">Booking</Link>
                    <Link href="/navigation" className="hover:text-[var(--primary)] transition-colors">Navigation</Link>
                    <Link href="/train" className="hover:text-[var(--primary)] transition-colors">On-Board</Link>
                </div>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-all duration-300"
                    aria-label="Toggle theme"
                >
                    <motion.div
                        initial={false}
                        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {theme === 'light' ? (
                            <Moon size={20} className="text-gray-600" />
                        ) : (
                            <Sun size={20} className="text-yellow-400" />
                        )}
                    </motion.div>
                </button>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link href="/booking">
                        <button className="bg-[var(--primary)] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition shadow-md">
                            Book Ticket
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2 text-gray-600 dark:text-gray-300">
                    <Menu size={24} />
                </button>
            </div>
        </motion.nav>
    );
}
