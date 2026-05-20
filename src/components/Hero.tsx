"use client";

import { hero } from "@/lib/content";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="anasayfa"
      className="hero-surface relative flex min-h-[calc(100dvh-var(--header-height))] flex-col overflow-hidden border-b border-black/5"
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden
      >
        <span className="font-display whitespace-nowrap text-[clamp(6rem,22vw,16rem)] font-bold leading-none text-navy/[0.04] select-none">
          {hero.title}
        </span>
      </div>

      <div className="hero-grid-lines pointer-events-none absolute inset-0" />

      <div
        className="absolute bottom-0 left-6 top-1/4 hidden w-px bg-navy/15 sm:block lg:left-[max(1.5rem,calc((100vw-64rem)/2))]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 flex items-center gap-4 sm:mb-8"
        >
          <span className="h-px w-16 bg-navy/20" aria-hidden />
          <span className="eyebrow">İnsan Kaynakları & Marka Danışmanlığı</span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display max-w-[14ch] text-[clamp(3rem,10vw,6rem)] font-bold leading-[0.92] tracking-tight text-navy"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-5 max-w-2xl text-sm font-medium uppercase leading-relaxed tracking-[0.12em] text-muted sm:mt-6 sm:text-base"
        >
          {hero.subtitle}
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-2xl font-display text-xl leading-snug text-navy/90 sm:mt-8 sm:text-2xl lg:text-3xl"
        >
          {hero.slogan}
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 sm:mt-10"
        >
          <a href="/#iletisim" className="btn-primary">
            İletişim
          </a>
        </motion.div>
      </div>

      <motion.a
        href="/#hakkimizda"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-navy/55 transition hover:text-navy"
        aria-label="Aşağı kaydır"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
          Keşfet
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
