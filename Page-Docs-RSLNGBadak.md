# Page Docs — Redesign Website RS LNG Badak

Dokumen ini merinci setiap halaman dari Information Architecture yang sudah disepakati di PRD: tujuan halaman, struktur section, data/konten yang dibutuhkan, dan catatan UX. Dipakai sebagai acuan saat wireframing detail & development komponen React.

---

## 1. Homepage (`/`)

**Tujuan:** entry point tercepat ke info darurat + navigasi ke seluruh kebutuhan pasien.

**Section (top → bottom):**
| # | Section | Isi | Catatan |
|---|---|---|---|
| 1 | Header/Nav | Logo, menu utama (Tentang, Layanan, Jadwal Dokter, Berita, Kontak), sticky on scroll | Mobile: hamburger menu |
| 2 | Emergency bar | Nomor IGD + tombol "Hubungi" (click-to-call) | Selalu tampil di atas fold, warna kontras (merah/aksen) |
| 3 | Hero | Foto gedung/tenaga medis, headline singkat, sub-headline | Tanpa carousel berat — statis atau max 2 slide |
| 4 | Quick access grid | 4 ikon: Jadwal Dokter, Lokasi, BPJS/Asuransi, Pendaftaran | Tiap ikon → link ke halaman terkait |
| 5 | Layanan unggulan | 3–6 kartu poli/layanan utama | Link ke `/layanan/[slug]` |
| 6 | Berita & promo | 3 kartu terbaru (thumbnail, judul, tanggal) | Link ke `/berita`, dipisah tegas dari section layanan |
| 7 | Footer | Alamat, kontak per unit, peta mini, sosial media, link cepat | — |

**Data dibutuhkan:** daftar layanan unggulan (manual/CMS), 3 berita terbaru (dari CMS blog), nomor kontak per unit.

---

## 2. Tentang Kami (`/tentang`)

**Tujuan:** membangun kepercayaan lewat sejarah, legalitas, dan struktur organisasi.

**Sub-halaman & isi:**
- **Sejarah** (`/tentang/sejarah`) — narasi 1978–sekarang, bisa pakai timeline visual (tahun kunci: 1978 poli proyek → 1984 diresmikan → 2011 kerjasama Pertamedika → 2016 jadi Yayasan)
- **Visi & Misi** (`/tentang/visi-misi`) — teks statis
- **Akreditasi** (`/tentang/akreditasi`) — badge/logo akreditasi + tanggal berlaku, dokumen bila ada
- **Struktur Organisasi** (`/tentang/struktur`) — bagan direksi/manajemen

**Catatan UX:** gunakan tab atau sub-nav di dalam halaman "Tentang" agar tidak perlu 4 halaman terpisah di menu utama — cukup 1 entry menu dengan sub-navigasi internal.

---

## 3. Layanan (`/layanan`)

**Tujuan:** menyajikan seluruh layanan medis sebagai data terstruktur (bukan artikel blog).

**Halaman index (`/layanan`):**
- Grid/kategori: IGD 24 Jam, Rawat Jalan, Rawat Inap, Penunjang Medis, Medical Check-Up
- Setiap kategori = kartu dengan ikon + deskripsi singkat + link ke detail

**Halaman detail per kategori** (`/layanan/[kategori]`):

| Kategori | Konten spesifik |
|---|---|
| IGD 24 Jam | Jam operasional (24 jam), nomor darurat, alur triase singkat |
| Rawat Jalan | Daftar poli (Anak, Kandungan, Gigi, Umum, dll) — tiap poli link ke jadwal dokter terkait |
| Rawat Inap | Tipe kamar/kelas, fasilitas per kelas, foto |
| Penunjang Medis | Lab, Radiologi, USG, Farmasi — deskripsi + jam layanan |
| Medical Check-Up | Paket-paket MCU + harga (migrasi dari konten promo lama) |

**Data dibutuhkan:** daftar poli (nama, jam, dokter terkait), daftar paket MCU dengan harga, foto fasilitas.

**Catatan UX:** struktur ini harus data-driven (dari CMS/database), bukan hardcoded per halaman — supaya tim RS bisa update sendiri.

---

## 4. Jadwal Dokter (`/jadwal-dokter`)

**Tujuan:** halaman paling dicari pasien reguler — harus cepat dan mudah difilter.

**Komponen:**
- Filter: dropdown Poli, dropdown Hari, search nama dokter
- Tabel/list hasil: Nama dokter, Poli, Hari & jam praktik, status (praktik hari ini / tidak)
- State kosong: "Tidak ada jadwal untuk filter ini" + saran hubungi RS

**Catatan UX:** di mobile, tampilkan sebagai list card (bukan tabel horizontal-scroll). Highlight dokter yang praktik "hari ini" di paling atas.

**Data dibutuhkan:** database dokter (nama, foto opsional, poli, jadwal per hari) — ini kandidat kuat untuk CMS/API karena sering berubah.

---

## 5. Informasi Pasien (`/informasi-pasien`)

**Tujuan:** menjawab pertanyaan praktis sebelum pasien datang.

**Sub-halaman:**
- **Cara Pendaftaran** (`/informasi-pasien/pendaftaran`) — alur step-by-step (online via WA/telepon, atau datang langsung), dokumen yang perlu dibawa
- **BPJS & Asuransi Kerjasama** (`/informasi-pasien/bpjs-asuransi`) — daftar logo/nama asuransi & perusahaan yang bekerja sama, syarat penggunaan BPJS
- **Hak & Kewajiban Pasien** (`/informasi-pasien/hak-kewajiban`) — teks statis, biasanya wajib regulasi RS

**Catatan UX:** halaman "Cara Pendaftaran" sebaiknya pakai format step (numbered steps) bukan paragraf panjang.

---

## 6. Berita & Promo (`/berita`)

**Tujuan:** retain nilai SEO & fungsi blog dari situs lama, tapi dipisah tegas dari info krusial.

**Halaman index:** grid kartu (thumbnail, judul, tanggal, kategori tag), pagination, filter kategori (Kedokteran, Promo, Pengumuman, dll — migrasi dari kategori lama)

**Halaman detail** (`/berita/[slug]`): judul, tanggal, konten, gambar, tag terkait, "berita lain" di akhir

**Catatan:** migrasi konten lama (artikel promo USG, promo kecantikan, pengumuman) ke struktur ini agar SEO existing tidak hilang — perlu redirect map dari URL lama ke URL baru.

---

## 7. Karir (`/karir`) — Fase 2

**Tujuan:** rekrutmen tenaga medis/non-medis.

**Isi:** daftar lowongan aktif (posisi, kualifikasi, batas lamar), form/link lamaran (email atau form upload CV)

**Catatan:** bisa MVP sederhana dulu (list statis + email), form upload CV masuk fase 2 lanjutan.

---

## 8. Kontak & Lokasi (`/kontak`)

**Tujuan:** memudahkan orang menemukan & menghubungi RS.

**Komponen:**
- Peta interaktif (Google Maps embed) dengan pin lokasi
- Daftar nomor telepon per unit (IGD, Informasi, Humas, Pendaftaran)
- Alamat lengkap + jam operasional per layanan
- Form kontak singkat (nama, email, pesan) — opsional, untuk pertanyaan non-darurat
- Link sosial media

**Catatan UX:** nomor IGD tetap ditonjolkan di sini juga meski sudah ada di header — jangan asumsikan user datang dari homepage.

---

## Ringkasan Prioritas Build (mengacu ke MVP di PRD)

| Prioritas | Halaman |
|---|---|
| 1 | Homepage, Kontak, Jadwal Dokter |
| 2 | Layanan (index + detail), Tentang (Sejarah) |
| 3 | Berita & Promo, Informasi Pasien |
| 4 (Fase 2) | Karir, pendaftaran online, search global |
