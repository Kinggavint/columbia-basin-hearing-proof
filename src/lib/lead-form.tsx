import { useState } from "react";
import type { FormEvent } from "react";

/**
 * Web3Forms access key. Public by design — it identifies the destination inbox
 * and is safe in client code; it grants no account access.
 */
const ACCESS_KEY = "aec5d673-9edf-42b7-8cfe-266937efde1c";

/** Google Ads lead-form conversion action. */
const CONVERSION_SEND_TO = "AW-962703891/ugKRCN3wsuQcEJPkhssD";

type Gtag = (command: string, eventName: string, params: Record<string, unknown>) => void;

/**
 * Fired only after the form backend confirms the lead was received — never on
 * button click, so Google's count reflects delivered leads rather than intent.
 */
function trackLeadConversion() {
  const { gtag } = window as unknown as { gtag?: Gtag };
  if (typeof gtag === "function") {
    gtag("event", "conversion", { send_to: CONVERSION_SEND_TO });
  }
}

export type LeadFormStatus = "idle" | "submitting" | "success" | "error";

/**
 * Posts every named field in the form to Web3Forms, then reports the Google Ads
 * conversion. `subject` becomes the notification email's subject line so staff can
 * tell which form a lead came from.
 */
export function useLeadForm(subject: string) {
  const [status, setStatus] = useState<LeadFormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    const fields = Object.fromEntries(
      Array.from(new FormData(form).entries()).map(([k, v]) => [k, String(v)]),
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject,
          from_name: "Columbia Basin Hearing Center website",
          ...fields,
        }),
      });

      const payload = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !payload.success) {
        throw new Error(payload.message ?? `Submission failed (${response.status})`);
      }

      setStatus("success");
      trackLeadConversion();
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return { status, handleSubmit };
}

/**
 * Web3Forms honeypot: hidden from people, but bots fill every field they find.
 * A checked `botcheck` makes Web3Forms discard the submission as spam.
 */
export function HoneypotField() {
  return (
    <input
      type="checkbox"
      name="botcheck"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      style={{ display: "none" }}
    />
  );
}

/** Inline confirmation / failure message shown beneath a lead form's submit button. */
export function LeadFormStatusMessage({
  status,
  phone,
  tel,
}: {
  status: LeadFormStatus;
  phone: string;
  tel: string;
}) {
  if (status === "success") {
    return (
      <p
        role="status"
        className="rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-primary"
      >
        Thank you — your request has been sent. A Patient Ambassador will be in touch shortly.
      </p>
    );
  }

  if (status === "error") {
    return (
      <p
        role="alert"
        className="rounded-lg border border-destructive/40 px-4 py-3 text-sm text-destructive"
      >
        Something went wrong sending your request. Please try again, or call us at{" "}
        <a href={tel} className="font-semibold underline underline-offset-4">
          {phone}
        </a>
        .
      </p>
    );
  }

  return null;
}
