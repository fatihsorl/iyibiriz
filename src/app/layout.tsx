import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "İyibiriz | Yeni Nesil İnsan Kaynakları ve Markalaşma",
  description:
    "İyibiriz — doğru yetenek seçimi, işe alım, eğitim ve işveren markası konumlandırmasında stratejik İK ve marka danışmanlığı.",
  keywords: [
    "insan kaynakları",
    "marka danışmanlığı",
    "işveren markası",
    "kariyer koçluğu",
    "İyibiriz",
  ],
  openGraph: {
    title: "İyibiriz | İnsan Kaynakları ve Markalaşma",
    description:
      "Yeni nesil insan kaynakları ve markalaşma çözümleri — Burcu Şen.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
