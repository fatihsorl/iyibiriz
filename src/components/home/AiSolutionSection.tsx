import { aiSolution } from "@/lib/content";
import { AnimatedSection, FadeItem } from "@/components/AnimatedSection";
import Link from "next/link";

export function AiSolutionSection() {
  return (
    <AnimatedSection id="yapay-zeka" className="agent4hr" stagger>
      <FadeItem className="agent-wordmark">
        <span>Yapay</span>
        <strong>Zekâ</strong>
        <small>İNSAN KAYNAKLARI TEKNOLOJİSİ</small>
      </FadeItem>
      <FadeItem className="agent-copy">
        <p className="eyebrow on-dark">{aiSolution.eyebrow}</p>
        <h2>
          {aiSolution.title}
          <br />
          <em className="serif-em">{aiSolution.titleEm}</em>
        </h2>
        <p>{aiSolution.body}</p>
        <div className="agent-points">
          {aiSolution.points.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
        <Link className="btn-gold" href={aiSolution.href}>
          {aiSolution.cta}
        </Link>
      </FadeItem>
    </AnimatedSection>
  );
}
