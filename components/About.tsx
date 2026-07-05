import styles from "./About.module.css";

const stats = [
  { value: "500+", label: "Tugas Selesai" },
  { value: "98%", label: "Kepuasan Client" },
  { value: "24/7", label: "Siap Melayani" },
  { value: "3", label: "Paket Layanan" },
];

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Terpercaya",
    desc: "Privasi dan kerahasiaan data Anda selalu kami jaga dengan sangat baik.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Tepat Waktu",
    desc: "Pengerjaan selalu sesuai deadline yang telah disepakati, tidak ada keterlambatan.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Berkualitas",
    desc: "Dikerjakan oleh tim berpengalaman dengan standar kualitas tinggi dan teliti.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "Responsif",
    desc: "Admin kami siap merespons pesan WhatsApp Anda dengan cepat setiap saat.",
  },
];

export default function About() {
  return (
    <section id="tentang" className={`section ${styles.about}`}>
      <div className={styles.bgDecor} aria-hidden="true" />
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Tentang Kami</span>
          <h2 className="section-title">
            Kenapa Pilih <span className="text-gradient">SINIJOKIAJA</span>?
          </h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginTop: "1rem" }}>
            Kami adalah tim profesional yang hadir untuk membantu Anda melewati
            setiap deadline dengan tenang dan penuh percaya diri.
          </p>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statCard}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <div key={i} className={`card ${styles.valueCard}`}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
