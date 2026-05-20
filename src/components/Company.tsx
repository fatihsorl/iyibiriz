"use client";

import { company } from "@/lib/content";
import { AnimatedSection, FadeItem } from "./AnimatedSection";
import { Calendar, Shield, Users } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    label: "2003'ten bu yana",
    desc: "Kurumsal dünyada köklü deneyim",
  },
  {
    icon: Users,
    label: "Uzman ekip",
    desc: "Her ölçekte şirkete özel strateji",
  },
  {
    icon: Shield,
    label: "Rekabetçi konum",
    desc: "Sektör değişimine ayak uydurma",
  },
];

export function Company() {
  return (
    <AnimatedSection
      id="firma"
      className="relative overflow-hidden bg-black py-24 text-on-dark sm:py-32"
      stagger
    >

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeItem>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            {company.title}
          </h2>
        </FadeItem>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            {company.paragraphs.map((p, i) => (
              <FadeItem key={i}>
                <p className="text-lg leading-relaxed text-white/80">{p}</p>
              </FadeItem>
            ))}
            <FadeItem>
              <a
                href="/#iletisim"
                className="btn-primary-on-dark uppercase tracking-widest"
              >
                Randevu Al
              </a>
            </FadeItem>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <FadeItem key={label}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <Icon className="mb-3 h-8 w-8 text-white/80" />
                  <p className="font-semibold text-white">{label}</p>
                  <p className="mt-1 text-sm text-white/60">{desc}</p>
                </div>
              </FadeItem>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
