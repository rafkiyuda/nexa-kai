'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Minus, ShoppingCart, Clock, Star, ChefHat, Flame, Leaf } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FoodOrderPage() {
    const [cart, setCart] = useState<{ [key: string]: number }>({});
    const [selectedCategory, setSelectedCategory] = useState('all');

    const foodMenu = [
        {
            id: 1,
            name: 'Nasi Goreng Spesial',
            price: 35000,
            category: 'Main Course',
            description: 'Nasi goreng dengan telur, ayam, dan sayuran segar',
            image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
            prepTime: '15-20 min',
            rating: 4.8,
            isSpicy: true,
            isPopular: true
        },
        {
            id: 2,
            name: 'Mie Goreng',
            price: 30000,
            category: 'Main Course',
            description: 'Mie goreng dengan sayuran dan telur mata sapi',
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
            prepTime: '12-15 min',
            rating: 4.6,
            isSpicy: false,
            isPopular: true
        },
        {
            id: 3,
            name: 'Ayam Geprek',
            price: 32000,
            category: 'Main Course',
            description: 'Ayam goreng crispy dengan sambal geprek pedas',
            image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
            prepTime: '18-22 min',
            rating: 4.9,
            isSpicy: true,
            isPopular: true
        },
        {
            id: 4,
            name: 'Soto Ayam',
            price: 28000,
            category: 'Main Course',
            description: 'Soto ayam kuah kuning dengan nasi dan kerupuk',
            image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
            prepTime: '10-15 min',
            rating: 4.7,
            isSpicy: false,
            isPopular: false
        },
        {
            id: 5,
            name: 'Rendang Sapi',
            price: 45000,
            category: 'Main Course',
            description: 'Rendang sapi empuk dengan bumbu rempah khas Padang',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
            prepTime: '15-20 min',
            rating: 4.9,
            isSpicy: true,
            isPopular: true
        },
        {
            id: 6,
            name: 'Nasi Uduk',
            price: 25000,
            category: 'Main Course',
            description: 'Nasi uduk dengan ayam goreng, telur, dan sambal',
            image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
            prepTime: '10-12 min',
            rating: 4.5,
            isSpicy: false,
            isPopular: false
        },
        {
            id: 7,
            name: 'Kopi Susu',
            price: 15000,
            category: 'Beverage',
            description: 'Kopi susu premium dengan gula aren',
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
            prepTime: '5-8 min',
            rating: 4.7,
            isSpicy: false,
            isPopular: true
        },
        {
            id: 8,
            name: 'Teh Manis',
            price: 10000,
            category: 'Beverage',
            description: 'Teh manis segar dingin',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
            prepTime: '3-5 min',
            rating: 4.4,
            isSpicy: false,
            isPopular: false
        },
        {
            id: 9,
            name: 'Jus Jeruk',
            price: 18000,
            category: 'Beverage',
            description: 'Jus jeruk segar tanpa gula tambahan',
            image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
            prepTime: '5-7 min',
            rating: 4.6,
            isSpicy: false,
            isPopular: false
        },
        {
            id: 10,
            name: 'Es Teh Tawar',
            price: 8000,
            category: 'Beverage',
            description: 'Es teh tawar segar',
            image: 'https://images.unsplash.com/photo-1499638309848-e9968540da83?w=400&h=300&fit=crop',
            prepTime: '3-5 min',
            rating: 4.3,
            isSpicy: false,
            isPopular: false
        },
        {
            id: 11,
            name: 'Pisang Goreng',
            price: 15000,
            category: 'Snack',
            description: 'Pisang goreng crispy dengan madu',
            image: 'https://images.unsplash.com/photo-1587132117816-5a2f8e8b8e3c?w=400&h=300&fit=crop',
            prepTime: '8-10 min',
            rating: 4.5,
            isSpicy: false,
            isPopular: true
        },
        {
            id: 12,
            name: 'Snack Box',
            price: 25000,
            category: 'Snack',
            description: 'Paket snack dengan roti, kue, dan buah',
            image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop',
            prepTime: '5-7 min',
            rating: 4.4,
            isSpicy: false,
            isPopular: false
        },
    ];

    const categories = [
        { id: 'all', name: 'Semua Menu' },
        { id: 'Main Course', name: 'Makanan Utama' },
        { id: 'Beverage', name: 'Minuman' },
        { id: 'Snack', name: 'Snack' },
    ];

    const addToCart = (itemId: number) => {
        setCart(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    };

    const removeFromCart = (itemId: number) => {
        setCart(prev => {
            const newCart = { ...prev };
            if (newCart[itemId] > 1) {
                newCart[itemId]--;
            } else {
                delete newCart[itemId];
            }
            return newCart;
        });
    };

    const getTotalPrice = () => {
        return Object.entries(cart).reduce((total, [itemId, quantity]) => {
            const item = foodMenu.find(f => f.id === parseInt(itemId));
            return total + (item?.price || 0) * quantity;
        }, 0);
    };

    const getTotalItems = () => {
        return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    };

    const filteredMenu = selectedCategory === 'all'
        ? foodMenu
        : foodMenu.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-[var(--background)] pt-32 px-4 md:px-8 pb-32">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/train" className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors mb-4">
                        <ArrowLeft size={20} />
                        <span>Kembali ke Info Perjalanan</span>
                    </Link>

                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">Pesan Makanan</h1>
                            <p className="text-[var(--muted-foreground)]">Diantar langsung ke kursi 12A • Gerbong Eksekutif 2</p>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-[var(--muted-foreground)]">
                            <ChefHat className="w-5 h-5" />
                            <span className="text-sm">Dimasak fresh saat dipesan</span>
                        </div>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-8 overflow-x-auto">
                    <div className="flex gap-3 pb-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${selectedCategory === cat.id
                                        ? 'bg-orange-500 text-white shadow-lg'
                                        : 'bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--muted)]/70'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {filteredMenu.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-[var(--card)] rounded-3xl overflow-hidden border border-[var(--border)] hover:border-[var(--primary)] transition-all shadow-sm hover:shadow-lg group"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                {item.isPopular && (
                                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                        <Star size={12} fill="white" />
                                        Popular
                                    </div>
                                )}
                                {item.isSpicy && (
                                    <div className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full">
                                        <Flame size={16} />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="mb-3">
                                    <h3 className="font-bold text-lg text-[var(--foreground)] mb-1">{item.name}</h3>
                                    <p className="text-sm text-[var(--muted-foreground)] line-clamp-2">{item.description}</p>
                                </div>

                                {/* Meta Info */}
                                <div className="flex items-center gap-4 mb-4 text-xs text-[var(--muted-foreground)]">
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{item.prepTime}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star size={14} fill="currentColor" className="text-yellow-500" />
                                        <span className="text-[var(--foreground)] font-semibold">{item.rating}</span>
                                    </div>
                                </div>

                                {/* Price & Cart */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-[var(--muted-foreground)]">Harga</p>
                                        <p className="text-xl font-bold text-[var(--primary)]">
                                            Rp {item.price.toLocaleString('id-ID')}
                                        </p>
                                    </div>

                                    {/* Add to Cart */}
                                    {!cart[item.id] ? (
                                        <button
                                            onClick={() => addToCart(item.id)}
                                            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-colors flex items-center gap-2"
                                        >
                                            <Plus size={16} />
                                            Tambah
                                        </button>
                                    ) : (
                                        <div className="flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 rounded-xl p-1">
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="w-8 h-8 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center justify-center transition-colors"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="font-bold text-[var(--foreground)] w-8 text-center">{cart[item.id]}</span>
                                            <button
                                                onClick={() => addToCart(item.id)}
                                                className="w-8 h-8 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center justify-center transition-colors"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating Cart Summary */}
            {getTotalItems() > 0 && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="fixed bottom-0 left-0 right-0 bg-[var(--card)] border-t border-[var(--border)] shadow-2xl z-40"
                >
                    <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                                    <ShoppingCart className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--muted-foreground)]">{getTotalItems()} item dipilih</p>
                                    <p className="text-2xl font-bold text-[var(--foreground)]">
                                        Rp {getTotalPrice().toLocaleString('id-ID')}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    alert(`Pesanan berhasil!\n\nTotal: Rp ${getTotalPrice().toLocaleString('id-ID')}\nJumlah item: ${getTotalItems()}\n\nMakanan akan diantar ke:\nGerbong Eksekutif 2, Kursi 12A\n\nEstimasi waktu: 15-25 menit`);
                                    setCart({});
                                }}
                                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-bold transition-all shadow-lg flex items-center gap-2"
                            >
                                Pesan Sekarang
                                <ArrowLeft className="rotate-180" size={20} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
