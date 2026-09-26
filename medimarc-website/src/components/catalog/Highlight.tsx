import { Fragment } from "react";

/**
 * Wraps every case-insensitive occurrence of `query` in <mark>.
 *
 * A bare "4 match" count tells a buyer nothing about *which* sizes matched.
 * Highlighting the actual text inside the drawer answers the question
 * without them having to open and scan each line.
 */
export function Highlight({
  text,
  query,
}: {
  text: string;
  query: string;
}) {
  const needle = query.trim();
  if (!needle) return <>{text}</>;

  const lowerText = text.toLowerCase();
  const lowerNeedle = needle.toLowerCase();

  const parts: React.ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (;;) {
    const index = lowerText.indexOf(lowerNeedle, cursor);
    if (index === -1) break;

    if (index > cursor) {
      parts.push(<Fragment key={key++}>{text.slice(cursor, index)}</Fragment>);
    }

    parts.push(
      <mark
        key={key++}
        className="rounded bg-cobalt-soft px-0.5 text-ink [color:inherit]"
      >
        {text.slice(index, index + needle.length)}
      </mark>
    );

    cursor = index + needle.length;
  }

  if (cursor < text.length) {
    parts.push(<Fragment key={key++}>{text.slice(cursor)}</Fragment>);
  }

  return <>{parts}</>;
}
