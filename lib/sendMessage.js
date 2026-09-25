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
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { ok: true, method: "mailto" };
}
