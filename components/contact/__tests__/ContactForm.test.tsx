import { render, screen, fireEvent, act } from "@testing-library/react";
import { ContactForm } from "../ContactForm";
import { describe, it, expect, vi } from "vitest";

describe("ContactForm", () => {
  it("shows inline error messages on empty submit", () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /send/i }));
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  it("shows success message on valid submit and resets fields", async () => {
    vi.useFakeTimers();
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "John Doe", name: "name" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john@example.com", name: "email" },
    });
    fireEvent.change(screen.getByPlaceholderText("Message"), {
      target: { value: "Hello there", name: "message" },
    });

    fireEvent.click(screen.getByRole("button", { name: /send/i }));
    expect(screen.getByText(/message_sent: success/i)).toBeInTheDocument();

    await act(async () => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.queryByText(/message_sent: success/i)).not.toBeInTheDocument();
    vi.useRealTimers();
  });
});
