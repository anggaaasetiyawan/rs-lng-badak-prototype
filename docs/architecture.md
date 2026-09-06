# Arsitektur Project

## Struktur File

```
rs-lng-badak-prototype/
├── index.html          # Main HTML file (single-page)
├── styles.css          # Semua CSS styles (~2700 baris)
├── app.js              # JavaScript (filter dokter, nav toggle)
├── logo.png            # Logo RS LNG Badak
├── PRD-Redesign-RSLNGBadak.md    # Product Requirements Document
├── Page-Docs-RSLNGBadak.md       # Spesifikasi halaman
├── docs/               # Dokumentasi project
│   ├── README.md       # Index dokumentasi
│   ├── architecture.md # File ini
│   ├── components.md   # Dokumentasi komponen
│   ├── design-system.md # Design system
│   └── setup.md        # Panduan setup
└── .agents/            # AI coding skills (mattpocock/skills)
    ├── CLAUDE.md       # Agent instructions
    ├── AGENTS.md       # Agent instructions (symlink)
    └── skills/         # Skill files
```

## Arsitektur Halaman

Prototype ini adalah **single-page application** dengan navigasi anchor (`#section-id`). Setiap section dirender langsung di `index.html`.

### Section Order (top to bottom)

1. **Topbar** - Baris info di paling atas
2. **Header/Nav** - Logo, navigasi utama, CTA (sticky on scroll)
3. **Emergency Bar** - Nomor IGD 24 jam
4. **Hero** - Headline + ilustrasi + CTA
5. **Quick Access** - 4 ikon akses cepat (IGD, Jadwal, Lokasi, BPJS)
6. **Tentang Kami** - Stats, sejarah timeline, visi & misi
7. **Layanan** - 6 kartu layanan (grid)
8. **Jadwal Dokter** - Filter + tabel dokter
9. **Informasi Pasien** - Cara pendaftaran (3 steps)
10. **Karir** - 4 kartu lowongan
11. **Berita** - 3 kartu berita terbaru
12. **Kontak** - Banner CTA WhatsApp/Telepon
13. **Social** - Link media sosial
14. **Footer** - Info kontak, navigasi, copyright

### Data Flow

```
User Input → app.js → DOM Manipulation
     ↓
Filter Controls (poli, hari, nama)
     ↓
doctors array (hardcoded)
     ↓
renderDoctors() → HTML string → innerHTML
```

## Responsive Breakpoints

| Breakpoint | Target            |
| ---------- | ----------------- |
| `> 900px`  | Desktop (default) |
| `≤ 900px`  | Tablet            |
| `≤ 650px`  | Mobile            |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Limitations (Demo Only)

- Data dokter hardcoded di `app.js`
- Tidak ada backend/CMS
- Tidak ada routing (single-page anchor)
- Tidak ada state management
- Form kontak belum berfungsi
