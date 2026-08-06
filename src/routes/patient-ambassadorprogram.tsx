import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy Squarespace URL (no hyphen). Preserved so old links and SEO don't break. */
export const Route = createFileRoute("/patient-ambassadorprogram")({
  beforeLoad: () => {
    throw redirect({ to: "/patient-ambassador-program", replace: true });
  },
});
