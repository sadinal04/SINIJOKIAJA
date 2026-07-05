import styles from "./Services.module.css";

const packages = [
  {
    id: "paket1",
    number: "01",
    label: "Paket 1",
    title: "Jasa Tugas",
    description: "Makalah, PPT, jurnal, dan berbagai tugas akademik dikerjakan profesional.",
    startPrice: "Rp9.999",
    color: "primary",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    services: ["Makalah", "PPT", "Jasa Tulis", "Jurnal & Artikel"],
    href: "#paket-1",
  },
  {
    id: "paket2",
    number: "02",
    label: "Paket 2",
    title: "Jasa Digital & Desain",
    description: "Buat website, coding, desain poster, video editing, dan masih banyak lagi.",
    startPrice: "Rp69.000",
    color: "dark",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    services: ["Buat Web", "Coding", "Analisis Data", "Desain Poster", "Video Editing", "Label Produk"],
    href: "#paket-2",
  },
  {
    id: "paket3",
    number: "03",
    label: "Paket 3",
    title: "Jasa Revisi & Akademik",
    description: "Rapikan referensi, turunkan plagiarisme, dan perbaikan format dokumen.",
    startPrice: "Rp9.000",
    color: "light",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    services: ["Mendeley & Zotero", "Cek Plagiarisme", "Perapian Format"],
    href: "#paket-3",
  },
];

export default function Services() {
  return (
    <section id="layanan" className={`section ${styles.services}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Layanan Kami</span>
          <h2 className="section-title">
            3 Paket Lengkap untuk <br />
            <span className="text-gradient">Semua Kebutuhanmu</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginTop: "1rem" }}>
            Pilih paket yang sesuai dengan kebutuhanmu dan langsung hubungi
            admin untuk memulai.
          </p>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, i) => (
            <div key={pkg.id} className={`${styles.pkgCard} ${styles[`card_${pkg.color}`]}`}>
              <div className={styles.pkgNumber}>{pkg.number}</div>
              <div className={styles.pkgIcon}>{pkg.icon}</div>
              <div className={styles.pkgLabel}>{pkg.label}</div>
              <h3 className={styles.pkgTitle}>{pkg.title}</h3>
              <p className={styles.pkgDesc}>{pkg.description}</p>

              <ul className={styles.pkgServices}>
                {pkg.services.map((s) => (
                  <li key={s} className={styles.pkgServiceItem}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>

              <div className={styles.pkgFooter}>
                <div className={styles.pkgPrice}>
                  <span className={styles.pkgPriceFrom}>Mulai dari</span>
                  <span className={styles.pkgPriceValue}>{pkg.startPrice}</span>
                </div>
                <a href={pkg.href} className={styles.pkgBtn} id={`service-card-${pkg.id}`}>
                  Lihat Detail
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
