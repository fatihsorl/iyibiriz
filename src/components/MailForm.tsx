"use client";

import { FormEvent } from "react";
import { siteConfig } from "@/lib/content";

export type MailFormField = {
  name: string;
  type: "text" | "email" | "textarea" | "select";
  required?: boolean;
  options?: string[];
};

type MailFormProps = {
  subject: string;
  buttonLabel: string;
  fields: MailFormField[];
};

export function MailForm({ subject, buttonLabel, fields }: MailFormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines: string[] = [];
    for (const field of fields) {
      const value = data.get(field.name);
      if (value) lines.push(`${field.name}: ${value}`);
    }
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = mailto;
  }

  return (
    <form className="mail-form" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <label key={field.name}>
          {field.name}
          {field.type === "textarea" ? (
            <textarea name={field.name} required={field.required} />
          ) : field.type === "select" ? (
            <select name={field.name}>
              {field.options?.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input name={field.name} type={field.type} required={field.required} />
          )}
        </label>
      ))}
      <button type="submit">{buttonLabel}</button>
    </form>
  );
}
