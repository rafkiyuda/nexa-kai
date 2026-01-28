'use client';

import { motion } from 'framer-motion';
import { Map, Train, Coffee, Smartphone, Globe, Shield } from 'lucide-react';

const features = [
    {
        icon: <Map className="w-6 h-6 text-white" />,
        color: "bg-blue-500",
        title: "Station Navigation",
        description: "Real-time 3D indoor guidance to help you find your platform, lounge, or nearest toilet seamlessly."
    },
    {
        icon: <Train className="w-6 h-6 text-white" />,
        color: "bg-orange-500",
        title: "Live Train Info",
        description: "Get personalized updates on your train schedule, delay notifications, and estimated arrival times."
    },
    {
        icon: <Coffee className="w-6 h-6 text-white" />,
        color: "bg-purple-500",
        title: "KAI Services",
        description: "Order food to your seat, book porters, or check into the executive lounge with a single tap."
    },
    {
        icon: <Smartphone className="w-6 h-6 text-white" />,
        color: "bg-green-500",
        title: "Seamless Ticketing",
        description: "Book regional and intercity trains instantly. No queues, no hassle, just travel."
    },
    {
        icon: <Globe className="w-6 h-6 text-white" />,
        color: "bg-indigo-500",
        title: "Multi-Language AI",
        description: "Our AI assistant speaks your language. Ask anything, from directions to local culture tips."
    },
    {
        icon: <Shield className="w-6 h-6 text-white" />,
        color: "bg-pink-500",
        title: "Travel Safety",
        description: "Emergency assistance and safety features integrated directly into your journey companion."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-[var(--background)] relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary)]"
                    >
                        Everything you need for a <span className="text-[var(--secondary)]">Smooth Journey</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[var(--muted-foreground)]"
                    >
                        NEXA transforms your travel experience from chaotic to calm with intelligent features designed for the modern explorer.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-[var(--card)] p-8 rounded-3xl border border-[var(--border)] hover:shadow-lg hover:-translate-y-1 transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-6 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">{feature.title}</h3>
                            <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
