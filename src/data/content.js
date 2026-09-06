export const jobs = [
  {
    id: 1,
    title: 'Perawat Rawat Inap',
    department: 'Keperawatan',
    type: 'Penuh Waktu',
    badge: 'Dibutuhkan Segera',
    badgeColor: 'default',
    description: 'Bertanggung jawab atas perawatan pasien rawat inap, pemantauan kondisi pasien, dan kolaborasi dengan tim medis.',
    requirements: ['D3/S1 Keperawatan', 'Memiliki STR aktif', 'Pengalaman minimal 1 tahun'],
    applyLink: 'mailto:humasmarketing.rslngbadak@gmail.com?subject=Lamaran%20-%20Perawat%20Rawat%20Inap',
    applyColor: 'default',
  },
  {
    id: 2,
    title: 'Apoteker',
    department: 'Farmasi',
    type: 'Penuh Waktu',
    badge: 'Dibutuhkan Segera',
    badgeColor: 'green',
    description: 'Melakukan pelayanan kefarmasian, edukasi obat kepada pasien, dan pengelolaan stok obat.',
    requirements: ['S1 Farmasi / Profesi Apoteker', 'Memiliki STR aktif', 'Pengalaman minimal 1 tahun'],
    applyLink: 'mailto:humasmarketing.rslngbadak@gmail.com?subject=Lamaran%20-%20Apoteker',
    applyColor: 'default',
  },
  {
    id: 3,
    title: 'Dokter Umum',
    department: 'Medis',
    type: 'Penuh Waktu',
    badge: null,
    badgeColor: null,
    description: 'Memberikan pelayanan medis umum di poliklinik, melakukan pemeriksaan, dan merujuk pasien jika diperlukan.',
    requirements: ['S1 Kedokteran + STR', 'Bersedia jadwal shift', 'Komunikatif dan teliti'],
    applyLink: 'mailto:humasmarketing.rslngbadak@gmail.com?subject=Lamaran%20-%20Dokter%20Umum',
    applyColor: 'green',
  },
  {
    id: 4,
    title: 'Administrasi Rekam Medis',
    department: 'Administrasi',
    type: 'Penuh Waktu',
    badge: null,
    badgeColor: null,
    description: 'Mengelola data rekam medis pasien, memastikan ketepatan dan kerahasiaan informasi kesehatan.',
    requirements: ['D3 Rekam Medis', 'Teliti dan rapi', 'Mampu bekerja dengan sistem informasi rumah sakit'],
    applyLink: 'mailto:humasmarketing.rslngbadak@gmail.com?subject=Lamaran%20-%20Rekam%20Medis',
    applyColor: 'default',
  },
];

export const news = [
  {
    id: 1,
    category: 'EDUKASI KESEHATAN',
    date: '12 JUN 2024',
    title: 'Mengenal pentingnya pemeriksaan kesehatan rutin',
    image: 'news-one',
    icon: '♥',
  },
  {
    id: 2,
    category: 'INFORMASI RS',
    date: '05 JUN 2024',
    title: 'Komitmen kami untuk pelayanan yang terus lebih baik',
    image: 'news-two',
    icon: '✦',
  },
  {
    id: 3,
    category: 'PROMO KESEHATAN',
    date: '28 MEI 2024',
    title: 'Paket medical check-up untuk langkah sehat Anda',
    image: 'news-three',
    icon: '⌁',
  },
];

export const socialLinks = [
  {
    id: 1,
    name: 'Telegram',
    url: 'https://t.me/customercare_rslngbadak',
    icon: '✈',
    className: 'telegram',
  },
  {
    id: 2,
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send?phone=628115858854&text=Saya%20tertarik%20untuk%20berobat%20disini',
    icon: '💬',
    className: 'whatsapp',
  },
  {
    id: 3,
    name: 'Facebook',
    url: 'https://www.facebook.com/rslngbadak/',
    icon: 'f',
    className: 'facebook',
  },
  {
    id: 4,
    name: 'Instagram',
    url: 'https://www.instagram.com/rslngbadak/',
    icon: '◎',
    className: 'instagram',
  },
  {
    id: 5,
    name: 'YouTube',
    url: 'https://www.youtube.com/@rslngbadak',
    icon: '▶',
    className: 'youtube',
  },
];

export const timeline = [
  {
    year: '1978',
    title: 'Awal Berdiri',
    description: 'Didirikan sebagai poliklinik proyek untuk melayani karyawan PT Badak NGL dan keluarga.',
  },
  {
    year: '1984',
    title: 'Diresmikan',
    description: 'Secara resmi menjadi rumah sakit umum yang melayani masyarakat luas di Bontang.',
  },
  {
    year: '2011',
    title: 'Kerjasama Pertamedika',
    description: 'Menjalin kerjasama strategis dengan Pertamedika untuk peningkatan layanan kesehatan.',
  },
  {
    year: '2016',
    title: 'Yayasan',
    description: 'Bergabung dalam naungan Yayasan untuk memperluas jangkauan pelayanan kesehatan.',
  },
];

export const stats = [
  { value: '47+', label: 'Tahun Melayani' },
  { value: '30+', label: 'Dokter Spesialis' },
  { value: '24 Jam', label: 'Layanan IGD' },
  { value: 'A', label: 'Akreditasi Paripurna' },
];

export const quickAccess = [
  {
    id: 1,
    title: 'IGD 24 Jam',
    description: 'Siap membantu kapan saja',
    icon: '✚',
    color: 'red',
    link: 'tel:+62548800000',
  },
  {
    id: 2,
    title: 'Jadwal Dokter',
    description: 'Cari dokter & jam praktik',
    icon: '▦',
    color: 'blue',
    link: '#jadwal',
  },
  {
    id: 3,
    title: 'Lokasi Rumah Sakit',
    description: 'Lihat rute & alamat kami',
    icon: '⌖',
    color: 'yellow',
    link: '#kontak',
  },
  {
    id: 4,
    title: 'BPJS & Asuransi',
    description: 'Informasi layanan penjamin',
    icon: '▣',
    color: 'green',
    link: '#bpjs',
  },
];
