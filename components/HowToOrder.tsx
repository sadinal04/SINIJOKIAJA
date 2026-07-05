"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HowToOrder.module.css";

const WA_ADMIN1 =
  "https://wa.me/6282273615459?text=Halo%20SINIJOKIAJA%2C%20saya%20ingin%20order.%20Bisa%20bantu%3F";

const steps = [
  {
    number: "01",
    title: "Pilih Paket",
    desc: "Tentukan paket yang kamu butuhkan: Jasa Tugas, Digital & Desain, atau Revisi Akademik.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M16 16h16M16 23h16M16 30h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="36" cy="36" r="8" fill="var(--color-primary)" opacity="0.15"/>
        <path d="M33 36l2 2 4-4" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Hubungi Admin",
    desc: "Kirim pesan ke admin via WhatsApp. Ceritakan kebutuhanmu dan kami beri penawaran terbaik.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6C13.5 6 5 13.6 5 23c0 4 1.4 7.7 3.8 10.6L7 42l9-2.5c2.5 1.2 5.4 1.9 8.4 1.9h.1C35.5 41.4 43 33.8 43 24.4 43 13.8 34.5 6 24 6z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
        <path d="M18 20c0 8 12 14 14 8l-3-2-2 2c-2-1-5-4-6-6l2-2-2-3-3 3z" fill="currentColor" opacity="0.25"/>
        <circle cx="35" cy="14" r="7" fill="#25D366"/>
        <path d="M32 14l2 2 4-4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Bayar & Konfirmasi",
    desc: "Setujui harga dan lakukan pembayaran. Kami terima transfer bank, QRIS & dompet digital.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="36" height="22" rx="4" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
        <path d="M6 21h36" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="12" y="28" width="8" height="4" rx="2" fill="currentColor" opacity="0.35"/>
        <rect x="24" y="28" width="6" height="4" rx="2" fill="currentColor" opacity="0.2"/>
        <path d="M31 8v5M24 6l7 7 7-7" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Tugas Selesai!",
    desc: "Tim kami mengirim hasil tepat waktu sesuai deadline yang disepakati + garansi revisi gratis.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M15 24l6 6 12-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 8a16 16 0 0 1 11.3 27.3" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" strokeDasharray="4 3"/>
        <circle cx="24" cy="24" r="22" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.15"/>
      </svg>
    ),
  },
];

export default function HowToOrder() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cara-order"
      ref={sectionRef}
      className={`section ${styles.section}`}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Cara Order</span>
          <h2 className="section-title">
            Pesan dalam{" "}
            <span className="text-gradient">4 Langkah Mudah</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginTop: "1rem" }}>
            Prosesnya simpel dan cepat. Cukup chat admin dan biarkan kami
            yang mengerjakan sisanya.
          </p>
        </div>

        {/* Steps — garis dari ::before otomatis sinkron */}
        <div className={`${styles.stepsRow} ${visible ? styles.rowVisible : ""}`}>
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`${styles.stepWrapper} ${visible ? styles.stepVisible : ""}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className={styles.stepCard}>
                {/* Badge nomor */}
                <div className={styles.stepNum}>{step.number}</div>

                {/* Ikon dengan dashed ring berputar */}
                <div className={styles.iconRing}>
                  <div className={styles.iconInner}>{step.icon}</div>
                  <svg
                    className={styles.dashedRing}
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <circle
                      cx="50" cy="50" r="46"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      opacity="0.3"
                    />
                  </svg>
                </div>

                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>

              {/* Panah kecil di ujung kanan kolom (desktop only, bukan kolom terakhir) */}
              {idx < steps.length - 1 && (
                <div className={styles.arrowDot} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="white" stroke="var(--color-primary)" strokeWidth="1.5"/>
                    <path d="M10 8l4 4-4 4" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className={styles.ctaBox}>
          <div className={styles.ctaBoxGlow} aria-hidden="true" />
          <div className={styles.ctaBoxLeft}>
            <h3 className={styles.ctaBoxTitle}>Siap mulai? Jangan tunda lagi!</h3>
            <p className={styles.ctaBoxSubtitle}>
              Admin kami online setiap hari dan siap membantu kamu sekarang juga.
            </p>
          </div>
          <a
            href={WA_ADMIN1}
            target="_blank"
            rel="noopener noreferrer"
            id="howtoorder-cta"
            className={`btn btn-whatsapp ${styles.ctaButton}`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Mulai Order Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
