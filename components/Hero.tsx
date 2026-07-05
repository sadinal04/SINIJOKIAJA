import styles from "./Hero.module.css";

const WA_ADMIN1 = "https://wa.me/6282273615459?text=Halo%20SINIJOKIAJA%2C%20saya%20ingin%20memesan%20jasa.";
const WA_ADMIN2 = "https://wa.me/6285337342258?text=Halo%20SINIJOKIAJA%2C%20saya%20ingin%20memesan%20jasa.";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background decorative blobs */}
      <div className={styles.blobTopRight} aria-hidden="true" />
      <div className={styles.blobBottomLeft} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Left Content */}
        <div className={styles.content}>
          {/* Badge */}
          <div className={`badge badge-primary animate-fadeInUp ${styles.topBadge}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            Layanan Joki Profesional & Terpercaya
          </div>

          {/* Main Heading */}
          <h1 className={`${styles.heading} animate-fadeInUp delay-100`}>
            <span className={styles.headingAccent}>JASA JOKI</span>
            <br />
            <span className={styles.headingMain}>Tugas Aman,</span>
            <br />
            <span className={styles.headingMain}>Deadline Tenang.</span>
          </h1>

          {/* Subtitle */}
          <p className={`${styles.subtitle} animate-fadeInUp delay-200`}>
            Percayakan tugas kuliah, desain, coding, dan dokumen akademikmu
            kepada kami. <strong>Cepat, rapi, dan terpercaya.</strong>
          </p>

          {/* Price tags */}
          <div className={`${styles.priceTags} animate-fadeInUp delay-300`}>
            <div className={styles.priceTag}>
              <span className={styles.priceTagLabel}>Jasa Tugas</span>
              <span className={styles.priceTagValue}>Mulai Rp9.999</span>
            </div>
            <div className={styles.priceTagDivider} />
            <div className={styles.priceTag}>
              <span className={styles.priceTagLabel}>Jasa Digital</span>
              <span className={styles.priceTagValue}>Mulai Rp69.000</span>
            </div>
            <div className={styles.priceTagDivider} />
            <div className={styles.priceTag}>
              <span className={styles.priceTagLabel}>Jasa Revisi</span>
              <span className={styles.priceTagValue}>Mulai Rp9.000</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`${styles.ctaGroup} animate-fadeInUp delay-400`}>
            <a
              href={WA_ADMIN1}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-wa-admin1"
              className={`btn btn-whatsapp ${styles.ctaBtn}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat Admin 1
            </a>

            <a
              href={WA_ADMIN2}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-wa-admin2"
              className={`btn btn-outline ${styles.ctaBtn}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat Admin 2
            </a>
          </div>

          {/* Trust badges */}
          <div className={`${styles.trustRow} animate-fadeInUp delay-500`}>
            <div className={styles.trustItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>100% Aman</span>
            </div>
            <div className={styles.trustItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Fast Response</span>
            </div>
            <div className={styles.trustItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Garansi Revisi</span>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className={`${styles.illustration} animate-float`} aria-hidden="true">
          <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Laptop */}
            <rect x="90" y="200" width="280" height="180" rx="16" fill="#1C0140" opacity="0.9"/>
            <rect x="100" y="210" width="260" height="160" rx="10" fill="#2a0160"/>
            <rect x="110" y="220" width="240" height="140" rx="6" fill="#0f0030"/>
            {/* Screen content */}
            <rect x="125" y="235" width="100" height="8" rx="4" fill="#5284FF" opacity="0.8"/>
            <rect x="125" y="250" width="160" height="6" rx="3" fill="#9FCDFF" opacity="0.5"/>
            <rect x="125" y="262" width="140" height="6" rx="3" fill="#9FCDFF" opacity="0.35"/>
            <rect x="125" y="274" width="120" height="6" rx="3" fill="#9FCDFF" opacity="0.25"/>
            <rect x="125" y="295" width="70" height="28" rx="8" fill="#5284FF"/>
            <rect x="205" y="295" width="70" height="28" rx="8" fill="#25D366" opacity="0.85"/>
            {/* Laptop base */}
            <rect x="70" y="378" width="320" height="20" rx="4" fill="#1C0140" opacity="0.8"/>
            <rect x="155" y="374" width="150" height="8" rx="4" fill="#2a0160"/>

            {/* Floating card top-right */}
            <rect x="310" y="120" width="140" height="90" rx="14" fill="white" opacity="0.95" filter="url(#shadow1)"/>
            <rect x="324" y="136" width="60" height="8" rx="4" fill="#5284FF"/>
            <rect x="324" y="152" width="100" height="6" rx="3" fill="#9FCDFF" opacity="0.7"/>
            <rect x="324" y="164" width="80" height="6" rx="3" fill="#9FCDFF" opacity="0.5"/>
            <rect x="324" y="179" width="50" height="20" rx="6" fill="#25D366" opacity="0.85"/>
            <circle cx="420" cy="136" r="14" fill="#EFF7FE"/>
            <path d="M415 136 L419 140 L425 133" stroke="#25D366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

            {/* Floating card bottom-left */}
            <rect x="22" y="240" width="130" height="75" rx="14" fill="white" opacity="0.95" filter="url(#shadow2)"/>
            <rect x="36" y="254" width="50" height="8" rx="4" fill="#1C0140"/>
            <rect x="36" y="268" width="90" height="6" rx="3" fill="#9FCDFF" opacity="0.6"/>
            <rect x="36" y="280" width="70" height="6" rx="3" fill="#9FCDFF" opacity="0.4"/>
            <rect x="36" y="295" width="45" height="14" rx="5" fill="#5284FF" opacity="0.9"/>

            {/* Document floating */}
            <rect x="330" y="250" width="100" height="120" rx="10" fill="white" opacity="0.9" filter="url(#shadow1)"/>
            <rect x="344" y="266" width="70" height="6" rx="3" fill="#5284FF" opacity="0.7"/>
            <rect x="344" y="278" width="60" height="5" rx="2.5" fill="#9FCDFF" opacity="0.5"/>
            <rect x="344" y="290" width="65" height="5" rx="2.5" fill="#9FCDFF" opacity="0.4"/>
            <rect x="344" y="302" width="50" height="5" rx="2.5" fill="#9FCDFF" opacity="0.3"/>
            <rect x="344" y="318" width="70" height="22" rx="6" fill="#1C0140"/>
            <text x="379" y="333" fill="white" fontSize="9" fontWeight="700" textAnchor="middle">ORDER</text>

            {/* Decorative circles */}
            <circle cx="60" cy="160" r="28" fill="#9FCDFF" opacity="0.25"/>
            <circle cx="60" cy="160" r="18" fill="#5284FF" opacity="0.2"/>
            <circle cx="430" cy="370" r="36" fill="#5284FF" opacity="0.12"/>
            <circle cx="430" cy="370" r="22" fill="#5284FF" opacity="0.12"/>

            {/* Stars/sparkles */}
            <path d="M280 80 L284 90 L294 90 L286 97 L289 107 L280 101 L271 107 L274 97 L266 90 L276 90 Z" fill="#5284FF" opacity="0.5"/>
            <path d="M140 140 L142 146 L148 146 L143 150 L145 156 L140 152 L135 156 L137 150 L132 146 L138 146 Z" fill="#9FCDFF" opacity="0.7"/>
            <path d="M390 190 L392 196 L398 196 L393 200 L395 206 L390 202 L385 206 L387 200 L382 196 L388 196 Z" fill="#1C0140" opacity="0.3"/>

            {/* Dots pattern */}
            <circle cx="200" cy="120" r="4" fill="#5284FF" opacity="0.3"/>
            <circle cx="215" cy="108" r="3" fill="#9FCDFF" opacity="0.4"/>
            <circle cx="230" cy="120" r="4" fill="#5284FF" opacity="0.25"/>
            <circle cx="245" cy="108" r="3" fill="#9FCDFF" opacity="0.35"/>
            <circle cx="260" cy="120" r="4" fill="#5284FF" opacity="0.2"/>

            {/* Filters */}
            <defs>
              <filter id="shadow1" x="-10%" y="-10%" width="120%" height="130%">
                <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#5284FF" floodOpacity="0.15"/>
              </filter>
              <filter id="shadow2" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#1C0140" floodOpacity="0.1"/>
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
}
