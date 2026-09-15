import { executives } from "@/lib/content";
import { AnimatedSection, FadeItem } from "@/components/AnimatedSection";
import Link from "next/link";

export function Executives() {
  return (
    <AnimatedSection className="executives" stagger>
      <FadeItem>
        <p className="eyebrow on-gold">{executives.eyebrow}</p>
      </FadeItem>
      <div className="exec-grid">
        <FadeItem>
          <h2>
            {executives.title}
            <br />
            <em className="serif-em">{executives.titleEm}</em>
          </h2>
        </FadeItem>
        <FadeItem>
          <p>{executives.body}</p>
          <div className="chips">
            {executives.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
          <Link className="btn-dark" href={executives.href}>
            {executives.cta}
          </Link>
        </FadeItem>
      </div>
    </AnimatedSection>
  );
}
