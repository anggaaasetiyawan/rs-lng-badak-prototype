export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#beranda">
            <img src="/logo.png" alt="RS LNG Badak" className="brand-logo" />
            <span></span>
          </a>
          <p>Memberikan pelayanan kesehatan dengan sepenuh hati untuk masyarakat Bontang dan sekitarnya.</p>
        </div>
        <div>
          <h3>Jelajahi</h3>
          <a href="#tentang">Tentang Kami</a>
          <a href="#layanan">Layanan</a>
          <a href="#jadwal">Jadwal Dokter</a>
          <a href="#bpjs">Informasi Pasien</a>
          <a href="#karir">Karir</a>
        </div>
        <div>
          <h3>Kontak</h3>
          <p>Kel. Satimpo, Kec. Bontang Selatan, Bontang - 75324, Kalimantan Timur.</p>
          <a href="tel:+62548552049">Tlp: (0548) 552049</a>
          <span className="footer-detail">Fax: (0548) 552128</span>
          <a href="mailto:humasmarketing.rslngbadak@gmail.com">humasmarketing.rslngbadak@gmail.com</a>
          <a href="https://www.rslngbadak.co.id" target="_blank" rel="noreferrer">www.rslngbadak.co.id</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 RS LNG Badak. Semua hak dilindungi.</span>
        <span>Kel. Satimpo, Kec. Bontang Selatan, Bontang - 75324</span>
      </div>
    </footer>
  );
}
