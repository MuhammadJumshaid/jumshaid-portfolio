import { Fragment } from "react";

// Types `text` out letter by letter with a blinking caret, in pure CSS
// (see .typed-char in globals.css). No JavaScript involved:
// - screen readers and search engines get the full text right away (sr-only),
// - the animated copy is aria-hidden,
// - under prefers-reduced-motion the text simply appears.
// `start` and `speed` are in milliseconds.
export default function TypedName({ text, start = 250, speed = 55 }) {
  // Each character, spaces included, gets a time slot (its index in `text`),
  // so the caret pauses briefly between words.
  const parts = text.split(" ");
  const words = parts.map((word, w) => {
    const start = parts.slice(0, w).reduce((sum, previous) => sum + previous.length + 1, 0);
    return [...word].map((char, c) => ({ char, i: start + c }));
  });
  const lastIndex = text.length - 1;

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" style={{ "--type-start": `${start}ms`, "--type-speed": `${speed}ms` }}>
        {words.map((chars, w) => (
          <Fragment key={w}>
            {w > 0 && " "}
            <span className="whitespace-nowrap">
              {chars.map(({ char, i }, c) => {
                const isLast = i === lastIndex;
                const beforeSpace = c === chars.length - 1 && !isLast;
                return (
                  <span
                    key={i}
                    style={{ "--i": i }}
                    className={`typed-char${isLast ? " typed-char--last" : ""}${beforeSpace ? " typed-char--pause" : ""}`}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          </Fragment>
        ))}
      </span>
    </>
  );
}
