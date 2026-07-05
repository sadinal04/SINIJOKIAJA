import styles from "./Contact.module.css";

const admins = [
  {
    id: "admin1",
    name: "Admin 1",
    number: "+62 822-7361-5459",
    displayNumber: "+62 822-7361-5459",
    description: "Admin utama, fast response 24 jam.",
    avatar: "A1",
    href: "https://wa.me/6282273615459?text=Halo%20SINIJOKIAJA%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda.",
    color: "primary",
  },
  {
    id: "admin2",
    name: "Admin 2",
    number: "+62 853-3734-2258",
    displayNumber: "+62 853-3734-2258",
    description: "Backup admin, siap melayani kapan saja.",
    avatar: "A2",
    href: "https://wa.me/6285337342258?text=Halo%20SINIJOKIAJA%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda.",
    color: "dark",
  },
];

export default function Contact() {
  return (
    <section id="kontak" className={`section ${styles.contact}`}>
      <div className={styles.bgDecor} aria-hidden="true" />

      <div className="container">
        <div className="section-header">
          <span className="section-label">Kontak</span>
          <h2 className="section-title">
            Hubungi Kami <br />
            <span className="text-gradient">via WhatsApp</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginTop: "1rem" }}>
            Langsung chat admin kami dan ceritakan kebutuhanmu.
            Kami akan memberi solusi terbaik dengan harga terjangkau.
          </p>
        </div>

        <div className={styles.adminGrid}>
          {admins.map((admin) => (
            <div key={admin.id} className={`${styles.adminCard} ${styles[`card_${admin.color}`]}`}>
              {/* Avatar */}
              <div className={styles.adminAvatar}>
                <span className={styles.adminAvatarText}>{admin.avatar}</span>
                <div className={styles.onlineDot} aria-label="Online" />
              </div>

              {/* Info */}
              <div className={styles.adminInfo}>
                <h3 className={styles.adminName}>{admin.name}</h3>
                <div className={styles.adminNumber}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {admin.displayNumber}
                </div>
                <p className={styles.adminDesc}>{admin.description}</p>
              </div>

              {/* CTA */}
              <a
                href={admin.href}
                target="_blank"
                rel="noopener noreferrer"
                id={`contact-${admin.id}`}
                className={styles.adminBtn}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat Sekarang
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className={styles.note}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>
            <strong>Tip:</strong> Saat menghubungi admin, sebutkan jenis layanan yang kamu butuhkan dan
            deadline pengerjaan untuk memudahkan proses order.
          </span>
        </div>
      </div>
    </section>
  );
}
