import { method } from "@/lib/content";
import { AnimatedSection, FadeItem } from "@/components/AnimatedSection";

export function Method() {
  return (
    <AnimatedSection className="method" stagger>
      <FadeItem className="method-head">
        <div>
          <p className="eyebrow on-dark">{method.eyebrow}</p>
          <h2>
            {method.title}
            <br />
            <em className="serif-em">{method.titleEm}</em>
          </h2>
        </div>
      </FadeItem>
      <FadeItem>
        <ol>
          {method.steps.map((step) => (
            <li key={step.no}>
              <b>{step.no}</b>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </FadeItem>
    </AnimatedSection>
  );
}
