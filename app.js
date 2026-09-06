const doctors = [
  { name: 'dr. Nabila Pratama, Sp.A', poli: 'Poli Anak', day: 'Senin', time: '08.00 – 12.00', today: true, initials: 'NP' },
  { name: 'dr. Arief Wibowo, Sp.PD', poli: 'Poli Penyakit Dalam', day: 'Senin', time: '13.00 – 16.00', today: true, initials: 'AW' },
  { name: 'dr. Citra Lestari, Sp.OG', poli: 'Poli Kandungan', day: 'Selasa', time: '09.00 – 13.00', today: false, initials: 'CL' },
  { name: 'drg. Rama Putra', poli: 'Poli Gigi', day: 'Rabu', time: '08.00 – 11.00', today: false, initials: 'RP' },
  { name: 'dr. Maya Sari, Sp.RM', poli: 'Poli Umum', day: 'Kamis', time: '08.00 – 14.00', today: false, initials: 'MS' },
  { name: 'dr. Bima Fajar, Sp.B', poli: 'Poli Bedah', day: 'Jumat', time: '10.00 – 13.00', today: false, initials: 'BF' },
];

const poliFilter = document.querySelector('#poliFilter');
const dayFilter = document.querySelector('#dayFilter');
const doctorSearch = document.querySelector('#doctorSearch');
const results = document.querySelector('#scheduleResults');

[...new Set(doctors.map((doctor) => doctor.poli))].forEach((poli) => {
  const option = document.createElement('option');
  option.value = poli;
  option.textContent = poli;
  poliFilter.append(option);
});

function renderDoctors() {
  const term = doctorSearch.value.trim().toLowerCase();
  const matchingDoctors = doctors.filter((doctor) =>
    (!poliFilter.value || doctor.poli === poliFilter.value) &&
    (!dayFilter.value || doctor.day === dayFilter.value) &&
    (!term || doctor.name.toLowerCase().includes(term))
  );
  if (!matchingDoctors.length) {
    results.innerHTML = '<div class="empty-state"><strong>Tidak ada jadwal yang ditemukan</strong><span>Coba ubah filter atau hubungi kami untuk informasi lebih lanjut.</span></div>';
    return;
  }
  results.innerHTML = matchingDoctors.map((doctor) => `<article class="doctor-row ${doctor.today ? 'is-today' : ''}"><span class="doctor-avatar">${doctor.initials}</span><div class="doctor-info"><strong>${doctor.name}</strong><span>${doctor.poli}</span></div><div class="doctor-time"><span>${doctor.day}</span><strong>${doctor.time}</strong></div>${doctor.today ? '<span class="practice-now">Praktik hari ini</span>' : '<span class="practice-later">Jadwal praktik</span>'}</article>`).join('');
}

[poliFilter, dayFilter, doctorSearch].forEach((control) => control.addEventListener('input', renderDoctors));
document.querySelector('#clearFilters').addEventListener('click', (event) => { event.preventDefault(); poliFilter.value = ''; dayFilter.value = ''; doctorSearch.value = ''; renderDoctors(); });
renderDoctors();

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); navToggle.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); }));
window.addEventListener('scroll', () => document.querySelector('#header').classList.toggle('scrolled', window.scrollY > 16));
