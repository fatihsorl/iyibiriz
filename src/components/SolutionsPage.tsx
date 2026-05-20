"use client";

import { corporateSolutions, individualSolutions } from "@/lib/content";
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
      <article className="card-shine group flex h-full flex-col rounded-2xl border border-black/8 bg-white p-6 shadow-md shadow-black/5 transition duration-300 hover:border-navy/20 sm:p-7">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition group-hover:bg-black group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <span className="mb-2 text-xs font-bold uppercase tracking-widest text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-xl font-semibold text-navy sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {item.description}
        </p>
      </article>
    </FadeItem>
  );
}

function SolutionsGroup({
  id,
  data,
}: {
  id: string;
  data: { title: string; intro: string; items: SolutionItem[] };
}) {
  return (
    <div id={id} className="scroll-mt-28">
      <FadeItem className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
          {data.title}
        </h2>
        <p className="mt-3 text-base text-muted">{data.intro}</p>
      </FadeItem>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item, i) => (
          <SolutionCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

export function SolutionsPage() {
  return (
    <AnimatedSection
      className="overflow-x-hidden bg-background py-12 sm:py-16"
      stagger
      immediate
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-14 sm:space-y-16">
          <SolutionsGroup id="kurumsal" data={corporateSolutions} />
          <SolutionsGroup
            id="bireysel"
            data={individualSolutions}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
