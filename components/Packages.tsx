import styles from "./Packages.module.css";

const WA_ADMIN1 = "https://wa.me/6282273615459?text=Halo%20SINIJOKIAJA%2C%20saya%20ingin%20order";
const WA_ADMIN2 = "https://wa.me/6285337342258?text=Halo%20SINIJOKIAJA%2C%20saya%20ingin%20order";

/* ============ PAKET 1 ============ */
const paket1Items = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
    name: "Makalah",
    price: "Rp9.999",
    unit: "/ Lembar",
    desc: "Makalah akademik lengkap dengan referensi valid.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="M12 21v-5"/><path d="M8 21h8"/></svg>,
    name: "PPT (Presentasi)",
    price: "Rp8.999",
    unit: "/ Slide",
    desc: "Desain slide profesional dan informatif.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    name: "Jasa Tulis",
    price: "Rp9.999",
    unit: "/ Lembar",
    desc: "Penulisan konten, esai, dan karya tulis.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    name: "Jurnal & Artikel",
    price: "Rp69.999",
    unit: "mulai dari",
    desc: "Jurnal ilmiah Bahasa Indonesia & Inggris.",
    highlight: true,
  },
];

/* ============ PAKET 2 ============ */
const paket2Items = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, name: "Buat Web" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, name: "Coding" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, name: "Analisis Data" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>, name: "Data Mining" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>, name: "Desain Poster" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>, name: "Label Produk" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>, name: "Video Editing" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>, name: "Undangan Digital" },
];

/* ============ PAKET 3 ============ */
const paket3Items = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    name: "Mendeley & Zotero",
    desc: "Rapikan dan format daftar referensi secara otomatis.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><polyline points="9 14 11 16 15 12"/></svg>,
    name: "Cek & Turun Plagiarisme",
    desc: "Cek Turnitin dan paraphrase untuk turunkan similarity.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="6" x2="3" y2="6"/><line x1="15" y1="12" x2="3" y2="12"/><line x1="17" y1="18" x2="3" y2="18"/></svg>,
    name: "Perapian Format",
    desc: "Perbaiki margin, daftar isi, numbering, dan format dokumen.",
  },
];

export default function Packages() {
  return (
    <section id="paket" className={`section ${styles.packages}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Detail Paket</span>
          <h2 className="section-title">Harga & Layanan Lengkap</h2>
          <div className="divider" />
        </div>

        {/* ========== PAKET 1 ========== */}
        <div id="paket-1" className={styles.packageBlock}>
          <div className={styles.packageHeader}>
            <div className={styles.packageHeaderLeft}>
              <span className={`badge badge-primary ${styles.pkgBadge}`}>Paket 1</span>
              <h3 className={styles.packageTitle}>Jasa Tugas Akademik</h3>
              <p className={styles.packageSubtitle}>
                Bantu kamu selesaikan berbagai tugas kuliah dengan hasil berkualitas dan tepat waktu.
              </p>
            </div>
            <div className={styles.packageHeaderRight}>
              <a href={WA_ADMIN1} target="_blank" rel="noopener noreferrer" id="order-paket1-admin1" className="btn btn-whatsapp">
                <WhatsappIcon />
                Order via Admin 1
              </a>
              <a href={WA_ADMIN2} target="_blank" rel="noopener noreferrer" id="order-paket1-admin2" className="btn btn-outline">
                <WhatsappIcon />
                Order via Admin 2
              </a>
            </div>
          </div>

          <div className={styles.p1Grid}>
            {paket1Items.map((item) => (
              <div key={item.name} className={`${styles.p1Card} ${item.highlight ? styles.p1CardHighlight : ""}`}>
                <div className={styles.p1CardIcon}>{item.icon}</div>
                <div className={styles.p1CardContent}>
                  <h4 className={styles.p1CardName}>{item.name}</h4>
                  <p className={styles.p1CardDesc}>{item.desc}</p>
                </div>
                <div className={styles.p1CardPrice}>
                  {item.highlight && <span className={styles.p1PriceFrom}>{item.unit}</span>}
                  <span className={styles.p1PriceValue}>{item.price}</span>
                  {!item.highlight && <span className={styles.p1PriceUnit}>{item.unit}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== PAKET 2 ========== */}
        <div id="paket-2" className={styles.packageBlock}>
          <div className={styles.packageHeader}>
            <div className={styles.packageHeaderLeft}>
              <span className={`badge badge-dark ${styles.pkgBadge}`}>Paket 2</span>
              <h3 className={styles.packageTitle}>Jasa Digital & Desain</h3>
              <p className={styles.packageSubtitle}>
                Solusi lengkap untuk kebutuhan digital, coding, dan desain kreatifmu.
              </p>
            </div>
            <div className={styles.packageHeaderRight}>
              <div className={styles.startPrice}>
                <span className={styles.startPriceFrom}>Mulai dari</span>
                <span className={styles.startPriceValue}>Rp69.000</span>
              </div>
              <a href={WA_ADMIN1} target="_blank" rel="noopener noreferrer" id="order-paket2-admin1" className="btn btn-primary">
                <WhatsappIcon />
                Tanya Harga
              </a>
            </div>
          </div>

          <div className={styles.p2Grid}>
            {paket2Items.map((item) => (
              <div key={item.name} className={styles.p2Card}>
                <div className={styles.p2CardIcon}>{item.icon}</div>
                <span className={styles.p2CardName}>{item.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.p2Note}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            Harga disesuaikan dengan tingkat kesulitan dan kebutuhan project. Hubungi admin untuk konsultasi gratis!
          </div>
        </div>

        {/* ========== PAKET 3 ========== */}
        <div id="paket-3" className={styles.packageBlock}>
          <div className={styles.packageHeader}>
            <div className={styles.packageHeaderLeft}>
              <span className={`badge badge-primary ${styles.pkgBadge}`}>Paket 3</span>
              <h3 className={styles.packageTitle}>Jasa Revisi & Akademik</h3>
              <p className={styles.packageSubtitle}>
                Perbaiki dan sempurnakan dokumen akademikmu agar siap dikumpulkan.
              </p>
            </div>
            <div className={styles.packageHeaderRight}>
              <div className={styles.startPrice}>
                <span className={styles.startPriceFrom}>Mulai dari</span>
                <span className={styles.startPriceValue}>Rp9.000</span>
              </div>
              <a href={WA_ADMIN2} target="_blank" rel="noopener noreferrer" id="order-paket3-admin2" className="btn btn-dark">
                <WhatsappIcon />
                Order Sekarang
              </a>
            </div>
          </div>

          <div className={styles.p3Grid}>
            {paket3Items.map((item) => (
              <div key={item.name} className={styles.p3Card}>
                <div className={styles.p3CardIconWrap}>
                  <div className={styles.p3CardIcon}>{item.icon}</div>
                </div>
                <div className={styles.p3CardContent}>
                  <h4 className={styles.p3CardName}>{item.name}</h4>
                  <p className={styles.p3CardDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsappIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
