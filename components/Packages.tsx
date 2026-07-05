import styles from "./Packages.module.css";

const WA_ADMIN1 = "https://wa.me/6282273615459?text=Halo%20SINIJOKIAJA%2C%20saya%20ingin%20order";
const WA_ADMIN2 = "https://wa.me/6285337342258?text=Halo%20SINIJOKIAJA%2C%20saya%20ingin%20order";

/* ============ PAKET 1 ============ */
const paket1Items = [
  {
    icon: "📄",
    name: "Makalah",
    price: "Rp9.999",
    unit: "/ Lembar",
    desc: "Makalah akademik lengkap dengan referensi valid.",
  },
  {
    icon: "📊",
    name: "PPT (Presentasi)",
    price: "Rp8.999",
    unit: "/ Slide",
    desc: "Desain slide profesional dan informatif.",
  },
  {
    icon: "✍️",
    name: "Jasa Tulis",
    price: "Rp9.999",
    unit: "/ Lembar",
    desc: "Penulisan konten, esai, dan karya tulis.",
  },
  {
    icon: "📚",
    name: "Jurnal & Artikel",
    price: "Rp69.999",
    unit: "mulai dari",
    desc: "Jurnal ilmiah Bahasa Indonesia & Inggris.",
    highlight: true,
  },
];

/* ============ PAKET 2 ============ */
const paket2Items = [
  { icon: "🌐", name: "Buat Web" },
  { icon: "💻", name: "Coding" },
  { icon: "📈", name: "Analisis Data" },
  { icon: "⛏️", name: "Data Mining" },
  { icon: "🎨", name: "Desain Poster" },
  { icon: "🏷️", name: "Label Produk" },
  { icon: "🎬", name: "Video Editing" },
  { icon: "💌", name: "Undangan Digital" },
];

/* ============ PAKET 3 ============ */
const paket3Items = [
  {
    icon: "🔗",
    name: "Mendeley & Zotero",
    desc: "Rapikan dan format daftar referensi secara otomatis.",
  },
  {
    icon: "📋",
    name: "Cek & Turun Plagiarisme",
    desc: "Cek Turnitin dan paraphrase untuk turunkan similarity.",
  },
  {
    icon: "📝",
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
