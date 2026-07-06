import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SINIJOKIAJA – Jasa Joki Tugas & Digital",
  description:
    "Tugas aman, deadline tenang. Jasa joki tugas akademik, desain digital, coding, dan revisi dokumen mulai Rp9.000. Hubungi admin sekarang!",
  keywords:
    "jasa joki tugas, joki akademik, jasa tugas kuliah, jasa coding, jasa desain, joki makalah, jasa PPT, sinijokiaja",
  authors: [{ name: "SINIJOKIAJA" }],
  creator: "SINIJOKIAJA",
  metadataBase: new URL("https://sinijokiaja.vercel.app"),
  openGraph: {
    title: "SINIJOKIAJA – Jasa Joki Tugas & Digital",
    description: "Tugas aman, deadline tenang. Mulai dari Rp9.000.",
    type: "website",
    siteName: "SINIJOKIAJA",
    locale: "id_ID",
  },
  twitter: {
    card: "summary",
    title: "SINIJOKIAJA – Jasa Joki Tugas & Digital",
    description: "Tugas aman, deadline tenang. Mulai dari Rp9.000.",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
