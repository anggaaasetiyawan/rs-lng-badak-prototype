import { socialLinks } from '../data/content';

export default function Social() {
  return (
    <section className="social-section" aria-label="Media sosial">
      <div className="container social-inner">
        <h3>Ikuti Kami</h3>
        <div className="social-links">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              className={`social-link ${social.className}`}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
            >
              <span className="social-icon">{social.icon}</span>
              <span className="social-label">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
