# Komponen

Dokumentasi komponen UI yang ada di prototype.

## Layout Components

### Container

```css
.container {
  width: min(1160px, calc(100% - 48px));
  margin: 0 auto;
}
```

Wrapper utama untuk semua section. Responsive dengan max-width.

### Section

```css
.section {
  padding: 92px 0;
}
```

Wrapper untuk setiap section halaman.

---

## Header & Navigation

### Topbar

Baris info di paling atas halaman.

- Menampilkan teks promosi dan link lokasi
- Hidden pada mobile (`≤ 650px`)

### Site Header (Sticky)

Header utama dengan logo, navigasi, dan CTA.

- **Sticky** saat scroll (`position: sticky; top: 0`)
- **Shadow** muncul saat scroll > 16px
- **Mobile**: Hamburger menu toggle

### Primary Nav

```html
<nav class="primary-nav">
  <a href="#tentang">Tentang Kami</a>
  <a href="#layanan">Layanan</a>
  <a href="#jadwal">Jadwal Dokter</a>
  <a href="#berita">Berita</a>
  <a href="#kontak">Kontak</a>
  <a href="#karir">Karir</a>
</nav>
```

### Nav CTA

Tombol "Daftar Online" di header.

- Hidden pada mobile
- Link ke WhatsApp

---

## Emergency Bar

Banner darurat di atas halaman.

- Background merah dengan teks putih
- Nomor telepon IGD (click-to-call)
- Tombol "Hubungi IGD"
- **Always visible** di semua breakpoint

---

## Hero Section

### Hero Grid

Layout 2 kolom: copy (kiri) + art (kanan).

### Hero Copy

- Eyebrow text
- Headline h1
- Subtext
- 2 tombol CTA (Primary + Quiet)
- Trust badge (40+ tahun)

### Hero Art

Ilustrasi CSS-only dengan:

- Sun (lingkaran kuning)
- Leaf elements
- Doctor card (CSS art)
- Floating cards (appointment, certified)

### Hero Wave

Divider gelombang di bawah hero.

---

## Quick Access

4 ikon akses cepat dalam grid horizontal.

```html
<a class="quick-item" href="tel:+62548800000">
  <span class="quick-icon red">✚</span>
  <span
    ><strong>IGD 24 Jam</strong><small>Siap membantu kapan saja</small></span
  >
  <b>→</b>
</a>
```

| Ikon            | Warna  | Link    |
| --------------- | ------ | ------- |
| IGD 24 Jam      | Red    | tel:    |
| Jadwal Dokter   | Blue   | #jadwal |
| Lokasi RS       | Yellow | #kontak |
| BPJS & Asuransi | Green  | #bpjs   |

---

## Tentang Kami

### Stats Bar

4 kolom statistik (36px bold numbers).

- 47+ Tahun Melayani
- 30+ Dokter Spesialis
- 24 Jam Layanan IGD
- A Akreditasi Paripurna

### Timeline

Visual timeline sejarah (1978 → 1984 → 2011 → 2016).

- Border kiri dengan dot marker
- Badge tahun (merah)

### Visi & Misi

2 kartu berdampingan:

- **Visi**: Card dengan ikon target
- **Misi**: Card dengan list bullet checkmark

---

## Layanan (Services)

### Services Grid

6 kartu layanan dalam grid 3 kolom.

### Service Card

```html
<article class="service-card">
  <div class="service-icon teal">✚</div>
  <p>LAYANAN DARURAT</p>
  <h3>Instalasi Gawat Darurat</h3>
  <span class="service-note">Deskripsi...</span>
  <a href="#">Link <span>→</span></a>
</article>
```

**Variants:**
| Class | Warna |
|-------|-------|
| `.service-icon` (default) | Merah |
| `.service-icon.teal` | Teal |
| `.service-icon.violet` | Ungu |
| `.service-icon.orange` | Hijau (orange naming) |
| `.service-icon.green` | Hijau |

### Featured Card

Kartu pertama (Poliklinik Spesialis) menggunakan layout khusus:

- Grid column span 2
- Grid row span 2
- Background gradient teal
- Visual CSS art (mother-baby)

---

## Jadwal Dokter

### Schedule Layout

2 kolom: intro (kiri) + panel (kanan).

### Filters

3 filter controls:

- Dropdown Poli
- Dropdown Hari
- Search nama dokter

### Doctor Row

```html
<article class="doctor-row is-today">
  <span class="doctor-avatar">NP</span>
  <div class="doctor-info">
    <strong>dr. Nabila Pratama, Sp.A</strong>
    <span>Poli Anak</span>
  </div>
  <div class="doctor-time">
    <span>Senin</span>
    <strong>08.00 – 12.00</strong>
  </div>
  <span class="practice-now">Praktik hari ini</span>
</article>
```

**States:**

- `.is-today` - Highlight biru untuk dokter yang praktik hari ini
- `.practice-now` - Badge hijau "Praktik hari ini"
- `.practice-later` - Badge abu "Jadwal praktik"

---

## Informasi Pasien (Register)

### Register Layout

2 kolom: copy (kiri) + steps (kanan).

### Steps

3 langkah pendaftaran:

1. Pilih layanan
2. Siapkan dokumen
3. Daftar & berkunjung

---

## Karir

### Karir Grid

4 kartu lowongan dalam grid 2 kolom.

### Karir Card

```html
<article class="karir-card">
  <div class="karir-badge green">Dibutuhkan Segera</div>
  <h3>Apoteker</h3>
  <p class="karir-meta">Farmasi · Penuh Waktu</p>
  <p class="karir-desc">Deskripsi...</p>
  <ul class="karir-req">
    <li>Kualifikasi 1</li>
    <li>Kualifikasi 2</li>
  </ul>
  <a class="karir-apply" href="mailto:...">Lamar sekarang →</a>
</article>
```

**Badge Variants:**

- Default (merah)
- `.green` (hijau)

**Apply Link Variants:**

- Default (merah via `var(--blue)`)
- `.green` (hijau)

---

## Berita (News)

### News Grid

3 kartu berita dalam grid 3 kolom.

### News Card

- Image placeholder (CSS gradient + icon)
- Meta (kategori + tanggal)
- Judul
- Link "Baca selengkapnya"

---

## Kontak (Contact Banner)

Full-width banner dengan:

- Background gradient biru
- Headline
- 2 tombol (WhatsApp + Telepon)

---

## Social Section

### Social Links

5 link media sosial:

- Telegram
- WhatsApp
- Facebook
- Instagram
- YouTube

---

## Footer

### Footer Grid

3 kolom:

1. Brand + deskripsi
2. Jelajahi (links)
3. Kontak (alamat, telepon, email, website)

### Footer Bottom

Baris copyright di bawah.
