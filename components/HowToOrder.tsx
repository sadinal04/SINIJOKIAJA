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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8" stroke="var(--color-primary)" strokeWidth="2"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Hubungi Admin",
    desc: "Kirim pesan ke admin via WhatsApp. Ceritakan kebutuhanmu dan kami beri penawaran terbaik.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <circle cx="16" cy="10" r="2" fill="var(--color-primary)" stroke="none"></circle>
        <circle cx="12" cy="10" r="2" fill="currentColor" stroke="none"></circle>
        <circle cx="8" cy="10" r="2" fill="currentColor" stroke="none"></circle>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Bayar & Konfirmasi",
    desc: "Setujui harga dan lakukan pembayaran. Kami terima transfer bank, QRIS & dompet digital.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
        <line x1="2" y1="10" x2="22" y2="10" stroke="var(--color-primary)" strokeWidth="2"></line>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Tugas Selesai!",
    desc: "Tim kami mengirim hasil tepat waktu sesuai deadline yang disepakati + garansi revisi gratis.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01" stroke="var(--color-primary)" strokeWidth="2.5"></polyline>
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
