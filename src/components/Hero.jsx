export default function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> KESEHATAN UNTUK HARI INI & NANTI</p>
          <h1>Merawat dengan <em>hati,</em><br />menyembuhkan dengan ilmu.</h1>
          <p className="hero-text">Mendampingi setiap langkah menuju hidup yang lebih sehat dengan layanan medis yang hangat, lengkap, dan tepercaya.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#jadwal">Cek Jadwal Dokter <span>→</span></a>
            <a className="button button-quiet" href="#layanan">Lihat Layanan <span>↗</span></a>
          </div>
          <div className="hero-trust">
            <div className="avatars"><span>✚</span><span>♥</span><span>✦</span></div>
            <p><strong>40+ tahun</strong><br />melayani masyarakat Bontang</p>
          </div>
        </div>
        <div className="hero-art" aria-label="Ilustrasi tenaga kesehatan" role="img">
          <div className="sun"></div>
          <div className="leaf leaf-one"></div>
          <div className="leaf leaf-two"></div>
          <div className="dot-grid"></div>
          <div className="hero-doctor-card">
            <div className="doctor-head"><span className="hair"></span><span className="face"></span></div>
            <div className="doctor-body"><span className="coat"></span><span className="stethoscope">♧</span><span className="badge">✚</span></div>
          </div>
          <div className="floating-card appointment-card">
            <span className="mini-icon calendar">▦</span>
            <p><small>MUDAH & CEPAT</small><strong>Daftar dari rumah</strong></p>
          </div>
          <div className="floating-card certified-card">
            <span>✓</span>
            <p><small>TERPERCAYA</small><strong>Terakreditasi Paripurna</strong></p>
          </div>
        </div>
      </div>
      <div className="hero-wave" aria-hidden="true"></div>
    </section>
  );
}
