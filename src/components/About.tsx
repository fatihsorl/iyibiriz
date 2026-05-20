"use client";

import { about, siteConfig } from "@/lib/content";
import { AnimatedSection, FadeItem } from "./AnimatedSection";
import { Mail } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <AnimatedSection
      id="hakkimizda"
      className="relative bg-charcoal py-24 text-on-dark sm:py-32"
      stagger
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeItem>
          <span className="eyebrow text-white/50">{about.title}</span>
        </FadeItem>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <FadeItem>
            <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <Image
                src={siteConfig.assets.founder}
                alt={`${about.name} — ${about.role}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 400px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-24">
                <p className="text-sm font-medium uppercase tracking-widest text-white/70">
                  Kurucu & Koç
                </p>
              </div>
            </div>
          </FadeItem>

          <div className="space-y-6">
            <FadeItem>
              <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
                {about.name}
              </h2>
              <p className="mt-2 text-lg text-white/60">{about.role}</p>
            </FadeItem>

            <FadeItem>
              <p className="text-lg leading-relaxed text-white/80">{about.bio}</p>
            </FadeItem>

            <FadeItem>
              <div className="space-y-5 border-t border-white/10 pt-8">
                {about.details.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed ${
                      i === about.details.length - 1
                        ? "text-base font-medium text-white/90"
                        : "text-base text-white/70"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeItem>

            <FadeItem>
              <div className="inline-flex items-start gap-4 rounded-2xl bg-black/50 px-6 py-5 ring-1 ring-white/10">
                <span className="font-display text-4xl font-bold leading-none text-white">
                  %85
                </span>
                <p className="pt-1 text-sm leading-relaxed text-white/65">
                  şirketlerin doğru İK seçimi ve süreç yönetiminde zorlandığını
                  gösteriyor
                </p>
              </div>
            </FadeItem>

            <FadeItem>
              <p className="border-l-2 border-white/25 pl-6 text-white/70">
                {about.closing}
              </p>
            </FadeItem>

            <FadeItem>
              <a
                href="/#iletisim"
                className="btn-primary-on-dark inline-flex items-center gap-2 !px-6 !py-3"
              >
                <Mail className="h-4 w-4" />
                Şimdi İletişime Geç
              </a>
            </FadeItem>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
