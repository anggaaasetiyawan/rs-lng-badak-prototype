import { services } from '../data/services';

export default function Services() {
  return (
    <section className="section services" id="layanan">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow"><span></span> LAYANAN KAMI</p>
            <h2>Perawatan lengkap,<br /><em>untuk setiap kebutuhan.</em></h2>
          </div>
          <div>
            <p>Dari pemeriksaan rutin hingga penanganan khusus, tim kami siap memberikan perawatan terbaik untuk Anda dan keluarga.</p>
            <a className="text-link" href="#kontak">Jelajahi semua layanan <span>→</span></a>
          </div>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className={`service-card ${service.featured ? 'featured' : ''}`}>
              {service.featured && (
                <div className="service-visual mother-baby">
                  <span className="baby-face">●</span>
                  <span className="mother-face">●</span>
                </div>
              )}
              <div className="service-content">
                <div className={`service-icon ${service.color !== 'default' ? service.color : ''}`}>
                  {service.icon}
                </div>
                <p>{service.category}</p>
                <h3>{service.title}</h3>
                <span className="service-note">{service.description}</span>
                <a href={service.link}>{service.linkText} <span>→</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
