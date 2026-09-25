import { site } from "@/data/site";

// The one place the contact form sends a message.
//
// Right now there is no backend, so this opens the visitor's email app with
// a pre-filled message. To use a form service later (Formspree, Resend,
// Web3Forms...), replace the body of this function with a fetch() call and
// return { ok: true } or { ok: false, error: "..." }.
export async function sendMessage({ name, email, message }) {
  const subject = `Portfolio contact from ${name}`;
  const body = `${message}\n\n${name}\n${email}`;
  const query = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = `mailto:${site.email}?${query}`;
  // Fallback for visitors without an email app (mailto: then does nothing).
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { ok: true, method: "mailto", gmailUrl };
}
