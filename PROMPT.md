# Prompt implementasi — Redesign Website RS LNG Badak

Buat website rumah sakit **RS LNG Badak** dengan desain modern, hangat, dan sangat mudah digunakan dari ponsel. Prioritas pengalaman pengguna: dalam beberapa detik pasien harus bisa menemukan nomor IGD, jadwal dokter, lokasi, serta informasi BPJS/pendaftaran.

Gunakan nuansa biru medis, teal, putih, dan aksen merah khusus keadaan darurat. Hindari tampilan blog yang ramai atau carousel hero. Tampilkan layout whitespace luas, tipografi ramah dibaca lansia, kontras WCAG AA, dan CTA yang jelas.

Halaman beranda harus berisi:

1. Header sticky dengan logo, navigasi Tentang, Layanan, Jadwal Dokter, Berita & Promo, Kontak, serta tombol Daftar Online.
2. Emergency bar merah yang selalu terlihat di bagian atas dengan nomor IGD click-to-call dan tombol Hubungi IGD.
3. Hero statis berisi headline terpercaya, CTA Cek Jadwal Dokter, CTA Lihat Layanan, dan ilustrasi tenaga kesehatan yang ringan.
4. Empat akses cepat: IGD 24 Jam, Jadwal Dokter, Lokasi Rumah Sakit, dan BPJS & Asuransi.
5. Kartu layanan unggulan: Poliklinik Spesialis, IGD, Penunjang Medis, Rawat Inap.
6. Modul Jadwal Dokter yang benar-benar interaktif: filter poli, hari, pencarian nama dokter, hasil kosong, dan label dokter yang praktik hari ini. Pada mobile tampilkan sebagai kartu/list, bukan tabel horizontal.
7. Alur pendaftaran tiga langkah, CTA WhatsApp, kartu berita, informasi kontak, serta tombol WhatsApp mengambang.

Fitur dan kualitas yang wajib dijaga:

- Mobile-first dan responsif penuh.
- Semua CTA telepon menggunakan `tel:`; WhatsApp menggunakan tautan `wa.me`.
- Navigasi mobile hamburger yang dapat diakses keyboard, focus state jelas, serta skip link.
- Data dokter disimpan sebagai array/objek terstruktur agar mudah dipindahkan ke CMS/API kelak.
- Jangan gunakan nomor, alamat, harga, nama dokter, atau status akreditasi sebagai data produksi kecuali sudah dikonfirmasi pemilik RS. Beri penanda untuk data demo.
- Siapkan SEO dasar: title, meta description, dan struktur heading semantik. Implementasi produksi selanjutnya perlu metadata halaman, sitemap, serta schema.org Hospital.

Gaya visual: profesional dan optimistis, bukan klinis-dingin; komposisi bersih; ikon sederhana; gambar tidak mendominasi informasi penting. Target performa mobile tinggi dan informasi IGD selalu tersedia dalam satu klik.
