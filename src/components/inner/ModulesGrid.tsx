import Link from "next/link";

type ModuleItem = {
  no: string;
  title: string;
  body: string;
  cta?: string;
  href?: string;
};

export function ModulesGrid({ modules }: { modules: ModuleItem[] }) {
  return (
    <div className="modules">
      {modules.map((mod) => (
        <article className="module" key={mod.title}>
          <span>{mod.no}</span>
          <h3>{mod.title}</h3>
          <p>{mod.body}</p>
          {mod.cta && mod.href && <Link href={mod.href}>{mod.cta}</Link>}
        </article>
      ))}
    </div>
  );
}
