import { agent4hr } from "@/lib/content";
import { AnimatedSection, FadeItem } from "@/components/AnimatedSection";

export function Agent4HRSection() {
  return (
    <AnimatedSection id="agent4hr" className="agent4hr" stagger>
      <FadeItem className="agent-wordmark">
        <span>agent</span>
        <strong>4</strong>
        <span>hr</span>
        <small>AI RECRUITMENT SYSTEM</small>
      </FadeItem>
      <FadeItem className="agent-copy">
        <p className="eyebrow on-dark">{agent4hr.eyebrow}</p>
        <h2>
          {agent4hr.title}
          <br />
          <em className="serif-em">{agent4hr.titleEm}</em>
        </h2>
        <p>{agent4hr.body}</p>
        <div className="agent-points">
          {agent4hr.points.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
        <a className="btn-gold" href={agent4hr.href} target="_blank" rel="noopener noreferrer">
          {agent4hr.cta}
        </a>
      </FadeItem>
    </AnimatedSection>
  );
}
