type PageHeroProps = {
  title: string;
  description?: string;
  label?: string;
};

export function PageHero({
  title,
  description,
  label = "İyibiriz",
}: PageHeroProps) {
  return (
    <section className="border-b border-white/10 bg-black py-14 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="eyebrow text-white/45">{label}</span>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
