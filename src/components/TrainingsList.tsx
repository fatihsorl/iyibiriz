"use client";

import { trainings } from "@/lib/content";
import { AnimatedSection, FadeItem } from "./AnimatedSection";
import { ExternalLink } from "lucide-react";

function RegistrationButton({ url }: { url?: string }) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-flex items-center gap-2"
      >
        Kayıt Ol
        <ExternalLink className="h-4 w-4" />
      </a>
    );
  }

  return (
    <span
      className="btn-primary inline-flex cursor-default opacity-55"
      aria-disabled="true"
    >
      Kayıt Ol
    </span>
  );
}

export function TrainingsList() {
  return (
    <AnimatedSection className="bg-background py-20 sm:py-28" stagger immediate>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {trainings.items.map((item, index) => (
            <FadeItem key={item.title}>
              <article className="card-shine flex h-full flex-col rounded-2xl border border-black/8 bg-white p-8 shadow-lg shadow-black/5">
                <span className="text-xs font-bold uppercase tracking-widest text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-2xl font-semibold text-navy sm:text-3xl">
                  {item.title}
                </h2>
                {item.quote && (
                  <p className="mt-4 flex-1 text-base italic leading-relaxed text-navy/80">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                )}
                {item.subtitle && (
                  <p className="mt-4 flex-1 text-base leading-relaxed text-muted">
                    {item.subtitle}
                  </p>
                )}
                <div className="mt-8">
                  <RegistrationButton url={item.registrationUrl} />
                </div>
              </article>
            </FadeItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
