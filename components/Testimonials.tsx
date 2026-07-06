import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "A*** (Mahasiswa)",
    service: "Pembuatan Makalah",
    rating: 5,
    text: "Sangat membantu! Makalah selesai tepat waktu, referensinya valid, dan adminnya ramah banget. Pasti order lagi.",
  },
  {
    id: 2,
    name: "B*** (Mahasiswa)",
    service: "Joki Coding & Web",
    rating: 5,
    text: "Pengerjaan website sangat rapi dan sesuai ekspektasi. Harga juga terjangkau untuk kantong mahasiswa. Mantap!",
  },
  {
    id: 3,
    name: "K*** (Mahasiswa)",
    service: "Revisi & Cek Plagiarisme",
    rating: 5,
    text: "Revisi format dan sitasi pakai Mendeley bener-bener teliti. Plagiarisme turun drastis. Recommended banget!",
  },
  {
    id: 4,
    name: "R*** (Mahasiswa)",
    service: "Desain PPT",
    rating: 5,
    text: "Desain presentasinya keren abis, gak kaku, interaktif banget. Dosen sampai muji waktu presentasi di kelas.",
  },
];

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFB800" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimoni" className={`section ${styles.testimonials}`}>
      <div className={styles.bgDecor} aria-hidden="true" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimoni</span>
          <h2 className="section-title">
            Apa Kata <span className="text-gradient">Mereka?</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginTop: "1rem" }}>
            Ribuan mahasiswa telah mempercayakan tugas mereka kepada kami.
            Berikut adalah pengalaman jujur mereka.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              <div className={styles.rating}>
                {[...Array(t.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              
              <div className={styles.footer}>
                <div className={styles.avatar}>
                  {t.name.charAt(0)}
                </div>
                <div className={styles.info}>
                  <h4 className={styles.name}>{t.name}</h4>
                  <span className={styles.service}>{t.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
