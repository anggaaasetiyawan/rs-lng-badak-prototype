import { jobs } from '../data/content';

export default function Karir() {
  return (
    <section className="section karir" id="karir">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow"><span></span> KARIR</p>
            <h2>Bergabunglah dengan<br /><em>tim kami.</em></h2>
          </div>
          <div>
            <p>Kami membuka kesempatan bagi tenaga kesehatan profesional yang ingin berkembang bersama RS LNG Badak.</p>
            <a className="text-link" href="mailto:humasmarketing.rslngbadak@gmail.com">Kirim lamaran Anda <span>→</span></a>
          </div>
        </div>
        <div className="karir-grid">
          {jobs.map((job) => (
            <article key={job.id} className="karir-card">
              {job.badge && (
                <div className={`karir-badge ${job.badgeColor !== 'default' ? job.badgeColor : ''}`}>
                  {job.badge}
                </div>
              )}
              <h3>{job.title}</h3>
              <p className="karir-meta">{job.department} &middot; {job.type}</p>
              <p className="karir-desc">{job.description}</p>
              <ul className="karir-req">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              <a
                className={`karir-apply ${job.applyColor !== 'default' ? job.applyColor : ''}`}
                href={job.applyLink}
              >
                Lamar sekarang <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
