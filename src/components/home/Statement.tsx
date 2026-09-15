import { statement } from "@/lib/content";
import { AnimatedSection, FadeItem } from "@/components/AnimatedSection";

export function Statement() {
  return (
    <AnimatedSection className="statement">
      <FadeItem>
        <p>{statement.kicker}</p>
        <h2>
          {statement.lead}
          <em className="serif-em">{statement.em1}</em>
          {statement.mid}
          <em className="serif-em">{statement.em2}</em>
        </h2>
      </FadeItem>
    </AnimatedSection>
  );
}
