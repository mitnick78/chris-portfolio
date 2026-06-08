"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { contactFormSchema } from "@/schemas";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("sent");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Section id="contact">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-accent">
          Contact
        </h2>
        <h3 className="mb-4 text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Travaillons ensemble
        </h3>
        <p className="mb-10 text-center text-foreground-alt">
          Un projet en tête ? N&apos;hésitez pas à me contacter.
        </p>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              label="Nom"
              name="name"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
            />
          </div>

          <FormField
            label="Sujet"
            name="subject"
            value={formData.subject}
            error={errors.subject}
            onChange={handleChange}
          />

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-md border border-edge bg-surface-alt px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-press glow-hover w-full rounded-md bg-accent px-6 py-3 text-sm font-medium text-surface transition-all hover:bg-accent-hover hover:shadow-md disabled:opacity-50 disabled:hover:shadow-none"
          >
            {status === "sending"
              ? "Envoi en cours..."
              : status === "sent"
                ? "Message envoyé ✓"
                : "Envoyer"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  value,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-edge bg-surface-alt px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
