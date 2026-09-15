import { corporateSolutions } from "@/lib/content";
import { AnimatedSection, FadeItem } from "@/components/AnimatedSection";
import Link from "next/link";

export function CorporateSolutions() {
  return (
    <AnimatedSection id="corporate" className="solutions" stagger>
      <FadeItem className="section-head">
        <div>
          <p className="eyebrow">{corporateSolutions.eyebrow}</p>
        </div>
        <h2>
          {corporateSolutions.title.map((line, i) => (
            <span key={line}>
              {line}
              {i < corporateSolutions.title.length - 1 && <br />}
            </span>
          ))}
        </h2>
      </FadeItem>
      <FadeItem>
        <p className="package-intro">{corporateSolutions.intro}</p>
      </FadeItem>
      {corporateSolutions.services.map((service) => (
        <FadeItem key={service.num} className={`service ${service.featured ? "featured" : ""}`}>
          <div className="num">{service.num}</div>
          <div>
            <p className="tag">{service.tag}</p>
            <h3>
              {service.title.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < service.title.length - 1 && <br />}
                </span>
              ))}
            </h3>
          </div>
          <p>{service.body}</p>
          <ul>
            {service.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FadeItem>
      ))}
      <FadeItem className="package-cta">
        <div>
          <span>{corporateSolutions.packageCta.label}</span>
          <h3>{corporateSolutions.packageCta.title}</h3>
          <p>{corporateSolutions.packageCta.body}</p>
        </div>
        <Link className="btn-dark" href={corporateSolutions.packageCta.href}>
          {corporateSolutions.packageCta.button}
        </Link>
      </FadeItem>
    </AnimatedSection>
  );
}
