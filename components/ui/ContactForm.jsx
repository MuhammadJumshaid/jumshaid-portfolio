"use client";

import { useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { sendMessage } from "@/lib/sendMessage";
import { site } from "@/data/site";

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email", inputMode: "email" },
  { name: "message", label: "Message", multiline: true },
];

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    errors.email = "Please enter a valid email address, like name@example.com.";
  if (!message.trim()) errors.message = "Please write a message.";
  else if (message.trim().length < 10) errors.message = "Please write a little more (at least 10 characters).";
  return errors;
}

const inputClass =
  "w-full rounded-md border bg-bg px-4 text-fg placeholder:text-subtle transition-colors focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState(""); // message shown after submit
  const formRef = useRef(null);

  const onChange = (event) => {
    const next = { ...values, [event.target.name]: event.target.value };
    setValues(next);
    // After the first submit attempt, errors update as the visitor types.
    if (submitted) setErrors(validate(next));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const found = validate(values);
    setErrors(found);

    const firstInvalid = fields.find((field) => found[field.name]);
    if (firstInvalid) {
      setStatus("");
      formRef.current.elements[firstInvalid.name].focus();
      return;
    }

    const result = await sendMessage({
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    });
    setStatus(
      result.ok
        ? `Your email app should now open with your message ready to send. If nothing happened, email me directly at ${site.email}.`
        : `Something went wrong. Please email me directly at ${site.email}.`,
    );
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      {fields.map(({ name, label, multiline, ...inputProps }) => {
        const error = errors[name];
        const errorId = `${name}-error`;
        const shared = {
          id: name,
          name,
          value: values[name],
          onChange,
          required: true,
          "aria-invalid": Boolean(error),
          "aria-describedby": error ? errorId : undefined,
          className: `${inputClass} ${error ? "border-danger" : "border-border-strong"}`,
        };

        return (
          <div key={name}>
            <label htmlFor={name} className="mb-2 block text-small font-medium text-fg">
              {label}
            </label>
            {multiline ? (
              <textarea {...shared} rows={6} className={`${shared.className} min-h-36 resize-y py-3`} />
            ) : (
              <input {...shared} {...inputProps} className={`${shared.className} min-h-12`} />
            )}
            {error && (
              <p id={errorId} className="mt-2 text-small text-danger">
                {error}
              </p>
            )}
          </div>
        );
      })}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4">
        <Button type="submit" className="w-full sm:w-auto">
          Send Message
        </Button>
        <p className="text-small text-subtle">Opens your email app with the message filled in.</p>
      </div>

      <p role="status" className="text-small text-muted empty:hidden">
        {status}
      </p>
    </form>
  );
}
