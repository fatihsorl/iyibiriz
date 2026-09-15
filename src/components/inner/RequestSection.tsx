import { MailForm, type MailFormField } from "@/components/MailForm";

export function RequestSection({
  id,
  kicker,
  title,
  body,
  subject,
  button,
  fields,
  link,
}: {
  id?: string;
  kicker: string;
  title: string;
  body: string;
  subject: string;
  button: string;
  fields: MailFormField[];
  link?: { label: string; href: string };
}) {
  return (
    <section className="request" id={id}>
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2>{title}</h2>
        <p>{body}</p>
        {link && (
          <p style={{ marginTop: "1.5rem" }}>
            <a className="btn-dark" href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </p>
        )}
      </div>
      <MailForm subject={subject} buttonLabel={button} fields={fields} />
    </section>
  );
}
