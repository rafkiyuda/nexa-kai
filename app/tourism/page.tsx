'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Hotel, UtensilsCrossed, Landmark, ShoppingBag, Coffee, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Data dummy stasiun
const stations = [
    { id: 1, name: 'Gambir', city: 'Jakarta Pusat' },
    { id: 2, name: 'Bandung', city: 'Bandung' },
    { id: 3, name: 'Yogyakarta', city: 'Yogyakarta' },
    { id: 4, name: 'Surabaya Gubeng', city: 'Surabaya' },
    { id: 5, name: 'Solo Balapan', city: 'Solo' },
    { id: 6, name: 'Malang', city: 'Malang' },
];

// Data dummy destinasi wisata
const destinations = [
    // Jakarta - Gambir
    {
        id: 1,
        stationId: 1,
        name: 'Monumen Nasional (Monas)',
        category: 'tourist',
        distance: '1.2 km',
        rating: 4.7,
        reviews: 15420,
        price: 'Rp 15.000',
        description: 'Ikon Jakarta yang megah dengan ketinggian 132 meter, menawarkan pemandangan kota dari puncaknya.',
        image: 'https://images.unsplash.com/photo-1555899434-94d1eb5d0e78?w=800&h=600&fit=crop',
        address: 'Jl. Silang Monas, Gambir, Jakarta Pusat',
        openHours: '08:00 - 16:00',
        facilities: ['Parkir', 'Toilet', 'Mushola', 'Lift']
    },
    {
        id: 2,
        stationId: 1,
        name: 'Grand Indonesia',
        category: 'shopping',
        distance: '2.5 km',
        rating: 4.6,
        reviews: 8932,
        price: 'Free',
        description: 'Pusat perbelanjaan mewah dengan berbagai brand internasional dan lokal.',
        image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&h=600&fit=crop',
        address: 'Jl. MH Thamrin, Jakarta Pusat',
        openHours: '10:00 - 22:00',
        facilities: ['Parkir', 'Food Court', 'Cinema', 'ATM']
    },
    {
        id: 3,
        stationId: 1,
        name: 'Hotel Indonesia Kempinski',
        category: 'hotel',
        distance: '2.8 km',
        rating: 4.8,
        reviews: 3421,
        price: 'Rp 2.500.000/malam',
        description: 'Hotel bintang 5 dengan pemandangan Bundaran HI yang ikonik.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
        address: 'Jl. MH Thamrin No.1, Jakarta Pusat',
        openHours: '24 Jam',
        facilities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Gym']
    },
    {
        id: 4,
        stationId: 1,
        name: 'Cafe Batavia',
        category: 'restaurant',
        distance: '3.5 km',
        rating: 4.5,
        reviews: 2156,
        price: 'Rp 150.000 - 300.000',
        description: 'Restoran bersejarah di Kota Tua dengan suasana kolonial yang klasik.',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop',
        address: 'Jl. Pintu Besar Utara No.14, Kota Tua',
        openHours: '08:00 - 23:00',
        facilities: ['WiFi', 'AC', 'Live Music', 'Outdoor Seating']
    },

    // Bandung
    {
        id: 5,
        stationId: 2,
        name: 'Gedung Sate',
        category: 'tourist',
        distance: '3.2 km',
        rating: 4.6,
        reviews: 12340,
        price: 'Free',
        description: 'Bangunan bersejarah dengan arsitektur Indo-Eropa yang menawan.',
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop',
        address: 'Jl. Diponegoro No.22, Bandung',
        openHours: '08:00 - 15:00',
        facilities: ['Parkir', 'Toilet', 'Museum', 'Taman']
    },
    {
        id: 6,
        stationId: 2,
        name: 'Trans Studio Mall Bandung',
        category: 'shopping',
        distance: '4.5 km',
        rating: 4.7,
        reviews: 9876,
        price: 'Free',
        description: 'Mall terbesar di Bandung dengan theme park indoor.',
        image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&h=600&fit=crop&sat=-50',
        address: 'Jl. Gatot Subroto No.289, Bandung',
        openHours: '10:00 - 22:00',
        facilities: ['Theme Park', 'Cinema', 'Food Court', 'Parkir']
    },
    {
        id: 7,
        stationId: 2,
        name: 'The Trans Luxury Hotel',
        category: 'hotel',
        distance: '4.5 km',
        rating: 4.9,
        reviews: 4521,
        price: 'Rp 3.000.000/malam',
        description: 'Hotel mewah dengan fasilitas lengkap dan pemandangan kota Bandung.',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop',
        address: 'Jl. Gatot Subroto No.289, Bandung',
        openHours: '24 Jam',
        facilities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Ballroom']
    },
    {
        id: 8,
        stationId: 2,
        name: 'Braga Permai',
        category: 'restaurant',
        distance: '2.1 km',
        rating: 4.4,
        reviews: 3245,
        price: 'Rp 50.000 - 150.000',
        description: 'Restoran legendaris di Jalan Braga dengan menu Nusantara.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
        address: 'Jl. Braga No.58, Bandung',
        openHours: '09:00 - 21:00',
        facilities: ['AC', 'WiFi', 'Outdoor Seating']
    },

    // Yogyakarta
    {
        id: 9,
        stationId: 3,
        name: 'Candi Prambanan',
        category: 'tourist',
        distance: '18 km',
        rating: 4.8,
        reviews: 25630,
        price: 'Rp 50.000',
        description: 'Kompleks candi Hindu terbesar di Indonesia, situs warisan dunia UNESCO.',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop',
        address: 'Jl. Raya Solo - Yogyakarta, Sleman',
        openHours: '06:00 - 17:00',
        facilities: ['Parkir', 'Toilet', 'Museum', 'Toko Souvenir']
    },
    {
        id: 10,
        stationId: 3,
        name: 'Malioboro Mall',
        category: 'shopping',
        distance: '1.5 km',
        rating: 4.5,
        reviews: 7654,
        price: 'Free',
        description: 'Pusat perbelanjaan modern di jantung kota Yogyakarta.',
        image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop',
        address: 'Jl. Malioboro No.52-58, Yogyakarta',
        openHours: '10:00 - 22:00',
        facilities: ['Parkir', 'Food Court', 'ATM', 'WiFi']
    },
    {
        id: 11,
        stationId: 3,
        name: 'The Phoenix Hotel Yogyakarta',
        category: 'hotel',
        distance: '1.8 km',
        rating: 4.7,
        reviews: 5432,
        price: 'Rp 1.200.000/malam',
        description: 'Hotel heritage dengan arsitektur kolonial yang elegan.',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
        address: 'Jl. Jenderal Sudirman No.9, Yogyakarta',
        openHours: '24 Jam',
        facilities: ['WiFi', 'Pool', 'Restaurant', 'Spa', 'Meeting Room']
    },
    {
        id: 12,
        stationId: 3,
        name: 'Gudeg Yu Djum',
        category: 'restaurant',
        distance: '2.3 km',
        rating: 4.6,
        reviews: 8765,
        price: 'Rp 25.000 - 50.000',
        description: 'Restoran gudeg legendaris yang wajib dicoba di Yogyakarta.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
        address: 'Jl. Wijilan No.31, Yogyakarta',
        openHours: '06:00 - 21:00',
        facilities: ['AC', 'Takeaway', 'Delivery']
    },

    // Surabaya
    {
        id: 13,
        stationId: 4,
        name: 'Tugu Pahlawan',
        category: 'tourist',
        distance: '3.5 km',
        rating: 4.5,
        reviews: 9876,
        price: 'Free',
        description: 'Monumen bersejarah yang mengenang perjuangan arek-arek Suroboyo.',
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop',
        address: 'Jl. Pahlawan, Surabaya',
        openHours: '08:00 - 17:00',
        facilities: ['Parkir', 'Museum', 'Taman']
    },
    {
        id: 14,
        stationId: 4,
        name: 'Tunjungan Plaza',
        category: 'shopping',
        distance: '2.8 km',
        rating: 4.6,
        reviews: 11234,
        price: 'Free',
        description: 'Kompleks mall terbesar di Surabaya dengan 6 gedung.',
        image: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=800&h=600&fit=crop',
        address: 'Jl. Basuki Rahmat No.8-12, Surabaya',
        openHours: '10:00 - 22:00',
        facilities: ['Parkir', 'Cinema', 'Food Court', 'Department Store']
    },
    {
        id: 15,
        stationId: 4,
        name: 'JW Marriott Hotel Surabaya',
        category: 'hotel',
        distance: '3.2 km',
        rating: 4.8,
        reviews: 6543,
        price: 'Rp 2.800.000/malam',
        description: 'Hotel bintang 5 dengan fasilitas premium di pusat kota.',
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
        address: 'Jl. Embong Malang No.85-89, Surabaya',
        openHours: '24 Jam',
        facilities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Ballroom', 'Gym']
    },
    {
        id: 16,
        stationId: 4,
        name: 'Zangrandi Ice Cream',
        category: 'restaurant',
        distance: '2.5 km',
        rating: 4.7,
        reviews: 5432,
        price: 'Rp 30.000 - 80.000',
        description: 'Toko es krim tertua di Indonesia sejak 1930.',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop',
        address: 'Jl. Yos Sudarso No.15, Surabaya',
        openHours: '09:00 - 22:00',
        facilities: ['AC', 'WiFi', 'Takeaway']
    },
];

const categories = [
    { id: 'all', name: 'Semua', icon: MapPin },
    { id: 'tourist', name: 'Wisata', icon: Landmark },
    { id: 'hotel', name: 'Hotel', icon: Hotel },
    { id: 'restaurant', name: 'Restoran', icon: UtensilsCrossed },
    { id: 'shopping', name: 'Belanja', icon: ShoppingBag },
];

export default function TourismPage() {
    const [selectedStation, setSelectedStation] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter destinations
    const filteredDestinations = destinations.filter(dest => {
        const matchStation = selectedStation === null || dest.stationId === selectedStation;
        const matchCategory = selectedCategory === 'all' || dest.category === selectedCategory;
        const matchSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dest.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchStation && matchCategory && matchSearch;
    });

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'tourist': return <Landmark className="w-5 h-5" />;
            case 'hotel': return <Hotel className="w-5 h-5" />;
            case 'restaurant': return <UtensilsCrossed className="w-5 h-5" />;
            case 'shopping': return <ShoppingBag className="w-5 h-5" />;
            default: return <MapPin className="w-5 h-5" />;
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'tourist': return 'bg-blue-500';
            case 'hotel': return 'bg-purple-500';
            case 'restaurant': return 'bg-orange-500';
            case 'shopping': return 'bg-green-500';
            default: return 'bg-gray-500';
        }
    };

    return (
        <div className="min-h-screen bg-[var(--background)] pt-32 pb-10 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors mb-4">
                        <ArrowLeft size={20} />
                        <span>Kembali</span>
                    </Link>
                    <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">
                        Jelajahi Destinasi
                    </h1>
                    <p className="text-[var(--muted-foreground)]">
                        Temukan wisata, hotel, dan tempat menarik di sekitar stasiun tujuan Anda
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" size={20} />
                        <input
                            type="text"
                            placeholder="Cari destinasi, hotel, restoran..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-[var(--card)] text-[var(--foreground)] rounded-2xl border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all"
                        />
                    </div>
                </div>

                {/* Station Filter */}
                <div className="mb-6">
                    <h3 className="text-sm font-bold text-[var(--muted-foreground)] mb-3 uppercase">Pilih Stasiun</h3>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        <button
                            onClick={() => setSelectedStation(null)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${selectedStation === null
                                ? 'bg-[var(--primary)] text-white shadow-lg'
                                : 'bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--muted)]'
                                }`}
                        >
                            Semua Stasiun
                        </button>
                        {stations.map(station => (
                            <button
                                key={station.id}
                                onClick={() => setSelectedStation(station.id)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${selectedStation === station.id
                                    ? 'bg-[var(--primary)] text-white shadow-lg'
                                    : 'bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--muted)]'
                                    }`}
                            >
                                {station.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold text-[var(--muted-foreground)] mb-3 uppercase">Kategori</h3>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {categories.map(category => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${selectedCategory === category.id
                                        ? 'bg-[var(--primary)] text-white shadow-lg'
                                        : 'bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--muted)]'
                                        }`}
                                >
                                    <Icon size={16} />
                                    {category.name}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-4">
                    <p className="text-[var(--muted-foreground)] text-sm">
                        Menampilkan <span className="font-bold text-[var(--foreground)]">{filteredDestinations.length}</span> destinasi
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDestinations.map((dest, idx) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="bg-[var(--card)] rounded-3xl overflow-hidden border border-[var(--border)] hover:shadow-xl transition-all group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className={`absolute top-3 right-3 ${getCategoryColor(dest.category)} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg`}>
                                    {getCategoryIcon(dest.category)}
                                    {categories.find(c => c.id === dest.category)?.name}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                                    {dest.name}
                                </h3>

                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-semibold text-[var(--foreground)]">{dest.rating}</span>
                                    </div>
                                    <span className="text-xs text-[var(--muted-foreground)]">({dest.reviews.toLocaleString()} ulasan)</span>
                                </div>

                                <p className="text-sm text-[var(--muted-foreground)] mb-4 line-clamp-2">
                                    {dest.description}
                                </p>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm">
                                        <MapPin className="w-4 h-4 text-[var(--primary)]" />
                                        <span className="text-[var(--muted-foreground)]">{dest.distance} dari stasiun</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="font-semibold text-[var(--secondary)]">{dest.price}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {dest.facilities.slice(0, 3).map((facility, i) => (
                                        <span key={i} className="px-2 py-1 bg-[var(--muted)] text-[var(--foreground)] text-xs rounded-full">
                                            {facility}
                                        </span>
                                    ))}
                                    {dest.facilities.length > 3 && (
                                        <span className="px-2 py-1 bg-[var(--muted)] text-[var(--muted-foreground)] text-xs rounded-full">
                                            +{dest.facilities.length - 3} lainnya
                                        </span>
                                    )}
                                </div>

                                <button className="w-full py-3 bg-[var(--primary)] text-white rounded-xl font-semibold hover:bg-opacity-90 transition-all">
                                    Lihat Detail
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredDestinations.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-[var(--muted)] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-10 h-10 text-[var(--muted-foreground)]" />
                        </div>
                        <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Tidak ada destinasi ditemukan</h3>
                        <p className="text-[var(--muted-foreground)]">Coba ubah filter atau kata kunci pencarian Anda</p>
                    </div>
                )}
            </div>
        </div>
    );
}
