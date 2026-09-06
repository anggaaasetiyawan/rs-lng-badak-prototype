# RS LNG Badak — Website Prototype (React)

> Prototype redesign website RS LNG Badak, rumah sakit tepercaya di Bontang, Kalimantan Timur. Dibangun dengan React + Vite.

**Status:** 🎓 Education Only / Portfolio Demo  
**Tidak untuk produksi** — ini adalah prototype untuk kebutuhan pembelajaran dan portfolio.

---
## Disclaimer

⚠️ **Project ini adalah prototype untuk kebutuhan education dan portfolio.**

- Semua data (dokter, jadwal, berita, karir) adalah **data dummy** dan bukan data RS LNG Badak yang sebenarnya
- Tidak terhubung ke sistem informasi rumah sakit manapun
- Tidak untuk digunakan sebagai website resmi rumah sakit
- Logo dan branding milik RS LNG Badak digunakan hanya untuk keperluan prototyping

## Tentang Project

Prototype ini adalah redesign website [RS LNG Badak](https://www.rslngbadak.co.id), sebuah rumah sakit di Bontang, Kalimantan Timur yang berdiri sejak 1984. Project ini dibangun sebagai **single-page application** menggunakan **React 18 + Vite 5** untuk validasi desain, pembelajaran React, dan presentasi portfolio.

### Tujuan Redesign

| Tujuan                                 | Deskripsi                                                              |
| -------------------------------------- | ---------------------------------------------------------------------- |
| **Informasi darurat mudah diakses**    | Nomor IGD dan lokasi tampil instan di semua device                     |
| **Navigasi berbasis kebutuhan pasien** | Task-based, bukan kategori blog                                        |
| **Modernisasi visual**                 | Desain bersih, profesional, sesuai identitas RS                        |
| **Data terstruktur**                   | Poli, dokter, jadwal sebagai data terstruktur (bukan post blog)        |
| **Mobile-first**                       | Performa tinggi di koneksi lambat                                      |
| **SEO lokal**                          | Mudah ditemukan saat warga Bontang mencari "RS Bontang", "IGD Bontang" |

### Target Pengguna

1. **Pasien/keluarga darurat** — butuh nomor IGD & lokasi dalam <10 detik
2. **Pasien reguler** — cari jadwal dokter/poli sebelum datang
3. **Peserta BPJS/asuransi** — cek layanan & asuransi yang diterima
4. **Calon karyawan** — cari info karir
5. **Masyarakat umum** — baca berita & promo kesehatan

---

## Quick Start

```bash
# Clone
git clone https://github.com/anggaaasetiyawan/rs-lng-badak-prototype.git
cd rs-lng-badak-prototype

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka http://localhost:3000
```

### Build untuk Production

```bash
npm run build
# Output di folder `dist/`
```

---

## Tech Stack

| Teknologi              | Kegunaan                                         |
| ---------------------- | ------------------------------------------------ |
| **React 18**           | UI library (SPA)                                 |
| **Vite 5**             | Build tool & dev server                          |
| **React Router DOM 6** | Routing (tersedia untuk pengembangan multi-page) |
| **CSS3**               | Styling, layout, animasi (vanilla CSS)           |
| **Google Fonts**       | DM Sans (body) + Plus Jakarta Sans (heading)     |
| **Google Maps Embed**  | Peta lokasi RS                                   |

### Target Stack (Roadmap)

| Layer            | Target                                                  |
| ---------------- | ------------------------------------------------------- |
| Styling          | Tailwind CSS                                            |
| Komponen UI      | shadcn/ui / Radix primitives                            |
| State Management | React Context / Zustand                                 |
| Form             | React Hook Form                                         |
| CMS              | Headless CMS (Sanity/Strapi) untuk data dokter & jadwal |

---

## Fitur

### Sudah Dibuat (MVP)

- [x] **Header** — Sticky navigation, mobile hamburger menu, scroll effect
- [x] **Emergency Bar** — Nomor IGD 24 Jam dengan click-to-call
- [x] **Hero Section** — Headline, sub-headline, CSS art illustration, trust badge
- [x] **Quick Access Grid** — 4 ikon akses cepat (IGD, Jadwal Dokter, Lokasi, BPJS)
- [x] **Tentang Kami** — Tab: Sejarah, Visi & Misi, Akreditasi, Struktur Organisasi
- [x] **Layanan** — 6 kartu layanan medis dengan data terstruktur
- [x] **Jadwal Dokter** — Filter by poli, hari, dan pencarian nama dokter
- [x] **Informasi Pasien** — 3 langkah pendaftaran
- [x] **Karir** — 4 lowongan pekerjaan
- [x] **Berita** — 3 kartu berita terbaru
- [x] **Kontak** — Google Maps embed, nomor telepon per unit
- [x] **Social Media** — 5 platform (Telegram, WhatsApp, Facebook, Instagram, YouTube)
- [x] **Footer** — Brand, navigasi, kontak, copyright
- [x] **Responsive** — Desktop, tablet, mobile
- [x] **SEO** — Meta tags, Open Graph, semantic HTML

### Belum Dibutuhkan (Fase 2)

- [ ] Pencarian dokter/layanan global
- [ ] Integrasi pendaftaran online / WhatsApp booking
- [ ] Portal karir dengan form lamaran
- [ ] CMS admin
- [ ] Multi-bahasa

---

## Information Architecture

```
Beranda
├── Tentang Kami
│   ├── Sejarah (timeline 1978–sekarang)
│   ├── Visi & Misi
│   ├── Akreditasi
│   └── Struktur Organisasi
├── Layanan
│   ├── IGD 24 Jam
│   ├── Rawat Jalan (daftar poli)
│   ├── Rawat Inap
│   ├── Penunjang Medis (Lab, Radiologi, USG)
│   └── Medical Check-Up / Paket Promo
├── Jadwal Dokter (searchable/filterable)
├── Informasi Pasien
│   ├── Cara Pendaftaran
│   ├── BPJS & Asuransi
│   └── Hak & Kewajiban Pasien
├── Berita & Promo
├── Karir
└── Kontak & Lokasi
```

---

## Struktur Project

```
rs-lng-badak-prototype/
├── index.html                    # Vite entry point
├── vite.config.js                # Vite configuration
├── package.json                  # Dependencies & scripts
├── PRD-Redesign-RSLNGBadak.md    # Product Requirements Document
├── Page-Docs-RSLNGBadak.md       # Spesifikasi halaman
├── README.md                     # ← Kamu di sini
│
├── public/                       # Static assets
│
├── src/
│   ├── main.jsx                  # React entry point
│   ├── App.jsx                   # Root component (menggabungkan semua section)
│   ├── styles.css                # Global styles (~2900 baris)
│   │
│   ├── components/               # React components
│   │   ├── Header.jsx            # Sticky nav, hamburger menu
│   │   ├── EmergencyBar.jsx      # IGD 24 Jam banner
│   │   ├── Hero.jsx              # Hero section dengan CSS art
│   │   ├── QuickAccess.jsx       # Grid akses cepat
│   │   ├── Tentang.jsx           # Tabs: Sejarah, Visi, Akreditasi, Struktur
│   │   ├── Services.jsx          # Kartu layanan medis
│   │   ├── JadwalDokter.jsx      # Filter & search jadwal dokter
│   │   ├── InformasiPasien.jsx   # 3 langkah pendaftaran
│   │   ├── Karir.jsx             # Lowongan pekerjaan
│   │   ├── Berita.jsx            # Berita terbaru
│   │   ├── Kontak.jsx            # Maps, telepon, form kontak
│   │   ├── Social.jsx            # Link social media
│   │   └── Footer.jsx            # Footer dengan navigasi
│   │
│   └── data/                     # Data terstruktur
│       ├── doctors.js            # Data dokter & jadwal
│       ├── services.js           # Data layanan medis
│       └── content.js            # Berita, karir, social links, timeline
│
├── docs/                         # Dokumentasi project
│   ├── README.md
│   ├── architecture.md
│   ├── design-system.md
│   ├── components.md
│   └── setup.md
│
└── .agents/                      # AI coding skills (mattpocock/skills)
```

---

## Design System

### Warna

| Variabel   | Warna     | Kegunaan                     |
| ---------- | --------- | ---------------------------- |
| `--ink`    | `#1a2332` | Teks utama                   |
| `--navy`   | `#006cb8` | Aksen biru                   |
| `--blue`   | `#ed1b2f` | Aksen merah (IGD, emergency) |
| `--red`    | `#ed1b2f` | Merah                        |
| `--pale`   | `#f9f7f2` | Background utama             |
| `--teal`   | `#8fb82a` | Hijau aksen                  |
| `--line`   | `#e8e2e2` | Garis/border                 |
| `--yellow` | `#acc42a` | Kuning aksen                 |
| `--sky`    | `#fde4e6` | Background soft pink         |

### Tipografi

| Font                  | Kegunaan  |
| --------------------- | --------- |
| **DM Sans**           | Body text |
| **Plus Jakarta Sans** | Heading   |

### Responsive Breakpoints

| Breakpoint | Target  |
| ---------- | ------- |
| `> 900px`  | Desktop |
| `≤ 900px`  | Tablet  |
| `≤ 650px`  | Mobile  |

---

## Dokumentasi

Lihat folder [`docs/`](./docs/) untuk dokumentasi lengkap:

- [Architecture](./docs/architecture.md) — Arsitektur project
- [Design System](./docs/design-system.md) — Warna, tipografi, spacing
- [Components](./docs/components.md) — Dokumentasi komponen UI
- [Setup Guide](./docs/setup.md) — Panduan instalasi

### Referensi Desain

- [PRD Redesign](./PRD-Redesign-RSLNGBadak.md) — Product Requirements Document
- [Page Docs](./Page-Docs-RSLNGBadak.md) — Spesifikasi halaman

---

## License

Project ini untuk keperluan **education & portfolio**. Tidak untuk komersial.

---

## Warna Utama

| Warna | Hex       | Penggunaan         |
| ----- | --------- | ------------------ |
| Merah | `#ed1b2f` | CTA, aksen utama   |
| Navy  | `#006cb8` | Link, hover        |
| Hijau | `#8fb82a` | Akses cepat, badge |
| Hitam | `#1a2332` | Teks utama         |
| Putih | `#f9f7f2` | Background         |

---

## Kontribusi

Ini adalah prototype demo. Untuk pengembangan lebih lanjut, silakan merujuk ke PRD dan Page Docs yang tersedia.

---

## License

Private — RS LNG Badak

---

## Kontak

**RS LNG Badak**

- 📍 Kel. Satimpo, Kec. Bontang Selatan, Bontang - 75324, Kalimantan Timur
- 📞 (0548) 552049
- ✉ humasmarketing.rslngbadak@gmail.com
- 🌐 www.rslngbadak.co.id
