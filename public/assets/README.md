# Assets Directory

## Struktur Folder

```
public/
└── assets/
    └── logos/
        └── (taruh file logo Anda di sini)
```

## Cara Menggunakan Logo

### 1. Taruh File Logo
Letakkan file logo PNG Anda di folder ini, misalnya:
- `nexa-logo.png` - Logo utama
- `nexa-logo-white.png` - Logo untuk dark mode (opsional)

### 2. Menggunakan di Component

Setelah file logo ditaruh di `public/assets/logos/`, Anda bisa menggunakannya di component dengan cara:

```tsx
import Image from 'next/image';

// Contoh penggunaan
<Image 
  src="/assets/logos/nexa-logo.png" 
  alt="NEXA Logo" 
  width={32} 
  height={32}
/>
```

**Catatan**: Path dimulai dari `/` karena Next.js otomatis mengakses folder `public/`

### 3. Contoh di Navbar

Lihat file `components/Navbar.tsx` untuk contoh implementasi logo dengan dukungan dark mode.

## Rekomendasi Ukuran Logo

- **Navbar**: 32x32px atau 40x40px
- **Hero Section**: 64x64px atau lebih besar
- **Favicon**: 16x16px, 32x32px, 48x48px

## Format yang Disarankan

- PNG dengan background transparan
- SVG untuk scalability terbaik
- WebP untuk ukuran file lebih kecil
