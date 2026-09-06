import { news } from '../data/content';

export default function Berita() {
  return (
    <section className="section news" id="berita">
      <div className="container">
        <div className="section-heading news-heading">
          <div>
            <p className="eyebrow"><span></span> KABAR TERBARU</p>
            <h2>Informasi untuk<br /><em>hidup yang lebih sehat.</em></h2>
          </div>
          <a className="button button-outline" href="#berita">Semua berita <span>→</span></a>
        </div>
        <div className="news-grid">
          {news.map((item) => (
            <article key={item.id}>
              <div className={`news-image ${item.image}`}><span>{item.icon}</span></div>
              <p className="article-meta">{item.category} <b>•</b> {item.date}</p>
              <h3>{item.title}</h3>
              <a href="#berita">Baca selengkapnya <span>→</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
