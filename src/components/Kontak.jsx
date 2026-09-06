const contactNumbers = [
  { unit: 'IGD (Instalasi Gawat Darurat)', number: '(0548) 800 000', link: 'tel:+62548800000', available: '24 Jam' },
  { unit: 'Informasi & Pendaftaran', number: '(0548) 552049', link: 'tel:+62548552049', available: '07:00 – 20:00' },
  { unit: 'Humas & Marketing', number: '(0548) 552049', link: 'tel:+62548552049', available: '08:00 – 16:00' },
  { unit: 'Farmasi', number: '(0548) 552049 ext. 102', link: 'tel:+62548552049', available: '24 Jam' },
  { unit: 'Laboratorium', number: '(0548) 552049 ext. 103', link: 'tel:+62548552049', available: '07:00 – 21:00' },
];

export default function Kontak() {
  return (
    <section className="kontak-section" id="kontak">
      {/* Banner CTA */}
      <div className="contact-banner">
        <div className="container contact-content">
          <div>
            <p className="eyebrow light"><span></span> HUBUNGI KAMI</p>
            <h2>Kami ada untuk<br />Anda dan keluarga.</h2>
          </div>
          <div className="contact-buttons">
            <a className="button button-white" href="https://api.whatsapp.com/send?phone=628115858854&text=Saya%20tertarik%20untuk%20berobat%20disini" target="_blank" rel="noreferrer">
              WhatsApp Pendaftaran <span>↗</span>
            </a>
            <a className="button button-line" href="tel:+62548552049">☎ (0548) 552049</a>
          </div>
        </div>
      </div>

      {/* Maps & Info Section */}
      <div className="container kontak-grid">
        {/* Google Maps Embed */}
        <div className="kontak-map">
          <h3>Lokasi Kami</h3>
          <div className="map-wrapper">
            <iframe
              title="Lokasi RS LNG Badak"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.695!2d117.4708498!3d0.1174887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320a0de9b1adde7b%3A0xb63568c10606caa6!2sRumah%20Sakit%20LNG%20Badak%20Bontang!5e0!3m2!1sid!2sid!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <p style={{ marginTop: '8px', fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
              <a href="https://maps.app.goo.gl/JjBAmv3mzFA28GdR7" target="_blank" rel="noreferrer" style={{ color: 'var(--navy)', textDecoration: 'underline' }}>
                📍 Buka di Google Maps
              </a>
            </p> */}
          </div>
          <div className="alamat-lengkap">
            <strong>Alamat:</strong>
            <p>Kel. Satimpo, Kec. Bontang Selatan, Bontang - 75324, Kalimantan Timur.</p>
          </div>
        </div>

        {/* Contact Numbers */}
        <div className="kontak-info">
          <h3>Nomor Telepon</h3>
          <div className="contact-list">
            {contactNumbers.map((contact, index) => (
              <div key={index} className="contact-item">
                <div className="contact-unit">
                  <strong>{contact.unit}</strong>
                  <span className="contact-available">{contact.available}</span>
                </div>
                <a className="contact-number" href={contact.link}>
                  ☎ {contact.number}
                </a>
              </div>
            ))}
          </div>

          <div className="kontak-other">
            <h3>Informasi Lainnya</h3>
            <div className="kontak-detail">
              <span className="detail-icon">✉</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:humasmarketing.rslngbadak@gmail.com">humasmarketing.rslngbadak@gmail.com</a>
              </div>
            </div>
            <div className="kontak-detail">
              <span className="detail-icon">📠</span>
              <div>
                <strong>Fax</strong>
                <span>(0548) 552128</span>
              </div>
            </div>
            <div className="kontak-detail">
              <span className="detail-icon">🌐</span>
              <div>
                <strong>Website</strong>
                <a href="https://www.rslngbadak.co.id" target="_blank" rel="noreferrer">www.rslngbadak.co.id</a>
              </div>
            </div>
          </div>

          <div className="kontak-jam">
            <h3>Jam Operasional</h3>
            <div className="jam-item">
              <span>IGD</span>
              <span className="jam-value">24 Jam</span>
            </div>
            <div className="jam-item">
              <span>Poliklinik</span>
              <span className="jam-value">Senin – Sabtu, 08:00 – 16:00</span>
            </div>
            <div className="jam-item">
              <span>Farmasi</span>
              <span className="jam-value">24 Jam</span>
            </div>
            <div className="jam-item">
              <span>Laboratorium</span>
              <span className="jam-value">07:00 – 21:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
