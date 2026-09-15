import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow on-dark">{hero.eyebrow}</p>
        <h1>
          {hero.titleLine1}
          <br />
          <em className="serif-em">{hero.titleEm}</em> {hero.titleLine2}
        </h1>
        <p className="lead">{hero.lead}</p>
        <div className="hero-actions">
          <a className="btn-gold" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label} <b>↗</b>
          </a>
          <a className="text-link" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label} ↓
          </a>
        </div>
        <div className="proof">
          {hero.proof.map((p) => (
            <div key={p.label}>
              <strong>{p.value}</strong>
              <span>{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbit" />
        <div className="orbit orbit-b" />
        <div className="signal">
          <span>01</span>
          <b>{hero.signals[0]}</b>
          <i />
        </div>
        <div className="signal s2">
          <span>02</span>
          <b>{hero.signals[1]}</b>
          <i />
        </div>
        <div className="signal s3">
          <span>03</span>
          <b>{hero.signals[2]}</b>
          <i />
        </div>
        <div className="center-mark">
          İYİ
          <br />
          <small>BİR</small>İZ
        </div>
      </div>
    </section>
  );
}
