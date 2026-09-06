# PRD — Redesign Website RS LNG Badak (React)
**Sumber:** rslngbadak.co.id
**Disusun untuk:** Angga (Developer)
**Status:** Draft v1

---

## 1. Latar Belakang & Masalah

RS LNG Badak adalah rumah sakit di Bontang, Kalimantan Timur, berdiri sejak 1984, di bawah Yayasan RS LNG Badak (dulu berafiliasi Pertamedika). Situs saat ini dibangun di atas platform CMS blog lama (tema "Medisite", model WordPress klasik).

**Catatan:** Karena `rslngbadak.co.id` memblokir crawling otomatis (robots.txt), analisa struktur di bawah disusun dari hasil pencarian & pola umum situs rumah sakit sejenis dengan CMS yang sama. Rekomendasi: lampirkan screenshot tiap halaman utama untuk validasi detail visual sebelum eksekusi desain.

### Temuan struktur konten yang teridentifikasi:
- **Beranda** — feed berita/promo bercampur (pengumuman hari raya, promo USG, promo kecantikan, info akreditasi) tanpa hierarki jelas antara "informasi penting" vs "promo marketing"
- **Profil / Sejarah** — narasi panjang sejarah RS sejak 1978 (kapal ponton → klinik → RS)
- **Layanan (Kedokteran)** — daftar kategori/poli, tapi disajikan sebagai postingan blog, bukan struktur data layanan
- **Kontak** — alamat & info dasar
- **Kategori/Tag berita** — arsip blog (Kedokteran, BPJS, ASKES, JAMKESDA, JAMKESMAS, dll)

### Masalah yang kemungkinan besar terjadi (khas situs CMS-blog untuk RS):
1. **Informasi kritis tenggelam** — jadwal dokter, jam layanan IGD, cara pendaftaran, tidak menonjol karena homepage didominasi feed blog
2. **Navigasi tidak berbasis kebutuhan pasien** — struktur berbasis kategori blog, bukan flow "saya butuh apa" (berobat, cek jadwal, cek BPJS, hubungi IGD)
3. **Tidak mobile-first** — mayoritas pasien mengakses dari HP untuk cari info darurat/cepat
4. **Tidak ada data terstruktur untuk layanan** — daftar poli, dokter, jadwal praktik tercampur sebagai artikel, sulit di-maintain & sulit dicari
5. **Branding usang** — tampilan generik tema blog, tidak mencerminkan RS modern & tepercaya
6. **Tidak ada CTA jelas** — tidak ada jalur cepat ke "Hubungi IGD", "Cek Jadwal Dokter", "BPJS Info", dll di atas fold

---

## 2. Tujuan Redesign

| Tujuan | Deskripsi |
|---|---|
| **Kejelasan informasi darurat** | Nomor IGD, jam operasional, lokasi tampil instan di semua device |
| **Navigasi berbasis kebutuhan pasien** | Bukan kategori blog, tapi task: Berobat, Layanan, Jadwal Dokter, BPJS/Asuransi, Kontak |
| **Modernisasi visual & kepercayaan** | Desain bersih, profesional, sesuai identitas RS (bukan tema blog generik) |
| **Struktur data layanan yang scalable** | Poli, dokter, jadwal sebagai data terstruktur (bukan post blog) |
| **Mobile-first & cepat** | Performa tinggi, aksesibel di koneksi lambat (khas daerah non-metropolitan) |
| **SEO lokal** | Mudah ditemukan saat warga Bontang mencari "RS Bontang", "IGD Bontang", dll |

---

## 3. Target Pengguna (Personas)

1. **Pasien/keluarga darurat** — butuh nomor IGD & lokasi dalam <10 detik, dari HP
2. **Pasien reguler** — cari jadwal dokter/poli tertentu sebelum datang
3. **Peserta BPJS/asuransi perusahaan** — cek apakah layanan/asuransinya diterima
4. **Calon karyawan/mitra** — cari info karir, pengadaan, kemitraan
5. **Masyarakat umum** — baca promo kesehatan (medical check-up, USG, dll), berita RS

---

## 4. Information Architecture (Usulan)

```
Beranda
├── Tentang Kami
│   ├── Sejarah
│   ├── Visi & Misi
│   ├── Akreditasi
│   └── Struktur Organisasi
├── Layanan
│   ├── IGD 24 Jam
│   ├── Rawat Jalan (daftar poli)
│   ├── Rawat Inap
│   ├── Penunjang Medis (Lab, Radiologi, USG, dll)
│   └── Medical Check-Up / Paket Promo
├── Jadwal Dokter (searchable/filterable table)
├── Informasi Pasien
│   ├── Cara Pendaftaran (online/offline)
│   ├── BPJS & Asuransi Kerjasama
│   └── Hak & Kewajiban Pasien
├── Berita & Promo (blog, dipisah dari info krusial)
├── Karir
└── Kontak & Lokasi (peta, nomor telepon per unit)

[Sticky/Floating]: Tombol "Hubungi IGD" + "WhatsApp" di semua halaman
```

---

## 5. Scope Fitur — MVP vs Fase Lanjutan

### MVP (Fase 1)
- Homepage baru: hero + akses cepat (IGD, Jadwal Dokter, Lokasi, BPJS)
- Halaman Layanan (data-driven, per kategori poli)
- Halaman Jadwal Dokter (filter by poli/hari)
- Halaman Profil/Sejarah (redesign konten lama)
- Halaman Kontak + peta interaktif
- Blog/Berita (list + detail, retain SEO value dari konten lama)
- Responsive penuh (mobile-first)

### Fase 2
- Pencarian dokter/layanan global (search bar)
- Integrasi pendaftaran online / WhatsApp booking
- Portal karir dengan form lamaran
- CMS admin sederhana (agar tim RS bisa update jadwal/promo tanpa developer)
- Multi-bahasa (opsional, jika ada pasien asing PT Badak NGL)

### Fase 3
- Portal pasien (riwayat, hasil lab online) — butuh integrasi sistem RS (SIMRS), kompleksitas tinggi & isu keamanan data medis, dibahas terpisah

---

## 6. Tech Stack (React)

| Layer | Rekomendasi | Alasan |
|---|---|---|
| Framework | React (Vite) atau Next.js | Next.js lebih disarankan karena butuh SEO (SSR/SSG) untuk konten publik RS |
| Styling | Tailwind CSS | Cepat, konsisten, mudah di-maintain |
| Komponen UI | shadcn/ui atau Radix primitives | Aksesibilitas built-in, penting untuk situs layanan publik |
| Data layanan/dokter | CMS headless (mis. Sanity/Strapi) atau backend custom (Laravel — sesuai stack yang biasa kamu pakai) | Supaya jadwal & promo bisa diupdate tanpa redeploy kode |
| Peta | Google Maps Embed / Leaflet | Lokasi & petunjuk arah |
| Formulir kontak/karir | React Hook Form + validasi | UX form yang baik |
| Hosting | Vercel/Netlify (jika Next.js) atau VPS | Tergantung kebutuhan integrasi backend |

**Catatan:** Karena kontennya butuh SEO publik (berita, layanan, jadwal dokter), **Next.js lebih tepat dibanding React SPA murni** — SPA akan lemah untuk pencarian Google terhadap konten seperti "jadwal dokter RS LNG Badak".

---

## 7. Prinsip Desain UI

- **Trust-first**: warna & tipografi RS pada umumnya condong ke biru/hijau (kesehatan, higienis), whitespace cukup, hindari desain ramai ala blog lama
- **Aksesibilitas**: kontras warna tinggi, ukuran font cukup besar (banyak pengunjung usia lanjut/keluarga pasien), navigasi jelas tanpa perlu scroll panjang untuk info penting
- **Kecepatan**: gambar dioptimasi, lazy-load untuk galeri/berita, hindari carousel berat di atas fold
- **Konsistensi komponen**: satu design system untuk kartu layanan, kartu dokter, kartu berita — supaya scalable saat konten bertambah

---

## 8. Non-Functional Requirements

- **Performa**: Lighthouse score ≥ 90 (mobile)
- **Aksesibilitas**: WCAG AA minimum (kontras, alt text, keyboard navigation)
- **SEO**: meta tag per halaman, sitemap.xml, structured data (schema.org `Hospital`/`MedicalOrganization`)
- **Keamanan**: form submission via HTTPS, proteksi spam (captcha/honeypot) pada form kontak/karir
- **Maintainability**: konten layanan/jadwal harus bisa diupdate tim non-teknis (via CMS admin)

---

## 9. Metrik Keberhasilan

| Metrik | Target |
|---|---|
| Waktu ke informasi IGD/kontak darurat | < 2 klik dari homepage |
| Mobile page load (LCP) | < 2.5 detik |
| Bounce rate homepage | Turun dibanding baseline saat ini |
| Trafik organik ke halaman layanan/jadwal dokter | Naik (karena SEO terstruktur) |

---

## 10. Langkah Selanjutnya

1. Validasi analisa "before" dengan screenshot aktual tiap halaman (untuk memastikan struktur konten & data yang perlu dimigrasi)
2. Audit konten existing — mana yang perlu dipertahankan (SEO value dari artikel lama) vs dibuang
3. Tentukan sumber data layanan/dokter (manual dulu, atau perlu CMS/API dari sistem RS)
4. Wireframe low-fidelity untuk homepage, layanan, jadwal dokter
5. Setup project React/Next.js + design system dasar
