# Setup Guide

## Prerequisites

- Browser modern (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Live Server extension (VS Code) atau HTTP server lain

## Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/anggaaasetiyawan/rs-lng-badak-prototype.git
cd rs-lng-badak-prototype
```

### 2. Buka di VS Code

```bash
code .
```

### 3. Jalankan dengan Live Server

1. Install extension "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

Ataugunakan HTTP server sederhana:

```bash
# Python
python -m http.server 8000

# Node.js (jika ada)
npx serve .
```

### 4. Buka di Browser

```
http://localhost:8000
```

## Struktur Development

### File yang perlu diedit

| File         | Kegunaan                                   |
| ------------ | ------------------------------------------ |
| `index.html` | Struktur halaman, konten, section          |
| `styles.css` | Semua styling dan layout                   |
| `app.js`     | Interaktivitas (filter dokter, nav toggle) |

### Data Dokter

Data dokter hardcoded di `app.js`:

```javascript
const doctors = [
  {
    name: "dr. Nabila Pratama, Sp.A",
    poli: "Poli Anak",
    day: "Senin",
    time: "08.00 – 12.00",
    today: true,
    initials: "NP",
  },
  // ... tambah data lain
];
```

Untuk menambah dokter baru, tambahkan object baru ke array `doctors`.

### Menambah Section Baru

1. Tambah HTML di `index.html` sebelum `</main>`
2. Tambah CSS di `styles.css`
3. Tambah link di navigasi `<nav class="primary-nav">`
4. Tambah link di footer "Jelajahi"

### Responsive Testing

Test di browser dengan:

- Desktop: `> 900px`
- Tablet: `≤ 900px`
- Mobile: `≤ 650px`

Gunakan DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)

## Deployment

### Static Hosting

Karena ini static files, bisa di-deploy ke:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Any static hosting**

### GitHub Pages

1. Push ke GitHub
2. Settings → Pages
3. Source: Deploy from branch (main)
4. Folder: / (root)

## Troubleshooting

### Font tidak muncul

- Pastikan ada koneksi internet (Google Fonts loaded via CDN)
- Cek console untuk error loading

### Navigasi tidak berfungsi

- Pastikan section ID sesuai dengan href di nav
- Contoh: `href="#layanan"` → `id="layanan"`

### Filter dokter tidak bekerja

- Cek console untuk error JavaScript
- Pastikan `app.js` loaded dengan benar

## Next Steps

Lihat [PRD](../PRD-Redesign-RSLNGBadak.md) untuk rencana pengembangan selanjutnya:

- Fase 2: Search, pendaftaran online, CMS admin
- Fase 3: Portal pasien, integrasi SIMRS
