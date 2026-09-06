import Header from './components/Header';
import EmergencyBar from './components/EmergencyBar';
import Hero from './components/Hero';
import QuickAccess from './components/QuickAccess';
import Tentang from './components/Tentang';
import Services from './components/Services';
import JadwalDokter from './components/JadwalDokter';
import InformasiPasien from './components/InformasiPasien';
import Karir from './components/Karir';
import Berita from './components/Berita';
import Kontak from './components/Kontak';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <EmergencyBar />
        <Hero />
        <QuickAccess />
        <Tentang />
        <Services />
        <JadwalDokter />
        <InformasiPasien />
        <Karir />
        <Berita />
        <Kontak />
        <Social />
      </main>
      <Footer />
    </>
  );
}

export default App;
