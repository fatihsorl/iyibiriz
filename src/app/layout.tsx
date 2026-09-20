import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "İyibiriz — New Generation HR",
  description:
    "Büyüyen şirketler için AI destekli yetenek, işe alım, yetkinlik, performans ve organizasyon mimarisi.",
  keywords: [
    "insan kaynakları",
    "executive search",
    "işe alım",
    "organizasyon tasarımı",
    "yapay zeka",
    "İyibiriz",
  ],
  openGraph: {
    title: "İyibiriz — New Generation HR",
    description:
      "Şirketler, kariyerini büyüten yetenekler ve işe alımın geleceği için üç uzmanlık alanını tek ekosistemde birleştiriyoruz.",
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
    <html lang="tr" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
