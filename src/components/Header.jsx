import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Rumah sakit tepercaya untuk keluarga Bontang</span>
          <a href="#kontak">📍 Bontang, Kalimantan Timur</a>
        </div>
      </div>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="header">
        <div className="container nav-wrap">
          <a className="brand" href="#beranda" aria-label="RS LNG Badak, beranda">
            <img src="/logo.png" alt="RS LNG Badak" className="brand-logo" />
          </a>
          <button
            className={`nav-toggle ${isMobileNavOpen ? 'active' : ''}`}
            type="button"
            aria-expanded={isMobileNavOpen}
            aria-controls="primary-nav"
            onClick={toggleMobileNav}
          >
            <span></span><span></span><span></span>
            <span className="sr-only">Buka navigasi</span>
          </button>
          <nav id="primary-nav" className={`primary-nav ${isMobileNavOpen ? 'open' : ''}`} aria-label="Navigasi utama">
            <a href="#tentang" onClick={() => setIsMobileNavOpen(false)}>Tentang Kami</a>
            <a href="#layanan" onClick={() => setIsMobileNavOpen(false)}>Layanan</a>
            <a href="#jadwal" onClick={() => setIsMobileNavOpen(false)}>Jadwal Dokter</a>
            <a href="#berita" onClick={() => setIsMobileNavOpen(false)}>Berita</a>
            <a href="#kontak" onClick={() => setIsMobileNavOpen(false)}>Kontak</a>
            <a href="#karir" onClick={() => setIsMobileNavOpen(false)}>Karir</a>
          </nav>
          <a className="nav-cta" href="https://api.whatsapp.com/send?phone=628115858854&text=Saya%20tertarik%20untuk%20berobat%20disini" target="_blank" rel="noreferrer">
            Daftar Online <span>↗</span>
          </a>
        </div>
      </header>
    </>
  );
}
