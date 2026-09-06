export default function EmergencyBar() {
  return (
    <section className="emergency-bar" aria-label="Informasi darurat">
      <div className="container emergency-inner">
        <div className="emergency-pulse"><span>✚</span></div>
        <p><strong>Butuh pertolongan darurat?</strong><span>IGD kami siap melayani 24 jam</span></p>
        <a className="emergency-phone" href="tel:+62548800000"><span>☎</span> (0548) 800 000</a>
        <a className="emergency-action" href="tel:+62548800000">Hubungi IGD <span>→</span></a>
      </div>
    </section>
  );
}
