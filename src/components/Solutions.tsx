"use client";

import {
  corporateSolutions,
  individualSolutions,
} from "@/lib/content";
import { AnimatedSection, FadeItem } from "./AnimatedSection";
import {
  Brain,
  ClipboardCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  clipboard: ClipboardCheck,
  users: Users,
  trending: TrendingUp,
  brain: Brain,
  sparkles: Sparkles,
  target: Target,
};

type SolutionItem = {
  title: string;
  description: string;
  icon: string;
};

function SolutionCard({
  item,
  index,
}: {
  item: SolutionItem;
  index: number;
}) {
  const Icon = iconMap[item.icon] ?? ClipboardCheck;

  return (
    <FadeItem>
      <article className="card-shine group flex h-full flex-col rounded-2xl border border-black/8 bg-white p-8 shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-xl">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy transition group-hover:bg-black group-hover:text-white">
          <Icon className="h-7 w-7" strokeWidth={1.5} />
        </div>
        <span className="mb-2 text-xs font-bold uppercase tracking-widest text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-2xl font-semibold text-navy">
          {item.title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
          {item.description}
        </p>
      </article>
    </FadeItem>
  );
}

type SolutionsData = {
  title: string;
  intro: string;
  items: SolutionItem[];
};

function SolutionsBlock({
  id,
  data,
  variant,
}: {
  id: string;
  data: SolutionsData;
  variant: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <AnimatedSection
      id={id}
      className={`py-24 sm:py-32 ${isDark ? "bg-cream" : "bg-background"}`}
      stagger
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeItem className="max-w-2xl">
          <span className="eyebrow">Hizmetler</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">
            {data.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{data.intro}</p>
        </FadeItem>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, i) => (
            <SolutionCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export function CorporateSolutions() {
  return (
    <SolutionsBlock
      id="kurumsal"
      data={corporateSolutions}
      variant="light"
    />
  );
}

export function IndividualSolutions() {
  return (
    <SolutionsBlock
      id="bireysel"
      data={individualSolutions}
      variant="dark"
    />
  );
}
