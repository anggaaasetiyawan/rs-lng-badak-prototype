import { quickAccess } from '../data/content';

export default function QuickAccess() {
  return (
    <section className="quick-access container" aria-label="Akses cepat">
      {quickAccess.map((item) => (
        <a key={item.id} className="quick-item" href={item.link}>
          <span className={`quick-icon ${item.color}`}>{item.icon}</span>
          <span>
            <strong>{item.title}</strong>
            <small>{item.description}</small>
          </span>
          <b>→</b>
        </a>
      ))}
    </section>
  );
}
