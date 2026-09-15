import { ctaBand, siteConfig } from "@/lib/content";
import { AnimatedSection, FadeItem } from "@/components/AnimatedSection";

export function CtaBand() {
  return (
    <AnimatedSection className="cta-band">
      <FadeItem>
        <p>{ctaBand.kicker}</p>
        <h2>
          {ctaBand.title}
          <br />
          {ctaBand.titleLine2}
        </h2>
        <a className="btn-gold" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(ctaBand.subject)}`}>
          {ctaBand.cta} <b>↗</b>
        </a>
      </FadeItem>
    </AnimatedSection>
  );
}
