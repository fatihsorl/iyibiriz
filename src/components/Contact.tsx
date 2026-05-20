"use client";

import { siteConfig } from "@/lib/content";
import { AnimatedSection, FadeItem } from "./AnimatedSection";
import { Mail, Send } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <AnimatedSection
      id="iletisim"
      className="bg-background py-24 sm:py-32"
      stagger
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <FadeItem>
              <span className="eyebrow">Bize Ulaşın</span>
              <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
                İletişim
              </h2>
              <p className="mt-4 text-lg text-muted">
                Size özel insan kaynakları ve marka danışmanlığı çözümlerimiz
                için formu doldurun veya doğrudan e-posta gönderin.
              </p>
            </FadeItem>

            <FadeItem className="mt-10 space-y-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition hover:border-navy/25"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-muted">E-posta</p>
                  <p className="font-medium text-navy">{siteConfig.email}</p>
                </div>
              </a>

              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition hover:border-navy/25"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-muted">Instagram</p>
                  <p className="font-medium text-navy">@burcu_sen</p>
                </div>
              </a>
            </FadeItem>
          </div>

          <FadeItem>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-3xl border border-black/10 bg-cream p-12 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                  <Send className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-navy">
                  Teşekkürler!
                </h3>
                <p className="mt-2 text-muted">
                  Mesajınız alındı. En kısa sürede size dönüş yapacağız.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-navy/8 bg-white p-8 shadow-xl shadow-navy/5 sm:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block sm:col-span-1">
                    <span className="mb-2 block text-sm font-medium text-navy">
                      Ad
                    </span>
                    <input
                      required
                      name="name"
                      type="text"
                      className="w-full rounded-xl border border-navy/15 bg-cream/50 px-4 py-3 outline-none transition focus:border-navy/40 focus:ring-2 focus:ring-navy/10"
                    />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="mb-2 block text-sm font-medium text-navy">
                      E-posta
                    </span>
                    <input
                      required
                      name="email"
                      type="email"
                      className="w-full rounded-xl border border-navy/15 bg-cream/50 px-4 py-3 outline-none transition focus:border-navy/40 focus:ring-2 focus:ring-navy/10"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-navy">
                      Telefon
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full rounded-xl border border-navy/15 bg-cream/50 px-4 py-3 outline-none transition focus:border-navy/40 focus:ring-2 focus:ring-navy/10"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-navy">
                      Konu
                    </span>
                    <input
                      required
                      name="subject"
                      type="text"
                      className="w-full rounded-xl border border-navy/15 bg-cream/50 px-4 py-3 outline-none transition focus:border-navy/40 focus:ring-2 focus:ring-navy/10"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-navy">
                      Mesaj
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="w-full resize-none rounded-xl border border-navy/15 bg-cream/50 px-4 py-3 outline-none transition focus:border-navy/40 focus:ring-2 focus:ring-navy/10"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn-primary mt-6 w-full gap-2 uppercase tracking-widest"
                >
                  <Send className="h-4 w-4" />
                  Gönder
                </button>
              </form>
            )}
          </FadeItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
