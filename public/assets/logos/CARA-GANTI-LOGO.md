# Cara Mengganti Logo NEXA

## Langkah-langkah:

### 1. Siapkan File Logo
Taruh file logo PNG Anda di folder:
```
/Users/rafkiyuda/Documents/nexa/public/assets/logos/
```

Misalnya: `nexa-logo.png`

### 2. Update Navbar Component

Buka file `components/Navbar.tsx` dan ganti bagian logo (baris 21-26) dengan kode berikut:

**Opsi A: Logo Sederhana (Satu File)**
```tsx
import Image from 'next/image';

// Di dalam component, ganti bagian logo:
<Link href="/" className="font-bold text-xl tracking-tight text-[var(--primary)] flex items-center gap-2">
    <Image 
        src="/assets/logos/nexa-logo.png" 
        alt="NEXA Logo" 
        width={32} 
        height={32}
        className="object-contain"
    />
    <span>NEXA</span>
</Link>
```

**Opsi B: Logo dengan Dark Mode Support (Dua File)**
```tsx
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

// Di dalam component:
const { theme } = useTheme();

// Ganti bagian logo:
<Link href="/" className="font-bold text-xl tracking-tight text-[var(--primary)] flex items-center gap-2">
    <Image 
        src={theme === 'dark' 
            ? "/assets/logos/nexa-logo-white.png" 
            : "/assets/logos/nexa-logo.png"
        } 
        alt="NEXA Logo" 
        width={32} 
        height={32}
        className="object-contain"
    />
    <span>NEXA</span>
</Link>
```

**Opsi C: Logo Saja (Tanpa Text)**
```tsx
<Link href="/" className="flex items-center">
    <Image 
        src="/assets/logos/nexa-logo.png" 
        alt="NEXA" 
        width={120} 
        height={40}
        className="object-contain"
        priority
    />
</Link>
```

### 3. File yang Perlu Disiapkan

Untuk hasil terbaik, siapkan:
- `nexa-logo.png` - Logo untuk light mode (32x32px atau lebih besar)
- `nexa-logo-white.png` - Logo untuk dark mode (opsional, jika logo perlu warna berbeda)

### 4. Tips
- Gunakan PNG dengan background transparan
- Ukuran yang disarankan: 32x32px, 64x64px, atau 128x128px
- Untuk logo horizontal: 120x40px atau sesuai proporsi
- Tambahkan `priority` prop jika logo ada di above-the-fold

## Lokasi File
- **Folder Assets**: `/Users/rafkiyuda/Documents/nexa/public/assets/logos/`
- **Component Navbar**: `/Users/rafkiyuda/Documents/nexa/components/Navbar.tsx`
