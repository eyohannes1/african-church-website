"use client";

import { FormEvent, useState } from "react";

const recipient = "cazode.ngcintegratedhealth@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("African Festival/Mass 2026 Inquiry");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message || "I would like to learn more about African Festival/Mass 2026."
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject || "African Festival/Mass 2026 Inquiry"
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-card" onSubmit={handleSubmit}>
      <label>
        <span>Your name</span>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          name="name"
          type="text"
          autoComplete="name"
          required
        />
      </label>
      <label>
        <span>Email address</span>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </label>
      <label>
        <span>Subject</span>
        <input
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          name="subject"
          type="text"
          required
        />
      </label>
      <label>
        <span>Message</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          name="message"
          rows={5}
          required
        />
      </label>
      <button className="button button-primary" type="submit">
        Send message
        <span aria-hidden="true" className="button-arrow">
          -&gt;
        </span>
      </button>
      <p className="form-note">
        This opens an email draft addressed to the festival committee chair.
      </p>
    </form>
  );
}
