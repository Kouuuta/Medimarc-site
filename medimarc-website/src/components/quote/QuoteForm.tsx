import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CheckIcon,
  ClipboardCheckIcon,
  ClipboardIcon,
  Loader2Icon,
  PrinterIcon,
  XIcon,
} from "lucide-react";
import { useQuote } from "../../contexts/quote";
import { formatQuoteForClipboard, useQuoteForm } from "../../hooks/useQuoteForm";
import type { QuoteFormValues } from "../../hooks/useQuoteForm";
import { scrollToSection } from "../../lib/scroll";
import { DURATION, EASE_OUT } from "../../lib/motion";

const swap = {
  initial: { opacity: 0, filter: "blur(4px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(4px)" },
  transition: { duration: DURATION.base, ease: EASE_OUT },
};

const nextSteps = [
  "We check current stock and box pricing for your list.",
  "You get a quote by email within one business day.",
  "Confirm quantities and we arrange delivery to your address.",
];

export function QuoteForm() {
  const { items, removeItem, clear } = useQuote();
  const reduce = useReducedMotion();
  const {
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
  } = useQuoteForm(items);
  const [copied, setCopied] = useState(false);

  const startOver = () => {
    clear();
    reset();
    setCopied(false);
  };

  const copyList = async () => {
    const text = formatQuoteForClipboard(items, values);
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard API needs a secure context. The print button below is the
      // fallback for anyone on plain http.
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  };

  return (
    <div className="print-plain rounded-[28px] bg-paper p-6 text-ink md:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            {...swap}
            className="py-10 text-center"
            role="status"
          >
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-cobalt text-paper">
              <CheckIcon className="h-7 w-7" strokeWidth={2.5} aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-display text-3xl font-bold tracking-[-0.02em]">
              Quote request sent
            </h3>
            <p className="mx-auto mt-3 max-w-[40ch] leading-relaxed text-muted">
              Thanks, {values.name.trim().split(" ")[0]}. We&apos;ll reply to{" "}
              {values.email.trim()} with pricing and availability
              {sentCount > 0
                ? ` for ${sentCount} ${sentCount === 1 ? "item" : "items"}`
                : ""}
              .
            </p>

            <ul className="mx-auto mt-8 max-w-sm space-y-2 text-left">
              {nextSteps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-sm text-muted">
                  <CheckIcon
                    className="mt-0.5 h-4 w-4 shrink-0 text-cobalt"
                    aria-hidden="true"
                  />
                  {step}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={startOver}
              className="no-print mt-8 inline-flex h-11 items-center rounded-full border border-ink/15 px-5 text-sm font-semibold transition-[transform,border-color] duration-120 ease-out-quint hover-el:border-ink/40 active:scale-[0.97]"
            >
              Start a new request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            {...swap}
            noValidate
            onSubmit={(event) => {
              event.preventDefault();
              void submit();
            }}
          >
            {/* Errors are focused field-by-field on submit, but a summary here
                means a screen reader user hears the problem set once instead
                of discovering it one field at a time. */}
            <div aria-live="polite">
              {errorList.length > 0 && (
                <div
                  role="alert"
                  className="mb-6 rounded-2xl border border-danger/30 bg-danger-soft p-4"
                >
                  <p className="text-sm font-semibold text-danger">
                    {errorList.length === 1
                      ? "One field needs attention"
                      : `${errorList.length} fields need attention`}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {errorList.map((entry) => (
                      <li key={entry.field} className="text-sm text-danger">
                        <a
                          href={`#quote-${entry.field}`}
                          className="underline underline-offset-2"
                        >
                          {entry.message}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="Full name"
                value={values.name}
                error={touched.name ? errors.name : undefined}
                onChange={setField}
                onBlur={blurField}
                autoComplete="name"
              />
              <Field
                id="organization"
                label="Hospital or clinic"
                value={values.organization}
                error={touched.organization ? errors.organization : undefined}
                onChange={setField}
                onBlur={blurField}
                autoComplete="organization"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                inputMode="email"
                value={values.email}
                error={touched.email ? errors.email : undefined}
                onChange={setField}
                onBlur={blurField}
                autoComplete="email"
              />
              <Field
                id="phone"
                label="Phone"
                optional
                type="tel"
                inputMode="tel"
                value={values.phone}
                onChange={setField}
                onBlur={blurField}
                autoComplete="tel"
              />
            </div>

            <fieldset className="mt-7">
              <legend className="flex w-full items-center justify-between gap-3 text-sm font-medium">
                <span>Items in your quote</span>
                {items.length > 0 && (
                  <span className="tabular-nums text-muted">
                    {items.length} selected
                  </span>
                )}
              </legend>

              {items.length === 0 ? (
                <div className="mt-2 rounded-2xl border border-dashed border-line px-5 py-5 text-sm leading-relaxed text-muted">
                  Your quote list is empty.{" "}
                  <button
                    type="button"
                    onClick={() => scrollToSection("catalog")}
                    className="font-semibold text-cobalt underline-offset-4 hover:underline"
                  >
                    Add sizes from the catalog
                  </button>
                  , or describe what you need below.
                </div>
              ) : (
                <ul className="print-list mt-2 flex max-h-48 flex-wrap gap-2 overflow-y-auto rounded-2xl bg-canvas p-3">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {items.map((item) => (
                      <motion.li
                        key={item.sku}
                        layout
                        initial={{ opacity: 0, transform: "scale(0.95)" }}
                        animate={{ opacity: 1, transform: "scale(1)" }}
                        exit={{
                          opacity: 0,
                          transform: "scale(0.95)",
                          transition: { duration: 0.12 },
                        }}
                        transition={{ duration: DURATION.base, ease: EASE_OUT }}
                        className="print-plain flex max-w-full items-center gap-1.5 rounded-full border border-line bg-paper py-1 pl-3 pr-1 text-[13px]"
                      >
                        <span className="truncate">{item.sku}</span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.sku)}
                          aria-label={`Remove ${item.sku}`}
                          className="no-print inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-muted transition-colors duration-160 ease-out-quint hover-el:bg-canvas hover-el:text-ink"
                        >
                          <XIcon className="h-3.5 w-3.5" />
                        </button>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </fieldset>

            <div className="no-print mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={copyList}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-ink/15 px-4 text-[13px] font-semibold text-ink transition-[transform,border-color,background-color] duration-120 ease-out-quint hover-el:border-ink/40 active:scale-[0.97]"
              >
                {copied ? (
                  <ClipboardCheckIcon className="h-4 w-4 text-cobalt" aria-hidden="true" />
                ) : (
                  <ClipboardIcon className="h-4 w-4" aria-hidden="true" />
                )}
                {copied ? "Copied" : "Copy quote list"}
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-ink/15 px-4 text-[13px] font-semibold text-ink transition-[transform,border-color] duration-120 ease-out-quint hover-el:border-ink/40 active:scale-[0.97]"
              >
                <PrinterIcon className="h-4 w-4" aria-hidden="true" />
                Print
              </button>
            </div>

            <div className="mt-7">
              <label htmlFor="quote-message" className="text-sm font-medium">
                Quantities and notes
              </label>
              <textarea
                id="quote-message"
                rows={4}
                value={values.message}
                onChange={(event) => setField("message", event.target.value)}
                onBlur={() => blurField("message")}
                placeholder="Boxes per item, delivery location, or anything else we should know"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "quote-message-error" : undefined}
                className={inputClass(Boolean(errors.message)) + " resize-y py-3"}
              />
              {errors.message && (
                <ErrorText id="quote-message-error">{errors.message}</ErrorText>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="no-print mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-cobalt px-6 text-[15px] font-semibold text-paper transition-[transform,background-color] duration-120 ease-out-quint hover-el:bg-cobalt-dark active:scale-[0.98] disabled:cursor-wait disabled:opacity-80 sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending request
                </>
              ) : (
                "Send quote request"
              )}
            </button>

            {!reduce && (
              <p className="mt-3 text-xs text-muted">
                Front-end demo: this form validates and confirms locally, and
                nothing is sent to a server yet.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FieldProps {
  id: keyof QuoteFormValues;
  label: string;
  value: string;
  error?: string;
  optional?: boolean;
  type?: string;
  inputMode?: "text" | "email" | "tel";
  autoComplete?: string;
  onChange: (field: keyof QuoteFormValues, value: string) => void;
  onBlur: (field: keyof QuoteFormValues) => void;
}

function Field({
  id,
  label,
  value,
  error,
  optional,
  type = "text",
  inputMode,
  autoComplete,
  onChange,
  onBlur,
}: FieldProps) {
  const inputId = `quote-${id}`;
  return (
    <div>
      <label htmlFor={inputId} className="text-sm font-medium">
        {label}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      <input
        id={inputId}
        type={type}
        inputMode={inputMode}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(id, event.target.value)}
        onBlur={() => onBlur(id)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={inputClass(Boolean(error)) + " h-12"}
      />
      {error && <ErrorText id={`${inputId}-error`}>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-1.5 text-[13px] font-medium text-danger">
      {children}
    </p>
  );
}

function inputClass(hasError: boolean) {
  return `mt-2 block w-full rounded-xl border bg-canvas px-4 text-[15px] text-ink transition-[border-color,background-color] duration-160 ease-out-quint placeholder:text-muted focus:bg-paper focus:outline-none ${
    hasError ? "border-danger focus:border-danger" : "border-line focus:border-cobalt"
  }`;
}
