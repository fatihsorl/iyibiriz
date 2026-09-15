export function IntroGrid({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string[];
  intro: string;
}) {
  return (
    <div className="intro-grid">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2>
          {title.map((line, i) => (
            <span key={line}>
              {line}
              {i < title.length - 1 && <br />}
            </span>
          ))}
        </h2>
      </div>
      <p>{intro}</p>
    </div>
  );
}
