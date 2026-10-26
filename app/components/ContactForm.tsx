"use client";

import { useState } from "react";

// PLACEHOLDER: paste your Web3Forms access key here (setup steps below)
const accessKey = "a1b5ff4a-879f-47a1-8817-979cd3952e75";

type Status = "idle" | "sending" | "success" | "error";

const labelClass =
  "mb-3 block font-mono text-xs uppercase tracking-widest text-foreground/50";

const fieldClass =
  "w-full border-b border-line bg-transparent pb-4 text-2xl font-medium tracking-tight text-foreground placeholder:text-foreground/25 transition-colors duration-300 focus:border-foreground focus:outline-none md:text-4xl";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New message from your portfolio",
          from_name: "Portfolio contact form",
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          botcheck: data.get("botcheck"),
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Spam trap: real people never see or fill this */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* Name + Email side by side on desktop */}
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
      </div>

      {/* Message, full width */}
      <div className="mt-10 md:mt-14">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          placeholder="Tell me about your idea"
          className={`${fieldClass} resize-none`}
        />
      </div>

      {/* Send button bottom right, status message on the left */}
      <div className="mt-10 flex flex-col-reverse items-start justify-between gap-6 md:mt-14 md:flex-row md:items-center">
        <p
          role="status"
          aria-live="polite"
          className="font-mono text-xs uppercase tracking-widest text-foreground/60"
        >
          {status === "success" && "Sent. Thank you, I'll reply soon."}
          {status === "error" &&
            "Something went wrong. Please email me directly instead."}
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 font-mono text-xs uppercase tracking-widest text-background transition-colors duration-300 hover:bg-accent focus-visible:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message →"}
        </button>
      </div>
    </form>
  );
}