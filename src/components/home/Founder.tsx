import { founder, siteConfig } from "@/lib/content";
import { AnimatedSection, FadeItem } from "@/components/AnimatedSection";
import Image from "next/image";

export function Founder() {
  return (
    <AnimatedSection id="kurucu" className="founder" stagger>
      <FadeItem className="founder-portrait">
        <Image src={siteConfig.assets.founder} alt={founder.name} fill sizes="230px" />
      </FadeItem>
      <FadeItem>
        <p className="eyebrow">{founder.eyebrow}</p>
        <h2>{founder.name}</h2>
        <h3>
          {founder.role}
          <br />
          {founder.role2}
        </h3>
      </FadeItem>
      <FadeItem className="bio">
        <p>{founder.bio}</p>
        <a href={`mailto:${siteConfig.email}`}>{founder.cta}</a>
      </FadeItem>
    </AnimatedSection>
  );
}
