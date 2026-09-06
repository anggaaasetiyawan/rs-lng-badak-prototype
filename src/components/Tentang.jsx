import { useState } from 'react';
import { stats, timeline } from '../data/content';

const tabs = [
  { id: 'sejarah', label: 'Sejarah' },
  { id: 'visi-misi', label: 'Visi & Misi' },
  { id: 'akreditasi', label: 'Akreditasi' },
  { id: 'struktur', label: 'Struktur Organisasi' },
];

export default function Tentang() {
  const [activeTab, setActiveTab] = useState('sejarah');

  return (
    <section className="section tentang" id="tentang">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow"><span></span> TENTANG KAMI</p>
            <h2>Melayani dengan <em>dedikasi</em><br />sejak 1978.</h2>
          </div>
          <div>
            <p>RS LNG Badak hadir sebagai rumah sakit tepercaya bagi masyarakat Bontang dan sekitarnya, dengan komitmen memberikan pelayanan kesehatan terbaik.</p>
            <a className="text-link" href="#kontak">Hubungi kami <span>→</span></a>
          </div>
        </div>

        <div className="tentang-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Sub-navigasi Tab */}
        <div className="tentang-tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content: Sejarah */}
        {activeTab === 'sejarah' && (
          <div className="tentang-grid" role="tabpanel">
            <div className="tentang-content">
              <h3>Sejarah Kami</h3>
              <p>Bermula dari sebuah poliklinik proyek pada tahun 1978, RS LNG Badak terus berkembang menjadi rumah sakit umum yang melayani kebutuhan kesehatan masyarakat Bontang secara menyeluruh.</p>
            </div>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <span className="timeline-year">{item.year}</span>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Visi & Misi */}
        {activeTab === 'visi-misi' && (
          <div className="tentang-visi-misi" role="tabpanel">
            <div className="visi-card">
              <div className="visi-icon">🎯</div>
              <h3>Visi</h3>
              <p>Menjadi rumah sakit pilihan utama masyarakat Bontang dan sekitarnya dalam memberikan pelayanan kesehatan yang bermutu, aman, dan terjangkau.</p>
            </div>
            <div className="misi-card">
              <div className="visi-icon">📋</div>
              <h3>Misi</h3>
              <ul>
                <li>Memberikan pelayanan kesehatan yang profesional dan bermutu tinggi</li>
                <li>Mengembangkan sumber daya manusia yang kompeten dan berintegritas</li>
                <li>Menyediakan fasilitas dan peralatan medis yang modern</li>
                <li>Menjalin kerjasama dengan berbagai pihak untuk peningkatan layanan</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab Content: Akreditasi */}
        {activeTab === 'akreditasi' && (
          <div className="tentang-akreditasi" role="tabpanel">
            <div className="akreditasi-card">
              <div className="akreditasi-badge">
                <span className="badge-icon">🏆</span>
                <span className="badge-label">Akreditasi Paripurna</span>
              </div>
              <div className="akreditasi-info">
                <h3>Sertifikasi Akreditasi</h3>
                <p>RS LNG Badak telah terakreditasi <strong>Paripurna (Bintang Lima)</strong> oleh Komisi Akreditasi Rumah Sakit (KARS) berdasarkan Standar Nasional Akreditasi Rumah Sakit (SNARS) Edisi 1.</p>
                <div className="akreditasi-details">
                  <div className="detail-item">
                    <span className="detail-label">Status</span>
                    <span className="detail-value">Aktif</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Tanggal Berlaku</span>
                    <span className="detail-value">2023 – 2026</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Tingkat</span>
                    <span className="detail-value">Paripurna</span>
                  </div>
                </div>
                <p className="akreditasi-note">Akreditasi ini menjamin bahwa RS LNG Badak memenuhi standar pelayanan, keselamatan pasien, dan mutu kesehatan sesuai ketentuan nasional.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Struktur Organisasi */}
        {activeTab === 'struktur' && (
          <div className="tentang-struktur" role="tabpanel">
            <h3>Struktur Organisasi</h3>
            <p className="struktur-intro">Struktur kepemimpinan dan manajemen RS LNG Badak.</p>
            <div className="org-chart">
              <div className="org-level org-top">
                <div className="org-card org-highlight">
                  <strong>Direktur Utama</strong>
                  <span>dr. Demo 1, M.Kes</span>
                </div>
              </div>
              <div className="org-connector"></div>
              <div className="org-level org-middle">
                <div className="org-card">
                  <strong>Direktur Pelayanan</strong>
                  <span>dr. Demo 2, Sp.PD</span>
                </div>
                <div className="org-card">
                  <strong>Direktur Umum & Keuangan</strong>
                  <span>Demo 3, SE, M.M</span>
                </div>
              </div>
              <div className="org-connector"></div>
              <div className="org-level org-bottom">
                <div className="org-card">
                  <strong>Kepala Bidang Pelayanan Medis</strong>
                  <span>dr. Demo 4, Sp.A</span>
                </div>
                <div className="org-card">
                  <strong>Kepala Bidang Keperawatan</strong>
                  <span>Ns. Demo 5, S.Kep</span>
                </div>
                <div className="org-card">
                  <strong>Kepala Bidang Penunjang</strong>
                  <span>dr. Demo 6, Sp.M</span>
                </div>
                <div className="org-card">
                  <strong>Kepala Bidang Umum & SDM</strong>
                  <span>Demo 7, S.E</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
