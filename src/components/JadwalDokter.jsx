import { useState, useMemo } from 'react';
import { doctors, poliOptions, days } from '../data/doctors';

export default function JadwalDokter() {
  const [poliFilter, setPoliFilter] = useState('');
  const [dayFilter, setDayFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const getTodayName = () => {
    const daysMap = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    return daysMap[new Date().getDay()];
  };

  const today = getTodayName();

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesPoli = !poliFilter || doctor.poli === poliFilter;
      const matchesSearch = !searchQuery || doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDay = !dayFilter || doctor.schedule.some((s) => s.day === dayFilter);
      return matchesPoli && matchesSearch && matchesDay;
    });
  }, [poliFilter, dayFilter, searchQuery]);

  const clearFilters = () => {
    setPoliFilter('');
    setDayFilter('');
    setSearchQuery('');
  };

  const isDoctorPracticingToday = (doctor) => {
    return doctor.schedule.some((s) => s.day === today);
  };

  const getTodaySchedule = (doctor) => {
    return doctor.schedule.find((s) => s.day === today);
  };

  return (
    <section className="schedule-section" id="jadwal">
      <div className="container schedule-layout">
        <div className="schedule-intro">
          <p className="eyebrow light"><span></span> JADWAL DOKTER</p>
          <h2>Temukan dokter<br />yang Anda butuhkan.</h2>
          <p>Atur kunjungan Anda dengan lebih mudah. Pilih poli, hari, atau cari nama dokter.</p>
          <div className="today-badge">
            <span>●</span> Hari ini: <strong>{today}</strong>
          </div>
        </div>
        <div className="schedule-panel">
          <div className="filters">
            <label>
              <span>Poli</span>
              <select value={poliFilter} onChange={(e) => setPoliFilter(e.target.value)}>
                <option value="">Semua poli</option>
                {poliOptions.map((poli) => (
                  <option key={poli} value={poli}>{poli}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Hari</span>
              <select value={dayFilter} onChange={(e) => setDayFilter(e.target.value)}>
                <option value="">Semua hari</option>
                {days.map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </label>
            <label className="search-input">
              <span>Nama dokter</span>
              <input
                type="search"
                placeholder="Cari nama dokter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </label>
          </div>

          <div className="schedule-results" aria-live="polite">
            {filteredDoctors.length === 0 ? (
              <div className="no-results">
                <p>Tidak ada jadwal ditemukan.</p>
                <p className="no-results-hint">Coba hubungi RS di (0548) 552049 untuk informasi lebih lanjut.</p>
              </div>
            ) : (
              filteredDoctors.map((doctor, index) => {
                const practicingToday = isDoctorPracticingToday(doctor);
                const todaySchedule = getTodaySchedule(doctor);

                return (
                  <div
                    key={index}
                    className={`doctor-card ${practicingToday ? 'practicing-today' : ''}`}
                  >
                    <div className="doctor-info">
                      <div className="doctor-name-row">
                        <h3>{doctor.name}</h3>
                        {practicingToday && (
                          <span className="today-indicator">Praktik Hari Ini</span>
                        )}
                      </div>
                      <p className="doctor-specialty">{doctor.specialty}</p>
                      <p className="doctor-poli">{doctor.poli}</p>
                      {practicingToday && todaySchedule && (
                        <p className="doctor-today-time">
                          Jam praktik hari ini: <strong>{todaySchedule.time}</strong>
                        </p>
                      )}
                    </div>
                    <div className="doctor-schedule">
                      {doctor.schedule
                        .filter((s) => !dayFilter || s.day === dayFilter)
                        .map((s, i) => (
                          <div
                            key={i}
                            className={`schedule-item ${s.day === today ? 'schedule-today' : ''}`}
                          >
                            <span className="schedule-day">{s.day}</span>
                            <span className="schedule-time">{s.time}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <a className="view-all" href="#jadwal" onClick={(e) => { e.preventDefault(); clearFilters(); }}>
            Lihat jadwal lengkap <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
