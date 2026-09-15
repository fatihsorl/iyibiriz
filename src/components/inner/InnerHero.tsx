export function InnerHero({
  kicker,
  title,
  titleEm,
  lead,
}: {
  kicker: string;
  title: string;
  titleEm: string;
  lead: string;
}) {
  return (
    <section className="page-hero">
      <p className="kicker">{kicker}</p>
      <h1>
        {title}
        <br />
        <em className="serif-em">{titleEm}</em>
      </h1>
      <p>{lead}</p>
    </section>
  );
}
