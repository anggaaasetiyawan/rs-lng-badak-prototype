export default function InformasiPasien() {
  return (
    <section className="section register-section" id="bpjs">
      <div className="container register-wrap">
        <div className="register-copy">
          <p className="eyebrow"><span></span> INFORMASI PASIEN</p>
          <h2>Siapkan kunjungan<br />Anda dengan <em>tenang.</em></h2>
          <p>Temukan informasi pendaftaran, penjaminan, dan dokumen yang perlu Anda bawa sebelum berkunjung.</p>
          <div className="register-actions">
            <a className="button button-primary" href="https://api.whatsapp.com/send?phone=628115858854&text=Saya%20tertarik%20untuk%20berobat%20disini" target="_blank" rel="noreferrer">
              Cara Pendaftaran <span>→</span>
            </a>
            <a className="text-link" href="#kontak">Info BPJS & Asuransi <span>→</span></a>
          </div>
        </div>
        <div className="steps">
          <div className="step">
            <span>01</span>
            <div>
              <h3>Pilih layanan</h3>
              <p>Tentukan poli atau layanan yang Anda butuhkan.</p>
            </div>
          </div>
          <div className="step">
            <span>02</span>
            <div>
              <h3>Siapkan dokumen</h3>
              <p>Bawa identitas dan kartu penjaminan bila ada.</p>
            </div>
          </div>
          <div className="step">
            <span>03</span>
            <div>
              <h3>Daftar & berkunjung</h3>
              <p>Daftar via WhatsApp atau langsung di lokasi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
