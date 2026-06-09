"use client";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function validateForm(name: string, email: string, message: string): FormErrors {
  const errors: FormErrors = {};
  if (!name.trim()) errors.name = "name is required";
  if (!email.trim()) {
    errors.email = "email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "invalid_email_format";
  }
  if (!message.trim()) errors.message = "message is required";
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateForm(form.name, form.email, form.message);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full bg-terminal border border-gray-700 font-mono text-sm text-white px-4 py-2 focus:outline-none focus:border-accent transition-colors"
        />
        {errors.name && (
          <p className="font-mono text-xs mt-1" style={{ color: "#ff4444" }}>
            &gt; error: {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full bg-terminal border border-gray-700 font-mono text-sm text-white px-4 py-2 focus:outline-none focus:border-accent transition-colors"
        />
        {errors.email && (
          <p className="font-mono text-xs mt-1" style={{ color: "#ff4444" }}>
            &gt; error: {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          rows={5}
          className="w-full bg-terminal border border-gray-700 font-mono text-sm text-white px-4 py-2 focus:outline-none focus:border-accent transition-colors resize-none"
        />
        {errors.message && (
          <p className="font-mono text-xs mt-1" style={{ color: "#ff4444" }}>
            &gt; error: {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="border border-accent text-accent font-mono text-sm px-6 py-2 hover:bg-accent hover:text-black transition-colors duration-200 self-start"
      >
        Send Message
      </button>

      {success && (
        <p className="font-mono text-sm text-accent">
          &gt; message_sent: success ✓
        </p>
      )}
    </form>
  );
}
