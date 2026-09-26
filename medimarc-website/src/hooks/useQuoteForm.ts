import { useCallback, useState } from "react";
import type { QuoteItem } from "../types/catalog";

export interface QuoteFormValues {
  name: string;
  organization: string;
  email: string;
  phone: string;
  message: string;
}

export type QuoteFormField = keyof QuoteFormValues;
export type QuoteFormErrors = Partial<Record<QuoteFormField, string>>;
export type QuoteFormStatus = "idle" | "submitting" | "success";

const EMPTY: QuoteFormValues = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(
  values: QuoteFormValues,
  items: QuoteItem[]
): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  if (!values.name.trim()) errors.name = "Enter your name so we know who to reply to.";
  if (!values.organization.trim())
    errors.organization = "Enter your hospital, clinic or company.";
  if (!values.email.trim())
    errors.email = "Enter an email so we can send pricing.";
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = "Enter a valid email, like name@hospital.ph.";
  if (items.length === 0 && !values.message.trim())
    errors.message = "Add items from the catalog or describe what you need.";

  return errors;
}

export function useQuoteForm(items: QuoteItem[]) {
  const [values, setValues] = useState<QuoteFormValues>(EMPTY);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<QuoteFormField, boolean>>>({});
  const [status, setStatus] = useState<QuoteFormStatus>("idle");
  const [sentCount, setSentCount] = useState(0);

  const setField = useCallback(
    (field: QuoteFormField, value: string) => {
      const nextValues = { ...values, [field]: value };
      setValues(nextValues);
      // Drop the error as soon as the field is valid, so the message on
      // screen never contradicts what has been typed.
      setErrors((prev) => {
        if (!prev[field]) return prev;
        if (validate(nextValues, items)[field]) return prev;
        return { ...prev, [field]: undefined };
      });
    },
    [items, values]
  );

  // Validate on blur, not on every keystroke. Erroring mid-word is nagging.
  const blurField = useCallback(
    (field: QuoteFormField) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      setErrors((prev) => ({ ...prev, ...validate(values, items) }));
    },
    [items, values]
  );

  const submit = useCallback(async () => {
    const nextErrors = validate(values, items);
    setErrors(nextErrors);
    setTouched({
      name: true,
      organization: true,
      email: true,
      phone: true,
      message: true,
    });

    const firstInvalid = (Object.keys(nextErrors) as QuoteFormField[])[0];
    if (firstInvalid) {
      document.getElementById(`quote-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("submitting");
    // Front-end only. Replace this with a fetch to your inbox endpoint.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSentCount(items.length);
    setStatus("success");
  }, [items, values]);

  const reset = useCallback(() => {
    setValues(EMPTY);
    setErrors({});
    setTouched({});
    setStatus("idle");
  }, []);

  const errorList = (Object.keys(errors) as QuoteFormField[])
    .map((field) => ({ field, message: errors[field] }))
    .filter((entry): entry is { field: QuoteFormField; message: string } =>
      Boolean(entry.message)
    );

  return {
    values,
    errors,
    touched,
    status,
    sentCount,
    errorList,
    setField,
    blurField,
    submit,
    reset,
  };
}

/** Plain-text quote list, for pasting into an email or a Facebook message. */
export function formatQuoteForClipboard(
  items: QuoteItem[],
  values: QuoteFormValues
) {
  const lines = [
    "Quote request - Medimarc Trading",
    "",
    `Name: ${values.name.trim()}`,
    `Hospital / clinic: ${values.organization.trim()}`,
    `Email: ${values.email.trim()}`,
    values.phone.trim() ? `Phone: ${values.phone.trim()}` : "",
    "",
    items.length > 0 ? "Items:" : "Items: (described below)",
    ...(items.length > 0 ? items.map((item) => `- ${item.sku}`) : []),
    "",
    values.message.trim() ? "Notes:\n" + values.message.trim() : "",
  ];
  return lines.filter((line) => line !== "").join("\n");
}
